import * as E from 'fp-ts/Either'

import { TypeLambda } from '../HKT.js'
import * as Variance from '../Typeclass/Variance/index.js'

export type Either<E, A> = E.Either<E, A>

export interface Eitherλ extends E.Eitherλ {}

export interface Eitherλ2 extends TypeLambda {
  readonly type: Either<this['Out2'], this['Out1']>
}

export const mapBoth = E.mapBoth
export const bimap = E.mapBoth

export const Bicovariant: Variance.Bicovariant<Eitherλ> = {
  bimap: mapBoth,
}

export const map = E.map

export const Covariant: Variance.Covariant<Eitherλ> = {
  map,
}
