import { PossibleValues, Type, Types } from '../Hkts'
import { TypeParams } from '../TypeParams'

export interface Functor<T extends Types> {
  readonly map: <A, B, F extends Type<T, [...PossibleValues, A]>>(
    f: (value: A) => B,
    functor: F,
  ) => Type<T, readonly [...TypeParams.DropLast<F, 1>, B]>
}
