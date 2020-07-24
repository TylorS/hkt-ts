import { Type, TypeParams, Uris } from '../'

/**
 * @name Filterable
 * @laws
 * Distributivity: F.filter(x => f(x) && g(x), a) ≡ F.filter(g, F.filter(f, a))
 * Identity: F.filter(x => true, a) ≡ a
 * Annihilation: F.filter(x => false, a) ≡ F.filter(x => false, b)
 */
// @ts-expect-error Types is 'never' until extended externally
export interface Filterable<T extends Uris = any> {
  readonly URI: T
  readonly filter: {
    1: <A>(predicate: (a: A) => boolean, filterable: Type<T, [A]>) => Type<T, [A]>
    2: <A, B>(predicate: (a: A) => boolean, filterable: Type<T, [B, A]>) => Type<T, [B, A]>
    3: <A, B, C>(predicate: (a: A) => boolean, filterable: Type<T, [B, C, A]>) => Type<T, [B, C, A]>
    4: <A, B, C, D>(
      predicate: (a: A) => boolean,
      filterable: Type<T, [B, C, D, A]>,
    ) => Type<T, [B, C, D, A]>
    5: <A, B, C, D, E>(
      predicate: (a: A) => boolean,
      filterable: Type<T, [B, C, D, E, A]>,
    ) => Type<T, [B, C, D, E, A]>
  }[TypeParams.Length<T>]
}
