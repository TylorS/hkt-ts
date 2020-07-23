import { PossibleValues, Type, Types } from '../Hkts'

export interface Alt<T extends Types> {
  readonly alt: <A extends Type<T, PossibleValues>, B extends Type<T, PossibleValues>>(
    f: () => A,
    functor: B,
  ) => A | B
}
