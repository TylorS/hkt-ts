import { HKT, Kind } from '../HKT'
import { Covariant } from '../Typeclass/Covariant'
import { DeepEquals, Eq } from '../Typeclass/Eq'
import { flow, pipe } from '../function'

import * as Arbitrary from './Arbitrary'

export const testCovariant =
  <T extends HKT, A, B, C>(
    C: Covariant<T>,
    f: (a: A) => B,
    g: (c: B) => C,
    Eq: Eq<Kind<T, C>> = DeepEquals,
  ) =>
  (Arb: Arbitrary.Arbitrary<Kind<T, A>>) =>
    testCovariantIdentity(C, Eq)(pipe(Arb, Arbitrary.map(C.map(flow(f, g))))) &&
    testCovariantAssociativity(C, f, g, Eq)(Arb)

export const testCovariantIdentity = <T extends HKT, A>(
  C: Covariant<T>,
  Eq: Eq<Kind<T, A>> = DeepEquals,
) => {
  return (Arb: Arbitrary.Arbitrary<Kind<T, A>>) =>
    pipe(
      Arb,
      Arbitrary.assert((kind) =>
        Eq.equals(
          pipe(
            kind,
            C.map((a) => a),
          ),
          kind,
        ),
      ),
    )
}

export const testCovariantAssociativity = <T extends HKT, A, B, C>(
  C: Covariant<T>,
  f: (a: A) => B,
  g: (c: B) => C,
  Eq: Eq<Kind<T, C>> = DeepEquals,
) => {
  return (Arb: Arbitrary.Arbitrary<Kind<T, A>>) =>
    pipe(
      Arb,
      Arbitrary.assert((kind) =>
        Eq.equals(pipe(kind, C.map(f), C.map(g)), pipe(kind, C.map(flow(f, g)))),
      ),
    )
}
