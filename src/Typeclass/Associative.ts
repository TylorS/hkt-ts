import * as C from './Concat.js'

/**
 * Associative is a typeclass for conrete values that support a concatenation that is associative.
 *
 * Laws:
 * Associativity :: concat(concat(a, b), c) === concat(a, concat(b, c))
 */
export type Associative<A> = C.Concat<A>

/**
 * Create an Associative instance that always return the same value.
 */
export const constant = <A>(value: A): Associative<A> => ({
  concat: () => value,
})

/**
 * Change the ordering of an Associative concatenation
 */
export const reverse: <A>(A: Associative<A>) => Associative<A> = C.reverse

/**
 * Construct an Associative for an object defined in terms of Associative's
 * for all of the properties.
 */
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

/**
 * Construct an Associative for a tuple defined in terms of Associative's
 * for all each index.
 */
export const tuple = <A extends ReadonlyArray<unknown>>(
  ...associatives: { readonly [K in keyof A]: Associative<A[K]> }
): Associative<Readonly<A>> => ({
  concat: (first, second) => associatives.map((s, i) => s.concat(first[i], second[i])) as any,
})

/**
 * Combinator to zip a value in between the other values during concatenation.
 * Similar to ['a', 'b'].join(', ') but for all types instead of just strings.
 */
export const intercalate =
  <A>(middle: A) =>
  (A: Associative<A>): Associative<A> => ({
    concat: (x, y) => A.concat(x, A.concat(middle, y)),
  })

/**
 * Concatenate an array of values given a seed.
 */
export const concatAll: <A>(A: Associative<A>) => (startWith: A) => (as: readonly A[]) => A =
  C.concatAll

/**
 * An Assocative instance which will always return the first value.
 */
export const First: Associative<any> = C.First

/**
 * An Assocative instance which will always return the second value.
 */
export const Second: Associative<any> = C.Second
