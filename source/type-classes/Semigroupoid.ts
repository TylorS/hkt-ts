import { PossibleValues, Type, Types } from '../Hkts'
import { TypeParams } from '../TypeParams'

/**
 * @name Semigroupoid
 * @laws
 * Associativity: S.compose(S.compose(a, b), c) ≡ S.compose(a, S.compose(b, c))
 */
export interface Semigroupoid<T extends Types> {
  readonly compose: <A, B, C, D extends Type<T, [...PossibleValues, A, B]>>(
    d: D,
    e: Type<T, [...TypeParams.DropLast<D, 2>, B, C]>,
  ) => Type<T, [...TypeParams.DropLast<D, 2>, A, C]>
}
