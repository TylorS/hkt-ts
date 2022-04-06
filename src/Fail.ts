import * as Eff from './Eff'
import { Either, Left, Right, isLeft } from './Either'
import { Include } from './common'

export interface Fail<E, A> extends Eff.Eff<FailInstruction<E>, A> {}

export const Fail = Eff.Eff as <E, A>(f: () => Generator<FailInstruction<E>, A>) => Fail<E, A>

export type FailureOf<T> = [Include<Eff.YieldOf<T>, FailInstruction<any>>] extends [
  FailInstruction<infer E>,
]
  ? E
  : never

export class FailInstruction<E> extends Eff.instr('Fail')<E, never> {}

export function fail<E>(error: E): Fail<E, never> {
  return new FailInstruction(error)
}

export function runWith<G extends Eff.Eff>(
  g: G,
): Eff.Eff<
  Exclude<Eff.YieldOf<G>, FailInstruction<FailureOf<G>>>,
  Either<FailureOf<G>, Eff.ReturnOf<G>>
> {
  return Eff.returnHandler(
    'Fail',
    g,
    (instr, exit) => exit(Left(instr.input)),
    (a) => Eff.of(Right(a)),
  )
}

export function fromEither<E, A>(either: Either<E, A>): Fail<E, A> {
  return Fail(function* () {
    if (isLeft(either)) {
      return yield* fail(either.value)
    }

    return either.value
  })
}
