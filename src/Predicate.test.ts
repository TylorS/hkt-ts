import * as fc from 'fast-check'
import { describe, it } from 'vitest'

import * as L from './Law/index.js'
import { testAllDataLaws } from './Law/internal-test-all-laws.js'
import * as P from './Predicate.js'
import { fromEquals } from './Typeclass/Eq.js'
import { pipe } from './function.js'

describe(import.meta.url, () => {
  testAllDataLaws({
    name: `Predicate<number>`,
    fc,
    Arbitrary: pipe(
      L.boolean,
      L.flatMap((b) => L.constant(() => b)),
    ),
    Associative: {
      All: [
        P.makeAssociativeAll<number>(),
        fromEquals((f: P.Predicate<number>, s) => f(1) === s(1) && f(2) === s(2)),
      ],
      Any: [
        P.makeAssociativeAny<number>(),
        fromEquals((f: P.Predicate<number>, s) => f(1) === s(1) && f(2) === s(2)),
      ],
    },
    Identity: {
      All: [
        P.makeIdentityAll<number>(),
        fromEquals((f: P.Predicate<number>, s) => f(1) === s(1) && f(2) === s(2)),
      ],
      Any: [
        P.makeIdentityAny<number>(),
        fromEquals((f: P.Predicate<number>, s) => f(1) === s(1) && f(2) === s(2)),
      ],
    },
  })

  describe('Contravariant', () => {
    const { identity, associativity } = L.Contravariant.testContravariant<P.PredicateHKT>()(
      P.Contravariant,
      (s: string) => s.length,
      (n: number) => n + 2,
      (a: string) => a.length % 2 === 0,
      (a: number) => a % 2 === 0,
      (predicate, n) => predicate(n),
    )(L.string())(fc)

    it('Identity', identity)
    it('Associativity', associativity)
  })
})
