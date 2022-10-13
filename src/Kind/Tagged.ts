import { Const, phantom } from 'fp-ts/Const'

import { unsafeCoerce } from '../Function.js'

export type Tagged<T, A> = Const<A, (_: never) => T>

export type TagOf<T extends Tagged<any, any>> = T[typeof phantom] extends (_: never) => infer R
  ? R
  : never

export const Tagged =
  <T extends Tagged<any, any>>() =>
  <B extends T['value']>(value: B): Tagged<TagOf<T>, B> =>
    unsafeCoerce(value)

export const tag = <T extends Tagged<any, any>>(value: T['value']): T => unsafeCoerce(value)
