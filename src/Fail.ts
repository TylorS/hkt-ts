import * as Eff from './Eff'
import { Either, Left, Right, isLeft } from './Either'

export interface Fail<E, A> extends Eff.Eff<FailInstruction<E>, A> {}

export type FailureOf<T> = [Eff.Extract<T, FailInstruction<any>>] extends [FailInstruction<infer E>]
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
  return FailInstruction.returnHandler(
    g,
    (instr, exit) => Eff.fromLazy(() => exit(Left(instr.input))),
    (a) => Eff.of(Right(a)),
  )
}

export function fromEither<E, A>(either: Either<E, A>): Fail<E, A> {
  return Eff.Eff(function* () {
    if (isLeft(either)) {
      return yield* fail(either.left)
    }

    return either.right
  })
}
