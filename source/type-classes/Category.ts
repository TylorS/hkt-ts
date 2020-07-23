import { Type, Types } from '../Hkts'
import { TypeParams } from '../TypeParams'
import { Semigroupoid } from './Semigroupoid'

/**
 * @name Category
 * @laws
 * Right identity: M.compose(a, M.id()) ≡ a
 * Left identity: M.compose(M.id(), a) ≡ a
 */
export interface Category<T extends Types> extends Semigroupoid<T> {
  readonly id: {
    2: <A>() => Type<T, [A, A]>
    3: <A, B>() => Type<T, [A, B, B]>
    4: <A, B, C>() => Type<T, [A, B, C, C]>
    5: <A, B, C, D>() => Type<T, [A, B, C, D, D]>
  }[TypeParams.Length<T>]
}
