import {
  HKT10,
  HKT2,
  HKT3,
  HKT4,
  HKT5,
  HKT6,
  HKT7,
  HKT8,
  HKT9,
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
import type { Unary } from '../Unary'
import { identity } from '../function'

export interface Bicovariant<T extends HKT2> {
  readonly bimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => (kind: Kind2<T, A, C>) => Kind2<T, B, D>
}

export interface Bicovariant2<T extends HKT2> {
  readonly bimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => (kind: Kind2<T, A, C>) => Kind2<T, B, D>
}

export interface Bicovariant3<T extends HKT3> {
  readonly bimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => <R>(kind: Kind3<T, R, A, C>) => Kind3<T, R, B, D>
}

export interface Bicovariant4<T extends HKT4> {
  readonly bimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => <S, R>(kind: Kind4<T, S, R, A, C>) => Kind4<T, S, R, B, D>
}

export interface Bicovariant5<T extends HKT5> {
  readonly bimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => <U, S, R>(kind: Kind5<T, U, S, R, A, C>) => Kind5<T, U, S, R, B, D>
}

export interface Bicovariant6<T extends HKT6> {
  readonly bimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => <V, U, S, R>(kind: Kind6<T, V, U, S, R, A, C>) => Kind6<T, V, U, S, R, B, D>
}

export interface Bicovariant7<T extends HKT7> {
  readonly bimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => <W, V, U, S, R>(kind: Kind7<T, W, V, U, S, R, A, C>) => Kind7<T, W, V, U, S, R, B, D>
}

export interface Bicovariant8<T extends HKT8> {
  readonly bimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => <X, W, V, U, S, R>(
    kind: Kind8<T, X, W, V, U, S, R, A, C>,
  ) => Kind8<T, X, W, V, U, S, R, B, D>
}

export interface Bicovariant9<T extends HKT9> {
  readonly bimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => <Y, X, W, V, U, S, R>(
    kind: Kind9<T, Y, X, W, V, U, S, R, A, C>,
  ) => Kind9<T, Y, X, W, V, U, S, R, B, D>
}

export interface Bicovariant10<T extends HKT10> {
  readonly bimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => <Z, Y, X, W, V, U, S, R>(
    kind: Kind10<T, Z, Y, X, W, V, U, S, R, A, C>,
  ) => Kind10<T, Z, Y, X, W, V, U, S, R, B, D>
}

export function map<T extends HKT10>(
  B: Bicovariant10<T>,
): <A, B>(
  f: (a: A) => B,
) => <Z, Y, X, W, V, U, S, R, C>(
  kind: Kind10<T, Z, Y, X, W, V, U, S, R, C, A>,
) => Kind10<T, Z, Y, X, W, V, U, S, R, C, B>

export function map<T extends HKT9>(
  B: Bicovariant9<T>,
): <A, B>(
  f: (a: A) => B,
) => <Y, X, W, V, U, S, R, C>(
  kind: Kind9<T, Y, X, W, V, U, S, R, C, A>,
) => Kind9<T, Y, X, W, V, U, S, R, C, B>

export function map<T extends HKT8>(
  B: Bicovariant8<T>,
): <A, B>(
  f: (a: A) => B,
) => <X, W, V, U, S, R, C>(
  kind: Kind8<T, X, W, V, U, S, R, C, A>,
) => Kind8<T, X, W, V, U, S, R, C, B>

export function map<T extends HKT7>(
  B: Bicovariant7<T>,
): <A, B>(
  f: (a: A) => B,
) => <W, V, U, S, R, C>(kind: Kind7<T, W, V, U, S, R, C, A>) => Kind7<T, W, V, U, S, R, C, B>

export function map<T extends HKT6>(
  B: Bicovariant6<T>,
): <A, B>(
  f: (a: A) => B,
) => <V, U, S, R, C>(kind: Kind6<T, V, U, S, R, C, A>) => Kind6<T, V, U, S, R, C, B>

export function map<T extends HKT5>(
  B: Bicovariant5<T>,
): <A, B>(f: (a: A) => B) => <U, S, R, C>(kind: Kind5<T, U, S, R, C, A>) => Kind5<T, U, S, R, C, B>

export function map<T extends HKT4>(
  B: Bicovariant4<T>,
): <A, B>(f: (a: A) => B) => <S, R, C>(kind: Kind4<T, S, R, C, A>) => Kind4<T, S, R, C, B>

export function map<T extends HKT3>(
  B: Bicovariant3<T>,
): <A, B>(f: (a: A) => B) => <R, C>(kind: Kind3<T, R, C, A>) => Kind3<T, R, C, B>

export function map<T extends HKT2>(
  B: Bicovariant2<T>,
): <A, B>(f: (a: A) => B) => <C>(kind: Kind2<T, C, A>) => Kind2<T, C, B>

export function map<T extends HKT2>(
  B: Bicovariant<T>,
): <A, B>(f: (a: A) => B) => <C>(kind: Kind2<T, C, A>) => Kind2<T, C, B>

export function map<T extends HKT2>(
  B: Bicovariant<T>,
): <A, B>(f: (a: A) => B) => <C>(kind: Kind2<T, C, A>) => Kind2<T, C, B> {
  return (f) => B.bimap(identity, f)
}

export function mapLeft<T extends HKT10>(
  B: Bicovariant10<T>,
): <A, B>(
  f: (a: A) => B,
) => <Z, Y, X, W, V, U, S, R, C>(
  kind: Kind10<T, Z, Y, X, W, V, U, S, R, A, C>,
) => Kind10<T, Z, Y, X, W, V, U, S, R, B, C>

export function mapLeft<T extends HKT9>(
  B: Bicovariant9<T>,
): <A, B>(
  f: (a: A) => B,
) => <Y, X, W, V, U, S, R, C>(
  kind: Kind9<T, Y, X, W, V, U, S, R, A, C>,
) => Kind9<T, Y, X, W, V, U, S, R, B, C>

export function mapLeft<T extends HKT8>(
  B: Bicovariant8<T>,
): <A, B>(
  f: (a: A) => B,
) => <X, W, V, U, S, R, C>(
  kind: Kind8<T, X, W, V, U, S, R, A, C>,
) => Kind8<T, X, W, V, U, S, R, B, C>

export function mapLeft<T extends HKT7>(
  B: Bicovariant7<T>,
): <A, B>(
  f: (a: A) => B,
) => <W, V, U, S, R, C>(kind: Kind7<T, W, V, U, S, R, A, C>) => Kind7<T, W, V, U, S, R, B, C>

export function mapLeft<T extends HKT6>(
  B: Bicovariant6<T>,
): <A, B>(
  f: (a: A) => B,
) => <V, U, S, R, C>(kind: Kind6<T, V, U, S, R, A, C>) => Kind6<T, V, U, S, R, B, C>

export function mapLeft<T extends HKT5>(
  B: Bicovariant5<T>,
): <A, B>(f: (a: A) => B) => <U, S, R, C>(kind: Kind5<T, U, S, R, A, C>) => Kind5<T, U, S, R, B, C>

export function mapLeft<T extends HKT4>(
  B: Bicovariant4<T>,
): <A, B>(f: (a: A) => B) => <S, R, C>(kind: Kind4<T, S, R, A, C>) => Kind4<T, S, R, B, C>

export function mapLeft<T extends HKT3>(
  B: Bicovariant3<T>,
): <A, B>(f: (a: A) => B) => <R, C>(kind: Kind3<T, R, A, C>) => Kind3<T, R, B, C>

export function mapLeft<T extends HKT2>(
  B: Bicovariant2<T>,
): <A, B>(f: (a: A) => B) => <C>(kind: Kind2<T, A, C>) => Kind2<T, B, C>

export function mapLeft<T extends HKT2>(
  B: Bicovariant<T>,
): <A, B>(f: (a: A) => B) => <C>(kind: Kind2<T, A, C>) => Kind2<T, B, C>

export function mapLeft<T extends HKT2>(
  B: Bicovariant<T>,
): <A, B>(f: (a: A) => B) => <C>(kind: Kind2<T, A, C>) => Kind2<T, B, C> {
  return (f) => B.bimap(f, identity)
}
