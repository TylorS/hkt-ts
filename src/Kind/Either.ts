import * as E from 'fp-ts/Either'

import { pipe } from '../Function.js'
import { TypeLambda } from '../HKT.js'
import * as AB from '../TypeClass/Kind/AssociativeBoth.js'
import * as Variance from '../TypeClass/Variance/index.js'

export type Either<E, A> = E.Either<E, A>

export interface Eitherλ extends E.Eitherλ {}

export interface Eitherλ2 extends TypeLambda {
  readonly type: Either<this['Out2'], this['Out1']>
}

export const Left = E.left

export type Left<E> = E.Left<E>

export const Right = E.right

export type Right<A> = E.Right<A>

export const isLeft = E.isLeft
export const isRight = E.isRight

export const bimap = E.mapBoth

export const Bicovariant: Variance.Bicovariant<Eitherλ> = {
  bimap,
}

export const map = E.map

export const Covariant: Variance.Covariant<Eitherλ> = {
  map,
}

export const toUnion = E.toUnion

export const both =
  <E2, B>(second: Either<E2, B>) =>
  <E, A>(first: Either<E, A>): Either<E | E2, readonly [A, B]> =>
    pipe(
      E.of((a: A) => (b: B) => [a, b] as const),
      E.ap(first),
      E.ap(second),
    )

export const AssociativeBoth: AB.AssociativeBoth<Eitherλ> = {
  both,
}
