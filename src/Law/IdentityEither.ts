import assert from 'assert'

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
import { orElse } from '../Typeclass/AssociativeEither'
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
import {
  IdentityEither,
  IdentityEither1,
  IdentityEither10,
  IdentityEither2,
  IdentityEither2EC,
  IdentityEither3,
  IdentityEither3EC,
  IdentityEither3RC,
  IdentityEither3REC,
  IdentityEither4,
  IdentityEither4EC,
  IdentityEither4RC,
  IdentityEither4REC,
  IdentityEither4SC,
  IdentityEither4SEC,
  IdentityEither4SRC,
  IdentityEither4SREC,
  IdentityEither5,
  IdentityEither6,
  IdentityEither7,
  IdentityEither8,
  IdentityEither9,
} from '../Typeclass/IdentityEither'
import { pipe } from '../function'

import * as Arbitrary from './Arbitrary'
export function testCovariantIdentityEither<T extends HKT10, Z, Y, X, W, V, U, S, R, E, A, B>(
  IBC: Covariant10<T> & IdentityEither10<T>,
  EA: Eq<Kind10<T, Z, Y, X, W, V, U, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind10<T, Z, Y, X, W, V, U, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind10<T, Z, Y, X, W, V, U, S, R, E, A>>) => (
  fc: typeof import('fast-check'),
) => {
  readonly distributivity: () => void
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
  readonly annihilation: () => void
}

export function testCovariantIdentityEither<T extends HKT9, Y, X, W, V, U, S, R, E, A, B>(
  IBC: Covariant9<T> & IdentityEither9<T>,
  EA: Eq<Kind9<T, Y, X, W, V, U, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind9<T, Y, X, W, V, U, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind9<T, Y, X, W, V, U, S, R, E, A>>) => (
  fc: typeof import('fast-check'),
) => {
  readonly distributivity: () => void
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
  readonly annihilation: () => void
}

export function testCovariantIdentityEither<T extends HKT8, X, W, V, U, S, R, E, A, B>(
  IBC: Covariant8<T> & IdentityEither8<T>,
  EA: Eq<Kind8<T, X, W, V, U, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind8<T, X, W, V, U, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind8<T, X, W, V, U, S, R, E, A>>) => (
  fc: typeof import('fast-check'),
) => {
  readonly distributivity: () => void
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
  readonly annihilation: () => void
}

export function testCovariantIdentityEither<T extends HKT7, W, V, U, S, R, E, A, B>(
  IBC: Covariant7<T> & IdentityEither7<T>,
  EA: Eq<Kind7<T, W, V, U, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind7<T, W, V, U, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind7<T, W, V, U, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly distributivity: () => void
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
  readonly annihilation: () => void
}

export function testCovariantIdentityEither<T extends HKT6, V, U, S, R, E, A, B>(
  IBC: Covariant6<T> & IdentityEither6<T>,
  EA: Eq<Kind6<T, V, U, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind6<T, V, U, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind6<T, V, U, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly distributivity: () => void
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
  readonly annihilation: () => void
}

export function testCovariantIdentityEither<T extends HKT5, U, S, R, E, A, B>(
  IBC: Covariant5<T> & IdentityEither5<T>,
  EA: Eq<Kind5<T, U, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind5<T, U, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind5<T, U, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly distributivity: () => void
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
  readonly annihilation: () => void
}

export function testCovariantIdentityEither<T extends HKT4, E, S, R, A, B>(
  IBC: Covariant4EC<T, E> & IdentityEither4EC<T, E>,
  EA: Eq<Kind4<T, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind4<T, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly distributivity: () => void
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
  readonly annihilation: () => void
}

export function testCovariantIdentityEither<T extends HKT4, R, E, S, A, B>(
  IBC: Covariant4REC<T, R, E> & IdentityEither4REC<T, R, E>,
  EA: Eq<Kind4<T, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind4<T, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly distributivity: () => void
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
  readonly annihilation: () => void
}

export function testCovariantIdentityEither<T extends HKT4, S, E, R, A, B>(
  IBC: Covariant4SEC<T, S, E> & IdentityEither4SEC<T, S, E>,
  EA: Eq<Kind4<T, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind4<T, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly distributivity: () => void
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
  readonly annihilation: () => void
}

export function testCovariantIdentityEither<T extends HKT4, R, S, E, A, B>(
  IBC: Covariant4RC<T, R> & IdentityEither4RC<T, R>,
  EA: Eq<Kind4<T, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind4<T, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly distributivity: () => void
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
  readonly annihilation: () => void
}

export function testCovariantIdentityEither<T extends HKT4, S, R, E, A, B>(
  IBC: Covariant4SRC<T, S, R> & IdentityEither4SRC<T, S, R>,
  EA: Eq<Kind4<T, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind4<T, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly distributivity: () => void
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
  readonly annihilation: () => void
}

export function testCovariantIdentityEither<T extends HKT4, S, R, E, A, B>(
  IBC: Covariant4SC<T, S> & IdentityEither4SC<T, S>,
  EA: Eq<Kind4<T, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind4<T, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly distributivity: () => void
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
  readonly annihilation: () => void
}

export function testCovariantIdentityEither<T extends HKT4, S, R, E, A, B>(
  IBC: Covariant4SREC<T, S, R, E> & IdentityEither4SREC<T, S, R, E>,
  EA: Eq<Kind4<T, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind4<T, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly distributivity: () => void
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
  readonly annihilation: () => void
}

export function testCovariantIdentityEither<T extends HKT4, S, R, E, A, B>(
  IBC: Covariant4<T> & IdentityEither4<T>,
  EA: Eq<Kind4<T, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind4<T, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly distributivity: () => void
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
  readonly annihilation: () => void
}

export function testCovariantIdentityEither<T extends HKT3, E, R, A, B>(
  IBC: Covariant3EC<T, E> & IdentityEither3EC<T, E>,
  EA: Eq<Kind3<T, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind3<T, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind3<T, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly distributivity: () => void
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
  readonly annihilation: () => void
}

export function testCovariantIdentityEither<T extends HKT3, R, E, A, B>(
  IBC: Covariant3REC<T, R, E> & IdentityEither3REC<T, R, E>,
  EA: Eq<Kind3<T, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind3<T, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind3<T, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly distributivity: () => void
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
  readonly annihilation: () => void
}

export function testCovariantIdentityEither<T extends HKT3, R, E, A, B>(
  IBC: Covariant3RC<T, R> & IdentityEither3RC<T, R>,
  EA: Eq<Kind3<T, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind3<T, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind3<T, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly distributivity: () => void
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
  readonly annihilation: () => void
}

export function testCovariantIdentityEither<T extends HKT3, R, E, A, B>(
  IBC: Covariant3<T> & IdentityEither3<T>,
  EA: Eq<Kind3<T, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind3<T, R, E, B>>,
): (A: Arbitrary.Arbitrary<Kind3<T, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly distributivity: () => void
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
  readonly annihilation: () => void
}

export function testCovariantIdentityEither<T extends HKT2, E, A, B>(
  IBC: Covariant2EC<T, E> & IdentityEither2EC<T, E>,
  EA: Eq<Kind2<T, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind2<T, E, B>>,
): (A: Arbitrary.Arbitrary<Kind2<T, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly distributivity: () => void
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
  readonly annihilation: () => void
}

export function testCovariantIdentityEither<T extends HKT2, E, A, B>(
  IBC: Covariant2<T> & IdentityEither2<T>,
  EA: Eq<Kind2<T, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind2<T, E, B>>,
): (A: Arbitrary.Arbitrary<Kind2<T, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly distributivity: () => void
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
  readonly annihilation: () => void
}

export function testCovariantIdentityEither<T extends HKT, A, B>(
  IBC: Covariant1<T> & IdentityEither1<T>,
  EA: Eq<Kind<T, A>>,
  f: (a: A) => B,
  EB: Eq<Kind<T, B>>,
): (A: Arbitrary.Arbitrary<Kind<T, A>>) => (fc: typeof import('fast-check')) => {
  readonly distributivity: () => void
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
  readonly annihilation: () => void
}

export function testCovariantIdentityEither<T extends HKT, A, B>(
  IBC: Covariant<T> & IdentityEither<T>,
  EA: Eq<Kind<T, A>>,
  f: (a: A) => B,
  EB: Eq<Kind<T, B>>,
): (A: Arbitrary.Arbitrary<Kind<T, A>>) => (fc: typeof import('fast-check')) => {
  readonly distributivity: () => void
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
  readonly annihilation: () => void
}

export function testCovariantIdentityEither<T extends HKT, A, B>(
  IEC: IdentityEither<T> & Covariant<T>,
  EqA: Eq<Kind<T, A>>,
  f: (a: A) => B,
  EqB: Eq<Kind<T, B>>,
) {
  return (A: Arbitrary.Arbitrary<Kind<T, A>>) => (fc: typeof import('fast-check')) => ({
    distributivity: () => testCovariantIdentityEitherDistributivity(IEC, f, EqB)(A)(fc),
    leftIdentity: () => testCovariantIdentityEitherLeftIdentity(IEC, EqA)(A)(fc),
    rightIdentity: () => testCovariantIdentityEitherRightIdentity(IEC, EqA)(A)(fc),
    annihilation: () => testCovariantIdentityEitherAnnihilation(IEC, EqA)(),
  })
}

function testCovariantIdentityEitherDistributivity<T extends HKT, A, B>(
  IEC: IdentityEither<T> & Covariant<T>,
  f: (a: A) => B,
  EqB: Eq<Kind<T, B>>,
) {
  const orElse_ = orElse(IEC)

  return (A: Arbitrary.Arbitrary<Kind<T, A>>) =>
    pipe(
      Arbitrary.tuple(A, A),
      Arbitrary.assert(([a, b]) =>
        EqB.equals(
          pipe(
            a,
            orElse_(() => b),
            IEC.map(f),
          ),
          pipe(
            a,
            IEC.map(f),
            orElse_(() => pipe(b, IEC.map(f))),
          ),
        ),
      ),
    )
}

function testCovariantIdentityEitherLeftIdentity<T extends HKT, A>(
  IEC: IdentityEither<T> & Covariant<T>,
  E: Eq<Kind<T, A>>,
) {
  const orElse_ = orElse(IEC)

  return (A: Arbitrary.Arbitrary<Kind<T, A>>) =>
    pipe(
      A,
      Arbitrary.assert((kind) =>
        E.equals(
          kind,
          pipe(
            kind,
            orElse_(() => IEC.bottom),
          ),
        ),
      ),
    )
}

function testCovariantIdentityEitherRightIdentity<T extends HKT, A>(
  IEC: IdentityEither<T> & Covariant<T>,
  E: Eq<Kind<T, A>>,
) {
  const orElse_ = orElse(IEC)

  return (A: Arbitrary.Arbitrary<Kind<T, A>>) =>
    pipe(
      A,
      Arbitrary.assert((kind) =>
        E.equals(
          kind,
          pipe(
            IEC.bottom,
            orElse_(() => kind),
          ),
        ),
      ),
    )
}

function testCovariantIdentityEitherAnnihilation<T extends HKT, A>(
  IEC: IdentityEither<T> & Covariant<T>,
  E: Eq<Kind<T, A>>,
) {
  return () =>
    assert(
      E.equals(
        IEC.bottom,
        pipe(
          IEC.bottom,
          IEC.map(() => 1),
        ),
      ),
    )
}
