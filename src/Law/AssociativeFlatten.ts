import { HKT, Kind } from '../HKT'
import * as AssociativeFlatten from '../Typeclass/AssociativeFlatten'
import * as Covariant from '../Typeclass/Covariant'
import { DeepEquals, Eq, contramap } from '../Typeclass/Eq'
import { flow, pipe } from '../function'

import * as Arbitrary from './Arbitrary'
import { testCovariantAssociativeBoth } from './AssociativeBoth'

export function testCovariantAssociativeFlatten<T extends HKT, A, B, C>(
  AFC: AssociativeFlatten.AssociativeFlatten<T> & Covariant.Covariant<T>,
  f: (a: A) => Kind<T, B>,
  g: (b: B) => Kind<T, C>,
  Eq: Eq<Kind<T, C>> = DeepEquals,
) {
  return (Arb: Arbitrary.Arbitrary<Kind<T, A>>) => (fc: typeof import('fast-check')) => ({
    associativity: () => testCovariantAssociativeFlattenAssociativity(AFC, f, g, Eq)(Arb)(fc),
    derivedAssociativeBoth: () =>
      pipe(
        Arb,
        Arbitrary.assert((ka) => {
          testCovariantAssociativeBoth(
            { ...AssociativeFlatten.makeAssociativeBoth(AFC), ...AFC },
            pipe(
              ka,
              AFC.map(() => f),
            ),
            pipe(
              ka,
              AFC.map(() => g),
            ),
            pipe(Eq, contramap(AFC.flatten)),
          )(Arb)(fc)

          return true
        }),
      ),
  })
}

function testCovariantAssociativeFlattenAssociativity<T extends HKT, A, B, C>(
  AFC: AssociativeFlatten.AssociativeFlatten<T> & Covariant.Covariant<T>,
  f: (a: A) => Kind<T, B>,
  g: (b: B) => Kind<T, C>,
  Eq: Eq<Kind<T, C>> = DeepEquals,
) {
  const flatMap = AssociativeFlatten.flatMap(AFC)

  return (Arb: Arbitrary.Arbitrary<Kind<T, A>>) =>
    pipe(
      Arb,
      Arbitrary.assert((a) =>
        Eq.equals(pipe(a, flatMap(f), flatMap(g)), pipe(a, flatMap(flow(f, flatMap(g))))),
      ),
    )
}
