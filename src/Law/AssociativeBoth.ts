import { HKT, Kind } from '../HKT'
import { AssociativeBoth } from '../Typeclass/AssociativeBoth'
import { Covariant } from '../Typeclass/Covariant'
import { DeepEquals, Eq } from '../Typeclass/Eq'
import { pipe } from '../function'

import * as Arbitrary from './Arbitrary'

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
