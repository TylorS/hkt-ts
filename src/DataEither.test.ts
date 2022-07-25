import * as fc from 'fast-check'
import { describe } from 'vitest'

import * as DE from './DataEither.js'
import * as E from './Either.js'
import * as L from './Law/index.js'
import { testAllCovariantHKTLaws, testAllDataLaws } from './Law/internal-test-all-laws.js'
import * as M from './Maybe.js'
import { DeepEquals } from './Typeclass/Eq.js'
import * as N from './number.js'
import * as S from './string.js'

describe(import.meta.url, () => {
  testAllDataLaws({
    name: `DataEither<string, number> Instances`,
    fc,
    Arbitrary: L.Data(L.Either(L.string(), L.number())),
    Associative: {
      Data: [DE.makeAssociative(S.Associative, N.AssociativeSum), DE.makeEq(S.Eq, N.Eq)],
    },
    Identity: {
      Data: [DE.makeIdentity(S.Identity, N.IdentitySum), DE.makeEq(S.Eq, N.Eq)],
    },
    Eq: {
      Data: DE.makeEq(S.Eq, N.Eq),
    },
    Ord: {
      Data: DE.makeOrd(S.Ord, N.Ord),
    },
  })

  testAllCovariantHKTLaws<DE.DataEitherHKT, E.EitherHKT, M.MaybeHKT>()({
    name: `Data<string, number> Instances`,
    fc,
    Arbitrary: L.Data(L.Either(L.string(), L.number())),
    ArbitraryA: L.number(),
    Covariant: {
      Data: [DE.Covariant, (x: number) => x + 1, (x: number) => x * 2, DE.makeEq(S.Eq, N.Eq)],
    },
    AssociativeBoth: {
      Data: [
        { ...DE.Covariant, ...DE.AssociativeBoth },
        DE.Success((x: number) => x + 1),
        DE.makeEq(S.Eq, N.Eq),
      ],
    },
    IdentityBoth: {
      Data: [
        { ...DE.Covariant, ...DE.IdentityBoth },
        (x: number) => String(x),
        DE.makeEq(DeepEquals, N.Eq),
        DE.makeEq(DeepEquals, S.Eq),
      ],
    },
    AssociativeFlatten: {
      Data: [
        { ...DE.Flatten, ...DE.Covariant },
        (x: number) => DE.Success(String(x)),
        (s: string) => DE.Success(s.length * 2),
        DE.makeEq(DeepEquals, N.Eq),
      ],
    },
    IdentityFlatten: {
      Data: [
        { ...DE.IdentityFlatten, ...DE.Covariant },
        (x: number) => DE.Success(x + 2),
        DE.makeEq(DeepEquals, N.Eq),
      ],
    },
    AssociativeEither: {
      Data: [
        { ...DE.AssociativeEither, ...DE.Covariant },
        (x: number) => String(x),
        DE.makeEq(S.Eq, N.Eq),
        DE.makeEq(S.Eq, S.Eq),
      ],
    },
    IdentityEither: {
      Data: [
        { ...DE.IdentityEither, ...DE.Covariant },
        (x: number) => String(x),
        DE.makeEq(DeepEquals, N.Eq),
        DE.makeEq(DeepEquals, S.Eq),
      ],
    },
    // FilterMap: {
    //   Data: [DE.FilterMap, (x: number) => x > 2, (x: number) => x < 10, DE.makeEq(N.Eq)],
    // },
    ForEach: {
      Data: [
        DE.ForEach,
        { ...E.IdentityBoth, ...E.Covariant },
        { ...M.IdentityBoth, ...M.Covariant },
      ],
    },
  })
})
