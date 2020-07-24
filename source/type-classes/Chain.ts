import { Type, TypeParams, Types } from '../'
import { Apply } from './Apply'

/**
 * @name Chain
 * @laws
 * Associativity: M.chain(g, M.chain(f, u)) ≡ M.chain(x => M.chain(g, f(x)), u)
 */
export interface Chain<T extends Types> extends Apply<T> {
  readonly chain: {
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
  }[TypeParams.Length<T>]
}
