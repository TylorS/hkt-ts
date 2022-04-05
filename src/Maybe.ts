export type Maybe<A> = Nothing | Just<A>

export const Nothing = {
  tag: 'Nothing',
} as const
export type Nothing = typeof Nothing

export interface Just<A> {
  readonly tag: typeof JUST_TYPE
  readonly value: A
}

const JUST_TYPE = 'Just'

export const Just = <A>(value: A): Just<A> => ({
  tag: JUST_TYPE,
  value,
})
