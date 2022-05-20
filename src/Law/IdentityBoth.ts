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
  IdentityBoth,
  IdentityBoth1,
  IdentityBoth10,
  IdentityBoth2,
  IdentityBoth2EC,
  IdentityBoth3,
  IdentityBoth3EC,
  IdentityBoth3RC,
  IdentityBoth3REC,
  IdentityBoth4,
  IdentityBoth4EC,
  IdentityBoth4RC,
  IdentityBoth4REC,
  IdentityBoth4SC,
  IdentityBoth4SEC,
  IdentityBoth4SRC,
  IdentityBoth4SREC,
  IdentityBoth5,
  IdentityBoth6,
  IdentityBoth7,
  IdentityBoth8,
  IdentityBoth9,
} from '../Typeclass/IdentityBoth'
import { makeFromValue } from '../Typeclass/Top'
import { pipe } from '../function'

import * as Arbitrary from './Arbitrary'

export function testCovariantIdentityBoth<T extends HKT10, Z, Y, X, W, V, U, S, R, E, A, B>(
  IBC: Covariant10<T> & IdentityBoth10<T>,
  EA: Eq<Kind10<T, Z, Y, X, W, V, U, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind10<T, Z, Y, X, W, V, U, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly homomorphism: () => void
  readonly interchange: () => void
}

export function testCovariantIdentityBoth<T extends HKT9, Y, X, W, V, U, S, R, E, A, B>(
  IBC: Covariant9<T> & IdentityBoth9<T>,
  EA: Eq<Kind9<T, Y, X, W, V, U, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind9<T, Y, X, W, V, U, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly homomorphism: () => void
  readonly interchange: () => void
}

export function testCovariantIdentityBoth<T extends HKT8, X, W, V, U, S, R, E, A, B>(
  IBC: Covariant8<T> & IdentityBoth8<T>,
  EA: Eq<Kind8<T, X, W, V, U, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind8<T, X, W, V, U, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly homomorphism: () => void
  readonly interchange: () => void
}

export function testCovariantIdentityBoth<T extends HKT7, W, V, U, S, R, E, A, B>(
  IBC: Covariant7<T> & IdentityBoth7<T>,
  EA: Eq<Kind7<T, W, V, U, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind7<T, W, V, U, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly homomorphism: () => void
  readonly interchange: () => void
}

export function testCovariantIdentityBoth<T extends HKT6, V, U, S, R, E, A, B>(
  IBC: Covariant6<T> & IdentityBoth6<T>,
  EA: Eq<Kind6<T, V, U, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind6<T, V, U, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly homomorphism: () => void
  readonly interchange: () => void
}

export function testCovariantIdentityBoth<T extends HKT5, U, S, R, E, A, B>(
  IBC: Covariant5<T> & IdentityBoth5<T>,
  EA: Eq<Kind5<T, U, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind5<T, U, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly homomorphism: () => void
  readonly interchange: () => void
}

export function testCovariantIdentityBoth<T extends HKT4, E, S, R, A, B>(
  IBC: Covariant4EC<T, E> & IdentityBoth4EC<T, E>,
  EA: Eq<Kind4<T, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind4<T, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly homomorphism: () => void
  readonly interchange: () => void
}

export function testCovariantIdentityBoth<T extends HKT4, R, E, S, A, B>(
  IBC: Covariant4REC<T, R, E> & IdentityBoth4REC<T, R, E>,
  EA: Eq<Kind4<T, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind4<T, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly homomorphism: () => void
  readonly interchange: () => void
}

export function testCovariantIdentityBoth<T extends HKT4, S, E, R, A, B>(
  IBC: Covariant4SEC<T, S, E> & IdentityBoth4SEC<T, S, E>,
  EA: Eq<Kind4<T, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind4<T, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly homomorphism: () => void
  readonly interchange: () => void
}

export function testCovariantIdentityBoth<T extends HKT4, R, S, E, A, B>(
  IBC: Covariant4RC<T, R> & IdentityBoth4RC<T, R>,
  EA: Eq<Kind4<T, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind4<T, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly homomorphism: () => void
  readonly interchange: () => void
}

export function testCovariantIdentityBoth<T extends HKT4, S, R, E, A, B>(
  IBC: Covariant4SRC<T, S, R> & IdentityBoth4SRC<T, S, R>,
  EA: Eq<Kind4<T, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind4<T, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly homomorphism: () => void
  readonly interchange: () => void
}

export function testCovariantIdentityBoth<T extends HKT4, S, R, E, A, B>(
  IBC: Covariant4SC<T, S> & IdentityBoth4SC<T, S>,
  EA: Eq<Kind4<T, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind4<T, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly homomorphism: () => void
  readonly interchange: () => void
}

export function testCovariantIdentityBoth<T extends HKT4, S, R, E, A, B>(
  IBC: Covariant4SREC<T, S, R, E> & IdentityBoth4SREC<T, S, R, E>,
  EA: Eq<Kind4<T, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind4<T, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly homomorphism: () => void
  readonly interchange: () => void
}

export function testCovariantIdentityBoth<T extends HKT4, S, R, E, A, B>(
  IBC: Covariant4<T> & IdentityBoth4<T>,
  EA: Eq<Kind4<T, S, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind4<T, S, R, E, B>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly homomorphism: () => void
  readonly interchange: () => void
}

export function testCovariantIdentityBoth<T extends HKT3, E, R, A, B>(
  IBC: Covariant3EC<T, E> & IdentityBoth3EC<T, E>,
  EA: Eq<Kind3<T, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind3<T, R, E, B>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly homomorphism: () => void
  readonly interchange: () => void
}

export function testCovariantIdentityBoth<T extends HKT3, R, E, A, B>(
  IBC: Covariant3REC<T, R, E> & IdentityBoth3REC<T, R, E>,
  EA: Eq<Kind3<T, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind3<T, R, E, B>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly homomorphism: () => void
  readonly interchange: () => void
}

export function testCovariantIdentityBoth<T extends HKT3, R, E, A, B>(
  IBC: Covariant3RC<T, R> & IdentityBoth3RC<T, R>,
  EA: Eq<Kind3<T, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind3<T, R, E, B>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly homomorphism: () => void
  readonly interchange: () => void
}

export function testCovariantIdentityBoth<T extends HKT3, R, E, A, B>(
  IBC: Covariant3<T> & IdentityBoth3<T>,
  EA: Eq<Kind3<T, R, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind3<T, R, E, B>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly homomorphism: () => void
  readonly interchange: () => void
}

export function testCovariantIdentityBoth<T extends HKT2, E, A, B>(
  IBC: Covariant2EC<T, E> & IdentityBoth2EC<T, E>,
  EA: Eq<Kind2<T, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind2<T, E, B>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly homomorphism: () => void
  readonly interchange: () => void
}

export function testCovariantIdentityBoth<T extends HKT2, E, A, B>(
  IBC: Covariant2<T> & IdentityBoth2<T>,
  EA: Eq<Kind2<T, E, A>>,
  f: (a: A) => B,
  EB: Eq<Kind2<T, E, B>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly homomorphism: () => void
  readonly interchange: () => void
}

export function testCovariantIdentityBoth<T extends HKT, A, B>(
  IBC: Covariant1<T> & IdentityBoth1<T>,
  EA: Eq<Kind<T, A>>,
  f: (a: A) => B,
  EB: Eq<Kind<T, B>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly homomorphism: () => void
  readonly interchange: () => void
}

export function testCovariantIdentityBoth<T extends HKT, A, B>(
  IBC: Covariant<T> & IdentityBoth<T>,
  EA: Eq<Kind<T, A>>,
  f: (a: A) => B,
  EB: Eq<Kind<T, B>>,
): (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly homomorphism: () => void
  readonly interchange: () => void
}

export function testCovariantIdentityBoth<T extends HKT, A, B>(
  IBC: IdentityBoth<T> & Covariant<T>,
  EA: Eq<Kind<T, A>>,
  f: (a: A) => B,
  EB: Eq<Kind<T, B>>,
) {
  const fromValue = makeFromValue(IBC)

  return (A: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
    return {
      identity: () =>
        testCovariantIdentityBothIdentity(IBC, EA)(pipe(A, Arbitrary.map(fromValue)))(fc),
      homomorphism: () => testCovariantIdentityBothHomomorphism(IBC, f, EB)(A)(fc),
      interchange: () => testCovariantIdentityBothInterchange(IBC, f, EB)(A)(fc),
    } as const
  }
}

function testCovariantIdentityBothIdentity<T extends HKT, A>(
  IBC: IdentityBoth<T> & Covariant<T>,
  E: Eq<Kind<T, A>>,
) {
  return (A: Arbitrary.Arbitrary<Kind<T, A>>) =>
    pipe(
      A,
      Arbitrary.assert((a) =>
        E.equals(
          a,
          pipe(
            a,
            IBC.both(makeFromValue(IBC)((a: A) => a)),
            IBC.map(([a, f]) => f(a)),
          ),
        ),
      ),
    )
}

function testCovariantIdentityBothHomomorphism<T extends HKT, A, B>(
  IBC: IdentityBoth<T> & Covariant<T>,
  f: (a: A) => B,
  E: Eq<Kind<T, B>>,
) {
  const fromValue = makeFromValue(IBC)

  return (A: Arbitrary.Arbitrary<A>) =>
    pipe(
      A,
      Arbitrary.assert((a) =>
        E.equals(
          fromValue(f(a)),
          pipe(
            fromValue(a),
            IBC.both(fromValue(f)),
            IBC.map(([a, f]) => f(a)),
          ),
        ),
      ),
    )
}

function testCovariantIdentityBothInterchange<T extends HKT, A, B>(
  IBC: IdentityBoth<T> & Covariant<T>,
  f: (a: A) => B,
  E: Eq<Kind<T, B>>,
) {
  const fromValue = makeFromValue(IBC)

  return (A: Arbitrary.Arbitrary<A>) =>
    pipe(
      A,
      Arbitrary.assert((a) =>
        E.equals(
          pipe(
            fromValue(f),
            IBC.both(fromValue(a)),
            IBC.map(([f, a]) => f(a)),
          ),
          pipe(
            fromValue(a),
            IBC.both(fromValue(f)),
            IBC.map(([a, f]) => f(a)),
          ),
        ),
      ),
    )
}
