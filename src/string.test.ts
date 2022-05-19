import * as fc from 'fast-check'

import * as L from './Law'
import { pipe } from './function'
import * as S from './string'

describe(__filename, () => {
  describe('Eq', () => {
    it('is a valid instance', () => pipe(L.string(), L.Eq.testEq(S.Eq))(fc))
  })

  describe('Ord', () => {
    it('is a valid instance', () => pipe(L.string(), L.Ord.testOrd(S.Ord))(fc))
  })

  describe('Associative', () => {
    it('is a valid instance', () =>
      pipe(L.string(), L.Associative.testAssociativity(S.Associative, S.Eq))(fc))
  })

  describe('Identity', () => {
    it('is a valid instance', () => pipe(L.string(), L.Identity.testIdentity(S.Identity, S.Eq))(fc))
  })
})
