export type Maybe<A> = Nothing | Just<A>

export const Nothing = {
  type: 'Nothing',
} as const
export type Nothing = typeof Nothing

export interface Just<A> {
  readonly type: typeof JUST_TYPE
  readonly value: A
}

const JUST_TYPE = 'Just'

export const Just = <A>(value: A): Just<A> => ({
  type: JUST_TYPE,
  value,
})
