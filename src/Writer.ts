import * as Eff from './Eff'

export interface Writer<W, A> extends Eff.Eff<WriterInstruction<W>, A> {}

export type LogOf<T> = [Eff.Extract<T, WriterInstruction<any>>] extends [WriterInstruction<infer L>]
  ? L
  : never

export type OutputOf<T> = Eff.ReturnOf<T>

export type WriterInstruction<W> = Write<W> | Get<W>

export class Write<W> extends Eff.instr('Writer/Write')<W, void> {}

export function write<W>(log: W): Writer<W, void> {
  return new Write(log)
}

export class Get<W> extends Eff.instr('Writer/GetLogs')<void, ReadonlyArray<W>> {}

export function get<W>(): Writer<W, ReadonlyArray<W>> {
  return new Get()
}

export type WriterTuple<W, A> = readonly [logs: ReadonlyArray<W>, computed: A]

export function runWith<Y extends Eff.AnyTagged, R>(
  writer: Eff.Eff<Y, R>,
): Eff.Eff<
  Exclude<Y, WriterInstruction<LogOf<typeof writer>>>,
  WriterTuple<LogOf<typeof writer>, Eff.ReturnOf<typeof writer>>
> {
  return Eff.handleWith(writer, function* (stepper) {
    const logs: Array<LogOf<typeof writer>> = []

    return yield* Eff.withInstructions(
      stepper,
      (y) => y.tag === Write.tag || y.tag === Get.tag,
      (y) => {
        if (y.tag === Write.tag) {
          logs.push(y.input)

          return undefined
        }

        return logs
      },
      (r) => [logs, r] as const,
    )
  })
}
