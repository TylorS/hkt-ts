import { L, N } from 'ts-toolbelt'
import { HktTypeParams, Type, TypeToUri, Uris } from '.'

/**
 * Helpers for working with Type Parameters
 */
export namespace TypeParams {
  /**
   * Retrieve the type-parameters of an Hkt as a Tuple.
   * @example
   * TypeParams.Of<Either<A, B>> === [A, B]
   */
  export type Of<A extends Type, Uri extends Uris = TypeToUri<A>> = CastArray<HktTypeParams<A>[Uri]>

  type CastArray<A> = A extends ReadonlyArray<any> ? A : []

  /**
   * Extract the first type-param from Values of Hkts
   */
  export type First<A> = A extends L.List ? L.Last<A> : never
  /**
   * Extract the second type-param from Values of Hkts
   */
  export type Second<A> = A extends L.List ? L.Last<L.Pop<A>> : never
  /**
   * Extract the third type-param from Values of Hkts
   */
  export type Third<A> = A extends L.List ? L.Last<L.Pop<L.Pop<A>>> : never
  /**
   * Extract the fourth type-param from Values of Hkts
   */
  export type Fourth<A> = A extends L.List ? L.Last<L.Pop<L.Pop<L.Pop<A>>>> : never
  /**
   * Extract the fifth type-param from Values of Hkts
   */
  export type Fifth<A> = A extends L.List ? L.Last<L.Pop<L.Pop<L.Pop<L.Pop<A>>>>> : never

  /**
   * Retrieve the type-parameters of a given Type while dropping off a given amount from the start.
   * Useful for creating type-classes.
   */
  export type Drop<
    A extends Type,
    N extends 0 | 1 | 2 | 3 | 4 | 5,
    Uri extends Uris = TypeToUri<A>
  > = L.Drop<Of<A, Uri>, N.NumberOf<N>>

  /**
   * Retrieve the type-parameters of a given Type while dropping off a given amount from the end.
   * Useful for creating type-classes.
   */
  export type DropLast<
    A extends Type,
    N extends 0 | 1 | 2 | 3 | 4 | 5,
    Uri extends Uris = TypeToUri<A>
  > = {
    0: Of<A, Uri>
    1: L.Pop<Of<A, Uri>>
    2: L.Pop<L.Pop<Of<A, Uri>>>
    3: L.Pop<L.Pop<L.Pop<Of<A, Uri>>>>
    4: L.Pop<L.Pop<L.Pop<L.Pop<Of<A, Uri>>>>>
    5: L.Pop<L.Pop<L.Pop<L.Pop<L.Pop<Of<A, Uri>>>>>>
  }[N extends unknown ? N : never]

  /**
   * Retrieve the length of type-params for a given type
   */
  export type Length<T extends Uris> = __TypeCastToNumber<Of<Type<T>, T>['length']>

  type __TypeCastToNumber<A> = A extends 0 | 1 | 2 | 3 | 4 | 5 ? A : never
}
