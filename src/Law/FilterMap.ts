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
import * as Maybe from '../Maybe'
import { Predicate } from '../Predicate'
import { DeepEquals, Eq } from '../Typeclass/Eq'
import {
  FilterMap,
  FilterMap1,
  FilterMap10,
  FilterMap2,
  FilterMap2EC,
  FilterMap3,
  FilterMap3EC,
  FilterMap3RC,
  FilterMap3REC,
  FilterMap4,
  FilterMap4EC,
  FilterMap4RC,
  FilterMap4REC,
  FilterMap4SC,
  FilterMap4SEC,
  FilterMap4SRC,
  FilterMap4SREC,
  FilterMap5,
  FilterMap6,
  FilterMap7,
  FilterMap8,
  FilterMap9,
} from '../Typeclass/FilterMap'
import { flow, pipe } from '../function'

import * as Arbitrary from './Arbitrary'

export function testFilterMap<T extends HKT10, A, Z, Y, X, W, V, U, S, R, E>(
  FM: FilterMap10<T>,
  f: (a: A) => boolean,
  g: (b: A) => boolean,
  Eq?: Eq<Kind10<T, Z, Y, X, W, V, U, S, R, E, A>>,
): (Arb: Arbitrary.Arbitrary<Kind10<T, Z, Y, X, W, V, U, S, R, E, A>>) => (
  fc: typeof import('fast-check'),
) => {
  readonly identity: () => void
  readonly distributivity: () => void
  readonly annihilation: () => void
}

export function testFilterMap<T extends HKT9, A, Y, X, W, V, U, S, R, E>(
  FM: FilterMap9<T>,
  f: (a: A) => boolean,
  g: (b: A) => boolean,
  Eq?: Eq<Kind9<T, Y, X, W, V, U, S, R, E, A>>,
): (Arb: Arbitrary.Arbitrary<Kind9<T, Y, X, W, V, U, S, R, E, A>>) => (
  fc: typeof import('fast-check'),
) => {
  readonly identity: () => void
  readonly distributivity: () => void
  readonly annihilation: () => void
}

export function testFilterMap<T extends HKT8, A, X, W, V, U, S, R, E>(
  FM: FilterMap8<T>,
  f: (a: A) => boolean,
  g: (b: A) => boolean,
  Eq?: Eq<Kind8<T, X, W, V, U, S, R, E, A>>,
): (Arb: Arbitrary.Arbitrary<Kind8<T, X, W, V, U, S, R, E, A>>) => (
  fc: typeof import('fast-check'),
) => {
  readonly identity: () => void
  readonly distributivity: () => void
  readonly annihilation: () => void
}

export function testFilterMap<T extends HKT7, A, W, V, U, S, R, E>(
  FM: FilterMap7<T>,
  f: (a: A) => boolean,
  g: (b: A) => boolean,
  Eq?: Eq<Kind7<T, W, V, U, S, R, E, A>>,
): (Arb: Arbitrary.Arbitrary<Kind7<T, W, V, U, S, R, E, A>>) => (
  fc: typeof import('fast-check'),
) => {
  readonly identity: () => void
  readonly distributivity: () => void
  readonly annihilation: () => void
}

export function testFilterMap<T extends HKT6, A, V, U, S, R, E>(
  FM: FilterMap6<T>,
  f: (a: A) => boolean,
  g: (b: A) => boolean,
  Eq?: Eq<Kind6<T, V, U, S, R, E, A>>,
): (Arb: Arbitrary.Arbitrary<Kind6<T, V, U, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly distributivity: () => void
  readonly annihilation: () => void
}

export function testFilterMap<T extends HKT5, A, U, S, R, E>(
  FM: FilterMap5<T>,
  f: (a: A) => boolean,
  g: (b: A) => boolean,
  Eq?: Eq<Kind5<T, U, S, R, E, A>>,
): (Arb: Arbitrary.Arbitrary<Kind5<T, U, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly distributivity: () => void
  readonly annihilation: () => void
}

export function testFilterMap<T extends HKT4, E, A, S, R>(
  FM: FilterMap4EC<T, E>,
  f: (a: A) => boolean,
  g: (b: A) => boolean,
  Eq?: Eq<Kind4<T, S, R, E, A>>,
): (Arb: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly distributivity: () => void
  readonly annihilation: () => void
}

export function testFilterMap<T extends HKT4, R, E, A, S>(
  FM: FilterMap4REC<T, R, E>,
  f: (a: A) => boolean,
  g: (b: A) => boolean,
  Eq?: Eq<Kind4<T, S, R, E, A>>,
): (Arb: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly distributivity: () => void
  readonly annihilation: () => void
}

export function testFilterMap<T extends HKT4, S, E, A, R>(
  FM: FilterMap4SEC<T, S, E>,
  f: (a: A) => boolean,
  g: (b: A) => boolean,
  Eq?: Eq<Kind4<T, S, R, E, A>>,
): (Arb: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly distributivity: () => void
  readonly annihilation: () => void
}

export function testFilterMap<T extends HKT4, R, A, S, E>(
  FM: FilterMap4RC<T, R>,
  f: (a: A) => boolean,
  g: (b: A) => boolean,
  Eq?: Eq<Kind4<T, S, R, E, A>>,
): (Arb: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly distributivity: () => void
  readonly annihilation: () => void
}

export function testFilterMap<T extends HKT4, S, R, A, E>(
  FM: FilterMap4SRC<T, S, R>,
  f: (a: A) => boolean,
  g: (b: A) => boolean,
  Eq?: Eq<Kind4<T, S, R, E, A>>,
): (Arb: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly distributivity: () => void
  readonly annihilation: () => void
}

export function testFilterMap<T extends HKT4, S, A, R, E>(
  FM: FilterMap4SC<T, S>,
  f: (a: A) => boolean,
  g: (b: A) => boolean,
  Eq?: Eq<Kind4<T, S, R, E, A>>,
): (Arb: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly distributivity: () => void
  readonly annihilation: () => void
}

export function testFilterMap<T extends HKT4, S, R, E, A>(
  FM: FilterMap4SREC<T, S, R, E>,
  f: (a: A) => boolean,
  g: (b: A) => boolean,
  Eq?: Eq<Kind4<T, S, R, E, A>>,
): (Arb: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly distributivity: () => void
  readonly annihilation: () => void
}

export function testFilterMap<T extends HKT4, A, S, R, E>(
  FM: FilterMap4<T>,
  f: (a: A) => boolean,
  g: (b: A) => boolean,
  Eq?: Eq<Kind4<T, S, R, E, A>>,
): (Arb: Arbitrary.Arbitrary<Kind4<T, S, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly distributivity: () => void
  readonly annihilation: () => void
}

export function testFilterMap<T extends HKT3, E, A, R>(
  FM: FilterMap3EC<T, E>,
  f: (a: A) => boolean,
  g: (b: A) => boolean,
  Eq?: Eq<Kind3<T, R, E, A>>,
): (Arb: Arbitrary.Arbitrary<Kind3<T, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly distributivity: () => void
  readonly annihilation: () => void
}

export function testFilterMap<T extends HKT3, R, E, A>(
  FM: FilterMap3REC<T, R, E>,
  f: (a: A) => boolean,
  g: (b: A) => boolean,
  Eq?: Eq<Kind3<T, R, E, A>>,
): (Arb: Arbitrary.Arbitrary<Kind3<T, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly distributivity: () => void
  readonly annihilation: () => void
}

export function testFilterMap<T extends HKT3, R, A, E>(
  FM: FilterMap3RC<T, R>,
  f: (a: A) => boolean,
  g: (b: A) => boolean,
  Eq?: Eq<Kind3<T, R, E, A>>,
): (Arb: Arbitrary.Arbitrary<Kind3<T, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly distributivity: () => void
  readonly annihilation: () => void
}

export function testFilterMap<T extends HKT3, A, R, E>(
  FM: FilterMap3<T>,
  f: (a: A) => boolean,
  g: (b: A) => boolean,
  Eq?: Eq<Kind3<T, R, E, A>>,
): (Arb: Arbitrary.Arbitrary<Kind3<T, R, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly distributivity: () => void
  readonly annihilation: () => void
}

export function testFilterMap<T extends HKT2, E, A>(
  FM: FilterMap2EC<T, E>,
  f: (a: A) => boolean,
  g: (b: A) => boolean,
  Eq?: Eq<Kind2<T, E, A>>,
): (Arb: Arbitrary.Arbitrary<Kind2<T, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly distributivity: () => void
  readonly annihilation: () => void
}

export function testFilterMap<T extends HKT2, A, E>(
  FM: FilterMap2<T>,
  f: (a: A) => boolean,
  g: (b: A) => boolean,
  Eq?: Eq<Kind2<T, E, A>>,
): (Arb: Arbitrary.Arbitrary<Kind2<T, E, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly distributivity: () => void
  readonly annihilation: () => void
}

export function testFilterMap<T extends HKT, A>(
  FM: FilterMap1<T>,
  f: (a: A) => boolean,
  g: (b: A) => boolean,
  Eq?: Eq<Kind<T, A>>,
): (Arb: Arbitrary.Arbitrary<Kind<T, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly distributivity: () => void
  readonly annihilation: () => void
}

export function testFilterMap<T extends HKT, A>(
  FM: FilterMap<T>,
  f: (a: A) => boolean,
  g: (b: A) => boolean,
  Eq?: Eq<Kind<T, A>>,
): (Arb: Arbitrary.Arbitrary<Kind<T, A>>) => (fc: typeof import('fast-check')) => {
  readonly identity: () => void
  readonly distributivity: () => void
  readonly annihilation: () => void
}

export function testFilterMap<T extends HKT, A>(
  F: FilterMap<T>,
  predA: Predicate<A>,
  predB: Predicate<A>,
  EqA: Eq<Kind<T, A>> = DeepEquals,
) {
  return (A: Arbitrary.Arbitrary<Kind<T, A>>) => (fc: typeof import('fast-check')) => ({
    identity: () => testFilterMapIdentity(F, EqA)(A).property(fc),
    distributivity: () => testFilterMapDistributivity(F, EqA, predA, predB)(A).property(fc),
    annihilation: () => testFilterMapAnnihilation(F, EqA)(A).property(fc),
  })
}

function testFilterMapIdentity<T extends HKT, A>(F: FilterMap<T>, EqA: Eq<Kind<T, A>>) {
  return (A: Arbitrary.Arbitrary<Kind<T, A>>) =>
    pipe(
      A,
      Arbitrary.toProperty((k) => EqA.equals(k, pipe(k, F.filterMap(Maybe.Just)))),
    )
}

function testFilterMapDistributivity<T extends HKT, A>(
  F: FilterMap<T>,
  EqA: Eq<Kind<T, A>>,
  predA: Predicate<A>,
  predB: Predicate<A>,
) {
  return (A: Arbitrary.Arbitrary<Kind<T, A>>) =>
    pipe(
      A,
      Arbitrary.toProperty((k) =>
        EqA.equals(
          pipe(k, F.filterMap(Maybe.fromPredicate(predA)), F.filterMap(Maybe.fromPredicate(predB))),
          pipe(
            k,
            F.filterMap(
              flow(Maybe.fromPredicate(predA), Maybe.flatMap(Maybe.fromPredicate(predB))),
            ),
          ),
        ),
      ),
    )
}

function testFilterMapAnnihilation<T extends HKT, A>(F: FilterMap<T>, EqA: Eq<Kind<T, A>>) {
  return (A: Arbitrary.Arbitrary<Kind<T, A>>) =>
    pipe(
      A,
      Arbitrary.toProperty((k) =>
        EqA.equals(
          pipe(
            k,
            F.filterMap(() => Maybe.Nothing),
          ),
          pipe(
            k,
            F.filterMap(() => Maybe.Nothing),
          ),
        ),
      ),
    )
}
