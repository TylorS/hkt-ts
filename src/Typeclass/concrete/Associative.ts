import * as ASSOC from './Concat'
import * as Ord from './Ord'

// Associative represents a concatenation that MUST be associatve.
export type Associative<A> = ASSOC.Concat<A>

export const constant = <A>(value: A): Associative<A> => ({
  concat: () => value,
})

export const min = <A>(O: Ord.Ord<A>): Associative<A> => ({
  concat: Ord.min(O),
})

export const max = <A>(O: Ord.Ord<A>): Associative<A> => ({
  concat: Ord.max(O),
})

export const reverse: <A>(S: Associative<A>) => Associative<A> = ASSOC.reverse

export const struct = <A>(associatives: {
  readonly [K in keyof A]: Associative<A[K]>
}): Associative<{
  readonly [K in keyof A]: A[K]
}> => ({
  concat: (first, second) => {
    const r: A = {} as any
    for (const k in associatives) {
      r[k] = associatives[k].concat(first[k], second[k])
    }
    return r
  },
})

export const tuple = <A extends ReadonlyArray<unknown>>(
  ...associatives: { readonly [K in keyof A]: Associative<A[K]> }
): Associative<Readonly<A>> => ({
  concat: (first, second) => associatives.map((s, i) => s.concat(first[i], second[i])) as any,
})

export const intercalate =
  <A>(middle: A) =>
  (A: Associative<A>): Associative<A> => ({
    concat: (x, y) => A.concat(x, A.concat(middle, y)),
  })

export const concatAll: <A>(M: Associative<A>) => (startWith: A) => (as: readonly A[]) => A =
  ASSOC.concatAll

export const First: Associative<any> = ASSOC.First

export const Second: Associative<any> = ASSOC.Second
