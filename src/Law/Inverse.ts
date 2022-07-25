import { DeepEquals, Eq } from '../Typeclass/Eq.js'
import { Inverse } from '../Typeclass/Inverse.js'
import { pipe } from '../function.js'

import * as Arbitrary from './Arbitrary.js'

export function testInverse<A>(I: Inverse<A>, E: Eq<A> = DeepEquals) {
  return (Arb: Arbitrary.Arbitrary<A>) =>
    pipe(
      Arb,
      Arbitrary.toProperty(
        (a) => E.equals(I.inverse(a, a), I.id) && E.equals(I.concat(I.inverse(I.id, a), a), I.id),
      ),
    )
}
