import * as Gen from './Gen'
import { Include } from './common'
import { pipe } from './function'

export interface State<S, A> extends Gen.Gen<StateInstruction<S, any>, A> {}

export type StateInstruction<S, A> = Modify<S, A> | Get

export const State = Gen.Gen as <G extends Generator<StateInstruction<any, any>, any>>(
  f: () => G,
) => State<StateOf<G>, Gen.ReturnOf<G>>

export type StateOf<T> = [Include<Gen.YieldOf<T>, StateInstruction<any, any>>] extends [
  StateInstruction<infer L, any>,
]
  ? L
  : never

export type OutputOf<T> = Gen.ReturnOf<T>

export interface Modify<S, A> {
  readonly tag: 'State/Modify'
  readonly modify: (s: S) => StateTuple<S, A>
}

export function modify<S, A>(modify: (s: S) => StateTuple<S, A>): State<S, A> {
  return State(function* () {
    return (yield { tag: 'State/Modify', modify }) as A
  })
}

export function update<S>(f: (s: S) => S): State<S, S> {
  return modify((s) => {
    const s2 = f(s)

    return [s2, s2]
  })
}

export interface Get {
  readonly tag: 'State/Get'
}

export function get<S>(): State<S, S> {
  return State(function* () {
    return (yield { tag: 'State/Get' } as StateInstruction<S, S>) as S
  })
}

export type StateTuple<S, A> = readonly [updated: S, computed: A]

export function run<S>(initial: S) {
  return <A>(state: State<S, A>): StateTuple<S, A> =>
    pipe(state, runWith(initial), Gen.iterator).next().value
}

export function runWith<S>(initial: S) {
  return function* <G extends Gen.Gen<{ readonly tag: string }, any>>(
    g: G,
  ): Gen.Gen<
    Exclude<Gen.YieldOf<G>, StateInstruction<S, any>>,
    readonly [updated: S, computed: Gen.ReturnOf<G>]
  > {
    const i = Gen.iterator(g)
    let result = i.next()
    let current = initial

    while (!result.done) {
      const instr = result.value

      switch (instr.tag) {
        case 'State/Modify': {
          const [s, a] = (instr as Modify<S, any>).modify(current)

          current = s
          result = i.next(a)
          break
        }
        case 'State/Get': {
          result = i.next(current)
          break
        }
        default: {
          result = i.next(yield instr as any)
        }
      }
    }

    return [current, result.value]
  }
}
