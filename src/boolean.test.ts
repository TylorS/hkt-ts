import * as fc from 'fast-check'

import * as L from './Law'
import * as B from './boolean'
import { pipe } from './function'

describe(__filename, () => {
  describe('Eq', () => {
    it('is a valid instance', () => pipe(L.boolean, L.Eq.testEq(B.Eq))(fc))
  })

  describe('Ord', () => {
    it('is a valid instance', () => pipe(L.boolean, L.Ord.testOrd(B.Ord))(fc))
  })

  describe('Associative', () => {
    describe('All', () => {
      it('is a valid instance', () =>
        pipe(L.boolean, L.Associative.testAssociativity(B.All, B.Eq))(fc))
    })

    describe('Any', () => {
      it('is a valid instance', () =>
        pipe(L.boolean, L.Associative.testAssociativity(B.Any, B.Eq))(fc))
    })
  })

  describe('Identity', () => {
    describe('All', () => {
      it('is a valid instance', () => pipe(L.boolean, L.Identity.testIdentity(B.All, B.Eq))(fc))
    })

    describe('Any', () => {
      it('is a valid instance', () => pipe(L.boolean, L.Identity.testIdentity(B.Any, B.Eq))(fc))
    })
  })
})
