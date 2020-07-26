import { SignatureOverride, Type, Uris } from '../'
import { GetLength } from '../common'
import { Apply, ApplyOptions } from './Apply'

/**
 * @name Chain
 * @laws
 * Associativity: M.chain(g, M.chain(f, u)) ≡ M.chain(x => M.chain(g, f(x)), u)
 */
// @ts-expect-error Uris is 'never' until extended externally
export interface Chain<T extends Uris = any, Options extends ChainOptions = ChainOptions>
  extends Apply<T, Options> {
  readonly URI: T
  readonly chain: SignatureOverride<
    T,
    Options['chain'],
    {
      1: <A, B>(f: (a: A) => Type<T, [B]>, t: Type<T, [A]>) => Type<T, [B]>
      2: <A, B, C>(f: (a: A) => Type<T, [B, C]>, t: Type<T, [B, A]>) => Type<T, [B, C]>
      3: <A, B, C, D>(f: (a: A) => Type<T, [B, C, D]>, t: Type<T, [B, C, A]>) => Type<T, [B, C, D]>
      4: <A, B, C, D, E>(
        f: (a: A) => Type<T, [B, C, D, E]>,
        t: Type<T, [B, C, D, A]>,
      ) => Type<T, [B, C, D, E]>
      5: <A, B, C, D, E, F>(
        f: (a: A) => Type<T, [B, C, D, E, F]>,
        t: Type<T, [B, C, D, E, A]>,
      ) => Type<T, [B, C, D, E, F]>
    }[GetLength<Options, T>]
  >
}

export type ChainOptions = ApplyOptions & {
  readonly chain?: string
}
