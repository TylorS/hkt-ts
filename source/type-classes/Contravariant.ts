import { PossibleValues, Type, Types } from '../Hkts'
import { TypeParams } from '../TypeParams'

/**
 * @name Contravariant
 * @laws
 * Identity: F.contramap(x => x, a) ≡ a
 * Composition: F.contramap(x => f(g(x)), a) ≡ F.contramap(g, F.contramap(f, a))
 */
export interface Contravariant<T extends Types> {
  readonly contramap: <A, B, C extends Type<T, [...PossibleValues, B]>>(
    f: (a: A) => B,
    c: C,
  ) => Type<T, [...TypeParams.DropLast<C, 1>, A]>
}
