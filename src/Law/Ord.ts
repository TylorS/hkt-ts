import { Ord } from '../Typeclass/Ord'
import { pipe } from '../function'

import * as Arbitrary from './Arbitrary'

export function testOrd<A>(O: Ord<A>) {
  return (Arb: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => ({
    totality: () => testOrdTotality(O)(Arb)(fc),
    reflexivity: () => testOrdReflexivity(O)(Arb)(fc),
    antisymmetry: () => testOrdAntisymmetry(O)(Arb)(fc),
    transitivity: () => testOrdTransitivity(O)(Arb)(fc),
  })
}

export function testOrdTotality<A>(O: Ord<A>) {
  return (Arb: Arbitrary.Arbitrary<A>) =>
    pipe(
      Arbitrary.tuple(Arb, Arb),
      Arbitrary.assert(([a, b]) => O.compare(a, b) <= 0 || O.compare(b, a) <= 0),
    )
}

export function testOrdReflexivity<A>(O: Ord<A>) {
  return (Arb: Arbitrary.Arbitrary<A>) =>
    pipe(
      Arb,
      Arbitrary.assert((a) => O.compare(a, a) <= 0),
    )
}

export function testOrdAntisymmetry<A>(O: Ord<A>) {
  return (Arb: Arbitrary.Arbitrary<A>) =>
    pipe(
      Arbitrary.tuple(Arb, Arb),
      Arbitrary.assert(
        ([a, b]) => (O.compare(a, b) <= 0 && O.compare(b, a) <= 0) === O.equals(a, b),
      ),
    )
}

export function testOrdTransitivity<A>(O: Ord<A>) {
  return (Arb: Arbitrary.Arbitrary<A>) =>
    pipe(
      Arbitrary.tuple(Arb, Arb, Arb),
      Arbitrary.assert(
        ([a, b, c]) => !(O.compare(a, b) <= 0 && O.compare(b, c) <= 0) || O.compare(a, c) <= 0,
      ),
    )
}
