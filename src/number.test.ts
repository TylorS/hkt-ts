import * as fc from 'fast-check'

import * as L from './Law'
import { pipe } from './function'
import * as N from './number'

describe(__filename, () => {
  describe('Eq', () => {
    it('is a valid instance', () => pipe(L.number(), L.Eq.testEq(N.Eq))(fc))
  })

  describe('Ord', () => {
    it('is a valid instance', () => pipe(L.number(), L.Ord.testOrd(N.Ord))(fc))
  })

  describe('Associative', () => {
    describe('AssociativeSum', () => {
      it('is a valid instance', () =>
        pipe(L.number(), L.Associative.testAssociativity(N.AssociativeSum, N.Eq))(fc))
    })

    describe('AssociativeProduct', () => {
      it('is a valid instance', () =>
        pipe(
          L.number({ min: 1, max: 10000 }), // JS is sorta bad a multiplication of really large numbers
          L.Associative.testAssociativity(N.AssociativeProduct, N.Eq),
        )(fc))
    })
  })

  describe('Commutative', () => {
    describe('CommutativeSum', () => {
      it('is a valid instance', () =>
        pipe(L.number(), L.Commutative.testCommutativity(N.CommutativeSum, N.Eq))(fc))
    })

    describe('CommutativeProduct', () => {
      it('is a valid instance', () =>
        pipe(L.number(), L.Commutative.testCommutativity(N.CommutativeProduct, N.Eq))(fc))
    })
  })

  describe('Inverse', () => {
    it('has a valid instance', () => pipe(L.number(), L.Inverse.testInverse(N.Inverse, N.Eq)))
  })
})
