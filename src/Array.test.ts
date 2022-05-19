import * as fc from 'fast-check'

import * as A from './Array'
import * as L from './Law'
import { pipe } from './function'
import * as N from './number'

describe(__filename, () => {
  describe('Instances', () => {
    describe('Associative', () => {
      it('has a valid instance', () =>
        pipe(L.array(L.number()), L.Associative.testAssociativity(A.makeAssociative<number>()))(fc))
    })

    describe('Covariant', () => {
      it('has a valid instance', () =>
        pipe(
          L.array(L.number()),
          L.Covariant.testCovariant(
            A.Covariant,
            (n: number) => n + 1,
            (n: number) => n * 2,
            A.makeEq(N.Eq),
          ),
        )(fc))
    })

    describe('Eq', () => {
      it('has a valid instance', () => pipe(L.array(L.number()), L.Eq.testEq(A.makeEq(N.Eq)))(fc))
    })

    describe('Identity', () => {
      it('has a valid instance', () =>
        pipe(L.array(L.number()), L.Identity.testIdentity(A.makeIdentity<number>()))(fc))
    })

    describe('Ord', () => {
      it('has a valid instance', () =>
        pipe(L.array(L.number()), L.Ord.testOrd(A.makeOrd(N.Ord)))(fc))
    })
  })
})
