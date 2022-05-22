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
} from '../HKT'
import {
  AssociativeEither,
  AssociativeEither1,
  AssociativeEither10,
  AssociativeEither2,
  AssociativeEither2EC,
  AssociativeEither3,
  AssociativeEither3EC,
  AssociativeEither3RC,
  AssociativeEither3REC,
  AssociativeEither4,
  AssociativeEither4EC,
  AssociativeEither4RC,
  AssociativeEither4REC,
  AssociativeEither4SC,
  AssociativeEither4SEC,
  AssociativeEither4SRC,
  AssociativeEither4SREC,
  AssociativeEither5,
  AssociativeEither6,
  AssociativeEither7,
  AssociativeEither8,
  AssociativeEither9,
  orElse,
} from '../Typeclass/AssociativeEither'
import {
  Covariant,
  Covariant1,
  Covariant10,
  Covariant2,
  Covariant2EC,
  Covariant3,
  Covariant3EC,
  Covariant3RC,
  Covariant3REC,
  Covariant4,
  Covariant4EC,
  Covariant4RC,
  Covariant4REC,
  Covariant4SC,
  Covariant4SEC,
  Covariant4SRC,
  Covariant4SREC,
  Covariant5,
  Covariant6,
  Covariant7,
  Covariant8,
  Covariant9,
} from '../Typeclass/Covariant'
import { Eq } from '../Typeclass/Eq'
import { pipe } from '../function'

import * as Arbitrary from './Arbitrary'

export function testCovariantAssociativeEither<T extends HKT10, Z, Y, X, W, V, U, S, R, E, A, B>(
  IBC: Covariant10<T> & AssociativeEither10<T>,
  EA: Eq<Kind10<T, Z, Y, X, W, V, U, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind10<T, Z, Y, X, W, V, U, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind10<T, Z, Y, X, W, V, U, S, R, E, A>>) => (
  fc: typeof import('fast-check'),
) => {
  readonly associativity: () => void
  readonly distributivity: () => void
}

export function testCovariantAssociativeEither<T extends HKT9, Y, X, W, V, U, S, R, E, A, B>(
  IBC: Covariant9<T> & AssociativeEither9<T>,
  EA: Eq<Kind9<T, Y, X, W, V, U, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind9<T, Y, X, W, V, U, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind9<T, Y, X, W, V, U, S, R, E, A>>) => (
  fc: typeof import('fast-check'),
) => {
  readonly associativity: () => void
  readonly distributivity: () => void
}

export function testCovariantAssociativeEither<T extends HKT8, X, W, V, U, S, R, E, A, B>(
  IBC: Covariant8<T> & AssociativeEither8<T>,
  EA: Eq<Kind8<T, X, W, V, U, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind8<T, X, W, V, U, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind8<T, X, W, V, U, S, R, E, A>>) => (
  fc: typeof import('fast-check'),
) => {
  readonly associativity: () => void
  readonly distributivity: () => void
}

export function testCovariantAssociativeEither<T extends HKT7, W, V, U, S, R, E, A, B>(
  IBC: Covariant7<T> & AssociativeEither7<T>,
  EA: Eq<Kind7<T, W, V, U, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind7<T, W, V, U, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind7<T, W, V, U, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly distributivity: () => void
}

export function testCovariantAssociativeEither<T extends HKT6, V, U, S, R, E, A, B>(
  IBC: Covariant6<T> & AssociativeEither6<T>,
  EA: Eq<Kind6<T, V, U, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind6<T, V, U, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind6<T, V, U, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly distributivity: () => void
}

export function testCovariantAssociativeEither<T extends HKT5, U, S, R, E, A, B>(
  IBC: Covariant5<T> & AssociativeEither5<T>,
  EA: Eq<Kind5<T, U, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind5<T, U, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind5<T, U, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly distributivity: () => void
}

export function testCovariantAssociativeEither<T extends HKT4, E, S, R, A, B>(
  IBC: Covariant4EC<T, E> & AssociativeEither4EC<T, E>,
  EA: Eq<Kind4<T, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind4<T, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly distributivity: () => void
}

export function testCovariantAssociativeEither<T extends HKT4, R, E, S, A, B>(
  IBC: Covariant4REC<T, R, E> & AssociativeEither4REC<T, R, E>,
  EA: Eq<Kind4<T, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind4<T, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly distributivity: () => void
}

export function testCovariantAssociativeEither<T extends HKT4, S, E, R, A, B>(
  IBC: Covariant4SEC<T, S, E> & AssociativeEither4SEC<T, S, E>,
  EA: Eq<Kind4<T, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind4<T, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly distributivity: () => void
}

export function testCovariantAssociativeEither<T extends HKT4, R, S, E, A, B>(
  IBC: Covariant4RC<T, R> & AssociativeEither4RC<T, R>,
  EA: Eq<Kind4<T, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind4<T, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly distributivity: () => void
}

export function testCovariantAssociativeEither<T extends HKT4, S, R, E, A, B>(
  IBC: Covariant4SRC<T, S, R> & AssociativeEither4SRC<T, S, R>,
  EA: Eq<Kind4<T, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind4<T, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly distributivity: () => void
}

export function testCovariantAssociativeEither<T extends HKT4, S, R, E, A, B>(
  IBC: Covariant4SC<T, S> & AssociativeEither4SC<T, S>,
  EA: Eq<Kind4<T, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind4<T, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly distributivity: () => void
}

export function testCovariantAssociativeEither<T extends HKT4, S, R, E, A, B>(
  IBC: Covariant4SREC<T, S, R, E> & AssociativeEither4SREC<T, S, R, E>,
  EA: Eq<Kind4<T, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind4<T, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly distributivity: () => void
}

export function testCovariantAssociativeEither<T extends HKT4, S, R, E, A, B>(
  IBC: Covariant4<T> & AssociativeEither4<T>,
  EA: Eq<Kind4<T, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind4<T, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly distributivity: () => void
}

export function testCovariantAssociativeEither<T extends HKT3, E, R, A, B>(
  IBC: Covariant3EC<T, E> & AssociativeEither3EC<T, E>,
  EA: Eq<Kind3<T, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind3<T, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind3<T, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly distributivity: () => void
}

export function testCovariantAssociativeEither<T extends HKT3, R, E, A, B>(
  IBC: Covariant3REC<T, R, E> & AssociativeEither3REC<T, R, E>,
  EA: Eq<Kind3<T, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind3<T, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind3<T, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly distributivity: () => void
}

export function testCovariantAssociativeEither<T extends HKT3, R, E, A, B>(
  IBC: Covariant3RC<T, R> & AssociativeEither3RC<T, R>,
  EA: Eq<Kind3<T, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind3<T, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind3<T, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly distributivity: () => void
}

export function testCovariantAssociativeEither<T extends HKT3, R, E, A, B>(
  IBC: Covariant3<T> & AssociativeEither3<T>,
  EA: Eq<Kind3<T, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind3<T, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind3<T, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly distributivity: () => void
}

export function testCovariantAssociativeEither<T extends HKT2, E, A, B>(
  IBC: Covariant2EC<T, E> & AssociativeEither2EC<T, E>,
  EA: Eq<Kind2<T, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind2<T, E, B>>,
): (A: Arbitrary.Arbitrary<Kind2<T, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly distributivity: () => void
}

export function testCovariantAssociativeEither<T extends HKT2, E, A, B>(
  IBC: Covariant2<T> & AssociativeEither2<T>,
  EA: Eq<Kind2<T, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind2<T, E, B>>,
): (A: Arbitrary.Arbitrary<Kind2<T, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly distributivity: () => void
}

export function testCovariantAssociativeEither<T extends HKT, A, B>(
  IBC: Covariant1<T> & AssociativeEither1<T>,
  EA: Eq<Kind<T, A>>,
  f: (a: A) => B,
  EB: Eq<Kind<T, B>>,
): (A: Arbitrary.Arbitrary<Kind<T, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly distributivity: () => void
}

export function testCovariantAssociativeEither<T extends HKT, A, B>(
  IBC: Covariant<T> & AssociativeEither<T>,
  EA: Eq<Kind<T, A>>,
  f: (a: A) => B,
  EB: Eq<Kind<T, B>>,
): (A: Arbitrary.Arbitrary<Kind<T, A>>) => (fc: typeof import('fast-check')) => {
  readonly associativity: () => void
  readonly distributivity: () => void
}

export function testCovariantAssociativeEither<T extends HKT, A, B>(
  AE: AssociativeEither<T> & Covariant<T>,
  EqA: Eq<Kind<T, A>>,
  f: (a: A) => B,
  EqB: Eq<Kind<T, B>>,
) {
  return (A: Arbitrary.Arbitrary<Kind<T, A>>) => (fc: typeof import('fast-check')) => ({
    associativity: () => testCovariantAssociativeEitherAssociativity(AE, EqA)(A).property(fc),
    distributivity: () => testCovariantAssociativeEitherDistributivity(AE, f, EqB)(A).property(fc),
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
      Arbitrary.toProperty(([a, b, c]) =>
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
      Arbitrary.toProperty(([a, b]) =>
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
