import * as fc from 'fast-check'

import * as L from '../Law/index'
import * as M from '../Maybe'
import * as B from '../boolean'
import * as N from '../number'
import * as S from '../string'

import { fromIdentityEitherCovariant } from './Identity'

describe(__filename, () => {
  describe(fromIdentityEitherCovariant.name, () => {
    it('creates an Identity instance', () => {
      const makeIdentity = fromIdentityEitherCovariant<M.MaybeHKT>({
        ...M.IdentityEither,
        ...M.Covariant,
      })

      L.Identity.testIdentity(makeIdentity<number>(), M.makeEq(N.Eq))(L.Maybe(L.number()))(fc)
      L.Identity.testIdentity(makeIdentity<string>(), M.makeEq(S.Eq))(L.Maybe(L.string()))(fc)
      L.Identity.testIdentity(makeIdentity<boolean>(), M.makeEq(B.Eq))(L.Maybe(L.boolean))(fc)
    })
  })
})
