import { Commutative } from '../Typeclass/Commutative.js'
import { DeepEquals, Eq } from '../Typeclass/Eq.js'
import { pipe } from '../function.js'

import * as Arbitrary from './Arbitrary.js'

export function testCommutativity<A>(C: Commutative<A>, Eq: Eq<A> = DeepEquals) {
  return (Arb: Arbitrary.Arbitrary<A>) =>
    pipe(
      Arbitrary.tuple(Arb, Arb, Arb),
      Arbitrary.toProperty(([a, b, c]) =>
        Eq.equals(C.concat(a, C.concat(b, c)), C.concat(C.concat(b, c), a)),
      ),
    )
}
