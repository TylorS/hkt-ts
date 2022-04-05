import * as Gen from './Gen'
import { Include } from './common'
import { pipe } from './function'

export interface Reader<R, A> extends Gen.Gen<ReaderInstruction<R, any>, A> {}

export type RequirementsOf<T> = [Include<Gen.YieldOf<T>, ReaderInstruction<any, any>>] extends [
  ReaderInstruction<infer R, any>,
]
  ? R
  : never

export type OutputOf<T> = Gen.ReturnOf<T>

export function Reader<G extends Generator<ReaderInstruction<any, any>, any>>(
  f: () => G,
): Reader<GenRequirements<G>, GenOutput<G>> {
  return {
    [Symbol.iterator]: f,
  }
}

type GenRequirements<T> = [T] extends [Generator<ReaderInstruction<infer R, any>, any>]
  ? R
  : unknown

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type GenOutput<T> = [T] extends [Generator<ReaderInstruction<infer _, infer R>, any>] ? R : unknown

export interface ReaderInstruction<R, A> {
  readonly tag: 'Asks'
  readonly asks: (r: R) => A
}

export function asks<R, A>(asks: (r: R) => A): Reader<R, A> {
  return Reader(function* () {
    return yield { tag: 'Asks', asks }
  })
}

export function run<R>(resources: R) {
  return <A>(reader: Reader<R, A>) => pipe(reader, runWith(resources), Gen.iterator).next().value
}

export function runWith<R>(resources: R) {
  return function* <G extends Gen.Gen<{ readonly tag: string }, any>>(
    g: G,
  ): Gen.Gen<Exclude<Gen.YieldOf<G>, ReaderInstruction<R, any>>, Gen.ReturnOf<G>> {
    const i = Gen.iterator(g)
    let result = i.next()

    while (!result.done) {
      const instr = result.value

      switch (instr.tag) {
        case 'Asks': {
          result = i.next((instr as ReaderInstruction<R, any>).asks(resources))
          break
        }
        default: {
          result = i.next(yield instr as any)
        }
      }
    }

    return result.value
  }
}
