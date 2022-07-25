import { HKT, HKT2, Kind, Params } from './HKT.js'
import { Associative } from './Typeclass/Associative.js'
import { AssociativeBoth2EC } from './Typeclass/AssociativeBoth.js'
import { AssociativeFlatten2EC } from './Typeclass/AssociativeFlatten.js'
import { Bicovariant2 } from './Typeclass/Bicovariant.js'
import * as C from './Typeclass/Covariant.js'
import { Debug } from './Typeclass/Debug.js'
import * as FM from './Typeclass/FoldMap.js'
import * as FE from './Typeclass/ForEach/index.js'
import { Identity } from './Typeclass/Identity.js'
import { IdentityBoth } from './Typeclass/IdentityBoth.js'
import { Reduce2 } from './Typeclass/Reduce.js'
import { ReduceRight2 } from './Typeclass/ReduceRight.js'
import { flow, pipe } from './function.js'

export type Tuple<A, B> = readonly [first: A, second: B]

export function fst<A, E>(ea: Tuple<A, E>): A {
  return ea[0]
}

export function snd<A, E>(ea: Tuple<A, E>): E {
  return ea[1]
}

export const swap = <A, E>(ea: Tuple<A, E>): Tuple<E, A> => [snd(ea), fst(ea)]

export const mapFst: <A, B>(f: (a: A) => B) => <E>(fa: readonly [A, E]) => readonly [B, E] =
  (f) => (fa) =>
    [f(fst(fa)), snd(fa)]

export const mapSnd: <E, G>(f: (e: E) => G) => <A>(fa: readonly [A, E]) => readonly [A, G] =
  (f) => (fa) =>
    [fst(fa), f(snd(fa))]

export const compose: <A, B>(ab: readonly [B, A]) => <C>(bc: readonly [C, B]) => readonly [C, A] =
  (ab) => (bc) =>
    [fst(bc), snd(ab)]

export function makeDebug<A, B>(A: Debug<A>, B: Debug<B>): Debug<Tuple<A, B>> {
  return {
    debug: ([a, b]) => `[${A.debug(a)},${B.debug(b)}]`,
  }
}

export const makeAssociative = <A, B>(
  A: Associative<A>,
  B: Associative<B>,
): Associative<Tuple<A, B>> => ({
  concat: (f, s) => [A.concat(fst(f), fst(s)), B.concat(snd(f), snd(s))],
})

export const makeIdentity = <A, B>(A: Identity<A>, B: Identity<B>): Identity<Tuple<A, B>> => ({
  ...makeAssociative(A, B),
  id: [A.id, B.id],
})

export interface TupleHKT extends HKT2 {
  readonly type: Tuple<this[Params.E], this[Params.A]>
}

export const Bicovariant: Bicovariant2<TupleHKT> = {
  bimap: (f, g) => flow(mapFst(f), mapSnd(g)),
}

export const bimap = Bicovariant.bimap

export const Covariant: C.Covariant2<TupleHKT> = {
  map: mapSnd,
}

export const map = Covariant.map
export const bindTo = C.bindTo(Covariant)
export const flap = C.flap(Covariant)
export const mapTo = C.mapTo(Covariant)
export const tupled = C.tupled(Covariant)

export const makeAssociativeBoth = <E>(E: Associative<E>): AssociativeBoth2EC<TupleHKT, E> => ({
  both: (second) => (first) => [E.concat(first[0], second[0]), [first[1], second[1]]],
})

export const makeAssociativeFlatten = <E>(
  E: Associative<E>,
): AssociativeFlatten2EC<TupleHKT, E> => ({
  flatten: ([e, [e2, a]]) => [E.concat(e, e2), a],
})

export const ForEach: FE.ForEach2<TupleHKT> = {
  map,
  forEach:
    <T2 extends HKT>(IBC: IdentityBoth<T2> & C.Covariant<T2>) =>
    <A, B>(f: (a: A) => Kind<T2, B>) =>
    <E1>(tuple: Tuple<E1, A>): Kind<T2, Tuple<E1, B>> =>
      pipe(
        tuple,
        snd,
        f,
        IBC.map((b) => [fst(tuple), b] as const),
      ),
}

export const forEach = ForEach.forEach
export const sequence = FE.sequence(ForEach)
export const foldMap = FE.foldMap(ForEach)
export const mapAccum = FE.mapAccum(ForEach)

export const FoldMap: FM.FoldMap2<TupleHKT> = {
  foldMap,
}

export const foldLeft = FM.foldLeft(FoldMap)
export const contains = FM.contains(FoldMap)
export const count = FM.count(FoldMap)
export const exists = FM.exists(FoldMap)
export const find = FM.find(FoldMap)
export const reverse = FM.reverse<TupleHKT>({ ...FoldMap, ...ForEach })
export const every = FM.every(FoldMap)
export const some = FM.some(FoldMap)
export const groupBy = FM.groupBy(FoldMap)
export const intercalate = FM.intercalate(FoldMap)
export const isEmpty = FM.isEmpty(FoldMap)
export const isNonEmpty = FM.isNonEmpty(FoldMap)
export const reduce = FM.reduce(FoldMap)

export const Reduce: Reduce2<TupleHKT> = {
  reduce,
}

export const ReduceRight: ReduceRight2<TupleHKT> = {
  reduceRight: (b, f) => reduce(b, (b, a) => f(a, b)),
}

export const reduceRight = ReduceRight.reduceRight
