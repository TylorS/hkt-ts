import * as Either from './Either'
import { HKT, HKT2, Kind, Params, Variance } from './HKT'
import { Associative } from './Typeclass/Associative'
import { AssociativeBoth2EC } from './Typeclass/AssociativeBoth'
import * as AE from './Typeclass/AssociativeEither'
import * as AF from './Typeclass/AssociativeFlatten'
import * as BI from './Typeclass/Bicovariant'
import * as C from './Typeclass/Covariant'
import * as D from './Typeclass/Debug'
import * as EQ from './Typeclass/Eq'
import * as FM from './Typeclass/FoldMap'
import * as FE from './Typeclass/ForEach/index'
import { Identity } from './Typeclass/Identity'
import { IdentityBoth, IdentityBoth2EC } from './Typeclass/IdentityBoth'
import { IdentityEither2EC } from './Typeclass/IdentityEither'
import * as O from './Typeclass/Ord'
import { Reduce2 } from './Typeclass/Reduce'
import { ReduceRight2 } from './Typeclass/ReduceRight'
import * as T from './Typeclass/Top'
import { constFalse, constTrue, flow, pipe } from './function'
import * as N from './number'
import * as S from './string'

/**
 * These is a data structure for representing an either-or relationship or the possibility of
 * having both values. This can be especially useful for handling optional errors.
 */
export type These<E, A> = Either.Either<E, A> | Both<E, A>

export type ErrorOf<T> = [T] extends [These<infer E, any>] ? E : never

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type OutputOf<T> = [T] extends [These<infer _, infer A>] ? A : never

export const Left = Either.Left
export type Left<E> = Either.Left<E>
export const Right = Either.Right
export type Right<A> = Either.Right<A>

/**
 * Both is a data structure for representing the possibility of having 2 values.
 */
export interface Both<E, A> {
  readonly tag: 'Both'
  readonly left: E
  readonly right: A
}

/**
 * Construct a Both
 */
export const Both = <E, A>(left: E, right: A): Both<E, A> => ({
  tag: 'Both',
  left,
  right,
})

export const match =
  <E, R1, A, R2, R3>(onLeft: (e: E) => R1, onRight: (a: A) => R2, onBoth: (e: E, a: A) => R3) =>
  (these: These<E, A>): R1 | R2 | R3 => {
    switch (these.tag) {
      case 'Left':
        return onLeft(these.left)
      case 'Right':
        return onRight(these.right)
      case 'Both':
        return onBoth(these.left, these.right)
    }
  }

export const isLeft = match(constTrue, constFalse, constFalse) as <E, A>(
  these: These<E, A>,
) => these is Left<E>
export const isRight = match(constFalse, constTrue, constFalse) as <E, A>(
  these: These<E, A>,
) => these is Right<A>
export const isBoth = match(constFalse, constFalse, constTrue) as <E, A>(
  these: These<E, A>,
) => these is Both<E, A>

export function absolveWhen<E>(predicate: (e: E) => boolean) {
  return <A>(these: These<E, A>): These<E, A> =>
    pipe(
      these,
      match(Left, Right, (e, a) => (predicate(e) ? Right(a) : Both(e, a))),
    )
}

export function condemnWhen<E>(predicate: (e: E) => boolean) {
  return <A>(these: These<E, A>): These<E, A> =>
    pipe(
      these,
      match(Left, Right, (e, a) => (predicate(e) ? Left(e) : Both(e, a))),
    )
}

export const makeFlatMap =
  <E>(ASSOC: Associative<E>) =>
  <A, B>(f: (a: A) => These<E, B>) =>
  (these: These<E, A>): These<E, B> =>
    pipe(
      these,
      match(
        Left,
        (a) =>
          pipe(
            a,
            f,
            match(
              (e2) => Left(e2),
              (b) => Right(b),
              (e2, b) => Both(e2, b),
            ),
          ),
        (e, a) =>
          pipe(
            a,
            f,
            match(
              (e2) => Left(ASSOC.concat(e, e2)),
              (b) => Both(e, b),
              (e2, b) => Both(ASSOC.concat(e, e2), b),
            ),
          ),
      ),
    )

/**
 * Apply a transformation to the success value contained within a These
 */
export const bimap =
  <A, B, C, D>(f: (a: A) => B, g: (c: C) => D) =>
  (these: These<A, C>): These<B, D> =>
    pipe(
      these,
      match(flow(f, Left), flow(g, Right), (e, a) => Both(f(e), g(a))),
    )

export interface TheseHKT extends HKT2 {
  readonly type: These<this[Params.E], this[Params.A]>
  readonly defaults: {
    readonly [Params.E]: Variance.Covariant<never>
  }
}

export const Bicovariant: BI.Bicovariant2<TheseHKT> = {
  bimap,
}

/**
 * Apply a transformation to the success value contained within a These
 */
export const map = BI.map(Bicovariant)

/**
 * Apply a transformation to the errors of a These.
 */
export const mapLeft = BI.mapLeft(Bicovariant)

export const Covariant: C.Covariant2<TheseHKT> = {
  map,
}

export const bindTo = C.bindTo(Covariant)
export const flap = C.flap(Covariant)
export const mapTo = C.mapTo(Covariant)
export const tupled = C.tupled(Covariant)

export const Top: T.Top2<TheseHKT> = {
  top: Right([]),
}

export const fromLazy = T.makeFromLazy<TheseHKT>({ ...Top, ...Covariant })
export const fromValue = T.makeFromValue<TheseHKT>({ ...Top, ...Covariant })

export const makeAssociativeFlatten = <E>(
  E: Associative<E>,
): AF.AssociativeFlatten2EC<TheseHKT, E> => ({
  flatten: makeFlatMap(E)(<A>(e: These<E, A>) => e),
})

export const AssociativeEither: AE.AssociativeEither2<TheseHKT> = {
  either: (s) => (f) => isLeft(f) ? pipe(s, map(Either.Right)) : pipe(f, map(Either.Left)),
}

export const either = AssociativeEither.either
export const orElse = AE.orElse<TheseHKT>({ ...AssociativeEither, ...Covariant })

export const makeAssociativeBoth = <E>(E: Associative<E>): AssociativeBoth2EC<TheseHKT, E> =>
  AF.makeAssociativeBoth<TheseHKT, E>({
    ...makeAssociativeFlatten(E),
    ...Covariant,
  })

export const makeIdentityBoth = <E>(E: Associative<E>): IdentityBoth2EC<TheseHKT, E> => ({
  ...makeAssociativeBoth(E),
  ...Top,
})

export const makeIdentityEither = <E>(id: E): IdentityEither2EC<TheseHKT, E> => ({
  ...AssociativeEither,
  bottom: Left(id),
})

export const ForEach: FE.ForEach2<TheseHKT> = {
  map,
  forEach: <T2 extends HKT>(IBC: IdentityBoth<T2> & C.Covariant<T2>) => {
    const fromValue = T.makeFromValue(IBC)

    return <A, B>(f: (a: A) => Kind<T2, B>) =>
      <E1>(kind: These<E1, A>): Kind<T2, These<E1, B>> =>
        pipe(
          kind,
          match(flow(Left, fromValue), flow(f, IBC.map(Right)), (e, a) =>
            pipe(
              a,
              f,
              IBC.map((b) => Both(e, b)),
            ),
          ),
        )
  },
}

export const forEach = ForEach.forEach
export const sequence = FE.sequence(ForEach)
export const foldMap = FE.foldMap(ForEach)
export const mapAccum = FE.mapAccum(ForEach)

export const FoldMap: FM.FoldMap2<TheseHKT> = {
  foldMap,
}

export const foldLeft = FM.foldLeft(FoldMap)
export const contains = FM.contains(FoldMap)
export const count = FM.count(FoldMap)
export const every = FM.every(FoldMap)
export const some = FM.some(FoldMap)
export const exists = FM.exists(FoldMap)
export const find = FM.find(FoldMap)
export const groupBy = FM.groupBy(FoldMap)
export const intercalate = FM.intercalate(FoldMap)
export const reduceAssociative = FM.reduceAssociative(FoldMap)
export const reduceCommutative = FM.reduceCommutative(FoldMap)
export const reduceIdentity = FM.reduceIdentity(FoldMap)
export const toArray = FM.toArray(FoldMap)
export const reduce = FM.reduce(FoldMap)

export const Reduce: Reduce2<TheseHKT> = {
  reduce,
}

export const ReduceRight: ReduceRight2<TheseHKT> = {
  reduceRight: (b, f) => reduce(b, (b, a) => f(a, b)),
}

export const reduceRight = ReduceRight.reduceRight

export const makeAssociative = <E, A>(
  E: Associative<E>,
  A: Associative<A>,
): Associative<These<E, A>> => {
  const flatMap = makeFlatMap(E)

  return {
    concat: (first, second) =>
      pipe(
        first,
        flatMap((a) =>
          pipe(
            second,
            flatMap((a2) => Right(A.concat(a, a2))),
          ),
        ),
      ),
  }
}

export const makeIdentity = <E, A>(E: Associative<E>, A: Identity<A>): Identity<These<E, A>> => {
  return {
    ...makeAssociative(E, A),
    id: Right(A.id),
  }
}

export const makeEq = <E, A>(E: EQ.Eq<E>, A: EQ.Eq<A>): EQ.Eq<These<E, A>> =>
  EQ.sum<These<E, A>>()('tag')({
    Left: EQ.struct({
      tag: EQ.string,
      left: E,
    }),
    Right: EQ.struct({
      tag: EQ.string,
      right: A,
    }),
    Both: EQ.struct({
      tag: EQ.string,
      left: E,
      right: A,
    }),
  })

export const makeDebug = <E, A>(E: D.Debug<E>, A: D.Debug<A>): D.Debug<These<E, A>> =>
  D.sum<These<E, A>>()('tag')({
    Left: D.struct({
      tag: D.string,
      left: E,
    }),
    Right: D.struct({
      tag: D.string,
      right: A,
    }),
    Both: D.struct({
      tag: D.string,
      left: E,
      right: A,
    }),
  })

export const makeOrd = <E, A>(E: O.Ord<E>, A: O.Ord<A>): O.Ord<These<E, A>> =>
  O.sum<These<E, A>>()('tag')(
    pipe(
      N.Ord,
      O.contramap((a) => (a === 'Left' ? -1 : a === 'Both' ? 0 : 1)),
    ),
  )({
    Left: O.struct<Left<E>>({
      tag: O.Static,
      left: E,
    })(S.Ord),
    Right: O.struct<Right<A>>({
      tag: O.Static,
      right: A,
    })(S.Ord),
    Both: O.struct<Both<E, A>>({
      tag: O.Static,
      left: E,
      right: A,
    })(S.Ord),
  })
