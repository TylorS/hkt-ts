import {
  HKT,
  HKT10,
  HKT2,
  HKT3,
  HKT4,
  HKT5,
  HKT6,
  HKT7,
  HKT8,
  HKT9,
  Kind,
  Kind10,
  Kind2,
  Kind3,
  Kind4,
  Kind5,
  Kind6,
  Kind7,
  Kind8,
  Kind9,
} from '../HKT.js'
import * as AssociativeFlatten from '../Typeclass/AssociativeFlatten.js'
import * as Covariant from '../Typeclass/Covariant.js'
import { DeepEquals, Eq, contramap } from '../Typeclass/Eq.js'
import { flow, pipe } from '../function.js'

import * as Arbitrary from './Arbitrary.js'
import { testCovariantAssociativeBoth } from './AssociativeBoth.js'

export function testCovariantAssociativeFlatten<
  T extends HKT10,
  Z,
  Y,
  X,
  W,
  V,
  U,
  S,
  R,
  E,
  A,
  B,
  C,
>(
  AFC: Covariant.Covariant10<T> & AssociativeFlatten.AssociativeFlatten10<T>,
  f: (a: A) => Kind10<T, Z, Y, X, W, V, U, S, R, E, B>,
  g: (b: B) => Kind10<T, Z, Y, X, W, V, U, S, R, E, C>,
  E: Eq<Kind10<T, Z, Y, X, W, V, U, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind10<T, Z, Y, X, W, V, U, S, R, E, A>>) => (
  fc: typeof import('fast-check'),
) => {
  readonly associativity: () => void
  readonly derivedAssociativeBoth: () => void
}

export function testCovariantAssociativeFlatten<T extends HKT9, Y, X, W, V, U, S, R, E, A, B, C>(
  AFC: Covariant.Covariant9<T> & AssociativeFlatten.AssociativeFlatten9<T>,
  f: (a: A) => Kind9<T, Y, X, W, V, U, S, R, E, B>,
  g: (b: B) => Kind9<T, Y, X, W, V, U, S, R, E, C>,
  E: Eq<Kind9<T, Y, X, W, V, U, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind9<T, Y, X, W, V, U, S, R, E, A>>) => (
  fc: typeof import('fast-check'),
) => {
  readonly associativity: () => void
  readonly derivedAssociativeBoth: () => void
}

export function testCovariantAssociativeFlatten<T extends HKT8, X, W, V, U, S, R, E, A, B, C>(
  AFC: Covariant.Covariant8<T> & AssociativeFlatten.AssociativeFlatten8<T>,
  f: (a: A) => Kind8<T, X, W, V, U, S, R, E, B>,
  g: (b: B) => Kind8<T, X, W, V, U, S, R, E, C>,
  E: Eq<Kind8<T, X, W, V, U, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind8<T, X, W, V, U, S, R, E, A>>) => (
  fc: typeof import('fast-check'),
) => {
  readonly associativity: () => void
  readonly derivedAssociativeBoth: () => void
}

export function testCovariantAssociativeFlatten<T extends HKT7, W, V, U, S, R, E, A, B, C>(
  AFC: Covariant.Covariant7<T> & AssociativeFlatten.AssociativeFlatten7<T>,
  f: (a: A) => Kind7<T, W, V, U, S, R, E, B>,
  g: (b: B) => Kind7<T, W, V, U, S, R, E, C>,
  E: Eq<Kind7<T, W, V, U, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind7<T, W, V, U, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly derivedAssociativeBoth: () => void
}

export function testCovariantAssociativeFlatten<T extends HKT6, V, U, S, R, E, A, B, C>(
  AFC: Covariant.Covariant6<T> & AssociativeFlatten.AssociativeFlatten6<T>,
  f: (a: A) => Kind6<T, V, U, S, R, E, B>,
  g: (b: B) => Kind6<T, V, U, S, R, E, C>,
  E: Eq<Kind6<T, V, U, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind6<T, V, U, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly derivedAssociativeBoth: () => void
}

export function testCovariantAssociativeFlatten<T extends HKT5, U, S, R, E, A, B, C>(
  AFC: Covariant.Covariant5<T> & AssociativeFlatten.AssociativeFlatten5<T>,
  f: (a: A) => Kind5<T, U, S, R, E, B>,
  g: (b: B) => Kind5<T, U, S, R, E, C>,
  E: Eq<Kind5<T, U, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind5<T, U, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly derivedAssociativeBoth: () => void
}

export function testCovariantAssociativeFlatten<T extends HKT4, E, S, R, A, B, C>(
  AFC: Covariant.Covariant4EC<T, E> & AssociativeFlatten.AssociativeFlatten4EC<T, E>,
  f: (a: A) => Kind4<T, S, R, E, B>,
  g: (b: B) => Kind4<T, S, R, E, C>,
  E: Eq<Kind4<T, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly derivedAssociativeBoth: () => void
}

export function testCovariantAssociativeFlatten<T extends HKT4, R, E, S, A, B, C>(
  AFC: Covariant.Covariant4REC<T, R, E> & AssociativeFlatten.AssociativeFlatten4REC<T, R, E>,
  f: (a: A) => Kind4<T, S, R, E, B>,
  g: (b: B) => Kind4<T, S, R, E, C>,
  E: Eq<Kind4<T, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly derivedAssociativeBoth: () => void
}

export function testCovariantAssociativeFlatten<T extends HKT4, S, E, R, A, B, C>(
  AFC: Covariant.Covariant4SEC<T, S, E> & AssociativeFlatten.AssociativeFlatten4SEC<T, S, E>,
  f: (a: A) => Kind4<T, S, R, E, B>,
  g: (b: B) => Kind4<T, S, R, E, C>,
  E: Eq<Kind4<T, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly derivedAssociativeBoth: () => void
}

export function testCovariantAssociativeFlatten<T extends HKT4, R, S, E, A, B, C>(
  AFC: Covariant.Covariant4RC<T, R> & AssociativeFlatten.AssociativeFlatten4RC<T, R>,
  f: (a: A) => Kind4<T, S, R, E, B>,
  g: (b: B) => Kind4<T, S, R, E, C>,
  E: Eq<Kind4<T, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly derivedAssociativeBoth: () => void
}

export function testCovariantAssociativeFlatten<T extends HKT4, S, R, E, A, B, C>(
  AFC: Covariant.Covariant4SRC<T, S, R> & AssociativeFlatten.AssociativeFlatten4SRC<T, S, R>,
  f: (a: A) => Kind4<T, S, R, E, B>,
  g: (b: B) => Kind4<T, S, R, E, C>,
  E: Eq<Kind4<T, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly derivedAssociativeBoth: () => void
}

export function testCovariantAssociativeFlatten<T extends HKT4, S, R, E, A, B, C>(
  AFC: Covariant.Covariant4SC<T, S> & AssociativeFlatten.AssociativeFlatten4SC<T, S>,
  f: (a: A) => Kind4<T, S, R, E, B>,
  g: (b: B) => Kind4<T, S, R, E, C>,
  E: Eq<Kind4<T, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly derivedAssociativeBoth: () => void
}

export function testCovariantAssociativeFlatten<T extends HKT4, S, R, E, A, B, C>(
  AFC: Covariant.Covariant4SREC<T, S, R, E> &
    AssociativeFlatten.AssociativeFlatten4SREC<T, S, R, E>,
  f: (a: A) => Kind4<T, S, R, E, B>,
  g: (b: B) => Kind4<T, S, R, E, C>,
  E: Eq<Kind4<T, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly derivedAssociativeBoth: () => void
}

export function testCovariantAssociativeFlatten<T extends HKT4, S, R, E, A, B, C>(
  AFC: Covariant.Covariant4<T> & AssociativeFlatten.AssociativeFlatten4<T>,
  f: (a: A) => Kind4<T, S, R, E, B>,
  g: (b: B) => Kind4<T, S, R, E, C>,
  E: Eq<Kind4<T, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly derivedAssociativeBoth: () => void
}

export function testCovariantAssociativeFlatten<T extends HKT3, E, R, A, B, C>(
  AFC: Covariant.Covariant3EC<T, E> & AssociativeFlatten.AssociativeFlatten3EC<T, E>,
  f: (a: A) => Kind3<T, R, E, B>,
  g: (b: B) => Kind3<T, R, E, C>,
  E: Eq<Kind3<T, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind3<T, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly derivedAssociativeBoth: () => void
}

export function testCovariantAssociativeFlatten<T extends HKT3, R, E, A, B, C>(
  AFC: Covariant.Covariant3REC<T, R, E> & AssociativeFlatten.AssociativeFlatten3REC<T, R, E>,
  f: (a: A) => Kind3<T, R, E, B>,
  g: (b: B) => Kind3<T, R, E, C>,
  E: Eq<Kind3<T, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind3<T, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly derivedAssociativeBoth: () => void
}

export function testCovariantAssociativeFlatten<T extends HKT3, R, E, A, B, C>(
  AFC: Covariant.Covariant3RC<T, R> & AssociativeFlatten.AssociativeFlatten3RC<T, R>,
  f: (a: A) => Kind3<T, R, E, B>,
  g: (b: B) => Kind3<T, R, E, C>,
  E: Eq<Kind3<T, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind3<T, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly derivedAssociativeBoth: () => void
}

export function testCovariantAssociativeFlatten<T extends HKT3, R, E, A, B, C>(
  AFC: Covariant.Covariant3<T> & AssociativeFlatten.AssociativeFlatten3<T>,
  f: (a: A) => Kind3<T, R, E, B>,
  g: (b: B) => Kind3<T, R, E, C>,
  E: Eq<Kind3<T, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind3<T, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly derivedAssociativeBoth: () => void
}

export function testCovariantAssociativeFlatten<T extends HKT2, E, A, B, C>(
  AFC: Covariant.Covariant2EC<T, E> & AssociativeFlatten.AssociativeFlatten2EC<T, E>,
  f: (a: A) => Kind2<T, E, B>,
  g: (b: B) => Kind2<T, E, C>,
  E: Eq<Kind2<T, E, B>>,
): (A: Arbitrary.Arbitrary<Kind2<T, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly derivedAssociativeBoth: () => void
}

export function testCovariantAssociativeFlatten<T extends HKT2, E, A, B, C>(
  AFC: Covariant.Covariant2<T> & AssociativeFlatten.AssociativeFlatten2<T>,
  f: (a: A) => Kind2<T, E, B>,
  g: (b: B) => Kind2<T, E, C>,
  E: Eq<Kind2<T, E, B>>,
): (A: Arbitrary.Arbitrary<Kind2<T, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly derivedAssociativeBoth: () => void
}

export function testCovariantAssociativeFlatten<T extends HKT, A, B, C>(
  AFC: Covariant.Covariant1<T> & AssociativeFlatten.AssociativeFlatten1<T>,
  f: (a: A) => Kind<T, B>,
  g: (b: B) => Kind<T, C>,
  E: Eq<Kind<T, B>>,
): (A: Arbitrary.Arbitrary<Kind<T, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly derivedAssociativeBoth: () => void
}

export function testCovariantAssociativeFlatten<T extends HKT, A, B, C>(
  AFC: Covariant.Covariant<T> & AssociativeFlatten.AssociativeFlatten<T>,
  f: (a: A) => Kind<T, B>,
  g: (b: B) => Kind<T, C>,
  E: Eq<Kind<T, B>>,
): (A: Arbitrary.Arbitrary<Kind<T, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly derivedAssociativeBoth: () => void
}

export function testCovariantAssociativeFlatten<T extends HKT, A, B, C>(
  AFC: AssociativeFlatten.AssociativeFlatten<T> & Covariant.Covariant<T>,
  f: (a: A) => Kind<T, B>,
  g: (b: B) => Kind<T, C>,
  Eq: Eq<Kind<T, C>> = DeepEquals,
) {
  return (Arb: Arbitrary.Arbitrary<Kind<T, A>>) => (fc: typeof import('fast-check')) => ({
    associativity: () =>
      testCovariantAssociativeFlattenAssociativity(AFC, f, g, Eq)(Arb).property(fc),
    derivedAssociativeBoth: () =>
      pipe(
        Arb,
        Arbitrary.toProperty((ka) => {
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
          )(Arb).property(fc)

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
      Arbitrary.toProperty((a) =>
        Eq.equals(pipe(a, flatMap(f), flatMap(g)), pipe(a, flatMap(flow(f, flatMap(g))))),
      ),
    )
}
