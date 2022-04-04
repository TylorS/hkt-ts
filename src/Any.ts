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

export interface Any<T extends HKT> {
  readonly any: () => Kind<T, unknown>
}

export interface Any1<T extends HKT> {
  readonly any: () => Kind<T, unknown>
}

export interface Any2<T extends HKT2> {
  readonly any: <E = T['defaults'][Params.E]>() => Kind2<T, E, unknown>
}

export interface Any3<T extends HKT3> {
  readonly any: <R = T['defaults'][Params.R], E = T['defaults'][Params.E]>() => Kind3<
    T,
    R,
    E,
    unknown
  >
}

export interface Any4<T extends HKT4> {
  readonly any: <
    S = T['defaults'][Params.S],
    R = T['defaults'][Params.R],
    E = T['defaults'][Params.E],
  >() => Kind4<T, S, R, E, unknown>
}

export interface Any5<T extends HKT5> {
  readonly any: <
    U = T['defaults'][Params.U],
    S = T['defaults'][Params.S],
    R = T['defaults'][Params.R],
    E = T['defaults'][Params.E],
  >() => Kind5<T, U, S, R, E, unknown>
}

export interface Any6<T extends HKT6> {
  readonly any: <
    V = T['defaults'][Params.V],
    U = T['defaults'][Params.U],
    S = T['defaults'][Params.S],
    R = T['defaults'][Params.R],
    E = T['defaults'][Params.E],
  >() => Kind6<T, V, U, S, R, E, unknown>
}

export interface Any7<T extends HKT7> {
  readonly any: <
    W = T['defaults'][Params.W],
    V = T['defaults'][Params.V],
    U = T['defaults'][Params.U],
    S = T['defaults'][Params.S],
    R = T['defaults'][Params.R],
    E = T['defaults'][Params.E],
  >() => Kind7<T, W, V, U, S, R, E, unknown>
}

export interface Any8<T extends HKT8> {
  readonly any: <
    X = T['defaults'][Params.X],
    W = T['defaults'][Params.W],
    V = T['defaults'][Params.V],
    U = T['defaults'][Params.U],
    S = T['defaults'][Params.S],
    R = T['defaults'][Params.R],
    E = T['defaults'][Params.E],
  >() => Kind8<T, X, W, V, U, S, R, E, unknown>
}

export interface Any9<T extends HKT9> {
  readonly any: <
    Y = T['defaults'][Params.Y],
    X = T['defaults'][Params.X],
    W = T['defaults'][Params.W],
    V = T['defaults'][Params.V],
    U = T['defaults'][Params.U],
    S = T['defaults'][Params.S],
    R = T['defaults'][Params.R],
    E = T['defaults'][Params.E],
  >() => Kind9<T, Y, X, W, V, U, S, R, E, unknown>
}

export interface Any10<T extends HKT10> {
  readonly any: <
    Z = T['defaults'][Params.Z],
    Y = T['defaults'][Params.Y],
    X = T['defaults'][Params.X],
    W = T['defaults'][Params.W],
    V = T['defaults'][Params.V],
    U = T['defaults'][Params.U],
    S = T['defaults'][Params.S],
    R = T['defaults'][Params.R],
    E = T['defaults'][Params.E],
  >() => Kind10<T, Z, Y, X, W, V, U, S, R, E, unknown>
}
