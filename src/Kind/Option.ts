import * as O from 'fp-ts/Option'

export type Option<A> = O.Option<A>

export const Some = O.some
export const None = O.none

export const isSome = O.isSome
export const isNone = O.isNone
