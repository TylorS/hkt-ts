import * as A from './Associative'
import * as AI from './AssociativeIdentity'
import * as Sh from './Debug'
import * as E from './Eq'
import { NonEmptyArray, isNonEmpty } from './NonEmptyArray'
import * as O from './Ord'
import { Refinement } from './Refinement'
import { pipe } from './function'

export const equals: E.Eq<string>['equals'] = (x, y) => x === y

export const Eq: E.Eq<string> = {
  equals,
}

export const concat: A.Associative<string>['concat'] = (x, y) => x + y

export const Associative: A.Associative<string> = {
  concat,
}

export const empty = '' as const

export const AssociativeIdentity: AI.AssociativeIdentity<string> = {
  ...Associative,
  id: empty,
}

export const Ord: O.Ord<string> = O.fromCompare((f, s) => (f < s ? -1 : f > s ? 1 : 0))

export const Debug: Sh.Debug<string> = {
  debug: (s) => JSON.stringify(s), // Use JSON.stringify to ensure outputs valid JSON
}

export const isString: Refinement<unknown, string> = (input: unknown): input is string =>
  typeof input === 'string'

export const isEmpty = (s: string): s is typeof empty => s.length === 0

export const toUpperCase = <S extends string>(s: S): Uppercase<S> => s.toUpperCase() as Uppercase<S>
export const toLowerCase = <S extends string>(s: S): Lowercase<S> => s.toLowerCase() as Lowercase<S>

export const capitalize = <S extends string>(s: S): Capitalize<S> =>
  (s.length > 0 ? s[0].toUpperCase() + s.slice(1) : s) as Capitalize<S>

export const replace =
  (searchValue: string | RegExp, replaceValue: string) =>
  (s: string): string =>
    s.replace(searchValue, replaceValue)

export const trim = (s: string): string => s.trim()
export const trimStart = (s: string): string => s.trimStart()
export const trimEnd = (s: string): string => s.trimEnd()

export const slice =
  (start: number, end: number) =>
  (s: string): string =>
    s.slice(start, end)

export const size = (s: string): number => s.length

export const split =
  (separator: string | RegExp) =>
  (s: string): NonEmptyArray<string> => {
    const out = s.split(separator)

    return isNonEmpty(out) ? out : [s]
  }

export const includes =
  (searchString: string, position?: number) =>
  (s: string): boolean =>
    s.includes(searchString, position)

export const startsWith =
  (searchString: string, position?: number) =>
  (s: string): boolean =>
    s.startsWith(searchString, position)

export const endsWith =
  (searchString: string, position?: number) =>
  (s: string): boolean =>
    s.endsWith(searchString, position)

export const padStart =
  (maxLength: number, fillString?: string) =>
  (s: string): string =>
    s.padStart(maxLength, fillString)

export const padEnd =
  (maxLength: number, fillString?: string) =>
  (s: string): string =>
    s.padEnd(maxLength, fillString)

export const pad =
  (maxLength: number, fillString?: string) =>
  (s: string): string =>
    pipe(s, padStart(maxLength / 2, fillString), padEnd(maxLength / 2, fillString))
