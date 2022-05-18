import { Eq } from '../Typeclass/Eq'
import { pipe } from '../function'

import * as Arbitrary from './Arbitrary'

export function testEq<A>(E: Eq<A>) {
  return (Arb: Arbitrary.Arbitrary<A>) =>
    testEqReflexivity(E)(Arb) && testEqSymmetry(E)(Arb) && testEqTransitivity(E)(Arb)
}

export function testEqReflexivity<A>(E: Eq<A>) {
  return (Arb: Arbitrary.Arbitrary<A>) =>
    pipe(
      Arb,
      Arbitrary.assert((a) => E.equals(a, a)),
    )
}

export function testEqSymmetry<A>(E: Eq<A>) {
  return (Arb: Arbitrary.Arbitrary<A>) =>
    pipe(
      Arbitrary.tuple(Arb, Arb),
      Arbitrary.assert(([a, b]) => E.equals(a, b) === E.equals(b, a)),
    )
}

export function testEqTransitivity<A>(E: Eq<A>) {
  return (Arb: Arbitrary.Arbitrary<A>) =>
    pipe(
      Arbitrary.tuple(Arb, Arb, Arb),
      Arbitrary.assert(
        ([a, b, c]) => (E.equals(a, b) && E.equals(b, c)) === (E.equals(a, b) && E.equals(a, c)),
      ),
    )
}