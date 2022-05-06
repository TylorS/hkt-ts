import { Either, Left, Right, isLeft } from '../Data/Either'

import * as Eff from './Eff'
import { handleWith, instr } from './Instruction'

export class Fail<E, A> extends instr('Fail')<Either<E, A>, A> {
  static is = <E, A, Y extends Eff.AnyTagged>(instr: Fail<E, A> | Y): instr is Fail<E, A> =>
    instr.tag === Fail.tag

  readonly with = <E, Y extends Eff.AnyTagged, R>(
    eff: Eff.Eff<Fail<E, any> | Y, R>,
  ): Eff.Eff<Y, Either<E, R>> =>
    handleWith(eff, function* (stepper) {
      while (!stepper.done) {
        const instr = stepper.instr

        if (Fail.is(instr)) {
          const either = (instr as Fail<E, any>).input

          if (isLeft(either)) {
            return either
          } else {
            stepper.next(either.right)
          }
        } else {
          stepper.next(yield instr)
        }
      }

      return Right(stepper.value)
    })
}

export type ErrorOf<T> = [Eff.Extract<T, Fail<any, any>>] extends [Fail<infer R, any>] ? R : never

export const fromEither = <E, A>(either: Either<E, A>) => new Fail(either)
export const fail = <E>(error: E) => fromEither<E, never>(Left(error))
