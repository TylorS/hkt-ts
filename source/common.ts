import { TypeParams, Uris } from '.'

export type CommonOptions = {
  readonly length?: TypeParams.Length<Uris>
}

export type CommonDefaultOptions<T extends Uris> = {
  readonly length: TypeParams.Length<T>
}

export type GetLength<A extends CommonOptions, U extends Uris> = __TypeCastToNumber<
  A['length'] extends unknown ? TypeParams.Length<U> : A['length']
>

type __TypeCastToNumber<A> = A extends 0 | 1 | 2 | 3 | 4 | 5 ? A : never

export type PossibleValues = Partial<readonly [any, any, any, any, any, any, any, any, any, any]>
