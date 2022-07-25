import { Eq } from '../Typeclass/Eq.js'
import { pipe } from '../function.js'

import * as Arbitrary from './Arbitrary.js'

export function testEq<A>(E: Eq<A>) {
  return (Arb: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => ({
    reflexivity: () => testEqReflexivity(E)(Arb).property(fc),
    symmetry: () => testEqSymmetry(E)(Arb).property(fc),
    transitivity: () => testEqTransitivity(E)(Arb).property(fc),
  })
}

export function testEqReflexivity<A>(E: Eq<A>) {
  return (Arb: Arbitrary.Arbitrary<A>) =>
    pipe(
      Arb,
      Arbitrary.toProperty((a) => E.equals(a, a)),
    )
}

export function testEqSymmetry<A>(E: Eq<A>) {
  return (Arb: Arbitrary.Arbitrary<A>) =>
    pipe(
      Arbitrary.tuple(Arb, Arb),
      Arbitrary.toProperty(([a, b]) => E.equals(a, b) === E.equals(b, a)),
    )
}

export function testEqTransitivity<A>(E: Eq<A>) {
  return (Arb: Arbitrary.Arbitrary<A>) =>
    pipe(
      Arbitrary.tuple(Arb, Arb, Arb),
      Arbitrary.toProperty(
        ([a, b, c]) => (E.equals(a, b) && E.equals(b, c)) === (E.equals(a, b) && E.equals(a, c)),
      ),
    )
}
