import { U } from 'ts-toolbelt'

/**
 * Type-level map, used to apply values to specific data structures. User's should
 * extend this interface to register their custom types.
 * @example
 */
// @ts-ignore - Allow compiling with unused type-param
export interface Hkts<Values extends ReadonlyArray<any>> {}

/**
 * Type-level map, used to extract values from instances to apply transformations or just
 * to retrieve the information. User's should extend this interface to register their custom types.
 */
// @ts-ignore - Allow compiling with unused type-param
export interface HktValues<T> extends Record<PropertyKey, PossibleValues> {}

/**
 * Union of all type names as defined in Hkts & HktValues
 */
export type Types = keyof Hkts<ReadonlyArray<any>> & keyof HktValues<any>

/**
 * Helper for type-classes to use a placeholder type-params
 */
export type PossibleValues = [any?, any?, any?, any?, any?]

/**
 * Helper for creating types by use of their Type name, and a tuple of values to use.
 *
 * @example
 * Type<'Either', [Error, number]> === Either<Error, number>
 */
export type Type<
  T extends Types = Types,
  Values extends ReadonlyArray<any> = ReadonlyArray<any>
> = Hkts<Values>[T]

/**
 * Lookup the name of Hkt by Type. In the event of there being multiple matches
 * because they are structurally equivalent, whichever type is registered last will be chosen.
 * @example
 * TypeToName<Either<any, any>> === 'Either'
 */
export type TypeToName<A> = CastToTypeName<
  U.Last<
    {
      [T in Types]: Type<T, ReadonlyArray<any>> extends A ? T : never
    }[Types]
  >
>

type CastToTypeName<A> = A extends Types ? A : never
