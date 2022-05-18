import { Associative } from '../Typeclass/Associative'
import { DeepEquals, Eq } from '../Typeclass/Eq'
import { pipe } from '../function'

import * as Arbitrary from './Arbitrary'

export function testAssociativity<A>(A: Associative<A>, Eq: Eq<A> = DeepEquals) {
  return (Arb: Arbitrary.Arbitrary<A>) =>
    pipe(
      Arbitrary.tuple(Arb, Arb, Arb),
      Arbitrary.assert(([a, b, c]) =>
        Eq.equals(A.concat(a, A.concat(b, c)), A.concat(A.concat(a, b), c)),
      ),
    )
}
