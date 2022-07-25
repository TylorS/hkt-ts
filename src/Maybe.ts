import type * as Either from './Either.js'
import { HKT, Kind, Params } from './HKT.js'
import type { Predicate } from './Predicate.js'
import type { Refinement } from './Refinement.js'
import * as ASSOC from './Typeclass/Associative.js'
import * as AB from './Typeclass/AssociativeBoth.js'
import * as AE from './Typeclass/AssociativeEither.js'
import * as AF from './Typeclass/AssociativeFlatten.js'
import * as B from './Typeclass/Bottom.js'
import type { Commutative } from './Typeclass/Commutative.js'
import type { Compact1 } from './Typeclass/Compact.js'
import * as C from './Typeclass/Covariant.js'
import * as Debug from './Typeclass/Debug.js'
import type * as Eq from './Typeclass/Eq.js'
import type * as FIM from './Typeclass/FilterMap.js'
import * as FM from './Typeclass/FoldMap.js'
import * as FE from './Typeclass/ForEach/index.js'
import * as I from './Typeclass/Identity.js'
import * as IB from './Typeclass/IdentityBoth.js'
import * as IE from './Typeclass/IdentityEither.js'
import * as IF from './Typeclass/IdentityFlatten.js'
import type * as Ord from './Typeclass/Ord.js'
import { Top1, makeFromValue } from './Typeclass/Top.js'
import { constant, flow, identity, pipe } from './function.js'

export type Maybe<A> = Nothing | Just<A>

export type OutputOf<T> = [T] extends [Maybe<infer R>] ? R : never

export interface Nothing {
  readonly tag: 'Nothing'
}
export const Nothing: Nothing = { tag: 'Nothing' }

export interface Just<A> {
  readonly tag: typeof JUST_TYPE
  readonly value: A
}

const JUST_TYPE = 'Just'

export const Just = <A>(value: A): Just<A> => ({
  tag: JUST_TYPE,
  value,
})

export function isJust<A>(maybe: Maybe<A>): maybe is Just<A> {
  return maybe.tag === 'Just'
}

export function fromJust<A>(just: Just<A>): A {
  return just.value
}

export function isNothing<A>(maybe: Maybe<A>): maybe is Nothing {
  return maybe.tag === 'Nothing'
}

/**
 * Pattern match over the 2 states of an Maybe.
 */
export const match =
  <A, B, C>(onNothing: () => A, onJust: (value: B) => C) =>
  (maybe: Maybe<B>): A | C =>
    isNothing(maybe) ? onNothing() : onJust(maybe.value)

const constNone = constant(Nothing)

export const flatMap = <A, B>(f: (a: A) => Maybe<B>): ((Maybe: Maybe<A>) => Maybe<B>) =>
  match(constNone, f)

export const map = <A, B>(f: (a: A) => B): ((maybe: Maybe<A>) => Maybe<B>) => flatMap(flow(f, Just))

export function filter<A, B extends A>(refinement: Refinement<A, B>): (maybe: Maybe<A>) => Maybe<B>
export function filter<A>(predicate: Predicate<A>): (Maybe: Maybe<A>) => Maybe<A>

export function filter<A>(predicate: Predicate<A>) {
  return flatMap((a: A) => (predicate(a) ? Just(a) : Nothing))
}

export function fromEither<E, A>(either: Either.Either<E, A>): Maybe<A> {
  return either.tag === 'Left' ? Nothing : Just(either.right)
}

export function fromNullable<A>(value: A | undefined | null | void): Maybe<A> {
  return value === null || value === undefined ? Nothing : Just(value)
}

export const fromPredicate =
  <A>(predicate: Predicate<A>): ((a: A) => Maybe<A>) =>
  (a) =>
    predicate(a) ? Just(a) : Nothing

export const fromRefinement =
  <A, B extends A>(refinement: Refinement<A, B>): ((a: A) => Maybe<B>) =>
  (a) =>
    refinement(a) ? Just(a) : Nothing

/**
 * Get the value of an Maybe or the result of the provided fallback.
 */
export const getOrElse = <B>(f: () => B): (<A>(Maybe: Maybe<A>) => A | B) => match(f, identity)

export function toNull<A>(maybe: Maybe<A>): A | null {
  return isNothing(maybe) ? null : maybe.value
}

export function toUndefined<A>(maybe: Maybe<A>): A | undefined {
  return isNothing(maybe) ? undefined : maybe.value
}

export const makeAssociative = <A>(A: ASSOC.Associative<A>): ASSOC.Associative<Maybe<A>> => ({
  concat: (f, s) => (isJust(f) && isJust(s) ? Just(A.concat(f.value, s.value)) : isJust(f) ? f : s),
})

export const makeFirstAssociative = <A>(): ASSOC.Associative<Maybe<A>> => ({
  concat: (f, s) => (isJust(f) ? f : s),
})

export const makeSecondAssociative = <A>(): ASSOC.Associative<Maybe<A>> =>
  ASSOC.reverse(makeFirstAssociative())

export const makeCommutative = makeAssociative as <A>(A: Commutative<A>) => Commutative<Maybe<A>>

export const makeFailFastAssociative = <A>(
  A: ASSOC.Associative<A>,
): ASSOC.Associative<Maybe<A>> => ({
  concat: (f, s) => (isJust(f) && isJust(s) ? Just(A.concat(f.value, s.value)) : Nothing),
})

export const makeIdentity = <A>(ID: I.Identity<A>): I.Identity<Maybe<A>> => ({
  ...makeAssociative(ID),
  id: Just(ID.id),
})

export const makeAssociativeIdentity = <A>(A: ASSOC.Associative<A>): I.Identity<Maybe<A>> => ({
  concat: (f, s) => (isJust(f) && isJust(s) ? Just(A.concat(f.value, s.value)) : isJust(f) ? f : s),
  id: Nothing,
})

export const makeDebug = <A>(D: Debug.Debug<A>): Debug.Debug<Maybe<A>> => ({
  debug: match(
    () => `Nothing`,
    (a) => `Just(${D.debug(a)})`,
  ),
})

export const makeEq = <A>(E: Eq.Eq<A>): Eq.Eq<Maybe<A>> => ({
  equals: (a, b) =>
    a.tag === b.tag ? (a.tag === 'Just' ? E.equals(a.value, (b as Just<A>).value) : true) : false,
})

export const makeOrd = <A>(O: Ord.Ord<A>): Ord.Ord<Maybe<A>> => ({
  ...makeEq(O),
  compare: (f, s) => {
    const fx = isJust(f)
    const sx = isJust(s)

    if (fx && sx) {
      return O.compare(f.value, s.value)
    }

    if (fx) {
      return 1
    }

    return -1
  },
})

export interface MaybeHKT extends HKT {
  readonly type: Maybe<this[Params.A]>
}

export const Covariant: C.Covariant1<MaybeHKT> = {
  map,
}

export const bindTo = C.bindTo(Covariant)
export const flap = C.flap(Covariant)
export const mapTo = C.mapTo(Covariant)
export const tupled = C.tupled(Covariant)

export const AssociativeBoth: AB.AssociativeBoth1<MaybeHKT> = {
  both: (s) => (f) => isJust(f) && isJust(s) ? Just([f.value, s.value]) : Nothing,
}

export const zipLeft = AB.zipLeft<MaybeHKT>({ ...AssociativeBoth, ...Covariant })
export const zipRight = AB.zipRight<MaybeHKT>({ ...AssociativeBoth, ...Covariant })

export const AssociativeEither: AE.AssociativeEither1<MaybeHKT> = {
  either: (s) => (f) =>
    isJust(f)
      ? Just({ tag: 'Left', left: f.value })
      : isJust(s)
      ? Just({ tag: 'Right', right: s.value })
      : Nothing,
}

export const orElse = AE.orElse<MaybeHKT>({ ...AssociativeEither, ...Covariant })

export const AssociativeFlatten: AF.AssociativeFlatten1<MaybeHKT> = {
  flatten: (k) => (isJust(k) ? k.value : Nothing),
}

export const flatten = AssociativeFlatten.flatten
export const bind = AF.bind<MaybeHKT>({ ...AssociativeFlatten, ...Covariant })

export const Bottom: B.Bottom1<MaybeHKT> = {
  bottom: Nothing,
}

export const Top: Top1<MaybeHKT> = {
  top: Just([]),
}

export const IdentityBoth: IB.IdentityBoth1<MaybeHKT> = {
  ...Top,
  ...AssociativeBoth,
}

export const tuple = IB.tuple<MaybeHKT>({ ...IdentityBoth, ...Covariant })
export const struct = IB.struct<MaybeHKT>({ ...IdentityBoth, ...Covariant })

export const IdentityEither: IE.IdentityEither1<MaybeHKT> = {
  ...Bottom,
  ...AssociativeEither,
}

export const IdentityFlatten: IF.IdentityFlatten1<MaybeHKT> = {
  ...Top,
  ...AssociativeFlatten,
}

export const ForEach: FE.ForEach1<MaybeHKT> = {
  map,
  forEach: <T2 extends HKT>(IBC: IB.IdentityBoth<T2> & C.Covariant<T2>) => {
    const fromValue = makeFromValue(IBC)

    return <A, B>(f: (a: A) => Kind<T2, B>) =>
      (kind: Maybe<A>): Kind<T2, Maybe<B>> =>
        pipe(
          kind,
          match(() => fromValue(Nothing), flow(f, IBC.map(Just))),
        )
  },
}

export const sequence = FE.sequence(ForEach)
export const mapAccum = FE.mapAccum(ForEach)

export const FoldMap: FM.FoldMap1<MaybeHKT> = {
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
export const partitionMap = FM.partitionMap<MaybeHKT>({
  ...FoldMap,
  ...IdentityEither,
  ...Top,
  ...Covariant,
})
export const reduce = FM.reduce(FoldMap)
export const reduceAssociative = FM.reduceAssociative(FoldMap)
export const reduceCommutative = FM.reduceCommutative(FoldMap)
export const reduceIdentity = FM.reduceIdentity(FoldMap)
export const reduceRight = FM.reduceRight<MaybeHKT>({ ...FoldMap, ...ForEach })
export const reverse = FM.reverse<MaybeHKT>({ ...FoldMap, ...ForEach })
export const size = FM.size(FoldMap)
export const toArray = FM.toArray(FoldMap)

export const FilterMap: FIM.FilterMap1<MaybeHKT> = {
  filterMap: flatMap,
}

export const filterMap = FilterMap.filterMap

export const Compact: Compact1<MaybeHKT> = {
  compact: flatten,
}

export const compact = Compact.compact
