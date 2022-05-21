import * as fc from 'fast-check'

import * as A from './Array'
import * as L from './Law'
import { testAllDataLaws, testAllHKTLaws } from './Law/internal-test-all-laws.test'
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

  testAllHKTLaws<A.ArrayHKT>()({
    name: `Array<number> Instances`,
    fc,
    Arbitrary: L.nonEmptyArray(L.number()),
    ArbitraryA: L.number(),
    Covariant: {
      array: [A.Covariant, (x: number) => x + 1, (x: number) => x * 2, A.makeEq(N.Eq)],
    },
    CovariantAssociativeBoth: {
      array: [
        { ...A.Covariant, ...A.AssociativeBoth },
        [(x: number) => x + 1],
        [(x: number) => x * 2],
      ],
    },
    CovariantIdentityBoth: {
      array: [
        { ...A.Covariant, ...A.IdentityBoth },
        (x: number) => String(x),
        A.makeEq(N.Eq),
        A.makeEq(S.Eq),
      ],
    },
    CovariantAssociativeFlatten: {
      array: [
        { ...A.AssociativeFlatten, ...A.Covariant },
        (x: number) => [String(x)],
        (s: string) => [s.length * 2],
        A.makeEq(N.Eq),
      ],
    },
    CovariantIdentityFlatten: {
      array: [{ ...A.IdentityFlatten, ...A.Covariant }, (x: number) => [x + 2], A.makeEq(N.Eq)],
    },
  })

  testAllHKTLaws<A.ArrayHKT>()({
    name: `Array<string> Instances`,
    fc,
    Arbitrary: L.nonEmptyArray(L.string()),
    ArbitraryA: L.string(),
    Covariant: {
      array: [A.Covariant, (x: string) => x + x, (x: string) => x.length * 2, A.makeEq(N.Eq)],
    },
    CovariantAssociativeBoth: {
      array: [
        { ...A.Covariant, ...A.AssociativeBoth },
        [(x: string) => x + x],
        [(x: string) => x.length * 2],
        A.makeEq(N.Eq),
      ],
    },
    CovariantIdentityBoth: {
      array: [
        { ...A.Covariant, ...A.IdentityBoth },
        (x: string) => x.length,
        A.makeEq(S.Eq),
        A.makeEq(N.Eq),
      ],
    },
    CovariantAssociativeFlatten: {
      array: [
        { ...A.AssociativeFlatten, ...A.Covariant },
        (x: string) => [x + x],
        (x: string) => [x.length * 2],
        A.makeEq(N.Eq),
      ],
    },
    CovariantIdentityFlatten: {
      array: [
        { ...A.IdentityFlatten, ...A.Covariant },
        (x: string) => [x.length + 2],
        A.makeEq(N.Eq),
      ],
    },
  })
})
