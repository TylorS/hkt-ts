export type StackFrame = InstrumentedStackFrame | RuntimeStackFrame | CustomStackFrame

export interface InstrumentedStackFrame {
  readonly tag: 'Instrumented'
  readonly file: string
  readonly method: string
  readonly line: number
  readonly column: number
}

export interface RuntimeStackFrame {
  readonly tag: 'Runtime'
  readonly file: string
  readonly method: string
  readonly line: number
  readonly column: number
}

export interface CustomStackFrame {
  readonly tag: 'Custom'
  readonly trace: string
}

const geckoRe =
  /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i
const geckoEvalRe = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i

export function parseGecko(line: string): RuntimeStackFrame | null {
  const parts = geckoRe.exec(line)

  if (!parts) {
    return null
  }

  const isEval = parts[3] && parts[3].indexOf(' > eval') > -1

  const submatch = geckoEvalRe.exec(parts[3])
  if (isEval && submatch != null) {
    // throw out eval line/column and use top-most line number
    parts[3] = submatch[1]
    parts[4] = submatch[2]
    parts[5] = '-1' // no column when eval
  }

  return {
    tag: 'Runtime',
    file: parts[3],
    method: parts[1] || '',
    line: parts[4] ? +parts[4] : -1,
    column: parts[5] ? +parts[5] : 0,
  }
}

const chromeRe =
  /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
const chromeEvalRe = /\((\S*)(?::(\d+))(?::(\d+))\)/

export function parseChrome(line: string): RuntimeStackFrame | null {
  const parts = chromeRe.exec(line)

  if (!parts) {
    return null
  }

  const isNative = parts[2] && parts[2].indexOf('native') === 0 // start of line
  const isEval = parts[2] && parts[2].indexOf('eval') === 0 // start of line

  const submatch = chromeEvalRe.exec(parts[2])

  if (isEval && submatch != null) {
    // throw out eval line/column and use top-most line/column number
    parts[2] = submatch[1] // url
    parts[3] = submatch[2] // line
    parts[4] = submatch[3] // column
  }

  return {
    tag: 'Runtime',
    file: !isNative ? parseRealFilename(parts[2]) : '',
    method: parts[1] || '',
    line: parts[3] ? +parts[3] : -1,
    column: parts[4] ? +parts[4] : -1,
  }
}

function parseRealFilename(s: string): string {
  if (s.startsWith('file:/')) {
    const x = s.split(/file:/g)

    return x[x.length - 1]
  }

  return s
}

export function getStackFrames<E extends { stack?: string; cause?: any } = Error>(
  error: E = {} as E,
  // eslint-disable-next-line @typescript-eslint/ban-types
  targetObject?: Function,
): ReadonlyArray<RuntimeStackFrame> {
  if (!error.stack && Error.captureStackTrace) {
    Error.captureStackTrace(error, targetObject)
  }

  const stack = error.stack

  if (!stack) {
    return []
  }

  const stackFrames = stack
    .split('\n')
    .map((x) => x.trim())
    .filter((x) => x.length !== 0)
    .flatMap((s) => {
      const frame = parseChrome(s) || parseGecko(s)

      return frame ? [frame] : []
    })

  // Append all of the parents traces
  if (error instanceof Error && error.cause instanceof Error) {
    return [...stackFrames, ...getStackFrames(error.cause)]
  }

  return stackFrames
}
