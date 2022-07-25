import { HKT, HKT2, Kind, Params, Variance } from './HKT.js'
import type { Maybe } from './Maybe.js'
import type { Associative } from './Typeclass/Associative.js'
import * as AB from './Typeclass/AssociativeBoth.js'
import * as AE from './Typeclass/AssociativeEither.js'
import * as F from './Typeclass/AssociativeFlatten.js'
import type { Bicovariant2 } from './Typeclass/Bicovariant.js'
import { Bottom2EC } from './Typeclass/Bottom.js'
import * as C from './Typeclass/Covariant.js'
import { Debug } from './Typeclass/Debug.js'
import type { Eq } from './Typeclass/Eq.js'
import * as FM from './Typeclass/FoldMap.js'
import * as FE from './Typeclass/ForEach/index.js'
import { Identity } from './Typeclass/Identity.js'
import * as IB from './Typeclass/IdentityBoth.js'
import { IdentityFlatten2 } from './Typeclass/IdentityFlatten.js'
import type { Ord } from './Typeclass/Ord.js'
import { Reduce2 } from './Typeclass/Reduce.js'
import { ReduceRight2 } from './Typeclass/ReduceRight.js'
import * as T from './Typeclass/Top.js'
import { Lazy, flow, identity, pipe } from './function.js'

/**
 * A common disriminated union to represent the outcome of 2 separate
 * code paths. Very helpful for representing errors.
 */
export type Either<E, A> = Left<E> | Right<A>

/**
 * Determine if an Either<E, A> is a Left<E>
 */
export const isLeft = <A, B>(either: Either<A, B>): either is Left<A> => either.tag === 'Left'

/**
 * Determine if an Either<E, A> is a Right<A>
 */
export const isRight = <A, B>(either: Either<A, B>): either is Right<B> => either.tag === 'Right'

export const fromLeft = <A>(left: Left<A>): A => left.left
export const fromRight = <A>(right: Right<A>): A => right.right

/**
 * Type-level helper for extracting the Left value from an Either
 */
export type LeftOf<A> = [A] extends [Either<infer L, any>] ? L : never

/**
 * Type-level helper for extracting the Right value from an Either
 */
export type RightOf<A> = [A] extends [Either<any, infer R>] ? R : never

/**
 * Abstraction for the "Left" of an Either. Usually used to represent errors.
 */
export interface Left<E> {
  readonly tag: 'Left'
  readonly left: E
}

/**
 * Construct a Left instance.
 */
export const Left = <E>(value: E): Left<E> => ({
  tag: 'Left',
  left: value,
})

export interface Right<A> {
  readonly tag: 'Right'
  readonly right: A
}

/**
 * Construct a Right value.
 */
export const Right = <A>(value: A): Right<A> => ({
  tag: 'Right',
  right: value,
})

/**
 * Combinator for sequencing another Either after the succes, or Right, of
 * a previous Either. Provides the ability to sequence many branches of logic without
 * utilizing many nested if/else-if/else statements.
 */
export const flatMap =
  <A, E1, B>(f: (value: A) => Either<E1, B>) =>
  <E2>(either: Either<E2, A>): Either<E1 | E2, B> =>
    isLeft(either) ? either : f(either.right)

/**
 * Converts an Option<A> into an Either<E, A>
 */
export function fromMaybe<E>(f: () => E) {
  return <A>(maybe: Maybe<A>): Either<E, A> =>
    maybe.tag === 'Nothing' ? Left(f()) : Right(maybe.value)
}

/**
 * Get the Right value of an Either, or return the result of the provided function.
 */
export const getOrElse =
  <A>(f: () => A) =>
  <E, B>(either: Either<E, B>): A | B =>
    isLeft(either) ? f() : either.right

/**
 * Apply a function to the Right-hand value of an Either. If the Either is a Left,
 * it will return that Left as-is.
 */
export const map =
  <A, B>(f: (value: A) => B) =>
  <E>(either: Either<E, A>): Either<E, B> =>
    isLeft(either) ? either : Right(f(either.right))

/**
 * Apply a function to the Left-hand value of an Either. If the Either is a Right,
 * it will return that Right as-is.
 */
export const mapLeft =
  <E1, E2>(f: (value: E1) => E2) =>
  <A>(either: Either<E1, A>): Either<E2, A> =>
    isLeft(either) ? Left(f(either.left)) : either

/**
 * Pattern match on the 2 cases of an Either using functions.
 */
export const match =
  <E, B, A, C>(onLeft: (value: E) => B, onRight: (value: A) => C) =>
  (either: Either<E, A>): B | C =>
    isLeft(either) ? onLeft(either.left) : onRight(either.right)

export const toUnion = match(identity, identity)

/**
 * Combinator for sequencing another Either after its Failure, or Left, of
 * a previous Either. Provides the ability to sequence many branches of logic without
 * utilizing many nested if/else-if/else statements.
 */
export const orElse =
  <E1, E2, B>(f: (value: E1) => Either<E2, B>) =>
  <A>(either: Either<E1, A>): Either<E2, A | B> => {
    if (isLeft(either)) {
      return f(either.left)
    }

    return either
  }

/**
 * Swap a Left for a Right, or a Right for a Left.
 */
export const swap: <A, B>(either: Either<A, B>) => Either<B, A> = match(Right, Left)

export const tryCatch = <A>(f: Lazy<A>): Either<unknown, A> => {
  try {
    return Right(f())
  } catch (e) {
    return Left(e)
  }
}

export const tryCatchF =
  <Args extends ReadonlyArray<any>, A>(
    f: (...args: Args) => A,
  ): ((...args: Args) => Either<unknown, A>) =>
  (...args) => {
    try {
      return Right(f(...args))
    } catch (e) {
      return Left(e)
    }
  }

export interface EitherHKT extends HKT2 {
  readonly type: Either<this[Params.E], this[Params.A]>
  readonly defaults: {
    readonly [Params.E]: Variance.Covariant<any>
    readonly [Params.A]: Variance.Invariant<unknown>
  }
}

export const Covariant: C.Covariant2<EitherHKT> = {
  map,
}

export const bindTo = C.bindTo(Covariant)
export const flap = C.flap(Covariant)
export const mapTo = C.mapTo(Covariant)
export const tupled = C.tupled(Covariant)

export const Bicovariant: Bicovariant2<EitherHKT> = {
  bimap: (f, g) => match(flow(f, Left), flow(g, Right)),
}

export const bimap = Bicovariant.bimap

export const flatten: <E, E2, A>(kind: Either<E, Either<E2, A>>) => Either<E | E2, A> = (either) =>
  isLeft(either) ? either : either.right

export const Flatten: F.AssociativeFlatten2<EitherHKT> = {
  flatten,
}

export const AssociativeBoth = F.makeAssociativeBoth<EitherHKT>({ ...Flatten, ...Covariant })

export const zipLeft = AB.zipLeft<EitherHKT>({ ...AssociativeBoth, ...Covariant })
export const zipRight = AB.zipRight<EitherHKT>({ ...AssociativeBoth, ...Covariant })

export const makeAssociative = <E, A>(
  E: Associative<E>,
  A: Associative<A>,
): Associative<Either<E, A>> => ({
  concat: (first, second) =>
    pipe(
      first,
      match(
        (fe) =>
          pipe(
            second,
            match((se) => Left(E.concat(fe, se)), Right),
          ),
        (fa) =>
          pipe(
            second,
            match(
              () => Right(fa),
              (sa) => Right(A.concat(fa, sa)),
            ),
          ),
      ),
    ),
})

export const makeEq = <E, A>(E: Eq<E>, A: Eq<A>): Eq<Either<E, A>> => {
  return {
    equals: (a, b) =>
      a.tag === b.tag
        ? a.tag === 'Left'
          ? E.equals(a.left, (b as Left<E>).left)
          : A.equals(a.right, (b as Right<A>).right)
        : false,
  }
}

export const makeOrd = <E, A>(E: Ord<E>, A: Ord<A>): Ord<Either<E, A>> => {
  return {
    ...makeEq(E, A),
    compare: (f, s) =>
      pipe(
        f,
        match(
          (e1) =>
            pipe(
              s,
              match(
                (e2) => E.compare(e1, e2),
                () => -1,
              ),
            ),
          (a1) =>
            pipe(
              s,
              match(
                () => 1,
                (a2) => A.compare(a1, a2),
              ),
            ),
        ),
      ),
  }
}

export const makeIdentity = <E, A>(E: Associative<E>, A: Identity<A>): Identity<Either<E, A>> => ({
  ...makeAssociative(E, A),
  id: Right(A.id),
})

export const makeDebug = <E, A>(E: Debug<E>, A: Debug<A>): Debug<Either<E, A>> => ({
  debug: match(
    (e) => `Left<${E.debug(e)}>`,
    (a) => `Right<${A.debug(a)}>`,
  ),
})

export const Top: T.Top2<EitherHKT> = {
  top: Right([]),
}

export const makeBottom = <E>(I: Identity<E>): Bottom2EC<EitherHKT, E> => ({
  bottom: Left(I.id),
})

export const IdentityBoth: IB.IdentityBoth2<EitherHKT> = {
  ...AssociativeBoth,
  ...Top,
}

export const IdentityFlatten: IdentityFlatten2<EitherHKT> = {
  ...Flatten,
  ...Top,
}

/**
 * Construct a Either that will output a homogenous Record given the
 * input of a Tuple of Eithers.
 * @example
 * ```typescript
 * import * as E from 'hkt-ts/Either.js'
 * import { pipe } from 'hkt-ts/function.js'
 *
 * declare const eitherA: E.Either<'a', string>
 * declare const eitherB: E.Either<'b', number>
 *
 * const example: E.Either<'a' | 'b', readonly [string, number]> = E.tuple(
 *   eitherA,
 *   eitherB,
 * })
 * ```
 */
export const tuple = IB.tuple<EitherHKT>({ ...IdentityBoth, ...Covariant })

/**
 * Construct a Either that will output a homogenous Record given the
 * input of a Record of Eithers.
 * @example
 * ```typescript
 * import * as E from 'hkt-ts/Either.js'
 * import { pipe } from 'hkt-ts/function.js'
 *
 * declare const eitherA: E.Either<'a', string>
 * declare const eitherB: E.Either<'b', number>
 *
 * const example: E.Either<'a' | 'b', {  a: string, b: number }> = E.struct({
 *   a: eitherA,
 *   b: eitherB,
 * })
 * ```
 */
export const struct = IB.struct<EitherHKT>({ ...IdentityBoth, ...Covariant })

export const ForEach: FE.ForEach2<EitherHKT> = {
  map,
  forEach: <T2 extends HKT>(IB: IB.IdentityBoth<T2> & C.Covariant<T2>) => {
    const fromValue = T.makeFromValue(IB)

    return <A, B>(f: (a: A) => Kind<T2, B>) =>
      <E1>(kind: Either<E1, A>): Kind<T2, Either<E1, B>> =>
        isLeft(kind) ? fromValue(kind) : pipe(kind.right, f, IB.map(Right))
  },
}

export const forEach = ForEach.forEach
export const sequence = FE.sequence(ForEach)
export const mapAccum = FE.mapAccum(ForEach)

export const FoldMap: FM.FoldMap2<EitherHKT> = {
  foldMap: (I) => (f) => match(() => I.id, f),
}

export const foldMap = FoldMap.foldMap
export const foldLeft = FM.foldLeft(FoldMap)
export const contains = FM.contains(FoldMap)
export const count = FM.count(FoldMap)
export const every = FM.every(FoldMap)
export const some = FM.some(FoldMap)
export const exists = FM.exists(FoldMap)
export const find = FM.find(FoldMap)
export const groupBy = FM.groupBy(FoldMap)
export const intercalate = FM.intercalate(FoldMap)
/**
 * Apply a reducer function to the Right value of an Either, otherwise
 * return the seed value.
 */
export const reduce = FM.reduce(FoldMap)
export const reduceAssociative = FM.reduceAssociative(FoldMap)
export const reduceCommutative = FM.reduceCommutative(FoldMap)
export const reduceIdentity = FM.reduceIdentity(FoldMap)
export const size = FM.size(FoldMap)
export const toArray = FM.toArray(FoldMap)
export const reduceRight = FM.reduceRight<EitherHKT>({ ...FoldMap, ...ForEach })

export const Reduce: Reduce2<EitherHKT> = {
  reduce,
}
export const ReduceRight: ReduceRight2<EitherHKT> = {
  reduceRight,
}

export const AssociativeEither: AE.AssociativeEither2<EitherHKT> = {
  either:
    <E, B>(s: Either<E, B>) =>
    <A>(f: Either<E, A>): Either<E, Either<A, B>> =>
      isLeft(f)
        ? pipe(
            s,
            map((b: B) => Right(b)),
          )
        : pipe(
            f as Either<E, A>,
            map((a: A) => Left(a)),
          ),
}

export const either = AssociativeEither.either
