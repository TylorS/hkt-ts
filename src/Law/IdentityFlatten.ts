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
import * as AF from '../Typeclass/AssociativeFlatten.js'
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
} from '../Typeclass/Covariant.js'
import { DeepEquals, Eq } from '../Typeclass/Eq.js'
import {
  IdentityFlatten,
  IdentityFlatten1,
  IdentityFlatten10,
  IdentityFlatten2,
  IdentityFlatten2EC,
  IdentityFlatten3,
  IdentityFlatten3EC,
  IdentityFlatten3RC,
  IdentityFlatten3REC,
  IdentityFlatten4,
  IdentityFlatten4EC,
  IdentityFlatten4RC,
  IdentityFlatten4REC,
  IdentityFlatten4SC,
  IdentityFlatten4SEC,
  IdentityFlatten4SRC,
  IdentityFlatten4SREC,
  IdentityFlatten5,
  IdentityFlatten6,
  IdentityFlatten7,
  IdentityFlatten8,
  IdentityFlatten9,
} from '../Typeclass/IdentityFlatten.js'
import { makeFromValue } from '../Typeclass/Top.js'
import { pipe } from '../function.js'

import * as Arbitrary from './Arbitrary.js'

export function testCovariantIdentityFlatten<T extends HKT10, Z, Y, X, W, V, U, S, R, E, A, B, C>(
  AFC: Covariant10<T> & IdentityFlatten10<T>,
  f: (a: A) => Kind10<T, Z, Y, X, W, V, U, S, R, E, B>,
  E: Eq<Kind10<T, Z, Y, X, W, V, U, S, R, E, C>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
}

export function testCovariantIdentityFlatten<T extends HKT9, Y, X, W, V, U, S, R, E, A, B, C>(
  AFC: Covariant9<T> & IdentityFlatten9<T>,
  f: (a: A) => Kind9<T, Y, X, W, V, U, S, R, E, B>,
  E: Eq<Kind9<T, Y, X, W, V, U, S, R, E, C>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
}

export function testCovariantIdentityFlatten<T extends HKT8, X, W, V, U, S, R, E, A, B, C>(
  AFC: Covariant8<T> & IdentityFlatten8<T>,
  f: (a: A) => Kind8<T, X, W, V, U, S, R, E, B>,
  E: Eq<Kind8<T, X, W, V, U, S, R, E, C>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
}

export function testCovariantIdentityFlatten<T extends HKT7, W, V, U, S, R, E, A, B, C>(
  AFC: Covariant7<T> & IdentityFlatten7<T>,
  f: (a: A) => Kind7<T, W, V, U, S, R, E, B>,
  E: Eq<Kind7<T, W, V, U, S, R, E, C>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
}

export function testCovariantIdentityFlatten<T extends HKT6, V, U, S, R, E, A, B, C>(
  AFC: Covariant6<T> & IdentityFlatten6<T>,
  f: (a: A) => Kind6<T, V, U, S, R, E, B>,
  E: Eq<Kind6<T, V, U, S, R, E, C>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
}

export function testCovariantIdentityFlatten<T extends HKT5, U, S, R, E, A, B, C>(
  AFC: Covariant5<T> & IdentityFlatten5<T>,
  f: (a: A) => Kind5<T, U, S, R, E, B>,
  E: Eq<Kind5<T, U, S, R, E, C>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
}

export function testCovariantIdentityFlatten<T extends HKT4, E, S, R, A, B, C>(
  AFC: Covariant4EC<T, E> & IdentityFlatten4EC<T, E>,
  f: (a: A) => Kind4<T, S, R, E, B>,
  E: Eq<Kind4<T, S, R, E, C>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
}

export function testCovariantIdentityFlatten<T extends HKT4, R, E, S, A, B, C>(
  AFC: Covariant4REC<T, R, E> & IdentityFlatten4REC<T, R, E>,
  f: (a: A) => Kind4<T, S, R, E, B>,
  E: Eq<Kind4<T, S, R, E, C>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
}

export function testCovariantIdentityFlatten<T extends HKT4, S, E, R, A, B, C>(
  AFC: Covariant4SEC<T, S, E> & IdentityFlatten4SEC<T, S, E>,
  f: (a: A) => Kind4<T, S, R, E, B>,
  E: Eq<Kind4<T, S, R, E, C>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
}

export function testCovariantIdentityFlatten<T extends HKT4, R, S, E, A, B, C>(
  AFC: Covariant4RC<T, R> & IdentityFlatten4RC<T, R>,
  f: (a: A) => Kind4<T, S, R, E, B>,
  E: Eq<Kind4<T, S, R, E, C>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
}

export function testCovariantIdentityFlatten<T extends HKT4, S, R, E, A, B, C>(
  AFC: Covariant4SRC<T, S, R> & IdentityFlatten4SRC<T, S, R>,
  f: (a: A) => Kind4<T, S, R, E, B>,
  E: Eq<Kind4<T, S, R, E, C>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
}

export function testCovariantIdentityFlatten<T extends HKT4, S, R, E, A, B, C>(
  AFC: Covariant4SC<T, S> & IdentityFlatten4SC<T, S>,
  f: (a: A) => Kind4<T, S, R, E, B>,
  E: Eq<Kind4<T, S, R, E, C>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
}

export function testCovariantIdentityFlatten<T extends HKT4, S, R, E, A, B, C>(
  AFC: Covariant4SREC<T, S, R, E> & IdentityFlatten4SREC<T, S, R, E>,
  f: (a: A) => Kind4<T, S, R, E, B>,
  E: Eq<Kind4<T, S, R, E, C>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
}

export function testCovariantIdentityFlatten<T extends HKT4, S, R, E, A, B, C>(
  AFC: Covariant4<T> & IdentityFlatten4<T>,
  f: (a: A) => Kind4<T, S, R, E, B>,
  E: Eq<Kind4<T, S, R, E, C>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
}

export function testCovariantIdentityFlatten<T extends HKT3, E, R, A, B, C>(
  AFC: Covariant3EC<T, E> & IdentityFlatten3EC<T, E>,
  f: (a: A) => Kind3<T, R, E, B>,
  E: Eq<Kind3<T, R, E, C>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
}

export function testCovariantIdentityFlatten<T extends HKT3, R, E, A, B, C>(
  AFC: Covariant3REC<T, R, E> & IdentityFlatten3REC<T, R, E>,
  f: (a: A) => Kind3<T, R, E, B>,
  E: Eq<Kind3<T, R, E, C>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
}

export function testCovariantIdentityFlatten<T extends HKT3, R, E, A, B, C>(
  AFC: Covariant3RC<T, R> & IdentityFlatten3RC<T, R>,
  f: (a: A) => Kind3<T, R, E, B>,
  E: Eq<Kind3<T, R, E, C>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
}

export function testCovariantIdentityFlatten<T extends HKT3, R, E, A, B, C>(
  AFC: Covariant3<T> & IdentityFlatten3<T>,
  f: (a: A) => Kind3<T, R, E, B>,
  E: Eq<Kind3<T, R, E, C>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
}

export function testCovariantIdentityFlatten<T extends HKT2, E, A, B, C>(
  AFC: Covariant2EC<T, E> & IdentityFlatten2EC<T, E>,
  f: (a: A) => Kind2<T, E, B>,
  E: Eq<Kind2<T, E, C>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
}

export function testCovariantIdentityFlatten<T extends HKT2, E, A, B, C>(
  AFC: Covariant2<T> & IdentityFlatten2<T>,
  f: (a: A) => Kind2<T, E, B>,
  E: Eq<Kind2<T, E, C>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
}

export function testCovariantIdentityFlatten<T extends HKT, A, B, C>(
  AFC: Covariant1<T> & IdentityFlatten1<T>,
  f: (a: A) => Kind<T, B>,
  E: Eq<Kind<T, C>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
}

export function testCovariantIdentityFlatten<T extends HKT, A, B, C>(
  AFC: Covariant<T> & IdentityFlatten<T>,
  f: (a: A) => Kind<T, B>,
  E: Eq<Kind<T, C>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly leftIdentity: () => void
  readonly rightIdentity: () => void
}

export function testCovariantIdentityFlatten<T extends HKT, A, B>(
  IFC: IdentityFlatten<T> & Covariant<T>,
  f: (a: A) => Kind<T, B>,
  E: Eq<Kind<T, B>> = DeepEquals,
) {
  return (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => ({
    leftIdentity: () => testCovariantIdentityFlattenLeftIdentity(IFC, f, E)(A).property(fc),
    rightIdentity: () =>
      testCovariantIdentityFlattenRightIdentity(
        IFC,
        E,
      )(pipe(A, Arbitrary.map(makeFromValue(IFC)))).property(fc),
  })
}

function testCovariantIdentityFlattenLeftIdentity<T extends HKT, A, B>(
  IFC: IdentityFlatten<T> & Covariant<T>,
  f: (a: A) => Kind<T, B>,
  E: Eq<Kind<T, B>>,
) {
  const fromValue = makeFromValue(IFC)
  const flatMap = AF.flatMap(IFC)

  return (A: Arbitrary.Arbitrary<A>) =>
    pipe(
      A,
      Arbitrary.toProperty((a) => E.equals(pipe(fromValue(a), flatMap(f)), f(a))),
    )
}

function testCovariantIdentityFlattenRightIdentity<T extends HKT, A, B>(
  IFC: IdentityFlatten<T> & Covariant<T>,
  E: Eq<Kind<T, B>>,
) {
  const flatMap = AF.flatMap(IFC)

  return (A: Arbitrary.Arbitrary<Kind<T, A>>) =>
    pipe(
      A,
      Arbitrary.toProperty((kind) => E.equals(pipe(kind, flatMap(makeFromValue(IFC))), kind)),
    )
}
