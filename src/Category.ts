import {
  AssociativeCompose10,
  AssociativeCompose2,
  AssociativeCompose3,
  AssociativeCompose4,
  AssociativeCompose5,
  AssociativeCompose6,
  AssociativeCompose7,
  AssociativeCompose8,
  AssociativeCompose9,
} from './AssociativeCompose'
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
  Params,
} from './HKT'

export interface Category<T extends HKT2> extends AssociativeCompose2<T> {
  readonly id: <A>() => Kind2<T, A, A>
}

export interface Category2<T extends HKT2> extends AssociativeCompose2<T> {
  readonly id: <A>() => Kind2<T, A, A>
}

export interface Category3<T extends HKT3> extends AssociativeCompose3<T> {
  readonly id: <A, R = T['defaults'][Params.R]>() => Kind3<T, R, A, A>
}

export interface Category4<T extends HKT4> extends AssociativeCompose4<T> {
  readonly id: <A, S = T['defaults'][Params.S], R = T['defaults'][Params.R]>() => Kind4<
    T,
    S,
    R,
    A,
    A
  >
}

export interface Category5<T extends HKT5> extends AssociativeCompose5<T> {
  readonly id: <
    A,
    U = T['defaults'][Params.U],
    S = T['defaults'][Params.S],
    R = T['defaults'][Params.R],
  >() => Kind5<T, U, S, R, A, A>
}

export interface Category6<T extends HKT6> extends AssociativeCompose6<T> {
  readonly id: <
    A,
    V = T['defaults'][Params.V],
    U = T['defaults'][Params.U],
    S = T['defaults'][Params.S],
    R = T['defaults'][Params.R],
  >() => Kind6<T, V, U, S, R, A, A>
}

export interface Category7<T extends HKT7> extends AssociativeCompose7<T> {
  readonly id: <
    A,
    W = T['defaults'][Params.W],
    V = T['defaults'][Params.V],
    U = T['defaults'][Params.U],
    S = T['defaults'][Params.S],
    R = T['defaults'][Params.R],
  >() => Kind7<T, W, V, U, S, R, A, A>
}

export interface Category8<T extends HKT8> extends AssociativeCompose8<T> {
  readonly id: <
    A,
    X = T['defaults'][Params.X],
    W = T['defaults'][Params.W],
    V = T['defaults'][Params.V],
    U = T['defaults'][Params.U],
    S = T['defaults'][Params.S],
    R = T['defaults'][Params.R],
  >() => Kind8<T, X, W, V, U, S, R, A, A>
}

export interface Category9<T extends HKT9> extends AssociativeCompose9<T> {
  readonly id: <
    A,
    Y = T['defaults'][Params.Y],
    X = T['defaults'][Params.X],
    W = T['defaults'][Params.W],
    V = T['defaults'][Params.V],
    U = T['defaults'][Params.U],
    S = T['defaults'][Params.S],
    R = T['defaults'][Params.R],
  >() => Kind9<T, Y, X, W, V, U, S, R, A, A>
}

export interface Category10<T extends HKT10> extends AssociativeCompose10<T> {
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
  >() => Kind10<T, Z, Y, X, W, V, U, S, R, A, A>
}
