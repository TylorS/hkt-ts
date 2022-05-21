import { HKT, Kind } from '../HKT'
import { AssociativeEither, orElse } from '../Typeclass/AssociativeEither'
import { Covariant } from '../Typeclass/Covariant'
import { Eq } from '../Typeclass/Eq'
import { pipe } from '../function'

import * as Arbitrary from './Arbitrary'

export function testCovariantAssociativeEither<T extends HKT, A, B>(
  AE: AssociativeEither<T> & Covariant<T>,
  EqA: Eq<Kind<T, A>>,
  f: (a: A) => B,
  EqB: Eq<Kind<T, B>>,
) {
  return (A: Arbitrary.Arbitrary<Kind<T, A>>) => (fc: typeof import('fast-check')) => ({
    associativitity: () => testCovariantAssociativeEitherAssociativity(AE, EqA)(A)(fc),
    distributivity: () => testCovariantAssociativeEitherDistributivity(AE, f, EqB)(A)(fc),
  })
}

function testCovariantAssociativeEitherAssociativity<T extends HKT, A>(
  AE: AssociativeEither<T> & Covariant<T>,
  E: Eq<Kind<T, A>>,
) {
  const orElse_ = orElse(AE)

  return (A: Arbitrary.Arbitrary<Kind<T, A>>) =>
    pipe(
      Arbitrary.tuple(A, A, A),
      Arbitrary.assert(([a, b, c]) =>
        E.equals(
          pipe(
            a,
            orElse_(() => b),
            orElse_(() => c),
          ),
          pipe(
            a,
            orElse_(() =>
              pipe(
                b,
                orElse_(() => c),
              ),
            ),
          ),
        ),
      ),
    )
}

function testCovariantAssociativeEitherDistributivity<T extends HKT, A, B>(
  AE: AssociativeEither<T> & Covariant<T>,
  f: (a: A) => B,
  EqB: Eq<Kind<T, B>>,
) {
  return (A: Arbitrary.Arbitrary<Kind<T, A>>) =>
    pipe(
      Arbitrary.tuple(A, A),
      Arbitrary.assert(([a, b]) =>
        EqB.equals(
          pipe(
            a,
            orElse(AE)(() => b),
            AE.map(f),
          ),
          pipe(
            a,
            AE.map(f),
            orElse(AE)(() => pipe(b, AE.map(f))),
          ),
        ),
      ),
    )
}
