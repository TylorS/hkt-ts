import * as Eff from './Eff'
import * as F from './function'

/**
 * Sync is a small wrapper around IO w/ Generators for
 * making it easier to use language features with IO such as
 * while-loops, for-loops, and stack-safe recursion.
 */
export interface Sync<A> extends Eff.Eff<SyncInstruction<any>, A> {}

export class SyncInstruction<A> extends Eff.instr('Sync')<F.Lazy<A>, A> {}

export type OutputOf<T> = [T] extends [Sync<infer R>] ? R : never

export const Sync = Eff.Eff as <A>(f: () => Generator<SyncInstruction<any>, A>) => Sync<A>

export const fromLazy = <A>(lazy: F.Lazy<A>): Sync<A> => new SyncInstruction(lazy)

export const of = F.flow(F.constant, fromLazy)

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

export const runWith = SyncInstruction.handler((eff: SyncInstruction<any>) =>
  Eff.fromLazy(eff.input),
)
