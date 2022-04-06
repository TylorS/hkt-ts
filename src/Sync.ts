import * as Gen from './Gen'
import * as F from './function'

/**
 * Sync is a small wrapper around IO w/ Generators for
 * making it easier to use language features with IO such as
 * while-loops, for-loops, and stack-safe recursion.
 */
export interface Sync<A> extends Gen.Gen<SyncInstruction<any>, A> {}

export interface SyncInstruction<A> {
  readonly tag: 'Sync'
  readonly lazy: F.Lazy<A>
}

export type OutputOf<T> = [T] extends [Sync<infer R>] ? R : never

export const Sync = Gen.Gen as <A>(f: () => Generator<SyncInstruction<any>, A>) => Sync<A>

export const fromLazy = <A>(lazy: F.Lazy<A>): Sync<A> =>
  Sync(function* () {
    return (yield { tag: 'Sync', lazy }) as A
  })

export const of = F.flow(F.constant, fromLazy)

export const run = <A>(sync: Sync<A>): A => F.pipe(sync, runWith, Gen.iterator).next().value

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

export function* runWith<G extends Gen.Gen>(
  g: G,
): Gen.Gen<Exclude<Gen.YieldOf<G>, SyncInstruction<any>>, Gen.ReturnOf<G>> {
  const i = Gen.iterator(g)
  let result = i.next()

  while (!result.done) {
    const instr = result.value

    switch (instr.tag) {
      case 'Sync': {
        result = i.next((instr as SyncInstruction<any>).lazy())
        break
      }
      default: {
        result = i.next(yield instr as any)
      }
    }
  }

  return result.value
}
