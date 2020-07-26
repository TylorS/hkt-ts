import { SignatureOverride, Type, TypeParams, Uris } from '../'
import { PossibleValues } from '../common'
import { Functor, FunctorOptions } from './Functor'

/**
 * @name Apply
 * @laws
 * Composition: A.ap(A.ap(A.map(f => g => x => f(g(x)), a), u), v) ≡ A.ap(a, A.ap(u, v))
 */
// @ts-expect-error Uris is 'never' until extended externally
export interface Apply<T extends Uris = any, Options extends ApplyOptions = ApplyOptions>
  extends Functor<T, Options> {
  readonly URI: T
  readonly ap: SignatureOverride<
    T,
    Options['ap'],
    <A, B, Fn extends Type<T, [...PossibleValues, (a: A) => B]>>(
      fn: Fn,
      value: Type<T, [...TypeParams.DropLast<Fn, 1>, A]>,
    ) => Type<T, [...TypeParams.DropLast<Fn, 1>, B]>
  >
}

export type ApplyOptions = FunctorOptions & {
  readonly ap?: string
}
