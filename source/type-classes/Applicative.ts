import { SignatureOverride, Type, TypeParams, Uris } from '../'
import { Apply, ApplyOptions } from './Apply'

/**
 * @name Applicative
 * @laws
 * Identity: A.ap(A.of(x => x), v) ≡ v
 * Homomorphism: A.ap(A.of(f), A.of(x)) ≡ A.of(f(x))
 * Interchange: A.ap(u, A.of(y)) ≡ A.ap(A.of(f => f(y)), u)
 */
export interface Applicative<
  // @ts-expect-error Uris is 'never' until extended externally
  T extends Uris = any,
  B extends ApplicativeOptions = ApplicativeOptions
> extends Apply<T, B> {
  readonly URI: T
  readonly of: SignatureOverride<
    T,
    B['of'],
    {
      1: <A>(value: A) => Type<T, [A]>
      2: <A, B>(value: B) => Type<T, [A, B]>
      3: <A, B, C>(value: C) => Type<T, [A, B, C]>
      4: <A, B, C, D>(value: D) => Type<T, [A, B, C, D]>
      5: <A, B, C, D, E>(value: E) => Type<T, [A, B, C, D, E]>
    }[TypeParams.Length<T>]
  >
}

export type ApplicativeOptions = ApplyOptions & {
  readonly of?: string
}
