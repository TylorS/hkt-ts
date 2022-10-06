import * as O from 'fp-ts/Option'

export type Option<A> = O.Option<A>

export const Some = O.some
export type Some<A> = O.Some<A>
export const None = O.none
export type None = O.None

export const isSome = O.isSome
export const isNone = O.isNone
