import { L, U } from 'ts-toolbelt'

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
 * Type-level map, used to register more specific variants of type-class signatures
 */
export interface HktSignatureOverride {}

/**
 * Helper for creating types by use of their Type name, and a tuple of values to use.
 *
 * @example
 * Type<'Either', [Error, number]> === Either<Error, number>
 */
export type Type<
  T extends Uris = Uris,
  Params extends ReadonlyArray<any> = ReadonlyArray<any>
> = Hkts<Params>[T]

/**
 * Union of all type names as defined in Hkts & HktValues
 */
export type Uris = keyof Hkts<ReadonlyArray<any>> & keyof HktTypeParams<any>

/**
 * Lookup the name of Hkt by Type. In the event of there being multiple matches
 * because they are structurally equivalent, whichever type is registered last will be chosen.
 * @example
 * TypeToName<Either<any, any>> === 'Either'
 */
export type TypeToUri<A> = __HasMultipleMatches<A> extends true
  ? __RetrieveLastUri<A>
  : __FastTypeToUri<A>

/**
 * Retrieve the URI from a given instance
 */
export type UriOf<A> = A extends { readonly URI: infer R } ? R : never

/**
 * Helper for defining custom type instances
 */
export type SignatureOverride<
  T extends Uris,
  K extends PropertyKey,
  R
> = T extends keyof HktSignatureOverride
  ? K extends keyof HktSignatureOverride[T]
    ? __IsUnion<HktSignatureOverride[T][K]> extends true
      ? R
      : HktSignatureOverride[T][K]
    : R
  : R

export * from './type-classes'
export * from './TypeParams'

// Internal

type __HasMultipleMatches<A> = __IsUnion<__FastTypeToUri<A>>

// Simple check for when there's just 1 match
type __FastTypeToUri<A> = {
  [T in Uris]: Type<T> extends A ? T : never
}[Uris]

// More comprehensive check + will choose last registered URI if multiple
type __RetrieveLastUri<A> = __TypeCastToTypes<
  U.Last<
    {
      [T in Uris]: Type<T> extends A ? (A extends Type<T> ? T : never) : never
    }[Uris]
  >
>

type __TypeCastToTypes<A> = A extends Uris ? A : never

type __IsUnion<A> = L.Length<U.ListOf<A>> extends 0 | 1 ? false : true
