import { Ord } from '../Typeclass/Ord.js'
import { pipe } from '../function.js'

import * as Arbitrary from './Arbitrary.js'

export function testOrd<A>(O: Ord<A>) {
  return (Arb: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => ({
    totality: () => testOrdTotality(O)(Arb).property(fc),
    reflexivity: () => testOrdReflexivity(O)(Arb).property(fc),
    antisymmetry: () => testOrdAntisymmetry(O)(Arb).property(fc),
    transitivity: () => testOrdTransitivity(O)(Arb).property(fc),
  })
}

export function testOrdTotality<A>(O: Ord<A>) {
  return (Arb: Arbitrary.Arbitrary<A>) =>
    pipe(
      Arbitrary.tuple(Arb, Arb),
      Arbitrary.toProperty(([a, b]) => O.compare(a, b) <= 0 || O.compare(b, a) <= 0),
    )
}

export function testOrdReflexivity<A>(O: Ord<A>) {
  return (Arb: Arbitrary.Arbitrary<A>) =>
    pipe(
      Arb,
      Arbitrary.toProperty((a) => O.compare(a, a) <= 0),
    )
}

export function testOrdAntisymmetry<A>(O: Ord<A>) {
  return (Arb: Arbitrary.Arbitrary<A>) =>
    pipe(
      Arbitrary.tuple(Arb, Arb),
      Arbitrary.toProperty(
        ([a, b]) => (O.compare(a, b) <= 0 && O.compare(b, a) <= 0) === O.equals(a, b),
      ),
    )
}

export function testOrdTransitivity<A>(O: Ord<A>) {
  return (Arb: Arbitrary.Arbitrary<A>) =>
    pipe(
      Arbitrary.tuple(Arb, Arb, Arb),
      Arbitrary.toProperty(
        ([a, b, c]) => !(O.compare(a, b) <= 0 && O.compare(b, c) <= 0) || O.compare(a, c) <= 0,
      ),
    )
}
