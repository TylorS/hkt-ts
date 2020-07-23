import { L, N } from 'ts-toolbelt'
import { HktValues, PossibleValues, Type, Types, TypeToName } from './Hkts'

/**
 * Helpers for working with Type Parameters
 */
export namespace TypeParams {
  /**
   * Retrieve the type-parameters of an Hkt as a Tuple.
   * @example
   * TypeParams.Of<Either<A, B>> === [A, B]
   */
  export type Of<A extends Type<Types, PossibleValues>> = CastArray<HktValues<A>[TypeToName<A>]>

  type CastArray<A> = A extends L.List ? A : []

  /**
   * Extract the first type-param from Values of Hkts
   */
  export type First<A> = A extends L.List ? L.Last<A> : never
  /**
   * Extract the second type-param from Values of Hkts
   */
  export type Second<A> = A extends L.List ? L.Last<L.Drop<A, '1', '<-'>> : never
  /**
   * Extract the third type-param from Values of Hkts
   */
  export type Third<A> = A extends L.List ? L.Last<L.Drop<A, '2', '<-'>> : never
  /**
   * Extract the fourth type-param from Values of Hkts
   */
  export type Fourth<A> = A extends L.List ? L.Last<L.Drop<A, '3', '<-'>> : never
  /**
   * Extract the fifth type-param from Values of Hkts
   */
  export type Fifth<A> = A extends L.List ? L.Last<L.Drop<A, '4', '<-'>> : never

  /**
   * Retrieve the type-parameters of a given Type while dropping off a given amount from the start.
   * Useful for creating type-classes.
   */
  export type Drop<A extends Type<Types, PossibleValues>, N extends 0 | 1 | 2 | 3 | 4 | 5> = L.Drop<
    Of<A>,
    N.NumberOf<N>
  >

  /**
   * Retrieve the type-parameters of a given Type while dropping off a given amount from the end.
   * Useful for creating type-classes.
   */
  export type DropLast<A extends Type<Types, PossibleValues>, N extends 1 | 2 | 3 | 4 | 5> = {
    1: L.Pop<Of<A>>
    2: L.Pop<L.Pop<Of<A>>>
    3: L.Pop<L.Pop<L.Pop<Of<A>>>>
    4: L.Pop<L.Pop<L.Pop<L.Pop<Of<A>>>>>
    5: L.Pop<L.Pop<L.Pop<L.Pop<L.Pop<Of<A>>>>>>
  }[N extends 1 | 2 | 3 | 4 | 5 ? N : never]
}
