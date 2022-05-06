import {
  DefaultOf,
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
} from '../HKT'

export interface Bottom<T extends HKT> {
  readonly bottom: Kind<T, never>
}

export interface Bottom1<T extends HKT> {
  readonly bottom: Kind<T, never>
}

export interface Bottom2<T extends HKT2> {
  readonly bottom: Kind2<T, DefaultOf<T, Params.E>, never>
}

export interface Bottom3<T extends HKT3> {
  readonly bottom: Kind3<T, DefaultOf<T, Params.R>, DefaultOf<T, Params.E>, never>
}

export interface Bottom4<T extends HKT4> {
  readonly bottom: Kind4<
    T,
    DefaultOf<T, Params.S>,
    DefaultOf<T, Params.R>,
    DefaultOf<T, Params.E>,
    never
  >
}

export interface Bottom5<T extends HKT5> {
  readonly bottom: Kind5<
    T,
    DefaultOf<T, Params.U>,
    DefaultOf<T, Params.S>,
    DefaultOf<T, Params.R>,
    DefaultOf<T, Params.E>,
    never
  >
}

export interface Bottom6<T extends HKT6> {
  readonly bottom: Kind6<
    T,
    DefaultOf<T, Params.V>,
    DefaultOf<T, Params.U>,
    DefaultOf<T, Params.S>,
    DefaultOf<T, Params.R>,
    DefaultOf<T, Params.E>,
    never
  >
}

export interface Bottom7<T extends HKT7> {
  readonly bottom: Kind7<
    T,
    DefaultOf<T, Params.W>,
    DefaultOf<T, Params.V>,
    DefaultOf<T, Params.U>,
    DefaultOf<T, Params.S>,
    DefaultOf<T, Params.R>,
    DefaultOf<T, Params.E>,
    never
  >
}

export interface Bottom8<T extends HKT8> {
  readonly bottom: Kind8<
    T,
    DefaultOf<T, Params.X>,
    DefaultOf<T, Params.W>,
    DefaultOf<T, Params.V>,
    DefaultOf<T, Params.U>,
    DefaultOf<T, Params.S>,
    DefaultOf<T, Params.R>,
    DefaultOf<T, Params.E>,
    never
  >
}

export interface Bottom9<T extends HKT9> {
  readonly bottom: Kind9<
    T,
    DefaultOf<T, Params.Y>,
    DefaultOf<T, Params.X>,
    DefaultOf<T, Params.W>,
    DefaultOf<T, Params.V>,
    DefaultOf<T, Params.U>,
    DefaultOf<T, Params.S>,
    DefaultOf<T, Params.R>,
    DefaultOf<T, Params.E>,
    never
  >
}

export interface Bottom10<T extends HKT10> {
  readonly bottom: Kind10<
    T,
    DefaultOf<T, Params.Z>,
    DefaultOf<T, Params.Y>,
    DefaultOf<T, Params.X>,
    DefaultOf<T, Params.W>,
    DefaultOf<T, Params.V>,
    DefaultOf<T, Params.U>,
    DefaultOf<T, Params.S>,
    DefaultOf<T, Params.R>,
    DefaultOf<T, Params.E>,
    never
  >
}
