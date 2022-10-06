import * as R from 'fp-ts/Reader'

import { makeDo } from '../Do.js'
import { identity } from '../Function.js'
import * as AF from '../TypeClass/Kind/AssociativeFlatten.js'
import * as AFR from '../TypeClass/Kind/AssociativeFlattenRec.js'
import * as IF from '../TypeClass/Kind/IdentityFlatten.js'
import * as L from '../TypeClass/Kind/Lazy.js'
import * as M from '../TypeClass/Kind/Monad.js'
import * as MR from '../TypeClass/Kind/MonadRec.js'
import * as AB from '../Typeclass/Kind/AssociativeBoth.js'
import * as T from '../Typeclass/Kind/Top.js'
import * as CTR from '../Typeclass/Variance/Contravariant.js'
import * as C from '../Typeclass/Variance/Covariant.js'

import { isLeft } from './Either.js'

export interface Reader<R, A> extends R.Reader<R, A> {}

export interface Readerλ extends R.Readerλ {}

export const ask = R.ask
export const asks = R.asks
export const local = R.local
export const contramap = R.local
export const unit = R.unit

export const Covariant: C.Covariant<Readerλ> = {
  map: R.map,
}

export const Contravariant: CTR.Contravariant<Readerλ> = {
  contramap: R.local,
}

export const both =
  <R2, B>(second: Reader<R2, B>) =>
  <R, A>(first: Reader<R, A>): Reader<R & R2, readonly [A, B]> =>
  (r) =>
    [first(r), second(r)]

export const AssociativeBoth: AB.AssociativeBoth<Readerλ> = {
  both,
}

export const flatten =
  <R, R2, A>(reader: Reader<R, Reader<R2, A>>): Reader<R & R2, A> =>
  (r) =>
    reader(r)(r)

export const AssociativeFlatten: AF.AssociativeFlatten<Readerλ> = {
  flatten: flatten as AF.AssociativeFlatten<Readerλ>['flatten'],
}

export const top: Reader<unknown, unknown> = identity

export const Top: T.Top<Readerλ> = {
  top: () => top,
}

export const IdentityFlatten: IF.IdentityFlatten<Readerλ> = {
  ...AssociativeFlatten,
  ...Top,
}

export const Monad: M.Monad<Readerλ> = {
  ...IdentityFlatten,
  ...Covariant,
}

export const AssociativeFlattenRec: AFR.AssociativeFlattenRec<Readerλ> = {
  flattenRec: (f) => (a) => (r) => {
    let either = f(a)(r)

    while (isLeft(either)) {
      either = f(either.left)(r)
    }

    return either.right
  },
}

export const MonadRec: MR.MonadRec<Readerλ> = {
  ...Monad,
  ...AssociativeFlattenRec,
}

export const lazy =
  <R, A>(f: () => R.Reader<R, A>): R.Reader<R, A> =>
  (r) =>
    f()(r)

export const Lazy: L.Lazy<Readerλ> = {
  lazy,
}

/**
 * Stack-safe generator-based Do-notation for Reader
 *
 * @example
 * const foo: Reader<{ a: number } & { b:number }, number> = Do(function* ($) {
 *  const a = yield* $(R.asks(({ a }: { a: number }) => a))
 *  const b = yield* $(R.asks(({ b }: { b: number }) => b))
 *
 *  return a + b
 * })
 */
export const Do = makeDo({ ...MonadRec, ...Lazy })
