import { PossibleValues, Type, Types } from '../Hkts'
import { Setoid } from './Setoid'

export interface Ord<T extends Types> extends Setoid<T> {
  readonly lte: <A extends Type<T, PossibleValues>>(a: A, b: A) => boolean
}
