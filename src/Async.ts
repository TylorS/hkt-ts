import { Disposable, DisposableQueue, withRemove } from './Disposable'
import { pipe } from './function'

/**
 * Async is a data-type for asynchronously acquiring some value once, with
 * the possiblity of being canceled.
 */
export interface Async<A> {
  readonly type: 'Async'
  readonly [Symbol.iterator]: () => Generator<AsyncInstruction<any>, A>
}

export interface AsyncInstruction<A> {
  readonly type: 'Async'
  readonly cb: AsyncCallback<A>
}

export interface AsyncCallback<A> {
  (cb: (value: A) => void): Disposable
}

export function Async<A>(f: () => Generator<AsyncInstruction<any>, A>): Async<A> {
  return {
    type: 'Async',
    [Symbol.iterator]: f,
  }
}

/**
 * Constructor your own Async Instance
 */
export const fromCallback = <A>(cb: AsyncCallback<A>): Async<A> =>
  Async(function* () {
    return (yield { type: 'Async', cb: once(cb) }) as A
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
    const generator = async[Symbol.iterator]()
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
): void {
  if (result.done) {
    return cb(result.value)
  }

  pipe(
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
export const run =
  <A>(cb: (value: A) => void) =>
  (async: Async<A>): Disposable =>
    interpret(async)(cb)
