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
import type { Unary } from '../Unary'

export interface Invariant<T extends HKT> {
  readonly imap: <A, B>(f: Unary<A, B>, g: Unary<B, A>) => (kind: Kind<T, A>) => Kind<T, B>
}

export interface Invariant1<T extends HKT> {
  readonly imap: <A, B>(f: Unary<A, B>, g: Unary<B, A>) => (kind: Kind<T, A>) => Kind<T, B>
}

export interface Invariant2<T extends HKT2> {
  readonly imap: <A, B>(
    f: Unary<A, B>,
    g: Unary<B, A>,
  ) => <E>(kind: Kind2<T, E, A>) => Kind2<T, E, B>
}

export interface Invariant2EC<T extends HKT2, E> {
  readonly imap: <A, B>(f: Unary<A, B>, g: Unary<B, A>) => (kind: Kind2<T, E, A>) => Kind2<T, E, B>
}

export interface Invariant3<T extends HKT3> {
  readonly imap: <A, B>(
    f: Unary<A, B>,
    g: Unary<B, A>,
  ) => <R, E>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>
}

export interface Invariant3RC<T extends HKT3, R> {
  readonly imap: <A, B>(
    f: Unary<A, B>,
    g: Unary<B, A>,
  ) => <E>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>
}

export interface Invariant3REC<T extends HKT3, R, E> {
  readonly imap: <A, B>(
    f: Unary<A, B>,
    g: Unary<B, A>,
  ) => (kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>
}

export interface Invariant3EC<T extends HKT3, E> {
  readonly imap: <A, B>(
    f: Unary<A, B>,
    g: Unary<B, A>,
  ) => <R>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>
}

export interface Invariant4<T extends HKT4> {
  readonly imap: <A, B>(
    f: Unary<A, B>,
    g: Unary<B, A>,
  ) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface Invariant4SREC<T extends HKT4, S, R, E> {
  readonly imap: <A, B>(
    f: Unary<A, B>,
    g: Unary<B, A>,
  ) => (kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface Invariant4SC<T extends HKT4, S> {
  readonly imap: <A, B>(
    f: Unary<A, B>,
    g: Unary<B, A>,
  ) => <R, E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface Invariant4SRC<T extends HKT4, S, R> {
  readonly imap: <A, B>(
    f: Unary<A, B>,
    g: Unary<B, A>,
  ) => <E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface Invariant4RC<T extends HKT4, R> {
  readonly imap: <A, B>(
    f: Unary<A, B>,
    g: Unary<B, A>,
  ) => <S, E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface Invariant4SEC<T extends HKT4, S, E> {
  readonly imap: <A, B>(
    f: Unary<A, B>,
    g: Unary<B, A>,
  ) => <R>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface Invariant4REC<T extends HKT4, R, E> {
  readonly imap: <A, B>(
    f: Unary<A, B>,
    g: Unary<B, A>,
  ) => <S>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface Invariant4EC<T extends HKT4, E> {
  readonly imap: <A, B>(
    f: Unary<A, B>,
    g: Unary<B, A>,
  ) => <S, R>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface Invariant5<T extends HKT5> {
  readonly imap: <A, B>(
    f: Unary<A, B>,
    g: Unary<B, A>,
  ) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => Kind5<T, U, S, R, E, B>
}

export interface Invariant6<T extends HKT6> {
  readonly imap: <A, B>(
    f: Unary<A, B>,
    g: Unary<B, A>,
  ) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => Kind6<T, V, U, S, R, E, B>
}

export interface Invariant7<T extends HKT7> {
  readonly imap: <A, B>(
    f: Unary<A, B>,
    g: Unary<B, A>,
  ) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => Kind7<T, W, V, U, S, R, E, B>
}

export interface Invariant8<T extends HKT8> {
  readonly imap: <A, B>(
    f: Unary<A, B>,
    g: Unary<B, A>,
  ) => <X, W, V, U, S, R, E>(
    kind: Kind8<T, X, W, V, U, S, R, E, A>,
  ) => Kind8<T, X, W, V, U, S, R, E, B>
}

export interface Invariant9<T extends HKT9> {
  readonly imap: <A, B>(
    f: Unary<A, B>,
    g: Unary<B, A>,
  ) => <Y, X, W, V, U, S, R, E>(
    kind: Kind9<T, Y, X, W, V, U, S, R, E, A>,
  ) => Kind9<T, Y, X, W, V, U, S, R, E, B>
}

export interface Invariant10<T extends HKT10> {
  readonly imap: <A, B>(
    f: Unary<A, B>,
    g: Unary<B, A>,
  ) => <Z, Y, X, W, V, U, S, R, E>(
    kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
  ) => Kind10<T, Z, Y, X, W, V, U, S, R, E, B>
}
