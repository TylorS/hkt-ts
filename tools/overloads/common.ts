/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { Params } from '../../src/HKT'
import { DeepEquals } from '../../src/Typeclass/Data/Eq'

export const possibleLengths: ReadonlyArray<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
export type PossibleLength = typeof possibleLengths[number]

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

export function permutations<A>(permutation: Array<A>): Array<Array<A>> {
  let length = permutation.length,
    result = [permutation.slice(0)],
    c = new Array(length).fill(0),
    i = 1,
    k,
    p

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i]
      p = permutation[i]
      permutation[i] = permutation[k]
      permutation[k] = p
      ++c[i]
      i = 1
      result.push(permutation.slice(0))
    } else {
      c[i] = 0
      ++i
    }
  }
  return result
}
