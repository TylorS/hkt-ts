import * as fc from 'fast-check'
import { describe } from 'vitest'

import * as E from './Either.js'
import * as L from './Law/index.js'
import { testAllCovariantHKTLaws, testAllDataLaws } from './Law/internal-test-all-laws.js'
import * as M from './Maybe.js'
import * as SET from './Set.js'
import * as N from './number.js'
import * as S from './string.js'

describe(import.meta.url, () => {
  testAllDataLaws({
    name: `Set<number> Instances`,
    fc,
    Arbitrary: L.Set(L.number()),
    Associative: {
      Set: [SET.makeAssociative<number>(), SET.makeEq(N.Eq)],
    },
    Identity: {
      Set: [SET.makeIdentity<number>(), SET.makeEq(N.Eq)],
    },
    Eq: {
      Set: SET.makeEq(N.Eq),
    },
    Ord: {
      Set: SET.makeOrd(N.Ord),
    },
  })

  testAllDataLaws({
    name: `Set<string> Instances`,
    fc,
    Arbitrary: L.Set(L.string()),
    Associative: {
      Set: [SET.makeAssociative<string>(), SET.makeEq(S.Eq)],
    },
    Identity: {
      Set: [SET.makeIdentity<string>(), SET.makeEq(S.Eq)],
    },
    Eq: {
      Set: SET.makeEq(S.Eq),
    },
    Ord: {
      Set: SET.makeOrd(S.Ord),
    },
  })

  testAllCovariantHKTLaws<SET.SetHKT, E.EitherHKT, M.MaybeHKT>()({
    name: `Set<number> Instances`,
    fc,
    Arbitrary: L.Set(L.number()),
    ArbitraryA: L.number(),
    Covariant: {
      Set: [SET.Covariant, (x: number) => x + 1, (x: number) => x * 2, SET.makeEq(N.Eq)],
    },
    AssociativeBoth: {
      Set: [
        { ...SET.Covariant, ...SET.AssociativeBoth },
        new Set([(x: number) => x + 1]),
        new Set([(x: number) => x * 2]),
      ],
    },
    IdentityBoth: {
      Set: [
        { ...SET.Covariant, ...SET.IdentityBoth },
        (x: number) => String(x),
        SET.makeEq(N.Eq),
        SET.makeEq(S.Eq),
      ],
    },
    AssociativeFlatten: {
      Set: [
        { ...SET.Flatten, ...SET.Covariant },
        (x: number) => new Set([String(x)]),
        (s: string) => new Set([s.length * 2]),
        SET.makeEq(N.Eq),
      ],
    },
    IdentityFlatten: {
      Set: [
        { ...SET.IdentityFlatten, ...SET.Covariant },
        (x: number) => new Set([x + 2]),
        SET.makeEq(N.Eq),
      ],
    },
    AssociativeEither: {
      Set: [
        { ...SET.AssociativeEither, ...SET.Covariant },
        (x: number) => String(x),
        SET.makeEq(N.Eq),
        SET.makeEq(S.Eq),
      ],
    },
    IdentityEither: {
      Set: [
        { ...SET.IdentityEither, ...SET.Covariant },
        (x: number) => String(x),
        SET.makeEq(N.Eq),
        SET.makeEq(S.Eq),
      ],
    },
    FilterMap: {
      Set: [SET.FilterMap, (x: number) => x > 2, (x: number) => x < 10, SET.makeEq(N.Eq)],
    },
    ForEach: {
      Set: [
        SET.ForEach,
        { ...E.IdentityBoth, ...E.Covariant },
        { ...M.IdentityBoth, ...M.Covariant },
      ],
    },
  })

  testAllCovariantHKTLaws<SET.SetHKT, E.EitherHKT, M.MaybeHKT>()({
    name: `Set<string> Instances`,
    fc,
    Arbitrary: L.Set(L.string()),
    ArbitraryA: L.string(),
    Covariant: {
      Set: [SET.Covariant, (x: string) => x + x, (x: string) => x.length * 2, SET.makeEq(N.Eq)],
    },
    AssociativeBoth: {
      Set: [
        { ...SET.Covariant, ...SET.AssociativeBoth },
        new Set([(x: string) => x + x]),
        new Set([(x: string) => x.length * 2]),
        SET.makeEq(N.Eq),
      ],
    },
    IdentityBoth: {
      Set: [
        { ...SET.Covariant, ...SET.IdentityBoth },
        (x: string) => x.length,
        SET.makeEq(S.Eq),
        SET.makeEq(N.Eq),
      ],
    },
    AssociativeFlatten: {
      Set: [
        { ...SET.Flatten, ...SET.Covariant },
        (x: string) => new Set([x + x]),
        (x: string) => new Set([x.length * 2]),
        SET.makeEq(N.Eq),
      ],
    },
    IdentityFlatten: {
      Set: [
        { ...SET.IdentityFlatten, ...SET.Covariant },
        (x: string) => new Set([x.length + 2]),
        SET.makeEq(N.Eq),
      ],
    },
    AssociativeEither: {
      Set: [
        { ...SET.AssociativeEither, ...SET.Covariant },
        (x: string) => x.length,
        SET.makeEq(S.Eq),
        SET.makeEq(N.Eq),
      ],
    },
    IdentityEither: {
      Set: [
        { ...SET.IdentityEither, ...SET.Covariant },
        (x: string) => x.length,
        SET.makeEq(S.Eq),
        SET.makeEq(N.Eq),
      ],
    },
    FilterMap: {
      Set: [
        SET.FilterMap,
        (x: string) => x.length > 2,
        (x: string) => x.length < 10,
        SET.makeEq(S.Eq),
      ],
    },
  })
})
