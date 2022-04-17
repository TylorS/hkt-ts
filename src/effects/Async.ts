import { Async, Disposable, DisposableQueue, disposeAll, withRemove } from './Disposable'
import * as Eff from './Eff'
import { pipe } from '../function/function'

/**
 * Async is a data-type for asynchronously acquiring some value once, with
 * the possiblity of being canceled.
 */
export interface Async<A> extends Eff.Eff<AsyncInstruction<any>, A> {}

export interface AsyncInstruction<A> {
  readonly tag: 'Async'
  readonly cb: AsyncCallback<A>
}

export interface AsyncCallback<A> {
  (cb: (value: A) => void): Disposable
}

/**
 * Constructor your own Async Instance
 */
export const fromCallback = <A>(cb: AsyncCallback<A>): Async<A> =>
  Eff.Eff(function* () {
    return (yield { tag: 'Async', cb: once(cb) }) as A
  })

/**
 * Type-level helper for extracting the Type returned by a given Async instance.
 */
export type ValueOf<A> = [A] extends [Async<infer R>] ? R : never

// Ensure that any Async can only have their callback invoked once
function once<A>(async: (cb: (value: A) => void) => Disposable) {
  return (cb: (value: A) => void): Disposable => {
    let ran = false

    return async((a) => {
      if (ran) {
        return
      }

      ran = true

      return cb(a)
    })
  }
}

export function interpret<A>(async: Async<A>): AsyncCallback<A> {
  return (cb) => {
    const generator = Eff.iterator(async)
    const disposable = new DisposableQueue()

    interpretAsync(generator, generator.next(), cb, disposable)

    return disposable
  }
}

function interpretAsync<A>(
  generator: Generator<AsyncInstruction<any>, A>,
  result: IteratorResult<AsyncInstruction<any>, A>,
  cb: (value: A) => void,
  disposable: DisposableQueue,
): unknown {
  if (result.done) {
    return cb(result.value)
  }

  return pipe(
    disposable,
    withRemove((remove) =>
      result.value.cb((a) => {
        remove()

        return interpretAsync(generator, generator.next(a), cb, disposable)
      }),
    ),
  )
}

/**
 * Execute an Async effect with the provided Callback.
 */
export function run<A>(cb: (value: A) => void) {
  return (async: Async<A>): Disposable => interpret(async)(cb)
}

export function zip_<A, B>(a: Async<A>, b: Async<B>): Async<readonly [A, B]> {
  return fromCallback((cb) => {
    const output = Array(2) as [A?, B?]
    let remaining = 2

    const complete =
      <I extends 0 | 1>(index: I) =>
      (value: I extends 0 ? A : B) => {
        output[index] = value as any

        if (--remaining === 0) {
          cb(output as any)
        }
      }

    return disposeAll([interpret(a)(complete(0)), interpret(b)(complete(1))])
  })
}

export const zip =
  <B>(second: Async<B>) =>
  <A>(first: Async<A>): Async<readonly [A, B]> =>
    zip_(first, second)
