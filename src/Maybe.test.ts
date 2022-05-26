import * as fc from 'fast-check'

import * as E from './Either'
import * as L from './Law/index'
import { testAllCovariantHKTLaws, testAllDataLaws } from './Law/internal-test-all-laws.test'
import * as M from './Maybe'
import * as N from './number'
import * as S from './string'

describe(__filename, () => {
  testAllDataLaws({
    name: `Maybe<number> Instances`,
    fc,
    Arbitrary: L.Maybe(L.number()),
    Associative: {
      Maybe: [M.makeAssociative(N.AssociativeSum), M.makeEq(N.Eq)],
    },
    Identity: {
      Maybe: [M.makeIdentity(N.IdentitySum), M.makeEq(N.Eq)],
    },
    Eq: {
      Maybe: M.makeEq(N.Eq),
    },
    Ord: {
      Maybe: M.makeOrd(N.Ord),
    },
  })

  testAllDataLaws({
    name: `Maybe<string> Instances`,
    fc,
    Arbitrary: L.Maybe(L.string()),
    Associative: {
      Maybe: [M.makeAssociative(S.Associative), M.makeEq(S.Eq)],
    },
    Identity: {
      Maybe: [M.makeIdentity(S.Identity), M.makeEq(S.Eq)],
    },
    Eq: {
      Maybe: M.makeEq(S.Eq),
    },
    Ord: {
      Maybe: M.makeOrd(S.Ord),
    },
  })

  testAllCovariantHKTLaws<M.MaybeHKT, E.EitherHKT, M.MaybeHKT>()({
    name: `Maybe<number> Instances`,
    fc,
    Arbitrary: L.Maybe(L.number()),
    ArbitraryA: L.number(),
    Covariant: {
      Maybe: [M.Covariant, (x: number) => x + 1, (x: number) => x * 2, M.makeEq(N.Eq)],
    },
    AssociativeBoth: {
      Maybe: [
        { ...M.Covariant, ...M.AssociativeBoth },
        M.Just((x: number) => x + 1),
        M.Just((x: number) => x * 2),
      ],
    },
    IdentityBoth: {
      Maybe: [
        { ...M.Covariant, ...M.IdentityBoth },
        (x: number) => String(x),
        M.makeEq(N.Eq),
        M.makeEq(S.Eq),
      ],
    },
    AssociativeFlatten: {
      Maybe: [
        { ...M.AssociativeFlatten, ...M.Covariant },
        (x: number) => M.Just(String(x)),
        (s: string) => M.Just(s.length * 2),
        M.makeEq(N.Eq),
      ],
    },
    IdentityFlatten: {
      Maybe: [
        { ...M.IdentityFlatten, ...M.Covariant },
        (x: number) => M.Just(x + 2),
        M.makeEq(N.Eq),
      ],
    },
    AssociativeEither: {
      Maybe: [
        { ...M.AssociativeEither, ...M.Covariant },
        (x: number) => String(x),
        M.makeEq(N.Eq),
        M.makeEq(S.Eq),
      ],
    },
    IdentityEither: {
      Maybe: [
        { ...M.IdentityEither, ...M.Covariant },
        (x: number) => String(x),
        M.makeEq(N.Eq),
        M.makeEq(S.Eq),
      ],
    },
    FilterMap: {
      Maybe: [M.FilterMap, (x: number) => x > 2, (x: number) => x < 10, M.makeEq(N.Eq)],
    },
    ForEach: {
      Maybe: [
        M.ForEach,
        { ...E.IdentityBoth, ...E.Covariant },
        { ...M.IdentityBoth, ...M.Covariant },
      ],
    },
  })

  testAllCovariantHKTLaws<M.MaybeHKT, E.EitherHKT, M.MaybeHKT>()({
    name: `Maybe<string> Instances`,
    fc,
    Arbitrary: L.Maybe(L.string()),
    ArbitraryA: L.string(),
    Covariant: {
      Maybe: [M.Covariant, (x: string) => x + x, (x: string) => x.length * 2, M.makeEq(N.Eq)],
    },
    AssociativeBoth: {
      Maybe: [
        { ...M.Covariant, ...M.AssociativeBoth },
        M.Just((x: string) => x + x),
        M.Just((x: string) => x.length * 2),
        M.makeEq(N.Eq),
      ],
    },
    IdentityBoth: {
      Maybe: [
        { ...M.Covariant, ...M.IdentityBoth },
        (x: string) => x.length,
        M.makeEq(S.Eq),
        M.makeEq(N.Eq),
      ],
    },
    AssociativeFlatten: {
      Maybe: [
        { ...M.AssociativeFlatten, ...M.Covariant },
        (x: string) => M.Just(x + x),
        (x: string) => M.Just(x.length * 2),
        M.makeEq(N.Eq),
      ],
    },
    IdentityFlatten: {
      Maybe: [
        { ...M.IdentityFlatten, ...M.Covariant },
        (x: string) => M.Just(x.length + 2),
        M.makeEq(N.Eq),
      ],
    },
    AssociativeEither: {
      Maybe: [
        { ...M.AssociativeEither, ...M.Covariant },
        (x: string) => x.length,
        M.makeEq(S.Eq),
        M.makeEq(N.Eq),
      ],
    },
    IdentityEither: {
      Maybe: [
        { ...M.IdentityEither, ...M.Covariant },
        (x: string) => x.length,
        M.makeEq(S.Eq),
        M.makeEq(N.Eq),
      ],
    },
    FilterMap: {
      Maybe: [
        M.FilterMap,
        (x: string) => x.length > 2,
        (x: string) => x.length < 10,
        M.makeEq(S.Eq),
      ],
    },
  })
})
