import * as Gen from './Gen'
import { Include } from './common'
import { pipe } from './function'

export interface Writer<W, A> extends Gen.Gen<WriterInstruction<W>, A> {}

export const Writer = Gen.Gen as <G extends Generator<WriterInstruction<any>, any>>(
  f: () => G,
) => Writer<LogOf<G>, Gen.ReturnOf<G>>

export type LogOf<T> = [Include<Gen.YieldOf<T>, WriterInstruction<any>>] extends [
  WriterInstruction<infer L>,
]
  ? L
  : never

export type OutputOf<T> = Gen.ReturnOf<T>

export type WriterInstruction<W> = Write<W> | Get

export interface Write<W> {
  readonly tag: 'Writer/Write'
  readonly log: W
}

export function write<W>(log: W): Writer<W, void> {
  return Writer(function* () {
    yield { tag: 'Writer/Write', log }
  })
}

export interface Get {
  readonly tag: 'Writer/GetLogs'
}

export function get<W>(): Writer<W, ReadonlyArray<W>> {
  return Writer(function* () {
    return (yield { tag: 'Writer/GetLogs' }) as ReadonlyArray<W>
  }) as Writer<W, ReadonlyArray<W>>
}

export type WriterTuple<W, A> = readonly [logs: ReadonlyArray<W>, computed: A]

export function run<W, A>(writer: Writer<W, A>): WriterTuple<W, A> {
  return pipe(writer, runWith<W>(), Gen.iterator).next().value
}

export function runWith<W>() {
  return function <G extends Gen.Gen>(
    writer: G,
  ): Gen.Gen<Exclude<Gen.YieldOf<G>, WriterInstruction<W>>, WriterTuple<W, Gen.ReturnOf<G>>> {
    return Gen.Gen(function* () {
      const i = Gen.iterator(writer)
      const logs: Array<W> = []
      let result = i.next()

      while (!result.done) {
        const instr = result.value

        switch (instr.tag) {
          case 'Writer/Write': {
            logs.push((instr as Write<W>).log)
            result = i.next(undefined)
            break
          }
          case 'Writer/GetLogs': {
            result = i.next(logs)

            break
          }
          default: {
            result = i.next(yield instr as any)
          }
        }
      }

      return [logs, result.value] as const
    })
  }
}
