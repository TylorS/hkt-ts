/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { dirname } from 'node:path'

import { Params } from '../../src/HKT.js'
import { DeepEquals } from '../../src/TypeClass/Eq.js'

export const possibleLengths: ReadonlyArray<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
export type PossibleLength = typeof possibleLengths[number]

export function getDirname(x: string) {
  return dirname(new URL(x).pathname)
}

export const hktParamNames = [
  Params.A,
  Params.E,
  Params.R,
  Params.S,
  Params.U,
  Params.V,
  Params.W,
  Params.X,
  Params.Y,
  Params.Z,
] as const

export function combinations<A>(
  options: ReadonlyArray<ReadonlyArray<A>>,
): ReadonlyArray<ReadonlyArray<A>> {
  const inputs = options.slice(0)

  if (inputs.length === 1) {
    return inputs[0].map((x) => [x] as const)
  }

  const possiblilties: Array<ReadonlyArray<A>> = []

  while (inputs.length > 1) {
    const current = inputs.shift()!
    const next = inputs.shift()!

    const combined = next.reduce((acc: ReadonlyArray<ReadonlyArray<A>>, x) => {
      return acc.concat(current.map((h) => [h, x]))
    }, [])

    possiblilties.push(...combined)
  }

  return possiblilties
}

export function uniq<A>(array: ReadonlyArray<A>): ReadonlyArray<A> {
  const seen: A[] = []
  const unique: A[] = []

  for (const value of array) {
    if (seen.find((x) => DeepEquals.equals(value, x))) {
      continue
    }

    seen.push(value)
    unique.push(value)
  }

  return unique
}

export function uniqBy<A, B>(array: ReadonlyArray<A>, by: (a: A) => B): ReadonlyArray<A> {
  const seen: B[] = []
  const unique: A[] = []

  for (const value of array) {
    const y = by(value)
    if (seen.find((x) => DeepEquals.equals(y, x))) {
      continue
    }

    seen.push(y)
    unique.push(value)
  }

  return unique
}
