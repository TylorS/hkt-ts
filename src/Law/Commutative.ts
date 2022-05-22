import { Commutative } from '../Typeclass/Commutative'
import { DeepEquals, Eq } from '../Typeclass/Eq'
import { pipe } from '../function'

import * as Arbitrary from './Arbitrary'

export function testCommutativity<A>(C: Commutative<A>, Eq: Eq<A> = DeepEquals) {
  return (Arb: Arbitrary.Arbitrary<A>) =>
    pipe(
      Arbitrary.tuple(Arb, Arb, Arb),
      Arbitrary.toProperty(([a, b, c]) =>
        Eq.equals(C.concat(a, C.concat(b, c)), C.concat(C.concat(b, c), a)),
      ),
    )
}
