import * as F from './function'

/**
 * Sync is a small wrapper around IO w/ Generators for
 * making it easier to use language features with IO such as
 * while-loops, for-loops, and stack-safe recursion.
 */
export interface Sync<A> {
  readonly type: 'Sync'
  readonly [Symbol.iterator]: () => Generator<SyncInstruction<any>, A>
}

export interface SyncInstruction<A> {
  readonly type: 'Sync'
  readonly lazy: F.Lazy<A>
}

export type OutputOf<T> = [T] extends [Sync<infer R>] ? R : never

export const Sync = <A>(f: () => Generator<SyncInstruction<any>, A>): Sync<A> => ({
  type: 'Sync',
  [Symbol.iterator]: f,
})

export const fromLazy = <A>(lazy: F.Lazy<A>): Sync<A> =>
  Sync(function* () {
    return (yield { type: 'Sync', lazy }) as A
  })

export const of = F.flow(F.constant, fromLazy)

export const run = <A>(sync: Sync<A>): A => {
  const generator = sync[Symbol.iterator]()
  let result = generator.next()

  while (!result.done) {
    result = generator.next(result.value.lazy())
  }

  return result.value
}

export function forEach<A, B>(f: (value: A, index: number) => Sync<B>) {
  return (items: ReadonlyArray<A>): Sync<ReadonlyArray<B>> => {
    return Sync(function* () {
      const output: B[] = []

      for (let i = 0; i < items.length; ++i) {
        output.push(yield* f(items[i], i))
      }

      return output
    })
  }
}

export function map<A, B>(f: (a: A) => B) {
  return (sync: Sync<A>): Sync<B> =>
    Sync(function* () {
      return f(yield* sync)
    })
}

export function flatMap<A, B>(f: (a: A) => Sync<B>) {
  return (sync: Sync<A>): Sync<B> =>
    Sync(function* () {
      return yield* f(yield* sync)
    })
}

export function ap<A>(value: Sync<A>) {
  return <B>(fn: Sync<(a: A) => B>): Sync<B> =>
    Sync(function* () {
      const a = yield* value
      const f = yield* fn

      return f(a)
    })
}
