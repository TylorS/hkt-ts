import { Associative } from '../Typeclass/Associative.js'
import { DeepEquals, Eq } from '../Typeclass/Eq.js'
import { pipe } from '../function.js'

import * as Arbitrary from './Arbitrary.js'

export function testAssociativity<A>(A: Associative<A>, Eq: Eq<A> = DeepEquals) {
  return (Arb: Arbitrary.Arbitrary<A>) =>
    pipe(
      Arbitrary.tuple(Arb, Arb, Arb),
      Arbitrary.toProperty(([a, b, c]) =>
        Eq.equals(A.concat(a, A.concat(b, c)), A.concat(A.concat(a, b), c)),
      ),
    )
}
