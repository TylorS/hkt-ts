import { DeepEquals, Eq } from '../Typeclass/Eq'
import { Inverse } from '../Typeclass/Inverse'
import { pipe } from '../function'

import * as Arbitrary from './Arbitrary'

export function testInverse<A>(I: Inverse<A>, E: Eq<A> = DeepEquals) {
  return (Arb: Arbitrary.Arbitrary<A>) =>
    pipe(
      Arb,
      Arbitrary.toProperty(
        (a) => E.equals(I.inverse(a, a), I.id) && E.equals(I.concat(I.inverse(I.id, a), a), I.id),
      ),
    )
}
