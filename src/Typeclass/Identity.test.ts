import * as fc from 'fast-check'
import { describe, it } from 'vitest'

import * as L from '../Law/index.js'
import * as M from '../Maybe.js'
import * as B from '../boolean.js'
import * as N from '../number.js'
import * as S from '../string.js'

import { fromIdentityEitherCovariant } from './Identity.js'

describe(import.meta.url, () => {
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
