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
  Contravariant,
  Contravariant1,
  Contravariant10,
  Contravariant2,
  Contravariant2EC,
  Contravariant3,
  Contravariant3EC,
  Contravariant3RC,
  Contravariant3REC,
  Contravariant4,
  Contravariant4EC,
  Contravariant4RC,
  Contravariant4REC,
  Contravariant4SC,
  Contravariant4SEC,
  Contravariant4SRC,
  Contravariant4SREC,
  Contravariant5,
  Contravariant6,
  Contravariant7,
  Contravariant8,
  Contravariant9,
} from '../Typeclass/Contravariant'
import { DeepEquals, Eq } from '../Typeclass/Eq'
import { identity, pipe } from '../function'

import * as Arbitrary from './Arbitrary'
export function testContravariant<T extends HKT10>(): <A, B, C, Z, Y, X, W, V, U, S, R, E, D>(
  C: Contravariant10<T>,
  f: (a: A) => B,
  g: (b: B) => C,
  kindA: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
  kindC: Kind10<T, Z, Y, X, W, V, U, S, R, E, C>,
  run: <A>(kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>, a: A, b: A, c: A) => D,
  Eq?: Eq<D>,
) => (AA: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testContravariant<T extends HKT9>(): <A, B, C, Y, X, W, V, U, S, R, E, D>(
  C: Contravariant9<T>,
  f: (a: A) => B,
  g: (b: B) => C,
  kindA: Kind9<T, Y, X, W, V, U, S, R, E, A>,
  kindC: Kind9<T, Y, X, W, V, U, S, R, E, C>,
  run: <A>(kind: Kind9<T, Y, X, W, V, U, S, R, E, A>, a: A, b: A, c: A) => D,
  Eq?: Eq<D>,
) => (AA: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testContravariant<T extends HKT8>(): <A, B, C, X, W, V, U, S, R, E, D>(
  C: Contravariant8<T>,
  f: (a: A) => B,
  g: (b: B) => C,
  kindA: Kind8<T, X, W, V, U, S, R, E, A>,
  kindC: Kind8<T, X, W, V, U, S, R, E, C>,
  run: <A>(kind: Kind8<T, X, W, V, U, S, R, E, A>, a: A, b: A, c: A) => D,
  Eq?: Eq<D>,
) => (AA: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testContravariant<T extends HKT7>(): <A, B, C, W, V, U, S, R, E, D>(
  C: Contravariant7<T>,
  f: (a: A) => B,
  g: (b: B) => C,
  kindA: Kind7<T, W, V, U, S, R, E, A>,
  kindC: Kind7<T, W, V, U, S, R, E, C>,
  run: <A>(kind: Kind7<T, W, V, U, S, R, E, A>, a: A, b: A, c: A) => D,
  Eq?: Eq<D>,
) => (AA: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testContravariant<T extends HKT6>(): <A, B, C, V, U, S, R, E, D>(
  C: Contravariant6<T>,
  f: (a: A) => B,
  g: (b: B) => C,
  kindA: Kind6<T, V, U, S, R, E, A>,
  kindC: Kind6<T, V, U, S, R, E, C>,
  run: <A>(kind: Kind6<T, V, U, S, R, E, A>, a: A, b: A, c: A) => D,
  Eq?: Eq<D>,
) => (AA: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testContravariant<T extends HKT5>(): <A, B, C, U, S, R, E, D>(
  C: Contravariant5<T>,
  f: (a: A) => B,
  g: (b: B) => C,
  kindA: Kind5<T, U, S, R, E, A>,
  kindC: Kind5<T, U, S, R, E, C>,
  run: <A>(kind: Kind5<T, U, S, R, E, A>, a: A, b: A, c: A) => D,
  Eq?: Eq<D>,
) => (AA: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testContravariant<T extends HKT4>(): <E, A, B, C, S, R, D>(
  C: Contravariant4EC<T, E>,
  f: (a: A) => B,
  g: (b: B) => C,
  kindA: Kind4<T, S, R, E, A>,
  kindC: Kind4<T, S, R, E, C>,
  run: <A>(kind: Kind4<T, S, R, E, A>, a: A, b: A, c: A) => D,
  Eq?: Eq<D>,
) => (AA: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testContravariant<T extends HKT4>(): <R, E, A, B, C, S, D>(
  C: Contravariant4REC<T, R, E>,
  f: (a: A) => B,
  g: (b: B) => C,
  kindA: Kind4<T, S, R, E, A>,
  kindC: Kind4<T, S, R, E, C>,
  run: <A>(kind: Kind4<T, S, R, E, A>, a: A, b: A, c: A) => D,
  Eq?: Eq<D>,
) => (AA: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testContravariant<T extends HKT4>(): <S, E, A, B, C, R, D>(
  C: Contravariant4SEC<T, S, E>,
  f: (a: A) => B,
  g: (b: B) => C,
  kindA: Kind4<T, S, R, E, A>,
  kindC: Kind4<T, S, R, E, C>,
  run: <A>(kind: Kind4<T, S, R, E, A>, a: A, b: A, c: A) => D,
  Eq?: Eq<D>,
) => (AA: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testContravariant<T extends HKT4>(): <R, A, B, C, S, E, D>(
  C: Contravariant4RC<T, R>,
  f: (a: A) => B,
  g: (b: B) => C,
  kindA: Kind4<T, S, R, E, A>,
  kindC: Kind4<T, S, R, E, C>,
  run: <A>(kind: Kind4<T, S, R, E, A>, a: A, b: A, c: A) => D,
  Eq?: Eq<D>,
) => (AA: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testContravariant<T extends HKT4>(): <S, R, A, B, C, E, D>(
  C: Contravariant4SRC<T, S, R>,
  f: (a: A) => B,
  g: (b: B) => C,
  kindA: Kind4<T, S, R, E, A>,
  kindC: Kind4<T, S, R, E, C>,
  run: <A>(kind: Kind4<T, S, R, E, A>, a: A, b: A, c: A) => D,
  Eq?: Eq<D>,
) => (AA: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testContravariant<T extends HKT4>(): <S, A, B, C, R, E, D>(
  C: Contravariant4SC<T, S>,
  f: (a: A) => B,
  g: (b: B) => C,
  kindA: Kind4<T, S, R, E, A>,
  kindC: Kind4<T, S, R, E, C>,
  run: <A>(kind: Kind4<T, S, R, E, A>, a: A, b: A, c: A) => D,
  Eq?: Eq<D>,
) => (AA: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testContravariant<T extends HKT4>(): <S, R, E, A, B, C, D>(
  C: Contravariant4SREC<T, S, R, E>,
  f: (a: A) => B,
  g: (b: B) => C,
  kindA: Kind4<T, S, R, E, A>,
  kindC: Kind4<T, S, R, E, C>,
  run: <A>(kind: Kind4<T, S, R, E, A>, a: A, b: A, c: A) => D,
  Eq?: Eq<D>,
) => (AA: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testContravariant<T extends HKT4>(): <A, B, C, S, R, E, D>(
  C: Contravariant4<T>,
  f: (a: A) => B,
  g: (b: B) => C,
  kindA: Kind4<T, S, R, E, A>,
  kindC: Kind4<T, S, R, E, C>,
  run: <A>(kind: Kind4<T, S, R, E, A>, a: A, b: A, c: A) => D,
  Eq?: Eq<D>,
) => (AA: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testContravariant<T extends HKT3>(): <E, A, B, C, R, D>(
  C: Contravariant3EC<T, E>,
  f: (a: A) => B,
  g: (b: B) => C,
  kindA: Kind3<T, R, E, A>,
  kindC: Kind3<T, R, E, C>,
  run: <A>(kind: Kind3<T, R, E, A>, a: A, b: A, c: A) => D,
  Eq?: Eq<D>,
) => (AA: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testContravariant<T extends HKT3>(): <R, E, A, B, C, D>(
  C: Contravariant3REC<T, R, E>,
  f: (a: A) => B,
  g: (b: B) => C,
  kindA: Kind3<T, R, E, A>,
  kindC: Kind3<T, R, E, C>,
  run: <A>(kind: Kind3<T, R, E, A>, a: A, b: A, c: A) => D,
  Eq?: Eq<D>,
) => (AA: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testContravariant<T extends HKT3>(): <R, A, B, C, E, D>(
  C: Contravariant3RC<T, R>,
  f: (a: A) => B,
  g: (b: B) => C,
  kindA: Kind3<T, R, E, A>,
  kindC: Kind3<T, R, E, C>,
  run: <A>(kind: Kind3<T, R, E, A>, a: A, b: A, c: A) => D,
  Eq?: Eq<D>,
) => (AA: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testContravariant<T extends HKT3>(): <A, B, C, R, E, D>(
  C: Contravariant3<T>,
  f: (a: A) => B,
  g: (b: B) => C,
  kindA: Kind3<T, R, E, A>,
  kindC: Kind3<T, R, E, C>,
  run: <A>(kind: Kind3<T, R, E, A>, a: A, b: A, c: A) => D,
  Eq?: Eq<D>,
) => (AA: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testContravariant<T extends HKT2>(): <E, A, B, C, D>(
  C: Contravariant2EC<T, E>,
  f: (a: A) => B,
  g: (b: B) => C,
  kindA: Kind2<T, E, A>,
  kindC: Kind2<T, E, C>,
  run: <A>(kind: Kind2<T, E, A>, a: A, b: A, c: A) => D,
  Eq?: Eq<D>,
) => (AA: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testContravariant<T extends HKT2>(): <A, B, C, E, D>(
  C: Contravariant2<T>,
  f: (a: A) => B,
  g: (b: B) => C,
  kindA: Kind2<T, E, A>,
  kindC: Kind2<T, E, C>,
  run: <A>(kind: Kind2<T, E, A>, a: A, b: A, c: A) => D,
  Eq?: Eq<D>,
) => (AA: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testContravariant<T extends HKT>(): <A, B, C, D>(
  C: Contravariant1<T>,
  f: (a: A) => B,
  g: (b: B) => C,
  kindA: Kind<T, A>,
  kindC: Kind<T, C>,
  run: <A>(kind: Kind<T, A>, a: A, b: A, c: A) => D,
  Eq?: Eq<D>,
) => (AA: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testContravariant<T extends HKT>(): <A, B, C, D>(
  C: Contravariant<T>,
  f: (a: A) => B,
  g: (b: B) => C,
  kindA: Kind<T, A>,
  kindC: Kind<T, C>,
  run: <A>(kind: Kind<T, A>, a: A, b: A, c: A) => D,
  Eq?: Eq<D>,
) => (AA: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly associativity: () => void
}

export function testContravariant<T extends HKT>() {
  return <A, B, C, D>(
    C: Contravariant<T>,
    f: (a: A) => B,
    g: (b: B) => C,
    kindA: Kind<T, A>,
    kindC: Kind<T, C>,
    run: <A>(kind: Kind<T, A>, a: A, b: A, c: A) => D,
    Eq: Eq<D> = DeepEquals,
  ) => {
    return (AA: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => ({
      identity: () => testContravariantIdentity(C, kindA, run, Eq)(AA).property(fc),
      associativity: () => testContravarianAssociativity(C, f, g, kindC, run, Eq)(AA).property(fc),
    })
  }
}

function testContravariantIdentity<T extends HKT, A, D>(
  C: Contravariant<T>,
  kind: Kind<T, A>,
  run: <A>(kind: Kind<T, A>, a: A, b: A, c: A) => D,
  Eq: Eq<D> = DeepEquals,
) {
  return (A: Arbitrary.Arbitrary<A>) =>
    pipe(
      Arbitrary.tuple(A, A, A),
      Arbitrary.toProperty(([a, b, c]) =>
        Eq.equals(run(kind, a, b, c), run(pipe(kind, C.contramap(identity)), a, b, c)),
      ),
    )
}

function testContravarianAssociativity<T extends HKT, A, B, C, D>(
  C: Contravariant<T>,
  f: (a: A) => B,
  g: (b: B) => C,
  kind: Kind<T, C>,
  run: <A>(kind: Kind<T, A>, a: A, b: A, c: A) => D,
  Eq: Eq<D> = DeepEquals,
) {
  return (A: Arbitrary.Arbitrary<A>) =>
    pipe(
      Arbitrary.tuple(A, A, A),
      Arbitrary.toProperty(([a, b, c]) =>
        Eq.equals(
          run(pipe(kind, C.contramap(g), C.contramap(f)), a, b, c),
          run(
            pipe(
              kind,
              C.contramap((a: A) => g(f(a))),
            ),
            a,
            b,
            c,
          ),
        ),
      ),
    )
}
