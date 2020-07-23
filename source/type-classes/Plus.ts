import { Type, Types } from '../Hkts'
import { TypeParams } from '../TypeParams'

/**
 * @name Plus
 * @laws
 * Right identity: P.alt(a, P.zero()) ≡ a
 * Left identity: P.alt(P.zero(), a) ≡ a
 * Annihilation: P.map(f, P.zero()) ≡ P.zero()
 */
export interface Plus<T extends Types> {
  readonly zero: {
    1: <A>() => Type<T, [A]>
    2: <A, B>() => Type<T, [A, B]>
    3: <A, B, C>() => Type<T, [A, B, C]>
    4: <A, B, C, D>() => Type<T, [A, B, C, D]>
    5: <A, B, C, D, E>() => Type<T, [A, B, C, D, E]>
  }[TypeParams.Length<T>]
}
