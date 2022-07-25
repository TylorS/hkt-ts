import * as fc from 'fast-check'
import { describe } from 'vitest'

import * as D from './Data.js'
import * as E from './Either.js'
import * as L from './Law/index.js'
import { testAllCovariantHKTLaws, testAllDataLaws } from './Law/internal-test-all-laws.js'
import * as M from './Maybe.js'
import * as N from './number.js'
import * as S from './string.js'

describe(import.meta.url, () => {
  testAllDataLaws({
    name: `Data<number> Instances`,
    fc,
    Arbitrary: L.Data(L.number()),
    Associative: {
      Data: [D.makeAssociative<number>(N.AssociativeSum), D.makeEq(N.Eq)],
    },
    Identity: {
      Data: [D.makeIdentity<number>(N.IdentitySum), D.makeEq(N.Eq)],
    },
    Eq: {
      Data: D.makeEq(N.Eq),
    },
    Ord: {
      Data: D.makeOrd(N.Ord),
    },
  })

  testAllDataLaws({
    name: `Data<string> Instances`,
    fc,
    Arbitrary: L.Data(L.string()),
    Associative: {
      Data: [D.makeAssociative<string>(S.Associative), D.makeEq(S.Eq)],
    },
    Identity: {
      Data: [D.makeIdentity<string>(S.Identity), D.makeEq(S.Eq)],
    },
    Eq: {
      Data: D.makeEq(S.Eq),
    },
    Ord: {
      Data: D.makeOrd(S.Ord),
    },
  })

  testAllCovariantHKTLaws<D.DataHKT, E.EitherHKT, M.MaybeHKT>()({
    name: `Data<number> Instances`,
    fc,
    Arbitrary: L.Data(L.number()),
    ArbitraryA: L.number(),
    Covariant: {
      Data: [D.Covariant, (x: number) => x + 1, (x: number) => x * 2, D.makeEq(N.Eq)],
    },
    AssociativeBoth: {
      Data: [
        { ...D.Covariant, ...D.AssociativeBoth },
        D.Replete((x: number) => x + 1),
        D.Replete((x: number) => x * 2),
      ],
    },
    IdentityBoth: {
      Data: [
        { ...D.Covariant, ...D.IdentityBoth },
        (x: number) => String(x),
        D.makeEq(N.Eq),
        D.makeEq(S.Eq),
      ],
    },
    AssociativeFlatten: {
      Data: [
        { ...D.AssociativeFlatten, ...D.Covariant },
        (x: number) => D.Replete(String(x)),
        (s: string) => D.Replete(s.length * 2),
        D.makeEq(N.Eq),
      ],
    },
    IdentityFlatten: {
      Data: [
        { ...D.IdentityFlatten, ...D.Covariant },
        (x: number) => D.Replete(x + 2),
        D.makeEq(N.Eq),
      ],
    },
    AssociativeEither: {
      Data: [
        { ...D.AssociativeEither, ...D.Covariant },
        (x: number) => String(x),
        D.makeEq(N.Eq),
        D.makeEq(S.Eq),
      ],
    },
    IdentityEither: {
      Data: [
        { ...D.IdentityEither, ...D.Covariant },
        (x: number) => String(x),
        D.makeEq(N.Eq),
        D.makeEq(S.Eq),
      ],
    },
    FilterMap: {
      Data: [D.FilterMap, (x: number) => x > 2, (x: number) => x < 10, D.makeEq(N.Eq)],
    },
    ForEach: {
      Data: [
        D.ForEach,
        { ...E.IdentityBoth, ...E.Covariant },
        { ...M.IdentityBoth, ...M.Covariant },
      ],
    },
  })

  testAllCovariantHKTLaws<D.DataHKT, E.EitherHKT, M.MaybeHKT>()({
    name: `Data<string> Instances`,
    fc,
    Arbitrary: L.Data(L.string()),
    ArbitraryA: L.string(),
    Covariant: {
      Data: [D.Covariant, (x: string) => x + x, (x: string) => x.length * 2, D.makeEq(N.Eq)],
    },
    AssociativeBoth: {
      Data: [
        { ...D.Covariant, ...D.AssociativeBoth },
        D.Replete((x: string) => x + x),
        D.Replete((x: string) => x.length * 2),
        D.makeEq(N.Eq),
      ],
    },
    IdentityBoth: {
      Data: [
        { ...D.Covariant, ...D.IdentityBoth },
        (x: string) => x.length,
        D.makeEq(S.Eq),
        D.makeEq(N.Eq),
      ],
    },
    AssociativeFlatten: {
      Data: [
        { ...D.AssociativeFlatten, ...D.Covariant },
        (x: string) => D.Replete(x + x),
        (x: string) => D.Replete(x.length * 2),
        D.makeEq(N.Eq),
      ],
    },
    IdentityFlatten: {
      Data: [
        { ...D.IdentityFlatten, ...D.Covariant },
        (x: string) => D.Replete(x.length + 2),
        D.makeEq(N.Eq),
      ],
    },
    AssociativeEither: {
      Data: [
        { ...D.AssociativeEither, ...D.Covariant },
        (x: string) => x.length,
        D.makeEq(S.Eq),
        D.makeEq(N.Eq),
      ],
    },
    IdentityEither: {
      Data: [
        { ...D.IdentityEither, ...D.Covariant },
        (x: string) => x.length,
        D.makeEq(S.Eq),
        D.makeEq(N.Eq),
      ],
    },
    FilterMap: {
      Data: [
        D.FilterMap,
        (x: string) => x.length > 2,
        (x: string) => x.length < 10,
        D.makeEq(S.Eq),
      ],
    },
  })
})
