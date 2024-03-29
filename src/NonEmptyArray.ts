import { HKT, Kind, Params } from './HKT.js'
import { Just, Maybe, Nothing } from './Maybe.js'
import * as Associative from './Typeclass/Associative.js'
import * as AB from './Typeclass/AssociativeBoth.js'
import * as AF from './Typeclass/AssociativeFlatten.js'
import * as C from './Typeclass/Covariant.js'
import * as CI from './Typeclass/CovariantWithIndex.js'
import { Debug } from './Typeclass/Debug.js'
import { Eq, fromEquals } from './Typeclass/Eq.js'
import * as FM from './Typeclass/FoldMap.js'
import * as FE from './Typeclass/ForEach/index.js'
import { Identity } from './Typeclass/Identity.js'
import * as IB from './Typeclass/IdentityBoth.js'
import { IdentityFlatten1 } from './Typeclass/IdentityFlatten.js'
import * as Ord from './Typeclass/Ord.js'
import * as T from './Typeclass/Top.js'
import { identity, pipe } from './function.js'
import * as N from './number.js'

/**
 * A NonEmptyArray<A> is an ReadonlyArray<A> with at least 1 item.
 */
export type NonEmptyArray<A> = readonly [A, ...A[]]

/**
 * Constructs a NonEmptyArray
 */
export const NonEmptyArray = <A>(...values: NonEmptyArray<A>): NonEmptyArray<A> => values

/**
 * Check if a ReadonlyArray<A> is a NonEmptyArray<A>
 */
export const isNonEmpty = <A>(array: readonly A[]): array is NonEmptyArray<A> => array.length > 0

/**
 * Check if a ReadonlyArray<A> is empty
 */
export const isEmpty = <A>(array: readonly A[]): array is readonly [] => array.length === 0

export const head = <A>(nea: NonEmptyArray<A>): A => nea[0]

export const init = <A>(nea: NonEmptyArray<A>): ReadonlyArray<A> => nea.slice(0, -1)

export const tail = <A>(as: NonEmptyArray<A>): ReadonlyArray<A> => as.slice(1)

export const append =
  <B>(value: B) =>
  <A extends ReadonlyArray<any>>(init: A): readonly [...A, B] =>
    [...init, value]

export const prepend =
  <B>(head: B) =>
  <A extends ReadonlyArray<any>>(tail: A): readonly [B, ...A] =>
    [head, ...tail]

export const prependAll =
  <A>(middle: A) =>
  (as: NonEmptyArray<A>): NonEmptyArray<A> => {
    const out: [A, ...A[]] = [middle, as[0]]
    for (let i = 1; i < as.length; i++) {
      out.push(middle, as[i])
    }
    return out
  }

export const chop =
  <A, B>(f: (as: NonEmptyArray<A>) => readonly [B, ReadonlyArray<A>]) =>
  (as: NonEmptyArray<A>): NonEmptyArray<B> => {
    const [b, rest] = f(as)
    const out: [B, ...B[]] = [b]
    let next: ReadonlyArray<A> = rest
    while (isNonEmpty(next)) {
      const [b, rest] = f(next)
      out.push(b)
      next = rest
    }
    return out
  }

export const splitAt =
  (n: number) =>
  <A>(as: NonEmptyArray<A>): readonly [NonEmptyArray<A>, ReadonlyArray<A>] => {
    const m = Math.max(1, n)
    return m >= as.length ? [as, []] : [pipe(as.slice(1, m), prepend(head(as))), as.slice(m)]
  }

export const chunksOf = (
  n: number,
): (<A>(as: NonEmptyArray<A>) => NonEmptyArray<NonEmptyArray<A>>) => chop(splitAt(n))

export function concat<B>(
  second: ReadonlyArray<B>,
): <A>(first: NonEmptyArray<A>) => NonEmptyArray<A | B>
export function concat<B>(second: NonEmptyArray<B>): {
  <A>(first: NonEmptyArray<A>): NonEmptyArray<A | B>
  <A>(first: ReadonlyArray<A>): NonEmptyArray<A | B>
}

export function concat<B extends NonEmptyArray<any>>(second: B) {
  return <A extends NonEmptyArray<any>>(first: A): readonly [...A, ...B] => [...first, ...second]
}

export const concatAll =
  <A>(A: Associative.Associative<A>) =>
  (as: NonEmptyArray<A>): A =>
    as.reduce(A.concat)

export const copy = <A>(nea: NonEmptyArray<A>): NonEmptyArray<A> =>
  nea.slice(0) as unknown as NonEmptyArray<A>

export const foldMap =
  <S>(A: Associative.Associative<S>) =>
  <A>(f: (a: A) => S) =>
  (as: NonEmptyArray<A>): S =>
    as.slice(1).reduce((s, a) => A.concat(s, f(a)), f(as[0]))

export function group<B>(E: Eq<B>): {
  <A extends B>(as: NonEmptyArray<A>): NonEmptyArray<NonEmptyArray<A>>
  <A extends B>(as: ReadonlyArray<A>): ReadonlyArray<NonEmptyArray<A>>
}

export function group<A>(E: Eq<A>): (as: ReadonlyArray<A>) => ReadonlyArray<NonEmptyArray<A>> {
  return (as) => {
    const len = as.length
    if (len === 0) {
      return []
    }
    const out: Array<NonEmptyArray<A>> = []
    let head: A = as[0]
    let nea: [A, ...A[]] = [head]
    for (let i = 1; i < len; i++) {
      const a = as[i]
      if (E.equals(a, head)) {
        nea.push(a)
      } else {
        out.push(nea)
        head = a
        nea = [head]
      }
    }
    out.push(nea)
    return out
  }
}

export const groupBy =
  <A>(f: (a: A) => string) =>
  (as: ReadonlyArray<A>): Readonly<Record<string, NonEmptyArray<A>>> => {
    const out: Record<string, [A, ...A[]]> = {}
    for (const a of as) {
      const k = f(a)
      if (Object.prototype.hasOwnProperty.call(out, k)) {
        out[k].push(a)
      } else {
        out[k] = [a]
      }
    }
    return out
  }

export const intersperse =
  <A>(middle: A) =>
  (as: NonEmptyArray<A>): NonEmptyArray<A> => {
    const rest = tail(as)
    return isNonEmpty(rest) ? pipe(rest, prependAll(middle), prepend(head(as))) : as
  }

export const isOutOfBound = <A>(i: number, as: ReadonlyArray<A>): boolean => i < 0 || i >= as.length

export const last = <A>(nea: NonEmptyArray<A>): A => nea[nea.length - 1]

export const makeBy =
  <A>(f: (i: number) => A) =>
  (n: number): NonEmptyArray<A> => {
    const j = Math.max(0, Math.floor(n))
    const out: [A, ...A[]] = [f(0)]
    for (let i = 1; i < j; i++) {
      out.push(f(i))
    }
    return out
  }

export const makeDebug = <A>(D: Debug<A>): Debug<NonEmptyArray<A>> => ({
  debug: (as) => `[${as.map(D.debug).join(',')}]`,
})

export const makeEq = <A>(E: Eq<A>): Eq<NonEmptyArray<A>> =>
  fromEquals((xs, ys) => xs.length === ys.length && xs.every((x, i) => E.equals(x, ys[i])))

export const makeAssociative = <A = never>(): Associative.Associative<NonEmptyArray<A>> => ({
  concat: (f, s) => concat(s)(f),
})

export const makeUnionAssociative = <A>(E: Eq<A>): Associative.Associative<NonEmptyArray<A>> => {
  const unionE = union(E)

  return {
    concat: (f, s) => unionE(s)(f),
  }
}

export const makeIdentity = <A>(I: Identity<A>): Identity<NonEmptyArray<A>> => ({
  ...makeAssociative<A>(),
  id: [I.id],
})

export const makeOrd = <A>(O: Ord.Ord<A>): Ord.Ord<NonEmptyArray<A>> =>
  Ord.fromCompare((a, b) => {
    const lengthOrdering = pipe(
      N.Ord,
      Ord.contramap((a: readonly A[]) => a.length),
    ).compare(a, b)

    if (lengthOrdering !== 0) {
      return lengthOrdering
    }

    for (let i = 0; i < a.length; ++i) {
      const ai = a[i]
      const bi = b[i]
      const iOrdering = O.compare(ai, bi)

      if (iOrdering !== 0) {
        return iOrdering
      }
    }

    return 0
  })

/**
 * Transform the values contained within an NonEmptyArray
 */
export const map =
  <A, B>(f: (a: A, index: number) => B) =>
  ([a, ...as]: NonEmptyArray<A>): NonEmptyArray<B> =>
    [f(a, 0), ...as.map((a, i) => f(a, i + 1))]

export const max = <A>(O: Ord.Ord<A>): ((as: NonEmptyArray<A>) => A) => {
  const S = Ord.makeMaxAssociative(O)
  return (as) => as.reduce(S.concat)
}

export const min = <A>(O: Ord.Ord<A>): ((as: NonEmptyArray<A>) => A) => {
  const S = Ord.makeMinAssociative(O)
  return (as) => as.reduce(S.concat)
}

export const modifyAt =
  <A>(i: number, f: (a: A) => A) =>
  (as: NonEmptyArray<A>): Maybe<NonEmptyArray<A>> =>
    isOutOfBound(i, as) ? Nothing : Just(unsafeUpdateAt(i, f(as[i]), as))

export const unsafeUpdateAt = <A>(i: number, a: A, as: NonEmptyArray<A>): NonEmptyArray<A> => {
  if (as[i] === a) {
    return as
  } else {
    const xs = [...as]
    xs[i] = a

    return xs as any
  }
}

export const unappend = <A>(as: NonEmptyArray<A>): readonly [ReadonlyArray<A>, A] => [
  init(as),
  last(as),
]

export const range = (start: number, end: number): NonEmptyArray<number> =>
  start <= end ? makeBy((i) => start + i)(end - start + 1) : [start]

export const replicate = <A>(a: A): ((n: number) => NonEmptyArray<A>) => makeBy(() => a)

export const reverse = <A>(as: NonEmptyArray<A>): NonEmptyArray<A> =>
  as.length === 1 ? as : [last(as), ...as.slice(0, -1).reverse()]

export const rotate =
  (n: number) =>
  <A>(as: NonEmptyArray<A>): NonEmptyArray<A> => {
    const len = as.length
    const m = Math.round(n) % len
    if (isOutOfBound(Math.abs(m), as) || m === 0) {
      return copy(as)
    }
    if (m < 0) {
      const [f, s] = splitAt(-m)(as)

      return f.concat(s) as unknown as NonEmptyArray<A>
    } else {
      return rotate(m - len)(as)
    }
  }

export const shift = <A>(as: NonEmptyArray<A>): readonly [A, ReadonlyArray<A>] => [
  head(as),
  tail(as),
]

export const sort =
  <B>(O: Ord.Ord<B>) =>
  <A extends B>(as: NonEmptyArray<A>): NonEmptyArray<A> =>
    as.length === 1 ? as : (as.slice(0).sort(O.compare) as unknown as NonEmptyArray<A>)

export const sortBy = <B>(
  ords: ReadonlyArray<Ord.Ord<B>>,
): (<A extends B>(as: NonEmptyArray<A>) => NonEmptyArray<A>) => {
  if (isNonEmpty(ords)) {
    const A = Ord.makeAssociative<B>()
    const I = Ord.makeIdentity<B>()

    return sort(ords.reduce(A.concat, I.id))
  }

  return identity
}

export const union = <A>(
  E: Eq<A>,
): ((second: NonEmptyArray<A>) => (first: NonEmptyArray<A>) => NonEmptyArray<A>) => {
  const uniqE = uniq(E)
  return (second) => (first) => uniqE(pipe(first, concat(second)))
}

export const uniq =
  <A>(E: Eq<A>) =>
  (as: NonEmptyArray<A>): NonEmptyArray<A> => {
    if (as.length === 1) {
      return as
    }

    const out: [A, ...A[]] = [head(as)]
    const rest = tail(as)
    for (const a of rest) {
      if (out.every((o) => !E.equals(o, a))) {
        out.push(a)
      }
    }
    return out
  }

export const unzip = <A, B>(
  abs: NonEmptyArray<readonly [A, B]>,
): readonly [NonEmptyArray<A>, NonEmptyArray<B>] => {
  const fa: [A, ...A[]] = [abs[0][0]]
  const fb: [B, ...B[]] = [abs[0][1]]
  for (let i = 1; i < abs.length; i++) {
    fa[i] = abs[i][0]
    fb[i] = abs[i][1]
  }
  return [fa, fb]
}

export const updateAt = <A>(i: number, a: A): ((as: NonEmptyArray<A>) => Maybe<NonEmptyArray<A>>) =>
  modifyAt(i, () => a)

export const zip = <A, B>(
  as: NonEmptyArray<A>,
  bs: NonEmptyArray<B>,
): NonEmptyArray<readonly [A, B]> => {
  return zipWith(as, bs, (a, b) => [a, b] as const)
}

export const zipWith = <A, B, C>(
  as: NonEmptyArray<A>,
  bs: NonEmptyArray<B>,
  f: (a: A, b: B) => C,
): NonEmptyArray<C> => {
  const cs: [C, ...C[]] = [f(as[0], bs[0])]
  const len = Math.min(as.length, bs.length)
  for (let i = 1; i < len; i++) {
    cs[i] = f(as[i], bs[i])
  }
  return cs
}

export interface NonEmptyArrayHKT extends HKT {
  readonly type: NonEmptyArray<this[Params.A]>
}

export const CovariantWithIndex: CI.CovariantWithIndex1<NonEmptyArrayHKT, number> = {
  mapWithIndex: (f) => map((a, i) => f(i, a)),
}

export const Covariant: C.Covariant1<NonEmptyArrayHKT> = {
  map,
}

export const Top: T.Top1<NonEmptyArrayHKT> = {
  top: [[]],
}

export const AssociativeFlatten: AF.AssociativeFlatten1<NonEmptyArrayHKT> = {
  flatten: <A>([first, ...rest]: NonEmptyArray<NonEmptyArray<A>>) => [...first, ...rest.flat(1)],
}

export const flatten = AssociativeFlatten.flatten

export const flatMap = AF.flatMap<NonEmptyArrayHKT>({ ...AssociativeFlatten, ...Covariant })
export const bind = AF.bind<NonEmptyArrayHKT>({ ...AssociativeFlatten, ...Covariant })

export const AssociativeBoth = AF.makeAssociativeBoth<NonEmptyArrayHKT>({
  ...AssociativeFlatten,
  ...Covariant,
})

export const zipLeft = AB.zipLeft<NonEmptyArrayHKT>({ ...AssociativeBoth, ...Covariant })
export const zipRight = AB.zipRight<NonEmptyArrayHKT>({ ...AssociativeBoth, ...Covariant })

export const IdentityBoth: IB.IdentityBoth1<NonEmptyArrayHKT> = {
  ...AssociativeBoth,
  ...Top,
}

export const tuple = IB.tuple<NonEmptyArrayHKT>({ ...IdentityBoth, ...Covariant })
export const struct = IB.struct<NonEmptyArrayHKT>({ ...IdentityBoth, ...Covariant })

export const IdentityFlatten: IdentityFlatten1<NonEmptyArrayHKT> = {
  ...AssociativeFlatten,
  ...Top,
}

export const ForEach: FE.ForEach1<NonEmptyArrayHKT> = {
  map,
  forEach: <T2 extends HKT>(IBC: IB.IdentityBoth<T2> & C.Covariant<T2>) => {
    const tuple = IB.tuple(IBC)

    return <A, B>(f: (a: A) => Kind<T2, B>) =>
      (kind: NonEmptyArray<A>): Kind<T2, NonEmptyArray<B>> =>
        tuple(...pipe(kind, map(f)))
  },
}

export const forEach = ForEach.forEach
export const mapAccum = FE.mapAccum(ForEach)
export const sequence = FE.sequence(ForEach)

export const FoldMap: FM.FoldMap1<NonEmptyArrayHKT> = {
  foldMap,
}

export const foldLeft = FM.foldLeft(FoldMap)
export const contains = FM.contains(FoldMap)
export const count = FM.count(FoldMap)
export const every = FM.every(FoldMap)
export const some = FM.some(FoldMap)
export const exists = FM.exists(FoldMap)
export const find = FM.find(FoldMap)
export const intercalate = FM.intercalate(FoldMap)
export const reduce = FM.reduce(FoldMap)
export const reduceAssociative = FM.reduceAssociative(FoldMap)
export const reduceCommutative = FM.reduceCommutative(FoldMap)
export const reduceIdentity = FM.reduceIdentity(FoldMap)
export const reduceRight = FM.reduceRight<NonEmptyArrayHKT>({ ...FoldMap, ...ForEach })
