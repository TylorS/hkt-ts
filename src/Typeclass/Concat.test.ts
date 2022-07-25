import { deepStrictEqual } from 'node:assert'

import { describe, it } from 'vitest'

import * as C from './Concat.js'

describe(import.meta.url, () => {
  describe('First', () => {
    it('is a Concat instance that always returns the first value', () => {
      deepStrictEqual(C.First.concat(1, 2), 1)
    })
  })
  describe('Second', () => {
    it('is a Concat instance that always returns the second value', () => {
      deepStrictEqual(C.Second.concat(1, 2), 2)
    })
  })

  describe('concatAll', () => {
    it('uses a Concat instance to concatenate multiple values', () => {
      deepStrictEqual(C.concatAll({ concat: (x: number, y) => x + y })(0)([1, 2, 3, 4, 5]), 15)
    })
  })

  describe('reverse', () => {
    it('uses a Concat instance to concatenate multiple values', () => {
      deepStrictEqual(C.reverse(C.First).concat(1, 2), 2)
      deepStrictEqual(C.reverse(C.Second).concat(1, 2), 1)
    })
  })

  describe('fromLazy', () => {
    it('uses a Concat instance that always returns the lazily applied function', () => {
      deepStrictEqual(C.fromLazy(() => 3).concat(1, 2), 3)
    })
  })
})
