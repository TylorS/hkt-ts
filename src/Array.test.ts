import * as fc from 'fast-check'

import * as A from './Array'
import * as E from './Either'
import * as L from './Law/index'
import { testAllCovariantHKTLaws, testAllDataLaws } from './Law/internal-test-all-laws.test'
import * as M from './Maybe'
import * as N from './number'
import * as S from './string'

describe(__filename, () => {
  testAllDataLaws({
    name: `Array<number> Instances`,
    fc,
    Arbitrary: L.array(L.number()),
    Associative: {
      array: [A.makeAssociative<number>(), A.makeEq(N.Eq)],
    },
    Identity: {
      array: [A.makeIdentity<number>(), A.makeEq(N.Eq)],
    },
    Eq: {
      array: A.makeEq(N.Eq),
    },
    Ord: {
      array: A.makeOrd(N.Ord),
    },
  })

  testAllDataLaws({
    name: `Array<string> Instances`,
    fc,
    Arbitrary: L.array(L.string()),
    Associative: {
      array: [A.makeAssociative<string>(), A.makeEq(S.Eq)],
    },
    Identity: {
      array: [A.makeIdentity<string>(), A.makeEq(S.Eq)],
    },
    Eq: {
      array: A.makeEq(S.Eq),
    },
    Ord: {
      array: A.makeOrd(S.Ord),
    },
  })

  testAllCovariantHKTLaws<A.ArrayHKT, E.EitherHKT, M.MaybeHKT>()({
    name: `Array<number> Instances`,
    fc,
    Arbitrary: L.nonEmptyArray(L.number()),
    ArbitraryA: L.number(),
    Covariant: {
      array: [A.Covariant, (x: number) => x + 1, (x: number) => x * 2, A.makeEq(N.Eq)],
    },
    AssociativeBoth: {
      array: [
        { ...A.Covariant, ...A.AssociativeBoth },
        [(x: number) => x + 1],
        [(x: number) => x * 2],
      ],
    },
    IdentityBoth: {
      array: [
        { ...A.Covariant, ...A.IdentityBoth },
        (x: number) => String(x),
        A.makeEq(N.Eq),
        A.makeEq(S.Eq),
      ],
    },
    AssociativeFlatten: {
      array: [
        { ...A.AssociativeFlatten, ...A.Covariant },
        (x: number) => [String(x)],
        (s: string) => [s.length * 2],
        A.makeEq(N.Eq),
      ],
    },
    IdentityFlatten: {
      array: [{ ...A.IdentityFlatten, ...A.Covariant }, (x: number) => [x + 2], A.makeEq(N.Eq)],
    },
    AssociativeEither: {
      array: [
        { ...A.AssociativeEither, ...A.Covariant },
        (x: number) => String(x),
        A.makeEq(N.Eq),
        A.makeEq(S.Eq),
      ],
    },
    IdentityEither: {
      array: [
        { ...A.IdentityEither, ...A.Covariant },
        (x: number) => String(x),
        A.makeEq(N.Eq),
        A.makeEq(S.Eq),
      ],
    },
    FilterMap: {
      array: [A.FilterMap, (x: number) => x > 2, (x: number) => x < 10, A.makeEq(N.Eq)],
    },
    ForEach: {
      array: [
        A.ForEach,
        { ...E.IdentityBoth, ...E.Covariant },
        { ...M.IdentityBoth, ...M.Covariant },
      ],
    },
  })

  testAllCovariantHKTLaws<A.ArrayHKT, E.EitherHKT, M.MaybeHKT>()({
    name: `Array<string> Instances`,
    fc,
    Arbitrary: L.nonEmptyArray(L.string()),
    ArbitraryA: L.string(),
    Covariant: {
      array: [A.Covariant, (x: string) => x + x, (x: string) => x.length * 2, A.makeEq(N.Eq)],
    },
    AssociativeBoth: {
      array: [
        { ...A.Covariant, ...A.AssociativeBoth },
        [(x: string) => x + x],
        [(x: string) => x.length * 2],
        A.makeEq(N.Eq),
      ],
    },
    IdentityBoth: {
      array: [
        { ...A.Covariant, ...A.IdentityBoth },
        (x: string) => x.length,
        A.makeEq(S.Eq),
        A.makeEq(N.Eq),
      ],
    },
    AssociativeFlatten: {
      array: [
        { ...A.AssociativeFlatten, ...A.Covariant },
        (x: string) => [x + x],
        (x: string) => [x.length * 2],
        A.makeEq(N.Eq),
      ],
    },
    IdentityFlatten: {
      array: [
        { ...A.IdentityFlatten, ...A.Covariant },
        (x: string) => [x.length + 2],
        A.makeEq(N.Eq),
      ],
    },
    AssociativeEither: {
      array: [
        { ...A.AssociativeEither, ...A.Covariant },
        (x: string) => x.length,
        A.makeEq(S.Eq),
        A.makeEq(N.Eq),
      ],
    },
    IdentityEither: {
      array: [
        { ...A.IdentityEither, ...A.Covariant },
        (x: string) => x.length,
        A.makeEq(S.Eq),
        A.makeEq(N.Eq),
      ],
    },
    FilterMap: {
      array: [
        A.FilterMap,
        (x: string) => x.length > 2,
        (x: string) => x.length < 10,
        A.makeEq(S.Eq),
      ],
    },
  })
})
