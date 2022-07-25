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
} from '../HKT.js'

import {
  Covariant,
  Covariant1,
  Covariant10,
  Covariant2,
  Covariant2EC,
  Covariant3,
  Covariant3EC,
  Covariant3RC,
  Covariant3REC,
  Covariant4,
  Covariant4EC,
  Covariant4RC,
  Covariant4REC,
  Covariant4SC,
  Covariant4SEC,
  Covariant4SRC,
  Covariant4SREC,
  Covariant5,
  Covariant6,
  Covariant7,
  Covariant8,
  Covariant9,
} from './Covariant.js'
import {
  Top,
  Top1,
  Top10,
  Top2,
  Top2EC,
  Top3,
  Top3EC,
  Top3RC,
  Top3REC,
  Top4,
  Top4EC,
  Top4RC,
  Top4REC,
  Top4SC,
  Top4SEC,
  Top4SRC,
  Top4SREC,
  Top5,
  Top6,
  Top7,
  Top8,
  Top9,
} from './Top.js'

export interface Bottom<T extends HKT> {
  readonly bottom: Kind<T, never>
}

export interface Bottom1<T extends HKT> {
  readonly bottom: Kind<T, never>
}

export interface Bottom2<T extends HKT2> {
  readonly bottom: Kind2<T, DefaultOf<T, Params.E>, never>
}

export interface Bottom2EC<T extends HKT2, E> {
  readonly bottom: Kind2<T, E, never>
}

export interface Bottom3<T extends HKT3> {
  readonly bottom: Kind3<T, DefaultOf<T, Params.R>, DefaultOf<T, Params.E>, never>
}

export interface Bottom3RC<T extends HKT3, R> {
  readonly bottom: Kind3<T, R, DefaultOf<T, Params.E>, never>
}

export interface Bottom3REC<T extends HKT3, R, E> {
  readonly bottom: Kind3<T, R, E, never>
}

export interface Bottom3EC<T extends HKT3, E> {
  readonly bottom: Kind3<T, DefaultOf<T, Params.R>, E, never>
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

export interface Bottom4SREC<T extends HKT4, S, R, E> {
  readonly bottom: Kind4<T, S, R, E, never>
}

export interface Bottom4SC<T extends HKT4, S> {
  readonly bottom: Kind4<T, S, DefaultOf<T, Params.R>, DefaultOf<T, Params.E>, never>
}

export interface Bottom4SRC<T extends HKT4, S, R> {
  readonly bottom: Kind4<T, S, R, DefaultOf<T, Params.E>, never>
}

export interface Bottom4RC<T extends HKT4, R> {
  readonly bottom: Kind4<T, DefaultOf<T, Params.S>, R, DefaultOf<T, Params.E>, never>
}

export interface Bottom4SEC<T extends HKT4, S, E> {
  readonly bottom: Kind4<T, S, DefaultOf<T, Params.R>, E, never>
}

export interface Bottom4REC<T extends HKT4, R, E> {
  readonly bottom: Kind4<T, DefaultOf<T, Params.S>, R, E, never>
}

export interface Bottom4EC<T extends HKT4, E> {
  readonly bottom: Kind4<T, DefaultOf<T, Params.S>, DefaultOf<T, Params.R>, E, never>
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

export function bottom<F extends HKT10, G extends HKT10>(
  F: Top10<F> & Covariant10<F>,
  G: Bottom10<G>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT9, G extends HKT10>(
  F: Top9<F> & Covariant9<F>,
  G: Bottom10<G>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT8, G extends HKT10>(
  F: Top8<F> & Covariant8<F>,
  G: Bottom10<G>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT7, G extends HKT10>(
  F: Top7<F> & Covariant7<F>,
  G: Bottom10<G>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT6, G extends HKT10>(
  F: Top6<F> & Covariant6<F>,
  G: Bottom10<G>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT5, G extends HKT10>(
  F: Top5<F> & Covariant5<F>,
  G: Bottom10<G>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, E1, G extends HKT10>(
  F: Top4EC<F, E1> & Covariant4EC<F, E1>,
  G: Bottom10<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, R1, E1, G extends HKT10>(
  F: Top4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: Bottom10<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, S1, E1, G extends HKT10>(
  F: Top4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: Bottom10<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, R1, G extends HKT10>(
  F: Top4RC<F, R1> & Covariant4RC<F, R1>,
  G: Bottom10<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, S1, R1, G extends HKT10>(
  F: Top4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: Bottom10<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, S1, G extends HKT10>(
  F: Top4SC<F, S1> & Covariant4SC<F, S1>,
  G: Bottom10<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, S1, R1, E1, G extends HKT10>(
  F: Top4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: Bottom10<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, G extends HKT10>(
  F: Top4<F> & Covariant4<F>,
  G: Bottom10<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT3, E1, G extends HKT10>(
  F: Top3EC<F, E1> & Covariant3EC<F, E1>,
  G: Bottom10<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT3, R1, E1, G extends HKT10>(
  F: Top3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: Bottom10<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT3, R1, G extends HKT10>(
  F: Top3RC<F, R1> & Covariant3RC<F, R1>,
  G: Bottom10<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT3, G extends HKT10>(
  F: Top3<F> & Covariant3<F>,
  G: Bottom10<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT2, E1, G extends HKT10>(
  F: Top2EC<F, E1> & Covariant2EC<F, E1>,
  G: Bottom10<G>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT2, G extends HKT10>(
  F: Top2<F> & Covariant2<F>,
  G: Bottom10<G>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT, G extends HKT10>(
  F: Top1<F> & Covariant1<F>,
  G: Bottom10<G>,
): Kind<
  F,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT, G extends HKT10>(
  F: Top<F> & Covariant<F>,
  G: Bottom10<G>,
): Kind<
  F,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT10, G extends HKT9>(
  F: Top10<F> & Covariant10<F>,
  G: Bottom9<G>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT9, G extends HKT9>(
  F: Top9<F> & Covariant9<F>,
  G: Bottom9<G>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT8, G extends HKT9>(
  F: Top8<F> & Covariant8<F>,
  G: Bottom9<G>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT7, G extends HKT9>(
  F: Top7<F> & Covariant7<F>,
  G: Bottom9<G>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT6, G extends HKT9>(
  F: Top6<F> & Covariant6<F>,
  G: Bottom9<G>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT5, G extends HKT9>(
  F: Top5<F> & Covariant5<F>,
  G: Bottom9<G>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, E1, G extends HKT9>(
  F: Top4EC<F, E1> & Covariant4EC<F, E1>,
  G: Bottom9<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, R1, E1, G extends HKT9>(
  F: Top4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: Bottom9<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, S1, E1, G extends HKT9>(
  F: Top4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: Bottom9<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, R1, G extends HKT9>(
  F: Top4RC<F, R1> & Covariant4RC<F, R1>,
  G: Bottom9<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, S1, R1, G extends HKT9>(
  F: Top4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: Bottom9<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, S1, G extends HKT9>(
  F: Top4SC<F, S1> & Covariant4SC<F, S1>,
  G: Bottom9<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, S1, R1, E1, G extends HKT9>(
  F: Top4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: Bottom9<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, G extends HKT9>(
  F: Top4<F> & Covariant4<F>,
  G: Bottom9<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT3, E1, G extends HKT9>(
  F: Top3EC<F, E1> & Covariant3EC<F, E1>,
  G: Bottom9<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT3, R1, E1, G extends HKT9>(
  F: Top3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: Bottom9<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT3, R1, G extends HKT9>(
  F: Top3RC<F, R1> & Covariant3RC<F, R1>,
  G: Bottom9<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT3, G extends HKT9>(
  F: Top3<F> & Covariant3<F>,
  G: Bottom9<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT2, E1, G extends HKT9>(
  F: Top2EC<F, E1> & Covariant2EC<F, E1>,
  G: Bottom9<G>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT2, G extends HKT9>(
  F: Top2<F> & Covariant2<F>,
  G: Bottom9<G>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT, G extends HKT9>(
  F: Top1<F> & Covariant1<F>,
  G: Bottom9<G>,
): Kind<
  F,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT, G extends HKT9>(
  F: Top<F> & Covariant<F>,
  G: Bottom9<G>,
): Kind<
  F,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT10, G extends HKT8>(
  F: Top10<F> & Covariant10<F>,
  G: Bottom8<G>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT9, G extends HKT8>(
  F: Top9<F> & Covariant9<F>,
  G: Bottom8<G>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT8, G extends HKT8>(
  F: Top8<F> & Covariant8<F>,
  G: Bottom8<G>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT7, G extends HKT8>(
  F: Top7<F> & Covariant7<F>,
  G: Bottom8<G>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT6, G extends HKT8>(
  F: Top6<F> & Covariant6<F>,
  G: Bottom8<G>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT5, G extends HKT8>(
  F: Top5<F> & Covariant5<F>,
  G: Bottom8<G>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, E1, G extends HKT8>(
  F: Top4EC<F, E1> & Covariant4EC<F, E1>,
  G: Bottom8<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, R1, E1, G extends HKT8>(
  F: Top4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: Bottom8<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, S1, E1, G extends HKT8>(
  F: Top4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: Bottom8<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, R1, G extends HKT8>(
  F: Top4RC<F, R1> & Covariant4RC<F, R1>,
  G: Bottom8<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, S1, R1, G extends HKT8>(
  F: Top4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: Bottom8<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, S1, G extends HKT8>(
  F: Top4SC<F, S1> & Covariant4SC<F, S1>,
  G: Bottom8<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, S1, R1, E1, G extends HKT8>(
  F: Top4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: Bottom8<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, G extends HKT8>(
  F: Top4<F> & Covariant4<F>,
  G: Bottom8<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT3, E1, G extends HKT8>(
  F: Top3EC<F, E1> & Covariant3EC<F, E1>,
  G: Bottom8<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT3, R1, E1, G extends HKT8>(
  F: Top3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: Bottom8<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT3, R1, G extends HKT8>(
  F: Top3RC<F, R1> & Covariant3RC<F, R1>,
  G: Bottom8<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT3, G extends HKT8>(
  F: Top3<F> & Covariant3<F>,
  G: Bottom8<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT2, E1, G extends HKT8>(
  F: Top2EC<F, E1> & Covariant2EC<F, E1>,
  G: Bottom8<G>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT2, G extends HKT8>(
  F: Top2<F> & Covariant2<F>,
  G: Bottom8<G>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT, G extends HKT8>(
  F: Top1<F> & Covariant1<F>,
  G: Bottom8<G>,
): Kind<
  F,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT, G extends HKT8>(
  F: Top<F> & Covariant<F>,
  G: Bottom8<G>,
): Kind<
  F,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT10, G extends HKT7>(
  F: Top10<F> & Covariant10<F>,
  G: Bottom7<G>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT9, G extends HKT7>(
  F: Top9<F> & Covariant9<F>,
  G: Bottom7<G>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT8, G extends HKT7>(
  F: Top8<F> & Covariant8<F>,
  G: Bottom7<G>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT7, G extends HKT7>(
  F: Top7<F> & Covariant7<F>,
  G: Bottom7<G>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT6, G extends HKT7>(
  F: Top6<F> & Covariant6<F>,
  G: Bottom7<G>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT5, G extends HKT7>(
  F: Top5<F> & Covariant5<F>,
  G: Bottom7<G>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, E1, G extends HKT7>(
  F: Top4EC<F, E1> & Covariant4EC<F, E1>,
  G: Bottom7<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, R1, E1, G extends HKT7>(
  F: Top4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: Bottom7<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, S1, E1, G extends HKT7>(
  F: Top4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: Bottom7<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, R1, G extends HKT7>(
  F: Top4RC<F, R1> & Covariant4RC<F, R1>,
  G: Bottom7<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, S1, R1, G extends HKT7>(
  F: Top4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: Bottom7<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, S1, G extends HKT7>(
  F: Top4SC<F, S1> & Covariant4SC<F, S1>,
  G: Bottom7<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, S1, R1, E1, G extends HKT7>(
  F: Top4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: Bottom7<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, G extends HKT7>(
  F: Top4<F> & Covariant4<F>,
  G: Bottom7<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT3, E1, G extends HKT7>(
  F: Top3EC<F, E1> & Covariant3EC<F, E1>,
  G: Bottom7<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT3, R1, E1, G extends HKT7>(
  F: Top3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: Bottom7<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT3, R1, G extends HKT7>(
  F: Top3RC<F, R1> & Covariant3RC<F, R1>,
  G: Bottom7<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT3, G extends HKT7>(
  F: Top3<F> & Covariant3<F>,
  G: Bottom7<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT2, E1, G extends HKT7>(
  F: Top2EC<F, E1> & Covariant2EC<F, E1>,
  G: Bottom7<G>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT2, G extends HKT7>(
  F: Top2<F> & Covariant2<F>,
  G: Bottom7<G>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT, G extends HKT7>(
  F: Top1<F> & Covariant1<F>,
  G: Bottom7<G>,
): Kind<
  F,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT, G extends HKT7>(
  F: Top<F> & Covariant<F>,
  G: Bottom7<G>,
): Kind<
  F,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT10, G extends HKT6>(
  F: Top10<F> & Covariant10<F>,
  G: Bottom6<G>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT9, G extends HKT6>(
  F: Top9<F> & Covariant9<F>,
  G: Bottom6<G>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT8, G extends HKT6>(
  F: Top8<F> & Covariant8<F>,
  G: Bottom6<G>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT7, G extends HKT6>(
  F: Top7<F> & Covariant7<F>,
  G: Bottom6<G>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT6, G extends HKT6>(
  F: Top6<F> & Covariant6<F>,
  G: Bottom6<G>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT5, G extends HKT6>(
  F: Top5<F> & Covariant5<F>,
  G: Bottom6<G>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, E1, G extends HKT6>(
  F: Top4EC<F, E1> & Covariant4EC<F, E1>,
  G: Bottom6<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, R1, E1, G extends HKT6>(
  F: Top4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: Bottom6<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, S1, E1, G extends HKT6>(
  F: Top4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: Bottom6<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, R1, G extends HKT6>(
  F: Top4RC<F, R1> & Covariant4RC<F, R1>,
  G: Bottom6<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, S1, R1, G extends HKT6>(
  F: Top4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: Bottom6<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, S1, G extends HKT6>(
  F: Top4SC<F, S1> & Covariant4SC<F, S1>,
  G: Bottom6<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, S1, R1, E1, G extends HKT6>(
  F: Top4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: Bottom6<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, G extends HKT6>(
  F: Top4<F> & Covariant4<F>,
  G: Bottom6<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT3, E1, G extends HKT6>(
  F: Top3EC<F, E1> & Covariant3EC<F, E1>,
  G: Bottom6<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT3, R1, E1, G extends HKT6>(
  F: Top3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: Bottom6<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT3, R1, G extends HKT6>(
  F: Top3RC<F, R1> & Covariant3RC<F, R1>,
  G: Bottom6<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT3, G extends HKT6>(
  F: Top3<F> & Covariant3<F>,
  G: Bottom6<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT2, E1, G extends HKT6>(
  F: Top2EC<F, E1> & Covariant2EC<F, E1>,
  G: Bottom6<G>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT2, G extends HKT6>(
  F: Top2<F> & Covariant2<F>,
  G: Bottom6<G>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT, G extends HKT6>(
  F: Top1<F> & Covariant1<F>,
  G: Bottom6<G>,
): Kind<
  F,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT, G extends HKT6>(
  F: Top<F> & Covariant<F>,
  G: Bottom6<G>,
): Kind<
  F,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT10, G extends HKT5>(
  F: Top10<F> & Covariant10<F>,
  G: Bottom5<G>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT9, G extends HKT5>(
  F: Top9<F> & Covariant9<F>,
  G: Bottom5<G>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT8, G extends HKT5>(
  F: Top8<F> & Covariant8<F>,
  G: Bottom5<G>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT7, G extends HKT5>(
  F: Top7<F> & Covariant7<F>,
  G: Bottom5<G>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT6, G extends HKT5>(
  F: Top6<F> & Covariant6<F>,
  G: Bottom5<G>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT5, G extends HKT5>(
  F: Top5<F> & Covariant5<F>,
  G: Bottom5<G>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, E1, G extends HKT5>(
  F: Top4EC<F, E1> & Covariant4EC<F, E1>,
  G: Bottom5<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, R1, E1, G extends HKT5>(
  F: Top4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: Bottom5<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, S1, E1, G extends HKT5>(
  F: Top4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: Bottom5<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, R1, G extends HKT5>(
  F: Top4RC<F, R1> & Covariant4RC<F, R1>,
  G: Bottom5<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, S1, R1, G extends HKT5>(
  F: Top4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: Bottom5<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, S1, G extends HKT5>(
  F: Top4SC<F, S1> & Covariant4SC<F, S1>,
  G: Bottom5<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, S1, R1, E1, G extends HKT5>(
  F: Top4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: Bottom5<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT4, G extends HKT5>(
  F: Top4<F> & Covariant4<F>,
  G: Bottom5<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT3, E1, G extends HKT5>(
  F: Top3EC<F, E1> & Covariant3EC<F, E1>,
  G: Bottom5<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT3, R1, E1, G extends HKT5>(
  F: Top3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: Bottom5<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT3, R1, G extends HKT5>(
  F: Top3RC<F, R1> & Covariant3RC<F, R1>,
  G: Bottom5<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT3, G extends HKT5>(
  F: Top3<F> & Covariant3<F>,
  G: Bottom5<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT2, E1, G extends HKT5>(
  F: Top2EC<F, E1> & Covariant2EC<F, E1>,
  G: Bottom5<G>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT2, G extends HKT5>(
  F: Top2<F> & Covariant2<F>,
  G: Bottom5<G>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT, G extends HKT5>(
  F: Top1<F> & Covariant1<F>,
  G: Bottom5<G>,
): Kind<
  F,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT, G extends HKT5>(
  F: Top<F> & Covariant<F>,
  G: Bottom5<G>,
): Kind<
  F,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    never
  >
>

export function bottom<F extends HKT10, G extends HKT4, E2>(
  F: Top10<F> & Covariant10<F>,
  G: Bottom4EC<G, E2>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT10, G extends HKT4, R2, E2>(
  F: Top10<F> & Covariant10<F>,
  G: Bottom4REC<G, R2, E2>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT10, G extends HKT4, S2, E2>(
  F: Top10<F> & Covariant10<F>,
  G: Bottom4SEC<G, S2, E2>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT10, G extends HKT4, R2>(
  F: Top10<F> & Covariant10<F>,
  G: Bottom4RC<G, R2>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT10, G extends HKT4, S2, R2>(
  F: Top10<F> & Covariant10<F>,
  G: Bottom4SRC<G, S2, R2>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT10, G extends HKT4, S2>(
  F: Top10<F> & Covariant10<F>,
  G: Bottom4SC<G, S2>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT10, G extends HKT4, S2, R2, E2>(
  F: Top10<F> & Covariant10<F>,
  G: Bottom4SREC<G, S2, R2, E2>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT10, G extends HKT4>(
  F: Top10<F> & Covariant10<F>,
  G: Bottom4<G>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT9, G extends HKT4, E2>(
  F: Top9<F> & Covariant9<F>,
  G: Bottom4EC<G, E2>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT9, G extends HKT4, R2, E2>(
  F: Top9<F> & Covariant9<F>,
  G: Bottom4REC<G, R2, E2>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT9, G extends HKT4, S2, E2>(
  F: Top9<F> & Covariant9<F>,
  G: Bottom4SEC<G, S2, E2>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT9, G extends HKT4, R2>(
  F: Top9<F> & Covariant9<F>,
  G: Bottom4RC<G, R2>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT9, G extends HKT4, S2, R2>(
  F: Top9<F> & Covariant9<F>,
  G: Bottom4SRC<G, S2, R2>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT9, G extends HKT4, S2>(
  F: Top9<F> & Covariant9<F>,
  G: Bottom4SC<G, S2>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT9, G extends HKT4, S2, R2, E2>(
  F: Top9<F> & Covariant9<F>,
  G: Bottom4SREC<G, S2, R2, E2>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT9, G extends HKT4>(
  F: Top9<F> & Covariant9<F>,
  G: Bottom4<G>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT8, G extends HKT4, E2>(
  F: Top8<F> & Covariant8<F>,
  G: Bottom4EC<G, E2>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT8, G extends HKT4, R2, E2>(
  F: Top8<F> & Covariant8<F>,
  G: Bottom4REC<G, R2, E2>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT8, G extends HKT4, S2, E2>(
  F: Top8<F> & Covariant8<F>,
  G: Bottom4SEC<G, S2, E2>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT8, G extends HKT4, R2>(
  F: Top8<F> & Covariant8<F>,
  G: Bottom4RC<G, R2>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT8, G extends HKT4, S2, R2>(
  F: Top8<F> & Covariant8<F>,
  G: Bottom4SRC<G, S2, R2>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT8, G extends HKT4, S2>(
  F: Top8<F> & Covariant8<F>,
  G: Bottom4SC<G, S2>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT8, G extends HKT4, S2, R2, E2>(
  F: Top8<F> & Covariant8<F>,
  G: Bottom4SREC<G, S2, R2, E2>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT8, G extends HKT4>(
  F: Top8<F> & Covariant8<F>,
  G: Bottom4<G>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT7, G extends HKT4, E2>(
  F: Top7<F> & Covariant7<F>,
  G: Bottom4EC<G, E2>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT7, G extends HKT4, R2, E2>(
  F: Top7<F> & Covariant7<F>,
  G: Bottom4REC<G, R2, E2>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT7, G extends HKT4, S2, E2>(
  F: Top7<F> & Covariant7<F>,
  G: Bottom4SEC<G, S2, E2>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT7, G extends HKT4, R2>(
  F: Top7<F> & Covariant7<F>,
  G: Bottom4RC<G, R2>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT7, G extends HKT4, S2, R2>(
  F: Top7<F> & Covariant7<F>,
  G: Bottom4SRC<G, S2, R2>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT7, G extends HKT4, S2>(
  F: Top7<F> & Covariant7<F>,
  G: Bottom4SC<G, S2>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT7, G extends HKT4, S2, R2, E2>(
  F: Top7<F> & Covariant7<F>,
  G: Bottom4SREC<G, S2, R2, E2>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT7, G extends HKT4>(
  F: Top7<F> & Covariant7<F>,
  G: Bottom4<G>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT6, G extends HKT4, E2>(
  F: Top6<F> & Covariant6<F>,
  G: Bottom4EC<G, E2>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT6, G extends HKT4, R2, E2>(
  F: Top6<F> & Covariant6<F>,
  G: Bottom4REC<G, R2, E2>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT6, G extends HKT4, S2, E2>(
  F: Top6<F> & Covariant6<F>,
  G: Bottom4SEC<G, S2, E2>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT6, G extends HKT4, R2>(
  F: Top6<F> & Covariant6<F>,
  G: Bottom4RC<G, R2>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT6, G extends HKT4, S2, R2>(
  F: Top6<F> & Covariant6<F>,
  G: Bottom4SRC<G, S2, R2>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT6, G extends HKT4, S2>(
  F: Top6<F> & Covariant6<F>,
  G: Bottom4SC<G, S2>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT6, G extends HKT4, S2, R2, E2>(
  F: Top6<F> & Covariant6<F>,
  G: Bottom4SREC<G, S2, R2, E2>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT6, G extends HKT4>(
  F: Top6<F> & Covariant6<F>,
  G: Bottom4<G>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT5, G extends HKT4, E2>(
  F: Top5<F> & Covariant5<F>,
  G: Bottom4EC<G, E2>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT5, G extends HKT4, R2, E2>(
  F: Top5<F> & Covariant5<F>,
  G: Bottom4REC<G, R2, E2>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT5, G extends HKT4, S2, E2>(
  F: Top5<F> & Covariant5<F>,
  G: Bottom4SEC<G, S2, E2>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT5, G extends HKT4, R2>(
  F: Top5<F> & Covariant5<F>,
  G: Bottom4RC<G, R2>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT5, G extends HKT4, S2, R2>(
  F: Top5<F> & Covariant5<F>,
  G: Bottom4SRC<G, S2, R2>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT5, G extends HKT4, S2>(
  F: Top5<F> & Covariant5<F>,
  G: Bottom4SC<G, S2>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT5, G extends HKT4, S2, R2, E2>(
  F: Top5<F> & Covariant5<F>,
  G: Bottom4SREC<G, S2, R2, E2>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT5, G extends HKT4>(
  F: Top5<F> & Covariant5<F>,
  G: Bottom4<G>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT4, E1, G extends HKT4, E2>(
  F: Top4EC<F, E1> & Covariant4EC<F, E1>,
  G: Bottom4EC<G, E2>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT4, R1, E1, G extends HKT4, R2, E2>(
  F: Top4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: Bottom4REC<G, R2, E2>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT4, S1, E1, G extends HKT4, S2, E2>(
  F: Top4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: Bottom4SEC<G, S2, E2>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT4, R1, G extends HKT4, R2>(
  F: Top4RC<F, R1> & Covariant4RC<F, R1>,
  G: Bottom4RC<G, R2>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT4, S1, R1, G extends HKT4, S2, R2>(
  F: Top4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: Bottom4SRC<G, S2, R2>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT4, S1, G extends HKT4, S2>(
  F: Top4SC<F, S1> & Covariant4SC<F, S1>,
  G: Bottom4SC<G, S2>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT4, S1, R1, E1, G extends HKT4, S2, R2, E2>(
  F: Top4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: Bottom4SREC<G, S2, R2, E2>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT4, G extends HKT4>(
  F: Top4<F> & Covariant4<F>,
  G: Bottom4<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT3, G extends HKT4, E2>(
  F: Top3<F> & Covariant3<F>,
  G: Bottom4EC<G, E2>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT3, G extends HKT4, R2, E2>(
  F: Top3<F> & Covariant3<F>,
  G: Bottom4REC<G, R2, E2>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT3, G extends HKT4, S2, E2>(
  F: Top3<F> & Covariant3<F>,
  G: Bottom4SEC<G, S2, E2>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT3, G extends HKT4, R2>(
  F: Top3<F> & Covariant3<F>,
  G: Bottom4RC<G, R2>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT3, E1, G extends HKT4, S2, R2>(
  F: Top3EC<F, E1> & Covariant3EC<F, E1>,
  G: Bottom4SRC<G, S2, R2>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT3, R1, E1, G extends HKT4, S2>(
  F: Top3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: Bottom4SC<G, S2>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT3, R1, G extends HKT4, S2, R2, E2>(
  F: Top3RC<F, R1> & Covariant3RC<F, R1>,
  G: Bottom4SREC<G, S2, R2, E2>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT3, G extends HKT4>(
  F: Top3<F> & Covariant3<F>,
  G: Bottom4<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT2, G extends HKT4, E2>(
  F: Top2<F> & Covariant2<F>,
  G: Bottom4EC<G, E2>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT2, G extends HKT4, R2, E2>(
  F: Top2<F> & Covariant2<F>,
  G: Bottom4REC<G, R2, E2>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT2, G extends HKT4, S2, E2>(
  F: Top2<F> & Covariant2<F>,
  G: Bottom4SEC<G, S2, E2>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT2, G extends HKT4, R2>(
  F: Top2<F> & Covariant2<F>,
  G: Bottom4RC<G, R2>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT2, G extends HKT4, S2, R2>(
  F: Top2<F> & Covariant2<F>,
  G: Bottom4SRC<G, S2, R2>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT2, G extends HKT4, S2>(
  F: Top2<F> & Covariant2<F>,
  G: Bottom4SC<G, S2>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT2, E1, G extends HKT4, S2, R2, E2>(
  F: Top2EC<F, E1> & Covariant2EC<F, E1>,
  G: Bottom4SREC<G, S2, R2, E2>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT2, G extends HKT4>(
  F: Top2<F> & Covariant2<F>,
  G: Bottom4<G>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT, G extends HKT4, E2>(
  F: Top1<F> & Covariant1<F>,
  G: Bottom4EC<G, E2>,
): Kind<F, Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT, G extends HKT4, R2, E2>(
  F: Top1<F> & Covariant1<F>,
  G: Bottom4REC<G, R2, E2>,
): Kind<F, Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT, G extends HKT4, S2, E2>(
  F: Top1<F> & Covariant1<F>,
  G: Bottom4SEC<G, S2, E2>,
): Kind<F, Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT, G extends HKT4, R2>(
  F: Top1<F> & Covariant1<F>,
  G: Bottom4RC<G, R2>,
): Kind<F, Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT, G extends HKT4, S2, R2>(
  F: Top1<F> & Covariant1<F>,
  G: Bottom4SRC<G, S2, R2>,
): Kind<F, Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT, G extends HKT4, S2>(
  F: Top1<F> & Covariant1<F>,
  G: Bottom4SC<G, S2>,
): Kind<F, Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT, G extends HKT4, S2, R2, E2>(
  F: Top1<F> & Covariant1<F>,
  G: Bottom4SREC<G, S2, R2, E2>,
): Kind<F, Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT, G extends HKT4>(
  F: Top1<F> & Covariant1<F>,
  G: Bottom4<G>,
): Kind<F, Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT, G extends HKT4, E2>(
  F: Top<F> & Covariant<F>,
  G: Bottom4EC<G, E2>,
): Kind<F, Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT, G extends HKT4, R2, E2>(
  F: Top<F> & Covariant<F>,
  G: Bottom4REC<G, R2, E2>,
): Kind<F, Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT, G extends HKT4, S2, E2>(
  F: Top<F> & Covariant<F>,
  G: Bottom4SEC<G, S2, E2>,
): Kind<F, Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT, G extends HKT4, R2>(
  F: Top<F> & Covariant<F>,
  G: Bottom4RC<G, R2>,
): Kind<F, Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT, G extends HKT4, S2, R2>(
  F: Top<F> & Covariant<F>,
  G: Bottom4SRC<G, S2, R2>,
): Kind<F, Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT, G extends HKT4, S2>(
  F: Top<F> & Covariant<F>,
  G: Bottom4SC<G, S2>,
): Kind<F, Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT, G extends HKT4, S2, R2, E2>(
  F: Top<F> & Covariant<F>,
  G: Bottom4SREC<G, S2, R2, E2>,
): Kind<F, Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT, G extends HKT4>(
  F: Top<F> & Covariant<F>,
  G: Bottom4<G>,
): Kind<F, Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT10, G extends HKT3, E2>(
  F: Top10<F> & Covariant10<F>,
  G: Bottom3EC<G, E2>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT10, G extends HKT3, R2, E2>(
  F: Top10<F> & Covariant10<F>,
  G: Bottom3REC<G, R2, E2>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT10, G extends HKT3, R2>(
  F: Top10<F> & Covariant10<F>,
  G: Bottom3RC<G, R2>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT10, G extends HKT3>(
  F: Top10<F> & Covariant10<F>,
  G: Bottom3<G>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT9, G extends HKT3, E2>(
  F: Top9<F> & Covariant9<F>,
  G: Bottom3EC<G, E2>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT9, G extends HKT3, R2, E2>(
  F: Top9<F> & Covariant9<F>,
  G: Bottom3REC<G, R2, E2>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT9, G extends HKT3, R2>(
  F: Top9<F> & Covariant9<F>,
  G: Bottom3RC<G, R2>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT9, G extends HKT3>(
  F: Top9<F> & Covariant9<F>,
  G: Bottom3<G>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT8, G extends HKT3, E2>(
  F: Top8<F> & Covariant8<F>,
  G: Bottom3EC<G, E2>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT8, G extends HKT3, R2, E2>(
  F: Top8<F> & Covariant8<F>,
  G: Bottom3REC<G, R2, E2>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT8, G extends HKT3, R2>(
  F: Top8<F> & Covariant8<F>,
  G: Bottom3RC<G, R2>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT8, G extends HKT3>(
  F: Top8<F> & Covariant8<F>,
  G: Bottom3<G>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT7, G extends HKT3, E2>(
  F: Top7<F> & Covariant7<F>,
  G: Bottom3EC<G, E2>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT7, G extends HKT3, R2, E2>(
  F: Top7<F> & Covariant7<F>,
  G: Bottom3REC<G, R2, E2>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT7, G extends HKT3, R2>(
  F: Top7<F> & Covariant7<F>,
  G: Bottom3RC<G, R2>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT7, G extends HKT3>(
  F: Top7<F> & Covariant7<F>,
  G: Bottom3<G>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT6, G extends HKT3, E2>(
  F: Top6<F> & Covariant6<F>,
  G: Bottom3EC<G, E2>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT6, G extends HKT3, R2, E2>(
  F: Top6<F> & Covariant6<F>,
  G: Bottom3REC<G, R2, E2>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT6, G extends HKT3, R2>(
  F: Top6<F> & Covariant6<F>,
  G: Bottom3RC<G, R2>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT6, G extends HKT3>(
  F: Top6<F> & Covariant6<F>,
  G: Bottom3<G>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT5, G extends HKT3, E2>(
  F: Top5<F> & Covariant5<F>,
  G: Bottom3EC<G, E2>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT5, G extends HKT3, R2, E2>(
  F: Top5<F> & Covariant5<F>,
  G: Bottom3REC<G, R2, E2>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT5, G extends HKT3, R2>(
  F: Top5<F> & Covariant5<F>,
  G: Bottom3RC<G, R2>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT5, G extends HKT3>(
  F: Top5<F> & Covariant5<F>,
  G: Bottom3<G>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT4, E1, G extends HKT3>(
  F: Top4EC<F, E1> & Covariant4EC<F, E1>,
  G: Bottom3<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT4, R1, E1, G extends HKT3>(
  F: Top4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: Bottom3<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT4, S1, E1, G extends HKT3>(
  F: Top4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: Bottom3<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT4, R1, G extends HKT3>(
  F: Top4RC<F, R1> & Covariant4RC<F, R1>,
  G: Bottom3<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT4, S1, R1, G extends HKT3, E2>(
  F: Top4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: Bottom3EC<G, E2>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT4, S1, G extends HKT3, R2, E2>(
  F: Top4SC<F, S1> & Covariant4SC<F, S1>,
  G: Bottom3REC<G, R2, E2>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT4, S1, R1, E1, G extends HKT3, R2>(
  F: Top4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: Bottom3RC<G, R2>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT4, G extends HKT3>(
  F: Top4<F> & Covariant4<F>,
  G: Bottom3<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT3, E1, G extends HKT3, E2>(
  F: Top3EC<F, E1> & Covariant3EC<F, E1>,
  G: Bottom3EC<G, E2>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT3, R1, E1, G extends HKT3, R2, E2>(
  F: Top3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: Bottom3REC<G, R2, E2>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT3, R1, G extends HKT3, R2>(
  F: Top3RC<F, R1> & Covariant3RC<F, R1>,
  G: Bottom3RC<G, R2>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT3, G extends HKT3>(
  F: Top3<F> & Covariant3<F>,
  G: Bottom3<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT2, G extends HKT3, E2>(
  F: Top2<F> & Covariant2<F>,
  G: Bottom3EC<G, E2>,
): Kind2<F, DefaultOf<F, Params.E>, Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT2, G extends HKT3, R2, E2>(
  F: Top2<F> & Covariant2<F>,
  G: Bottom3REC<G, R2, E2>,
): Kind2<F, DefaultOf<F, Params.E>, Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT2, E1, G extends HKT3, R2>(
  F: Top2EC<F, E1> & Covariant2EC<F, E1>,
  G: Bottom3RC<G, R2>,
): Kind2<F, DefaultOf<F, Params.E>, Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT2, G extends HKT3>(
  F: Top2<F> & Covariant2<F>,
  G: Bottom3<G>,
): Kind2<F, DefaultOf<F, Params.E>, Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT, G extends HKT3, E2>(
  F: Top1<F> & Covariant1<F>,
  G: Bottom3EC<G, E2>,
): Kind<F, Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT, G extends HKT3, R2, E2>(
  F: Top1<F> & Covariant1<F>,
  G: Bottom3REC<G, R2, E2>,
): Kind<F, Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT, G extends HKT3, R2>(
  F: Top1<F> & Covariant1<F>,
  G: Bottom3RC<G, R2>,
): Kind<F, Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT, G extends HKT3>(
  F: Top1<F> & Covariant1<F>,
  G: Bottom3<G>,
): Kind<F, Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT, G extends HKT3, E2>(
  F: Top<F> & Covariant<F>,
  G: Bottom3EC<G, E2>,
): Kind<F, Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT, G extends HKT3, R2, E2>(
  F: Top<F> & Covariant<F>,
  G: Bottom3REC<G, R2, E2>,
): Kind<F, Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT, G extends HKT3, R2>(
  F: Top<F> & Covariant<F>,
  G: Bottom3RC<G, R2>,
): Kind<F, Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT, G extends HKT3>(
  F: Top<F> & Covariant<F>,
  G: Bottom3<G>,
): Kind<F, Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT10, G extends HKT2, E2>(
  F: Top10<F> & Covariant10<F>,
  G: Bottom2EC<G, E2>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT10, G extends HKT2>(
  F: Top10<F> & Covariant10<F>,
  G: Bottom2<G>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT9, G extends HKT2, E2>(
  F: Top9<F> & Covariant9<F>,
  G: Bottom2EC<G, E2>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT9, G extends HKT2>(
  F: Top9<F> & Covariant9<F>,
  G: Bottom2<G>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT8, G extends HKT2, E2>(
  F: Top8<F> & Covariant8<F>,
  G: Bottom2EC<G, E2>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT8, G extends HKT2>(
  F: Top8<F> & Covariant8<F>,
  G: Bottom2<G>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT7, G extends HKT2, E2>(
  F: Top7<F> & Covariant7<F>,
  G: Bottom2EC<G, E2>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT7, G extends HKT2>(
  F: Top7<F> & Covariant7<F>,
  G: Bottom2<G>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT6, G extends HKT2, E2>(
  F: Top6<F> & Covariant6<F>,
  G: Bottom2EC<G, E2>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT6, G extends HKT2>(
  F: Top6<F> & Covariant6<F>,
  G: Bottom2<G>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT5, G extends HKT2, E2>(
  F: Top5<F> & Covariant5<F>,
  G: Bottom2EC<G, E2>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT5, G extends HKT2>(
  F: Top5<F> & Covariant5<F>,
  G: Bottom2<G>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT4, E1, G extends HKT2>(
  F: Top4EC<F, E1> & Covariant4EC<F, E1>,
  G: Bottom2<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT4, R1, E1, G extends HKT2>(
  F: Top4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: Bottom2<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT4, S1, E1, G extends HKT2>(
  F: Top4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: Bottom2<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT4, R1, G extends HKT2>(
  F: Top4RC<F, R1> & Covariant4RC<F, R1>,
  G: Bottom2<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT4, S1, R1, G extends HKT2>(
  F: Top4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: Bottom2<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT4, S1, G extends HKT2>(
  F: Top4SC<F, S1> & Covariant4SC<F, S1>,
  G: Bottom2<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT4, S1, R1, E1, G extends HKT2, E2>(
  F: Top4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: Bottom2EC<G, E2>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT4, G extends HKT2>(
  F: Top4<F> & Covariant4<F>,
  G: Bottom2<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, never>
>

export function bottom<F extends HKT3, E1, G extends HKT2>(
  F: Top3EC<F, E1> & Covariant3EC<F, E1>,
  G: Bottom2<G>,
): Kind3<F, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind2<G, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT3, R1, E1, G extends HKT2>(
  F: Top3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: Bottom2<G>,
): Kind3<F, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind2<G, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT3, R1, G extends HKT2, E2>(
  F: Top3RC<F, R1> & Covariant3RC<F, R1>,
  G: Bottom2EC<G, E2>,
): Kind3<F, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind2<G, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT3, G extends HKT2>(
  F: Top3<F> & Covariant3<F>,
  G: Bottom2<G>,
): Kind3<F, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind2<G, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT2, E1, G extends HKT2, E2>(
  F: Top2EC<F, E1> & Covariant2EC<F, E1>,
  G: Bottom2EC<G, E2>,
): Kind2<F, DefaultOf<F, Params.E>, Kind2<G, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT2, G extends HKT2>(
  F: Top2<F> & Covariant2<F>,
  G: Bottom2<G>,
): Kind2<F, DefaultOf<F, Params.E>, Kind2<G, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT, G extends HKT2, E2>(
  F: Top1<F> & Covariant1<F>,
  G: Bottom2EC<G, E2>,
): Kind<F, Kind2<G, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT, G extends HKT2>(
  F: Top1<F> & Covariant1<F>,
  G: Bottom2<G>,
): Kind<F, Kind2<G, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT, G extends HKT2, E2>(
  F: Top<F> & Covariant<F>,
  G: Bottom2EC<G, E2>,
): Kind<F, Kind2<G, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT, G extends HKT2>(
  F: Top<F> & Covariant<F>,
  G: Bottom2<G>,
): Kind<F, Kind2<G, DefaultOf<G, Params.E>, never>>

export function bottom<F extends HKT10, G extends HKT>(
  F: Top10<F> & Covariant10<F>,
  G: Bottom1<G>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, never>
>

export function bottom<F extends HKT9, G extends HKT>(
  F: Top9<F> & Covariant9<F>,
  G: Bottom1<G>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, never>
>

export function bottom<F extends HKT8, G extends HKT>(
  F: Top8<F> & Covariant8<F>,
  G: Bottom1<G>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, never>
>

export function bottom<F extends HKT7, G extends HKT>(
  F: Top7<F> & Covariant7<F>,
  G: Bottom1<G>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, never>
>

export function bottom<F extends HKT6, G extends HKT>(
  F: Top6<F> & Covariant6<F>,
  G: Bottom1<G>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, never>
>

export function bottom<F extends HKT5, G extends HKT>(
  F: Top5<F> & Covariant5<F>,
  G: Bottom1<G>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, never>
>

export function bottom<F extends HKT4, E1, G extends HKT>(
  F: Top4EC<F, E1> & Covariant4EC<F, E1>,
  G: Bottom1<G>,
): Kind4<F, DefaultOf<F, Params.S>, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind<G, never>>

export function bottom<F extends HKT4, R1, E1, G extends HKT>(
  F: Top4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: Bottom1<G>,
): Kind4<F, DefaultOf<F, Params.S>, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind<G, never>>

export function bottom<F extends HKT4, S1, E1, G extends HKT>(
  F: Top4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: Bottom1<G>,
): Kind4<F, DefaultOf<F, Params.S>, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind<G, never>>

export function bottom<F extends HKT4, R1, G extends HKT>(
  F: Top4RC<F, R1> & Covariant4RC<F, R1>,
  G: Bottom1<G>,
): Kind4<F, DefaultOf<F, Params.S>, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind<G, never>>

export function bottom<F extends HKT4, S1, R1, G extends HKT>(
  F: Top4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: Bottom1<G>,
): Kind4<F, DefaultOf<F, Params.S>, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind<G, never>>

export function bottom<F extends HKT4, S1, G extends HKT>(
  F: Top4SC<F, S1> & Covariant4SC<F, S1>,
  G: Bottom1<G>,
): Kind4<F, DefaultOf<F, Params.S>, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind<G, never>>

export function bottom<F extends HKT4, S1, R1, E1, G extends HKT>(
  F: Top4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: Bottom1<G>,
): Kind4<F, DefaultOf<F, Params.S>, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind<G, never>>

export function bottom<F extends HKT4, G extends HKT>(
  F: Top4<F> & Covariant4<F>,
  G: Bottom1<G>,
): Kind4<F, DefaultOf<F, Params.S>, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind<G, never>>

export function bottom<F extends HKT3, E1, G extends HKT>(
  F: Top3EC<F, E1> & Covariant3EC<F, E1>,
  G: Bottom1<G>,
): Kind3<F, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind<G, never>>

export function bottom<F extends HKT3, R1, E1, G extends HKT>(
  F: Top3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: Bottom1<G>,
): Kind3<F, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind<G, never>>

export function bottom<F extends HKT3, R1, G extends HKT>(
  F: Top3RC<F, R1> & Covariant3RC<F, R1>,
  G: Bottom1<G>,
): Kind3<F, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind<G, never>>

export function bottom<F extends HKT3, G extends HKT>(
  F: Top3<F> & Covariant3<F>,
  G: Bottom1<G>,
): Kind3<F, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind<G, never>>

export function bottom<F extends HKT2, E1, G extends HKT>(
  F: Top2EC<F, E1> & Covariant2EC<F, E1>,
  G: Bottom1<G>,
): Kind2<F, DefaultOf<F, Params.E>, Kind<G, never>>

export function bottom<F extends HKT2, G extends HKT>(
  F: Top2<F> & Covariant2<F>,
  G: Bottom1<G>,
): Kind2<F, DefaultOf<F, Params.E>, Kind<G, never>>

export function bottom<F extends HKT, G extends HKT>(
  F: Top1<F> & Covariant1<F>,
  G: Bottom1<G>,
): Kind<F, Kind<G, never>>

export function bottom<F extends HKT, G extends HKT>(
  F: Top<F> & Covariant<F>,
  G: Bottom1<G>,
): Kind<F, Kind<G, never>>

export function bottom<F extends HKT10, G extends HKT>(
  F: Top10<F> & Covariant10<F>,
  G: Bottom<G>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, never>
>

export function bottom<F extends HKT9, G extends HKT>(
  F: Top9<F> & Covariant9<F>,
  G: Bottom<G>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, never>
>

export function bottom<F extends HKT8, G extends HKT>(
  F: Top8<F> & Covariant8<F>,
  G: Bottom<G>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, never>
>

export function bottom<F extends HKT7, G extends HKT>(
  F: Top7<F> & Covariant7<F>,
  G: Bottom<G>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, never>
>

export function bottom<F extends HKT6, G extends HKT>(
  F: Top6<F> & Covariant6<F>,
  G: Bottom<G>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, never>
>

export function bottom<F extends HKT5, G extends HKT>(
  F: Top5<F> & Covariant5<F>,
  G: Bottom<G>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, never>
>

export function bottom<F extends HKT4, E1, G extends HKT>(
  F: Top4EC<F, E1> & Covariant4EC<F, E1>,
  G: Bottom<G>,
): Kind4<F, DefaultOf<F, Params.S>, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind<G, never>>

export function bottom<F extends HKT4, R1, E1, G extends HKT>(
  F: Top4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: Bottom<G>,
): Kind4<F, DefaultOf<F, Params.S>, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind<G, never>>

export function bottom<F extends HKT4, S1, E1, G extends HKT>(
  F: Top4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: Bottom<G>,
): Kind4<F, DefaultOf<F, Params.S>, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind<G, never>>

export function bottom<F extends HKT4, R1, G extends HKT>(
  F: Top4RC<F, R1> & Covariant4RC<F, R1>,
  G: Bottom<G>,
): Kind4<F, DefaultOf<F, Params.S>, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind<G, never>>

export function bottom<F extends HKT4, S1, R1, G extends HKT>(
  F: Top4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: Bottom<G>,
): Kind4<F, DefaultOf<F, Params.S>, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind<G, never>>

export function bottom<F extends HKT4, S1, G extends HKT>(
  F: Top4SC<F, S1> & Covariant4SC<F, S1>,
  G: Bottom<G>,
): Kind4<F, DefaultOf<F, Params.S>, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind<G, never>>

export function bottom<F extends HKT4, S1, R1, E1, G extends HKT>(
  F: Top4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: Bottom<G>,
): Kind4<F, DefaultOf<F, Params.S>, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind<G, never>>

export function bottom<F extends HKT4, G extends HKT>(
  F: Top4<F> & Covariant4<F>,
  G: Bottom<G>,
): Kind4<F, DefaultOf<F, Params.S>, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind<G, never>>

export function bottom<F extends HKT3, E1, G extends HKT>(
  F: Top3EC<F, E1> & Covariant3EC<F, E1>,
  G: Bottom<G>,
): Kind3<F, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind<G, never>>

export function bottom<F extends HKT3, R1, E1, G extends HKT>(
  F: Top3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: Bottom<G>,
): Kind3<F, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind<G, never>>

export function bottom<F extends HKT3, R1, G extends HKT>(
  F: Top3RC<F, R1> & Covariant3RC<F, R1>,
  G: Bottom<G>,
): Kind3<F, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind<G, never>>

export function bottom<F extends HKT3, G extends HKT>(
  F: Top3<F> & Covariant3<F>,
  G: Bottom<G>,
): Kind3<F, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind<G, never>>

export function bottom<F extends HKT2, E1, G extends HKT>(
  F: Top2EC<F, E1> & Covariant2EC<F, E1>,
  G: Bottom<G>,
): Kind2<F, DefaultOf<F, Params.E>, Kind<G, never>>

export function bottom<F extends HKT2, G extends HKT>(
  F: Top2<F> & Covariant2<F>,
  G: Bottom<G>,
): Kind2<F, DefaultOf<F, Params.E>, Kind<G, never>>

export function bottom<F extends HKT, G extends HKT>(
  F: Top1<F> & Covariant1<F>,
  G: Bottom<G>,
): Kind<F, Kind<G, never>>

export function bottom<F extends HKT, G extends HKT>(
  F: Top<F> & Covariant<F>,
  G: Bottom<G>,
): Kind<F, Kind<G, never>>

export function bottom<F extends HKT, G extends HKT>(
  F: Top<F> & Covariant<F>,
  G: Bottom<G>,
): Kind<F, Kind<G, never>> {
  return F.map(() => G.bottom)(F.top)
}
