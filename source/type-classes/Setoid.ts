import { PossibleValues, Type, Types } from '../Hkts'

export interface Setoid<T extends Types> {
  readonly equals: <A extends Type<T, PossibleValues>>(a: A, b: A) => boolean
}
