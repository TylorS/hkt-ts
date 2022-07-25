import { deepStrictEqual } from 'node:assert'

import { describe, it } from 'vitest'

import * as A from './Associative.js'

describe(import.meta.url, () => {
  describe('constant', () => {
    it('creates an Associative instance which always returns a paraticular value', () => {
      deepStrictEqual(A.constant(3).concat(1, 2), 3)
    })
  })

  describe('struct', () => {
    it('creates an Associative for a structure', () => {
      const { concat } = A.struct({
        a: A.First,
        b: A.Second,
      })

      deepStrictEqual(concat({ a: 1, b: 2 }, { a: 3, b: 4 }), { a: 1, b: 4 })
    })
  })

  describe('tuple', () => {
    it('creates an Associative for a tuple', () => {
      const { concat } = A.tuple(A.First, A.Second)

      deepStrictEqual(concat([1, 2], [3, 4]), [1, 4])
    })
  })

  describe('intercalate', () => {
    it('creates an Associative instance ', () => {
      const { concat } = A.intercalate(3)({ concat: (x, y) => x + y })

      deepStrictEqual(concat(1, 2), 6)
    })
  })
})
