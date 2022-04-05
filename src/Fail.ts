import { Either, Left, Right } from './Either'
import * as Gen from './Gen'
import { Include } from './common'
import { pipe } from './function'

export interface Fail<E, A> extends Gen.Gen<FailInstruction<E>, A> {}

export const Fail = Gen.Gen as <E, A>(f: () => Generator<FailInstruction<E>, A>) => Fail<E, A>

export type FailureOf<T> = [Include<Gen.YieldOf<T>, FailInstruction<any>>] extends [
  FailInstruction<infer E>,
]
  ? E
  : never

export interface FailInstruction<E> {
  readonly tag: 'Fail'
  readonly error: E
}

export function fail<E>(error: E): Fail<E, never> {
  return Fail(function* () {
    return (yield { tag: 'Fail', error }) as never
  })
}

export function run<E, A>(fail: Fail<E, A>) {
  return pipe(fail, runWith<E>(), Gen.iterator).next().value
}

export function runWith<E>() {
  return function* <G extends Gen.Gen<{ readonly tag: string } | FailInstruction<E>, any>>(
    g: G,
  ): Gen.Gen<Exclude<Gen.YieldOf<G>, FailInstruction<E>>, Either<E, Gen.ReturnOf<G>>> {
    const i = Gen.iterator(g)
    let result = i.next()

    while (!result.done) {
      const instr = result.value

      if (instr.tag === 'Fail') {
        return Left((instr as FailInstruction<any>).error)
      } else {
        result = i.next(yield instr as any)
      }
    }

    return Right(result.value)
  }
}
