import * as fc from 'fast-check'

import * as E from './Either'
import * as L from './Law/index'
import { testAllCovariantHKTLaws, testAllDataLaws } from './Law/internal-test-all-laws.test'
import * as M from './Maybe'
import * as A from './NonEmptyArray'
import * as N from './number'
import * as S from './string'

describe(__filename, () => {
  testAllDataLaws({
    name: `NonEmptyArray<number> Instances`,
    fc,
    Arbitrary: L.nonEmptyArray(L.number()),
    Associative: {
      NonEmptyArray: [A.makeAssociative<number>(), A.makeEq(N.Eq)],
    },
    Identity: {
      NonEmptyArray: [A.makeIdentity<number>(N.IdentitySum), A.makeEq(N.Eq)],
    },
    Eq: {
      NonEmptyArray: A.makeEq(N.Eq),
    },
    Ord: {
      NonEmptyArray: A.makeOrd(N.Ord),
    },
  })

  testAllDataLaws({
    name: `NonEmptyArray<string> Instances`,
    fc,
    Arbitrary: L.nonEmptyArray(L.string()),
    Associative: {
      NonEmptyArray: [A.makeAssociative<string>(), A.makeEq(S.Eq)],
    },
    Identity: {
      NonEmptyArray: [A.makeIdentity<string>(S.Identity), A.makeEq(S.Eq)],
    },
    Eq: {
      NonEmptyArray: A.makeEq(S.Eq),
    },
    Ord: {
      NonEmptyArray: A.makeOrd(S.Ord),
    },
  })

  testAllCovariantHKTLaws<A.NonEmptyArrayHKT, E.EitherHKT, M.MaybeHKT>()({
    name: `NonEmptyArray<number> Instances`,
    fc,
    Arbitrary: L.nonEmptyArray(L.number()),
    ArbitraryA: L.number(),
    Covariant: {
      NonEmptyArray: [A.Covariant, (x: number) => x + 1, (x: number) => x * 2, A.makeEq(N.Eq)],
    },
    AssociativeBoth: {
      NonEmptyArray: [
        { ...A.Covariant, ...A.AssociativeBoth },
        [(x: number) => x + 1],
        [(x: number) => x * 2],
      ],
    },
    IdentityBoth: {
      NonEmptyArray: [
        { ...A.Covariant, ...A.IdentityBoth },
        (x: number) => String(x),
        A.makeEq(N.Eq),
        A.makeEq(S.Eq),
      ],
    },
    AssociativeFlatten: {
      NonEmptyArray: [
        { ...A.AssociativeFlatten, ...A.Covariant },
        (x: number) => [String(x)],
        (s: string) => [s.length * 2],
        A.makeEq(N.Eq),
      ],
    },
    IdentityFlatten: {
      NonEmptyArray: [
        { ...A.IdentityFlatten, ...A.Covariant },
        (x: number) => [x + 2],
        A.makeEq(N.Eq),
      ],
    },
    ForEach: {
      NonEmptyArray: [
        A.ForEach,
        { ...E.IdentityBoth, ...E.Covariant },
        { ...M.IdentityBoth, ...M.Covariant },
      ],
    },
  })

  testAllCovariantHKTLaws<A.NonEmptyArrayHKT, E.EitherHKT, M.MaybeHKT>()({
    name: `NonEmptyArray<string> Instances`,
    fc,
    Arbitrary: L.nonEmptyArray(L.string()),
    ArbitraryA: L.string(),
    Covariant: {
      NonEmptyArray: [
        A.Covariant,
        (x: string) => x + x,
        (x: string) => x.length * 2,
        A.makeEq(N.Eq),
      ],
    },
    AssociativeBoth: {
      NonEmptyArray: [
        { ...A.Covariant, ...A.AssociativeBoth },
        [(x: string) => x + x],
        [(x: string) => x.length * 2],
        A.makeEq(N.Eq),
      ],
    },
    IdentityBoth: {
      NonEmptyArray: [
        { ...A.Covariant, ...A.IdentityBoth },
        (x: string) => x.length,
        A.makeEq(S.Eq),
        A.makeEq(N.Eq),
      ],
    },
    AssociativeFlatten: {
      NonEmptyArray: [
        { ...A.AssociativeFlatten, ...A.Covariant },
        (x: string) => [x + x],
        (x: string) => [x.length * 2],
        A.makeEq(N.Eq),
      ],
    },
    IdentityFlatten: {
      NonEmptyArray: [
        { ...A.IdentityFlatten, ...A.Covariant },
        (x: string) => [x.length + 2],
        A.makeEq(N.Eq),
      ],
    },
    ForEach: {
      NonEmptyArray: [
        A.ForEach,
        { ...E.IdentityBoth, ...E.Covariant },
        { ...M.IdentityBoth, ...M.Covariant },
      ],
    },
  })
})
