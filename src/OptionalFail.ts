import { Associative } from './Associative'
import * as Eff from './Eff'
import { Left, Right } from './Either'
import { FailInstruction } from './Fail'
import { isNonEmpty } from './NonEmptyArray'
import { Both, These } from './These'
import { Include } from './common'

export interface OptionalFail<E, A> extends Eff.Eff<OptionalFailInstruction<E>, A> {}

export type OptionalFailureOf<T> = [Include<Eff.YieldOf<T>, OptionalFailInstruction<any>>] extends [
  OptionalFailInstruction<infer E>,
]
  ? E
  : never

export class OptionalFailInstruction<E> extends Eff.instr('OptionalFail')<E, void> {}

export function report<E>(error: E): OptionalFail<E, void> {
  return new OptionalFailInstruction(error)
}

export function runWith<E>(A: Associative<E>) {
  return <G extends Eff.Eff>(
    g: G,
  ): Eff.Eff<
    Exclude<Eff.YieldOf<G>, OptionalFailInstruction<E> | FailInstruction<E>>,
    These<E, Eff.ReturnOf<G>>
  > => {
    return Eff.handleWith(g, function* (stepper) {
      const errors: Array<E> = []

      while (!stepper.done) {
        const instr = stepper.instr

        if (instr.tag === OptionalFailInstruction.tag) {
          const error = (instr as unknown as OptionalFailInstruction<E>).input

          errors.push(error)
          stepper.next(void 0)
        } else if (instr.tag === FailInstruction.tag) {
          return Left((instr as unknown as FailInstruction<E>).input)
        } else {
          stepper.next(yield instr as any)
        }
      }

      return isNonEmpty(errors)
        ? Both(errors.reduce(A.concat), stepper.value)
        : Right(stepper.value)
    })
  }
}
