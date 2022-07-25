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
import { flow, pipe } from '../function.js'

import * as Arbitrary from './Arbitrary.js'

export function testCovariant<T extends HKT10, A, B, C, Z, Y, X, W, V, U, S, R, E>(
  C: Covariant10<T>,
  f: (a: A) => B,
  g: (b: B) => C,
  Eq?: Eq<Kind10<T, Z, Y, X, W, V, U, S, R, E, C>>,
): (Arb: Arbitrary.Arbitrary<Kind10<T, Z, Y, X, W, V, U, S, R, E, A>>) => (
  fc: typeof import('fast-check'),
) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testCovariant<T extends HKT9, A, B, C, Y, X, W, V, U, S, R, E>(
  C: Covariant9<T>,
  f: (a: A) => B,
  g: (b: B) => C,
  Eq?: Eq<Kind9<T, Y, X, W, V, U, S, R, E, C>>,
): (Arb: Arbitrary.Arbitrary<Kind9<T, Y, X, W, V, U, S, R, E, A>>) => (
  fc: typeof import('fast-check'),
) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testCovariant<T extends HKT8, A, B, C, X, W, V, U, S, R, E>(
  C: Covariant8<T>,
  f: (a: A) => B,
  g: (b: B) => C,
  Eq?: Eq<Kind8<T, X, W, V, U, S, R, E, C>>,
): (Arb: Arbitrary.Arbitrary<Kind8<T, X, W, V, U, S, R, E, A>>) => (
  fc: typeof import('fast-check'),
) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testCovariant<T extends HKT7, A, B, C, W, V, U, S, R, E>(
  C: Covariant7<T>,
  f: (a: A) => B,
  g: (b: B) => C,
  Eq?: Eq<Kind7<T, W, V, U, S, R, E, C>>,
): (Arb: Arbitrary.Arbitrary<Kind7<T, W, V, U, S, R, E, A>>) => (
  fc: typeof import('fast-check'),
) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testCovariant<T extends HKT6, A, B, C, V, U, S, R, E>(
  C: Covariant6<T>,
  f: (a: A) => B,
  g: (b: B) => C,
  Eq?: Eq<Kind6<T, V, U, S, R, E, C>>,
): (Arb: Arbitrary.Arbitrary<Kind6<T, V, U, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testCovariant<T extends HKT5, A, B, C, U, S, R, E>(
  C: Covariant5<T>,
  f: (a: A) => B,
  g: (b: B) => C,
  Eq?: Eq<Kind5<T, U, S, R, E, C>>,
): (Arb: Arbitrary.Arbitrary<Kind5<T, U, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testCovariant<T extends HKT4, E, A, B, C, S, R>(
  C: Covariant4EC<T, E>,
  f: (a: A) => B,
  g: (b: B) => C,
  Eq?: Eq<Kind4<T, S, R, E, C>>,
): (Arb: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testCovariant<T extends HKT4, R, E, A, B, C, S>(
  C: Covariant4REC<T, R, E>,
  f: (a: A) => B,
  g: (b: B) => C,
  Eq?: Eq<Kind4<T, S, R, E, C>>,
): (Arb: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testCovariant<T extends HKT4, S, E, A, B, C, R>(
  C: Covariant4SEC<T, S, E>,
  f: (a: A) => B,
  g: (b: B) => C,
  Eq?: Eq<Kind4<T, S, R, E, C>>,
): (Arb: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testCovariant<T extends HKT4, R, A, B, C, S, E>(
  C: Covariant4RC<T, R>,
  f: (a: A) => B,
  g: (b: B) => C,
  Eq?: Eq<Kind4<T, S, R, E, C>>,
): (Arb: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testCovariant<T extends HKT4, S, R, A, B, C, E>(
  C: Covariant4SRC<T, S, R>,
  f: (a: A) => B,
  g: (b: B) => C,
  Eq?: Eq<Kind4<T, S, R, E, C>>,
): (Arb: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testCovariant<T extends HKT4, S, A, B, C, R, E>(
  C: Covariant4SC<T, S>,
  f: (a: A) => B,
  g: (b: B) => C,
  Eq?: Eq<Kind4<T, S, R, E, C>>,
): (Arb: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testCovariant<T extends HKT4, S, R, E, A, B, C>(
  C: Covariant4SREC<T, S, R, E>,
  f: (a: A) => B,
  g: (b: B) => C,
  Eq?: Eq<Kind4<T, S, R, E, C>>,
): (Arb: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testCovariant<T extends HKT4, A, B, C, S, R, E>(
  C: Covariant4<T>,
  f: (a: A) => B,
  g: (b: B) => C,
  Eq?: Eq<Kind4<T, S, R, E, C>>,
): (Arb: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testCovariant<T extends HKT3, E, A, B, C, R>(
  C: Covariant3EC<T, E>,
  f: (a: A) => B,
  g: (b: B) => C,
  Eq?: Eq<Kind3<T, R, E, C>>,
): (Arb: Arbitrary.Arbitrary<Kind3<T, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testCovariant<T extends HKT3, R, E, A, B, C>(
  C: Covariant3REC<T, R, E>,
  f: (a: A) => B,
  g: (b: B) => C,
  Eq?: Eq<Kind3<T, R, E, C>>,
): (Arb: Arbitrary.Arbitrary<Kind3<T, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testCovariant<T extends HKT3, R, A, B, C, E>(
  C: Covariant3RC<T, R>,
  f: (a: A) => B,
  g: (b: B) => C,
  Eq?: Eq<Kind3<T, R, E, C>>,
): (Arb: Arbitrary.Arbitrary<Kind3<T, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testCovariant<T extends HKT3, A, B, C, R, E>(
  C: Covariant3<T>,
  f: (a: A) => B,
  g: (b: B) => C,
  Eq?: Eq<Kind3<T, R, E, C>>,
): (Arb: Arbitrary.Arbitrary<Kind3<T, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testCovariant<T extends HKT2, E, A, B, C>(
  C: Covariant2EC<T, E>,
  f: (a: A) => B,
  g: (b: B) => C,
  Eq?: Eq<Kind2<T, E, C>>,
): (Arb: Arbitrary.Arbitrary<Kind2<T, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testCovariant<T extends HKT2, A, B, C, E>(
  C: Covariant2<T>,
  f: (a: A) => B,
  g: (b: B) => C,
  Eq?: Eq<Kind2<T, E, C>>,
): (Arb: Arbitrary.Arbitrary<Kind2<T, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testCovariant<T extends HKT, A, B, C>(
  C: Covariant1<T>,
  f: (a: A) => B,
  g: (b: B) => C,
  Eq?: Eq<Kind<T, C>>,
): (Arb: Arbitrary.Arbitrary<Kind<T, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testCovariant<T extends HKT, A, B, C>(
  C: Covariant<T>,
  f: (a: A) => B,
  g: (b: B) => C,
  Eq?: Eq<Kind<T, C>>,
): (Arb: Arbitrary.Arbitrary<Kind<T, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testCovariant<T extends HKT, A, B, C>(
  C: Covariant<T>,
  f: (a: A) => B,
  g: (c: B) => C,
  Eq: Eq<Kind<T, C>> = DeepEquals,
) {
  return (Arb: Arbitrary.Arbitrary<Kind<T, A>>) => (fc: typeof import('fast-check')) => ({
    identity: () =>
      testCovariantIdentity(C, Eq)(pipe(Arb, Arbitrary.map(C.map(flow(f, g))))).property(fc),
    associativity: () => testCovariantAssociativity(C, f, g, Eq)(Arb).property(fc),
  })
}
export const testCovariantIdentity = <T extends HKT, A>(
  C: Covariant<T>,
  Eq: Eq<Kind<T, A>> = DeepEquals,
) => {
  return (Arb: Arbitrary.Arbitrary<Kind<T, A>>) =>
    pipe(
      Arb,
      Arbitrary.toProperty((kind) =>
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
      Arbitrary.toProperty((kind) =>
        Eq.equals(pipe(kind, C.map(f), C.map(g)), pipe(kind, C.map(flow(f, g)))),
      ),
    )
}
