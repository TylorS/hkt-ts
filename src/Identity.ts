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
  Params,
} from './HKT'

export interface Identity<T extends HKT> {
  readonly id: <A>() => Kind<T, A>
}

export interface Identity1<T extends HKT> {
  readonly id: <A>() => Kind<T, A>
}

export interface Identity2<T extends HKT2> {
  readonly id: <A, E = T['defaults'][Params.E]>() => Kind2<T, E, A>
}

export interface Identity3<T extends HKT3> {
  readonly id: <A, R = T['defaults'][Params.R], E = T['defaults'][Params.E]>() => Kind3<T, R, E, A>
}

export interface Identity4<T extends HKT4> {
  readonly id: <
    A,
    S = T['defaults'][Params.S],
    R = T['defaults'][Params.R],
    E = T['defaults'][Params.E],
  >() => Kind4<T, S, R, E, A>
}

export interface Identity5<T extends HKT5> {
  readonly id: <
    A,
    U = T['defaults'][Params.U],
    S = T['defaults'][Params.S],
    R = T['defaults'][Params.R],
    E = T['defaults'][Params.E],
  >() => Kind5<T, U, S, R, E, A>
}

export interface Identity6<T extends HKT6> {
  readonly id: <
    A,
    V = T['defaults'][Params.V],
    U = T['defaults'][Params.U],
    S = T['defaults'][Params.S],
    R = T['defaults'][Params.R],
    E = T['defaults'][Params.E],
  >() => Kind6<T, V, U, S, R, E, A>
}

export interface Identity7<T extends HKT7> {
  readonly id: <
    A,
    W = T['defaults'][Params.W],
    V = T['defaults'][Params.V],
    U = T['defaults'][Params.U],
    S = T['defaults'][Params.S],
    R = T['defaults'][Params.R],
    E = T['defaults'][Params.E],
  >() => Kind7<T, W, V, U, S, R, E, A>
}

export interface Identity8<T extends HKT8> {
  readonly id: <
    A,
    X = T['defaults'][Params.X],
    W = T['defaults'][Params.W],
    V = T['defaults'][Params.V],
    U = T['defaults'][Params.U],
    S = T['defaults'][Params.S],
    R = T['defaults'][Params.R],
    E = T['defaults'][Params.E],
  >() => Kind8<T, X, W, V, U, S, R, E, A>
}

export interface Identity9<T extends HKT9> {
  readonly id: <
    A,
    Y = T['defaults'][Params.Y],
    X = T['defaults'][Params.X],
    W = T['defaults'][Params.W],
    V = T['defaults'][Params.V],
    U = T['defaults'][Params.U],
    S = T['defaults'][Params.S],
    R = T['defaults'][Params.R],
    E = T['defaults'][Params.E],
  >() => Kind9<T, Y, X, W, V, U, S, R, E, A>
}

export interface Identity10<T extends HKT10> {
  readonly id: <
    A,
    Z = T['defaults'][Params.Z],
    Y = T['defaults'][Params.Y],
    X = T['defaults'][Params.X],
    W = T['defaults'][Params.W],
    V = T['defaults'][Params.V],
    U = T['defaults'][Params.U],
    S = T['defaults'][Params.S],
    R = T['defaults'][Params.R],
    E = T['defaults'][Params.E],
  >() => Kind10<T, Z, Y, X, W, V, U, S, R, E, A>
}
