import { L, N, U } from 'ts-toolbelt'

/**
 * Type-level map, used to apply values to specific data structures. User's should
 * extend this interface to register their custom types.
 * @example
 */
// @ts-ignore - Allow compiling with unused type-param
export interface Hkts<Params extends ReadonlyArray<any>> {}

/**
 * Type-level map, used to extract values from instances to apply transformations or just
 * to retrieve the information. User's should extend this interface to register their custom types.
 */
// @ts-ignore - Allow compiling with unused type-param
export interface HktTypeParams<T> {}

/**
 * Union of all type names as defined in Hkts & HktValues
 */
export type Types = keyof Hkts<ReadonlyArray<any>> & keyof HktTypeParams<any>

/**
 * Helper for creating types by use of their Type name, and a tuple of values to use.
 *
 * @example
 * Type<'Either', [Error, number]> === Either<Error, number>
 */
export type Type<
  T extends Types = Types,
  Params extends ReadonlyArray<any> = ReadonlyArray<any>
> = Hkts<Params>[T]

/**
 * Lookup the name of Hkt by Type. In the event of there being multiple matches
 * because they are structurally equivalent, whichever type is registered last will be chosen.
 * @example
 * TypeToName<Either<any, any>> === 'Either'
 */
export type TypeToUri<A> = TypeCastToTypes<
  U.Last<
    {
      [T in Types]: Type<T> extends A ? T : never
    }[Types]
  >
>

export type UriOf<A> = A extends { readonly URI: infer R } ? R : never

type TypeCastToTypes<A> = A extends Types ? A : never

/**
 * Helpers for working with Type Parameters
 */
export namespace TypeParams {
  /**
   * Retrieve the type-parameters of an Hkt as a Tuple.
   * @example
   * TypeParams.Of<Either<A, B>> === [A, B]
   */
  export type Of<A extends Type> = CastArray<HktTypeParams<A>[TypeToUri<A>]>

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
  export type Drop<A extends Type, N extends 0 | 1 | 2 | 3 | 4 | 5> = L.Drop<Of<A>, N.NumberOf<N>>

  /**
   * Retrieve the type-parameters of a given Type while dropping off a given amount from the end.
   * Useful for creating type-classes.
   */
  export type DropLast<A extends Type, N extends 0 | 1 | 2 | 3 | 4 | 5> = {
    0: Of<A>
    1: L.Pop<Of<A>>
    2: L.Pop<L.Pop<Of<A>>>
    3: L.Pop<L.Pop<L.Pop<Of<A>>>>
    4: L.Pop<L.Pop<L.Pop<L.Pop<Of<A>>>>>
    5: L.Pop<L.Pop<L.Pop<L.Pop<L.Pop<Of<A>>>>>>
  }[N extends unknown ? N : never]

  export type Length<T extends Types> = L.Length<Of<Type<T>>>
}

export * from './type-classes'
