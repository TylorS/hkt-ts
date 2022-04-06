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

export interface HKT {
  readonly tag: unknown
  readonly [A]: unknown
  readonly defaults: {
    readonly [A]: unknown
  }
}

export interface HKT2 extends HKT {
  readonly [E]: unknown
  readonly defaults: HKT['defaults'] & {
    readonly [E]: unknown
  }
}

export interface HKT3 extends HKT2 {
  readonly [R]: unknown
  readonly defaults: HKT2['defaults'] & {
    readonly [R]: unknown
  }
}

export interface HKT4 extends HKT3 {
  readonly [S]: unknown
  readonly defaults: HKT3['defaults'] & {
    readonly [S]: unknown
  }
}

export interface HKT5 extends HKT4 {
  readonly [U]: unknown
  readonly defaults: HKT4['defaults'] & {
    readonly [U]: unknown
  }
}

export interface HKT6 extends HKT5 {
  readonly [V]: unknown
  readonly defaults: HKT5['defaults'] & {
    readonly [V]: unknown
  }
}

export interface HKT7 extends HKT6 {
  readonly [W]: unknown
  readonly defaults: HKT6['defaults'] & {
    readonly [W]: unknown
  }
}

export interface HKT8 extends HKT7 {
  readonly [X]: unknown
  readonly defaults: HKT7['defaults'] & {
    readonly [X]: unknown
  }
}

export interface HKT9 extends HKT8 {
  readonly [Y]: unknown
  readonly defaults: HKT8['defaults'] & {
    readonly [Y]: unknown
  }
}

export interface HKT10 extends HKT9 {
  readonly [Z]: unknown
  readonly defaults: HKT9['defaults'] & {
    readonly [Z]: unknown
  }
}

export type Kind<T extends HKT, A> = (T & {
  readonly [A]: A
})['tag']

export type Kind2<T extends HKT2, E, A> = (T & {
  readonly [E]: E
  readonly [A]: A
})['tag']

export type Kind3<T extends HKT3, R, E, A> = (T & {
  readonly [R]: R
  readonly [E]: E
  readonly [A]: A
})['tag']

export type Kind4<T extends HKT4, S, R, E, A> = (T & {
  readonly [S]: S
  readonly [R]: R
  readonly [E]: E
  readonly [A]: A
})['tag']

export type Kind5<T extends HKT5, U, S, R, E, A> = (T & {
  readonly [U]: U
  readonly [S]: S
  readonly [R]: R
  readonly [E]: E
  readonly [A]: A
})['tag']

export type Kind6<T extends HKT5, V, U, S, R, E, A> = (T & {
  readonly [V]: V
  readonly [U]: U
  readonly [S]: S
  readonly [R]: R
  readonly [E]: E
  readonly [A]: A
})['tag']

export type Kind7<T extends HKT5, W, V, U, S, R, E, A> = (T & {
  readonly [W]: W
  readonly [V]: V
  readonly [U]: U
  readonly [S]: S
  readonly [R]: R
  readonly [E]: E
  readonly [A]: A
})['tag']

export type Kind8<T extends HKT5, X, W, V, U, S, R, E, A> = (T & {
  readonly [X]: X
  readonly [W]: W
  readonly [V]: V
  readonly [U]: U
  readonly [S]: S
  readonly [R]: R
  readonly [E]: E
  readonly [A]: A
})['tag']

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
})['tag']

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
})['tag']

export type TypeOf<T> = 'tag' extends keyof T ? T['tag'] : T

export type ParamOf<H extends HKT, T, P extends Params> = {
  readonly [Z]: H extends HKT10
    ? [T] extends [
        Kind10<
          H,
          infer R,
          infer _,
          infer _,
          infer _,
          infer _,
          infer _,
          infer _,
          infer _,
          infer _,
          infer _
        >,
      ]
      ? R
      : never
    : never
  readonly [Y]: H extends HKT9
    ? [T] extends [
        Kind9<H, infer R, infer _, infer _, infer _, infer _, infer _, infer _, infer _, infer _>,
      ]
      ? R
      : never
    : never
  readonly [X]: H extends HKT8
    ? [T] extends [Kind8<H, infer R, infer _, infer _, infer _, infer _, infer _, infer _, infer _>]
      ? R
      : never
    : never
  readonly [W]: H extends HKT7
    ? [T] extends [Kind7<H, infer R, infer _, infer _, infer _, infer _, infer _, infer _>]
      ? R
      : never
    : never
  readonly [V]: H extends HKT6
    ? [T] extends [Kind6<H, infer R, infer _, infer _, infer _, infer _, infer _>]
      ? R
      : never
    : never
  readonly [U]: H extends HKT5
    ? [T] extends [Kind5<H, infer R, infer _, infer _, infer _, infer _>]
      ? R
      : never
    : never
  readonly [S]: H extends HKT4
    ? [T] extends [Kind4<H, infer R, infer _, infer _, infer _>]
      ? R
      : never
    : never
  readonly [R]: H extends HKT3
    ? [T] extends [Kind3<H, infer R, infer _, infer _>]
      ? R
      : never
    : never
  readonly [E]: H extends HKT2 ? ([T] extends [Kind2<H, infer R, infer _>] ? R : never) : never
  readonly [A]: T extends Kind<H, infer R> ? R : never
}[P]