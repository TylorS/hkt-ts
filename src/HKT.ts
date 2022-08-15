import { Cast } from 'ts-toolbelt/out/Any/Cast.js'
import { Equals } from 'ts-toolbelt/out/Any/Equals.js'

/* eslint-disable @typescript-eslint/no-unused-vars */
export enum Params {
  Z = 'Z',
  Y = 'Y',
  X = 'X',
  W = 'W',
  V = 'V',
  U = 'U',
  S = 'S',
  R = 'R',
  E = 'E',
  A = 'A',
}

export const Z = Params.Z
export const Y = Params.Y
export const X = Params.X
export const W = Params.W
export const V = Params.V
export const U = Params.U
export const S = Params.S
export const R = Params.R
export const E = Params.E
export const A = Params.A

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Variance {
  export type Covariant<A> = (_: never) => A
  export type Contravariant<A> = (_: A) => never
  export type Invariant<A> = (_: A) => A
}

export type Variance<A> = Variance.Covariant<A> | Variance.Contravariant<A> | Variance.Invariant<A>

export interface HKT {
  readonly type: unknown
  readonly [A]: unknown
  readonly defaults?: Partial<Readonly<Record<Params, Variance<any>>>>
}

export interface HKT2 extends HKT {
  readonly [E]: unknown
}

export interface HKT3 extends HKT2 {
  readonly [R]: unknown
}

export interface HKT4 extends HKT3 {
  readonly [S]: unknown
}

export interface HKT5 extends HKT4 {
  readonly [U]: unknown
}

export interface HKT6 extends HKT5 {
  readonly [V]: unknown
}

export interface HKT7 extends HKT6 {
  readonly [W]: unknown
}

export interface HKT8 extends HKT7 {
  readonly [X]: unknown
}

export interface HKT9 extends HKT8 {
  readonly [Y]: unknown
}

export interface HKT10 extends HKT9 {
  readonly [Z]: unknown
}

export type Kind<T extends HKT, A> = (T & {
  readonly [A]: A
})['type']

export type Kind_<
  T extends ReadonlyArray<HKT>,
  Params extends readonly any[],
> = T extends readonly [infer Head, ...infer Tail]
  ? {
      1: Kind<Cast<Head, HKT>, Kind_<Cast<Tail, ReadonlyArray<HKT>>, Params>>
      2: Params extends readonly [infer Z, ...infer Rest]
        ? Kind2<Cast<Head, HKT2>, Z, Kind_<Cast<Tail, ReadonlyArray<HKT>>, Rest>>
        : never
      3: Params extends readonly [infer Z, infer Y, ...infer Rest]
        ? Kind3<Cast<Head, HKT3>, Z, Y, Kind_<Cast<Tail, ReadonlyArray<HKT>>, Rest>>
        : never
      4: Params extends readonly [infer Z, infer Y, infer X, ...infer Rest]
        ? Kind4<Cast<Head, HKT4>, Z, Y, X, Kind_<Cast<Tail, ReadonlyArray<HKT>>, Rest>>
        : never
      5: Params extends readonly [infer Z, infer Y, infer X, infer W, ...infer Rest]
        ? Kind5<Cast<Head, HKT5>, Z, Y, X, W, Kind_<Cast<Tail, ReadonlyArray<HKT>>, Rest>>
        : never
      6: Params extends readonly [infer Z, infer Y, infer X, infer W, infer V, ...infer Rest]
        ? Kind6<Cast<Head, HKT6>, Z, Y, X, W, V, Kind_<Cast<Tail, ReadonlyArray<HKT>>, Rest>>
        : never
      7: Params extends readonly [
        infer Z,
        infer Y,
        infer X,
        infer W,
        infer V,
        infer U,
        ...infer Rest,
      ]
        ? Kind7<Cast<Head, HKT7>, Z, Y, X, W, V, U, Kind_<Cast<Tail, ReadonlyArray<HKT>>, Rest>>
        : never
      8: Params extends readonly [
        infer Z,
        infer Y,
        infer X,
        infer W,
        infer V,
        infer U,
        infer S,
        ...infer Rest,
      ]
        ? Kind8<Cast<Head, HKT8>, Z, Y, X, W, V, U, S, Kind_<Cast<Tail, ReadonlyArray<HKT>>, Rest>>
        : never
      9: Params extends readonly [
        infer Z,
        infer Y,
        infer X,
        infer W,
        infer V,
        infer U,
        infer S,
        infer R,
        ...infer Rest,
      ]
        ? Kind9<
            Cast<Head, HKT9>,
            Z,
            Y,
            X,
            W,
            V,
            U,
            S,
            R,
            Kind_<Cast<Tail, ReadonlyArray<HKT>>, Rest>
          >
        : never
      10: Params extends readonly [
        infer Z,
        infer Y,
        infer X,
        infer W,
        infer V,
        infer U,
        infer S,
        infer R,
        infer E,
        ...infer Rest,
      ]
        ? Kind10<
            Cast<Head, HKT10>,
            Z,
            Y,
            X,
            W,
            V,
            U,
            S,
            R,
            E,
            Kind_<Cast<Tail, ReadonlyArray<HKT>>, Rest>
          >
        : never
    }[LengthOf<Cast<Head, HKT>>]
  : T['length'] extends 1
  ? {
      1: Kind<Cast<T[0], HKT>, Params[0]>
      2: Kind2<Cast<T[0], HKT2>, Params[0], Params[1]>
      3: Kind3<Cast<T[0], HKT3>, Params[0], Params[1], Params[2]>
      4: Kind4<Cast<T[0], HKT4>, Params[0], Params[1], Params[2], Params[3]>
      5: Kind5<Cast<T[0], HKT5>, Params[0], Params[1], Params[2], Params[3], Params[4]>
      6: Kind6<Cast<T[0], HKT6>, Params[0], Params[1], Params[2], Params[3], Params[4], Params[5]>
      7: Kind7<
        Cast<T[0], HKT7>,
        Params[0],
        Params[1],
        Params[2],
        Params[3],
        Params[4],
        Params[5],
        Params[6]
      >
      8: Kind8<
        Cast<T[0], HKT8>,
        Params[0],
        Params[1],
        Params[2],
        Params[3],
        Params[4],
        Params[5],
        Params[6],
        Params[7]
      >
      9: Kind9<
        Cast<T[0], HKT9>,
        Params[0],
        Params[1],
        Params[2],
        Params[3],
        Params[4],
        Params[5],
        Params[6],
        Params[7],
        Params[8]
      >
      10: Kind10<
        Cast<T[0], HKT10>,
        Params[0],
        Params[1],
        Params[2],
        Params[3],
        Params[4],
        Params[5],
        Params[6],
        Params[7],
        Params[8],
        Params[9]
      >
    }[LengthOf<Cast<T[0], HKT>>]
  : Params[0]

export type Kind2<T extends HKT2, E, A> = (T & {
  readonly [E]: E
  readonly [A]: A
})['type']

export type Kind3<T extends HKT3, R, E, A> = (T & {
  readonly [R]: R
  readonly [E]: E
  readonly [A]: A
})['type']

export type Kind4<T extends HKT4, S, R, E, A> = (T & {
  readonly [S]: S
  readonly [R]: R
  readonly [E]: E
  readonly [A]: A
})['type']

export type Kind5<T extends HKT5, U, S, R, E, A> = (T & {
  readonly [U]: U
  readonly [S]: S
  readonly [R]: R
  readonly [E]: E
  readonly [A]: A
})['type']

export type Kind6<T extends HKT5, V, U, S, R, E, A> = (T & {
  readonly [V]: V
  readonly [U]: U
  readonly [S]: S
  readonly [R]: R
  readonly [E]: E
  readonly [A]: A
})['type']

export type Kind7<T extends HKT5, W, V, U, S, R, E, A> = (T & {
  readonly [W]: W
  readonly [V]: V
  readonly [U]: U
  readonly [S]: S
  readonly [R]: R
  readonly [E]: E
  readonly [A]: A
})['type']

export type Kind8<T extends HKT5, X, W, V, U, S, R, E, A> = (T & {
  readonly [X]: X
  readonly [W]: W
  readonly [V]: V
  readonly [U]: U
  readonly [S]: S
  readonly [R]: R
  readonly [E]: E
  readonly [A]: A
})['type']

export type Kind9<T extends HKT5, Y, X, W, V, U, S, R, E, A> = (T & {
  readonly [Y]: Y
  readonly [X]: X
  readonly [W]: W
  readonly [V]: V
  readonly [U]: U
  readonly [S]: S
  readonly [R]: R
  readonly [E]: E
  readonly [A]: A
})['type']

export type Kind10<T extends HKT5, Z, Y, X, W, V, U, S, R, E, A> = (T & {
  readonly [Z]: Z
  readonly [Y]: Y
  readonly [X]: X
  readonly [W]: W
  readonly [V]: V
  readonly [U]: U
  readonly [S]: S
  readonly [R]: R
  readonly [E]: E
  readonly [A]: A
})['type']

export type TypeOf<T> = 'tag' extends keyof T ? T['tag'] : T

export type ParamsOf<H extends HKT, T> = {
  1: [T] extends [Kind<Cast<H, HKT>, infer A>] ? readonly [A] : never
  2: [T] extends [Kind2<Cast<H, HKT2>, infer E, infer A>] ? readonly [E, A] : never
  3: [T] extends [Kind3<Cast<H, HKT3>, infer R, infer E, infer A>] ? readonly [R, E, A] : never
  4: [T] extends [Kind4<Cast<H, HKT4>, infer S, infer R, infer E, infer A>]
    ? readonly [S, R, E, A]
    : never
  5: [T] extends [Kind5<Cast<H, HKT5>, infer U, infer S, infer R, infer E, infer A>]
    ? readonly [U, S, R, E, A]
    : never
  6: [T] extends [Kind6<Cast<H, HKT6>, infer V, infer U, infer S, infer R, infer E, infer A>]
    ? readonly [V, U, S, R, E, A]
    : never
  7: [T] extends [
    Kind7<Cast<H, HKT7>, infer W, infer V, infer U, infer S, infer R, infer E, infer A>,
  ]
    ? readonly [W, V, U, S, R, E, A]
    : never
  8: [T] extends [
    Kind8<Cast<H, HKT8>, infer X, infer W, infer V, infer U, infer S, infer R, infer E, infer A>,
  ]
    ? readonly [X, W, V, U, S, R, E, A]
    : never
  9: [T] extends [
    Kind9<
      Cast<H, HKT9>,
      infer Y,
      infer X,
      infer W,
      infer V,
      infer U,
      infer S,
      infer R,
      infer E,
      infer A
    >,
  ]
    ? readonly [Y, X, W, V, U, S, R, E, A]
    : never
  10: [T] extends [
    Kind10<
      Cast<H, HKT10>,
      infer Z,
      infer Y,
      infer X,
      infer W,
      infer V,
      infer U,
      infer S,
      infer R,
      infer E,
      infer A
    >,
  ]
    ? readonly [Z, Y, X, W, V, U, S, R, E, A]
    : never
}[LengthOf<H>]

export type LengthOf<T extends HKT> = T extends HKT10
  ? 10
  : T extends HKT9
  ? 9
  : T extends HKT8
  ? 8
  : T extends HKT7
  ? 7
  : T extends HKT7
  ? 7
  : T extends HKT6
  ? 6
  : T extends HKT5
  ? 5
  : T extends HKT4
  ? 4
  : T extends HKT3
  ? 3
  : T extends HKT2
  ? 2
  : T extends HKT
  ? 1
  : never

export type ParamOf<H extends HKT, T, P extends Params> = {
  readonly [Z]: {
    1: never
    2: never
    3: never
    4: never
    5: never
    6: never
    7: never
    8: never
    9: never
    10: ParamsOf<H, T>[0]
  }[LengthOf<H>]
  readonly [Y]: {
    1: never
    2: never
    3: never
    4: never
    5: never
    6: never
    7: never
    8: never
    9: ParamsOf<H, T>[0]
    10: ParamsOf<H, T>[1]
  }[LengthOf<H>]
  readonly [X]: {
    1: never
    2: never
    3: never
    4: never
    5: never
    6: never
    7: never
    8: ParamsOf<H, T>[0]
    9: ParamsOf<H, T>[1]
    10: ParamsOf<H, T>[2]
  }[LengthOf<H>]
  readonly [W]: {
    1: never
    2: never
    3: never
    4: never
    5: never
    6: never
    7: ParamsOf<H, T>[0]
    8: ParamsOf<H, T>[1]
    9: ParamsOf<H, T>[2]
    10: ParamsOf<H, T>[3]
  }[LengthOf<H>]
  readonly [V]: {
    1: never
    2: never
    3: never
    4: never
    5: never
    6: ParamsOf<H, T>[0]
    7: ParamsOf<H, T>[1]
    8: ParamsOf<H, T>[2]
    9: ParamsOf<H, T>[3]
    10: ParamsOf<H, T>[4]
  }[LengthOf<H>]
  readonly [U]: {
    1: never
    2: never
    3: never
    4: never
    5: ParamsOf<H, T>[0]
    6: ParamsOf<H, T>[1]
    7: ParamsOf<H, T>[2]
    8: ParamsOf<H, T>[3]
    9: ParamsOf<H, T>[4]
    10: ParamsOf<H, T>[5]
  }[LengthOf<H>]
  readonly [S]: {
    1: never
    2: never
    3: never
    4: ParamsOf<H, T>[0]
    5: ParamsOf<H, T>[1]
    6: ParamsOf<H, T>[2]
    7: ParamsOf<H, T>[3]
    8: ParamsOf<H, T>[4]
    9: ParamsOf<H, T>[5]
    10: ParamsOf<H, T>[6]
  }[LengthOf<H>]
  readonly [R]: {
    1: never
    2: never
    3: ParamsOf<H, T>[0]
    4: ParamsOf<H, T>[1]
    5: ParamsOf<H, T>[2]
    6: ParamsOf<H, T>[3]
    7: ParamsOf<H, T>[4]
    8: ParamsOf<H, T>[5]
    9: ParamsOf<H, T>[6]
    10: ParamsOf<H, T>[7]
  }[LengthOf<H>]
  readonly [E]: {
    1: never
    2: ParamsOf<H, T>[0]
    3: ParamsOf<H, T>[1]
    4: ParamsOf<H, T>[2]
    5: ParamsOf<H, T>[3]
    6: ParamsOf<H, T>[4]
    7: ParamsOf<H, T>[5]
    8: ParamsOf<H, T>[6]
    9: ParamsOf<H, T>[7]
    10: ParamsOf<H, T>[8]
  }[LengthOf<H>]
  readonly [A]: {
    1: ParamsOf<H, T>[0]
    2: ParamsOf<H, T>[1]
    3: ParamsOf<H, T>[2]
    4: ParamsOf<H, T>[3]
    5: ParamsOf<H, T>[4]
    6: ParamsOf<H, T>[5]
    7: ParamsOf<H, T>[6]
    8: ParamsOf<H, T>[7]
    9: ParamsOf<H, T>[8]
    10: ParamsOf<H, T>[9]
  }[LengthOf<H>]
}[P]

export type DefaultOf<H extends HKT, P extends Params> = P extends keyof H['defaults']
  ? DefaultForVariance<NonNullable<H['defaults']>[P]>
  : unknown

export type DefaultForVariance<V> = [V] extends [Variance.Invariant<infer R>]
  ? Equals<R, unknown> extends 1
    ? any
    : R
  : [V] extends [Variance.Contravariant<infer R>]
  ? Equals<R, unknown> extends 1
    ? unknown
    : R
  : [V] extends [Variance.Covariant<infer R>]
  ? Equals<R, unknown> extends 1
    ? any
    : R
  : any

export type InitialOf<H extends HKT, P extends Params> = P extends keyof H['defaults']
  ? DefaultForVariance<NonNullable<H['defaults']>[P]>
  : unknown

export type InitialForVariance<V> = [V] extends [Variance.Invariant<infer R>]
  ? Equals<R, unknown> extends 1
    ? any
    : R
  : [V] extends [Variance.Contravariant<infer R>]
  ? Equals<R, unknown> extends 1
    ? unknown
    : R
  : [V] extends [Variance.Covariant<infer R>]
  ? Equals<R, unknown> extends 1
    ? never
    : R
  : any

export type Constrain<H extends HKT, P extends PossibleParamsOf<H>, X extends Variance<any>> = H & {
  readonly defaults: { readonly [_ in P]: X }
}

export type PossibleParamsOf<T extends HKT> = {
  1: Params.A
  2: Params.E | Params.A
  3: Params.R | Params.E | Params.A
  4: Params.S | Params.R | Params.E | Params.A
  5: Params.U | Params.S | Params.R | Params.E | Params.A
  6: Params.V | Params.U | Params.S | Params.R | Params.E | Params.A
  7: Params.W | Params.V | Params.U | Params.S | Params.R | Params.E | Params.A
  8: Params.X | Params.W | Params.V | Params.U | Params.S | Params.R | Params.E | Params.A
  9:
    | Params.Y
    | Params.X
    | Params.W
    | Params.V
    | Params.U
    | Params.S
    | Params.R
    | Params.E
    | Params.A
  10:
    | Params.Z
    | Params.Y
    | Params.X
    | Params.W
    | Params.V
    | Params.U
    | Params.S
    | Params.R
    | Params.E
    | Params.A
}[LengthOf<T>]
