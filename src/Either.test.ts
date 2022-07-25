import * as fc from 'fast-check'

import * as E from './Either.js'
import * as L from './Law/index.js'
import { testAllCovariantHKTLaws, testAllDataLaws } from './Law/internal-test-all-laws.test.js'
import * as M from './Maybe.js'
import { DeepEquals } from './Typeclass/Eq.js'
import * as N from './number.js'
import * as S from './string.js'

describe(__filename, () => {
  testAllDataLaws({
    name: `Either<string, number> Instances`,
    fc,
    Arbitrary: L.Either(L.string(), L.number()),
    Associative: {
      Either: [E.makeAssociative(S.Associative, N.AssociativeSum), E.makeEq(S.Eq, N.Eq)],
    },
    Identity: {
      Either: [E.makeIdentity(S.Identity, N.IdentitySum), E.makeEq(S.Eq, N.Eq)],
    },
    Eq: {
      Either: E.makeEq(S.Eq, N.Eq),
    },
    Ord: {
      Either: E.makeOrd(S.Ord, N.Ord),
    },
  })

  testAllCovariantHKTLaws<E.EitherHKT, E.EitherHKT, M.MaybeHKT>()({
    name: `Data<string, number> Instances`,
    fc,
    Arbitrary: L.Either(L.string(), L.number()),
    ArbitraryA: L.number(),
    Covariant: {
      Either: [E.Covariant, (x: number) => x + 1, (x: number) => x * 2, E.makeEq(S.Eq, N.Eq)],
    },
    AssociativeBoth: {
      Either: [
        { ...E.Covariant, ...E.AssociativeBoth },
        E.Right((x: number) => x + 1),
        E.makeEq(S.Eq, N.Eq),
      ],
    },
    IdentityBoth: {
      Either: [
        { ...E.Covariant, ...E.IdentityBoth },
        (x: number) => String(x),
        E.makeEq(DeepEquals, N.Eq),
        E.makeEq(DeepEquals, S.Eq),
      ],
    },
    AssociativeFlatten: {
      Either: [
        { ...E.Flatten, ...E.Covariant },
        (x: number) => E.Right(String(x)),
        (s: string) => E.Right(s.length * 2),
        E.makeEq(DeepEquals, N.Eq),
      ],
    },
    IdentityFlatten: {
      Either: [
        { ...E.IdentityFlatten, ...E.Covariant },
        (x: number) => E.Right(x + 2),
        E.makeEq(DeepEquals, N.Eq),
      ],
    },
    AssociativeEither: {
      Either: [
        { ...E.AssociativeEither, ...E.Covariant },
        (x: number) => String(x),
        E.makeEq(S.Eq, N.Eq),
        E.makeEq(S.Eq, S.Eq),
      ],
    },
    ForEach: {
      Either: [
        E.ForEach,
        { ...E.IdentityBoth, ...E.Covariant },
        { ...M.IdentityBoth, ...M.Covariant },
      ],
    },
  })
})
