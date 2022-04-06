import { Either } from './Either'
import * as Fail from './Fail'
import * as Gen from './Gen'
import * as Reader from './Reader'
import * as State from './State'
import * as Sync from './Sync'
import * as Writer from './Writer'
import { pipe } from './function'

export interface Pure<W, S, R, E, A> extends Gen.Gen<PureInstruction<W, S, R, E, any>, A> {}

export type PureInstruction<W, S, R, E, A> =
  | Fail.FailInstruction<E>
  | Reader.ReaderInstruction<R, A>
  | State.StateInstruction<S, A>
  | Writer.WriterInstruction<W>
  | Sync.SyncInstruction<A>

export type PureOutput<W, S, E, A> = Writer.WriterTuple<W, State.StateTuple<S, Either<E, A>>>

export function run<S, R>(initial: S, resources: R) {
  return <W, E, A>(pure: Pure<W, S, R, E, A>): PureOutput<W, S, E, A> =>
    pipe(pure, runWith(initial, resources), Gen.iterator).next().value
}

export function runWith<S, R>(initial: S, resources: R) {
  return <G extends Gen.Gen>(pure: G) =>
    pipe(
      pure,
      Fail.runWith<Fail.FailureOf<G>>(),
      Reader.runWith(resources),
      State.runWith(initial),
      Writer.runWith<Writer.LogOf<G>>(),
      Sync.runWith,
    )
}

export const Pure = Gen.Gen as <
  G extends Generator<PureInstruction<any, any, any, any, any>, any, any>,
>(
  f: () => G,
) => Pure<
  Writer.LogOf<G>,
  State.StateOf<G>,
  Reader.RequirementsOf<G>,
  Fail.FailureOf<G>,
  Gen.ReturnOf<G>
>
