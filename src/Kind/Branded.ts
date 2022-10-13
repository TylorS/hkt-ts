import { Const, phantom } from 'fp-ts/Const'

import { unsafeCoerce } from '../Function.js'

export type Branded<T, A> = Const<A, (t: T) => never>

export type BrandOf<T extends Branded<any, any>> = [T[typeof phantom]] extends [
  (t: infer R) => never,
]
  ? R
  : unknown

export const Branded =
  <T extends Branded<any, any>>() =>
  <B extends T['value']>(value: B): Branded<BrandOf<T>, B> =>
    unsafeCoerce(value)

export const brand = <T extends Branded<any, any>>(value: T['value']): T => unsafeCoerce(value)
