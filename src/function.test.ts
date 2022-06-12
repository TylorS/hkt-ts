import { deepStrictEqual, throws } from 'assert'

import * as fc from 'fast-check'

import * as L from './Law/index'
import {
  absurd,
  constFalse,
  constNull,
  constTrue,
  constUndefined,
  constVoid,
  constant,
  flow,
  identity,
  pipe,
  second,
  tupled,
  unsafeCoerce,
} from './function'

const add = (x: number) => (y: number) => x + y

describe(__filename, () => {
  describe(absurd.name, () => {
    it('always throws', () => throws(absurd))
  })

  describe('constant', () => {
    it('returns a function which always returns the provided value', () => {
      pipe(
        L.tuple(L.unknown, L.nonEmptyArray(L.unknown)),
        L.toProperty(([a, args]) => constant(a)(...args) === a),
        L.assert,
      )(fc)

      deepStrictEqual(constVoid(), undefined)
      deepStrictEqual(constUndefined(), undefined)
      deepStrictEqual(constTrue(), true)
      deepStrictEqual(constFalse(), false)
      deepStrictEqual(constNull(), null)
    })
  })

  describe('flow', () => {
    it('allows composing functions left-to-right', () =>
      pipe(
        L.tuple(
          L.Arbitrary((fc) => fc.array(fc.constant(add(1)), { minLength: 1, maxLength: 9 })),
          L.number(),
        ),
        L.toProperty(([fns, n]) => flow(...(fns as [(n: number) => number]))(n) === n + fns.length),
        (x) => L.assert(x, { numRuns: 10000 }),
      )(fc))
  })

  describe('pipe', () => {
    it('allows applying a composition functions left-to-right with a value', () =>
      pipe(
        L.tuple(
          L.Arbitrary((fc) => fc.array(fc.constant(add(1)), 1, 19)),
          L.number(),
        ),
        L.toProperty(([fns, n]) => pipe(n, ...(fns as [(n: number) => number])) === n + fns.length),
        (x) => L.assert(x, { numRuns: 10000 }),
      )(fc))
  })

  describe('identity', () => {
    it('is a function which always returns the value provided', () => {
      deepStrictEqual(identity(1), 1)
      deepStrictEqual(identity(3), 3)
    })
  })

  describe('second', () => {
    it('always returns the second param', () => {
      deepStrictEqual(second(1, 2), 2)
      deepStrictEqual(second('foo', 'bar'), 'bar')
    })
  })

  describe('unsafeCoerce', () => {
    it('always reutrns the same value', () => {
      deepStrictEqual(unsafeCoerce(1), 1)
    })
  })

  describe('tupled', () => {
    it('returns the first value as a tuple', () => {
      deepStrictEqual(tupled(1), [1])
    })
  })
})
