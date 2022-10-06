import * as StackFrame from './StackFrame.js'

export type Trace = EmptyTrace | StackFrameTrace

const INSTRUMENTED_REGEX = /^.+\s.+:[0-9]+:[0-9]+$/i

export interface EmptyTrace {
  readonly tag: 'EmptyTrace'
}

export const EmptyTrace: EmptyTrace = {
  tag: 'EmptyTrace',
}

export class StackFrameTrace {
  readonly tag = 'StackFrameTrace'

  constructor(readonly frames: readonly StackFrame.StackFrame[]) {}
}

export const Runtime = <E extends { stack?: string } = Error>(
  error: E,
  // eslint-disable-next-line @typescript-eslint/ban-types
  targetObject?: Function,
): StackFrameTrace => new StackFrameTrace(StackFrame.getStackFrames(error, targetObject))

export const isInstrumentedTrace = (trace: string) => INSTRUMENTED_REGEX.test(trace)

export const Custom = (trace: string): StackFrameTrace => {
  if (!isInstrumentedTrace(trace)) {
    return new StackFrameTrace([
      {
        tag: 'Custom',
        trace,
      },
    ])
  }

  const [methodFile, line, column] = trace.split(/:/g)
  const [method, file] = methodFile.split(/\s/)
  const stackFrame: StackFrame.StackFrame = {
    tag: 'Instrumented',
    file,
    method,
    line: parseFloat(line),
    column: parseFloat(column),
  }

  return new StackFrameTrace([stackFrame])
}
