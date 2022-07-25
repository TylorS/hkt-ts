import { HKT, Kind } from '../HKT.js'
import { AssociativeBoth } from '../Typeclass/AssociativeBoth.js'
import { Covariant } from '../Typeclass/Covariant.js'
import { DeepEquals, Eq } from '../Typeclass/Eq.js'
import { pipe } from '../function.js'

import * as Arbitrary from './Arbitrary.js'

export function testCovariantAssociativeBoth<T extends HKT, A, B, C>(
  ABC: AssociativeBoth<T> & Covariant<T>,
  fab: Kind<T, (a: A) => B>,
  fbc: Kind<T, (b: B) => C>,
  E: Eq<Kind<T, C>> = DeepEquals,
) {
  return (A: Arbitrary.Arbitrary<Kind<T, A>>) =>
    pipe(
      A,
      Arbitrary.map((k: Kind<T, A>) => {
        return [
          pipe(
            k,
            ABC.both(fab),
            ABC.both(fbc),
            ABC.map(([[a, ab], bc]) => bc(ab(a))),
          ),
          pipe(
            k,
            ABC.both(fbc),
            ABC.both(fab),
            ABC.map(([[a, bc], ab]) => bc(ab(a))),
          ),
        ] as const
      }),
      Arbitrary.toProperty(([a, b]) => E.equals(a, b)),
    )
}
