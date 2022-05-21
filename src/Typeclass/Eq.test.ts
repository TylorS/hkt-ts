import * as fc from 'fast-check'

import * as L from '../Law/index'
import * as B from '../boolean'
import * as N from '../number'

import * as E from './Eq'

describe(__filename, () => {
  describe('Contravariant', () => {
    const test = L.Contravariant.testContravariant(
      E.Contravariant,
      (a: number) => String(a),
      (s: string) => s.length % 2 === 0,
      N.Eq,
      B.Eq,
      <A>(eq: E.Eq<A>, a: A, b: A) => eq.equals(a, b),
      B.Eq,
    )

    const { identity, associativity } = test(L.number())(fc)

    it('Identity', identity)
    it('Associativity', associativity)
  })
})
