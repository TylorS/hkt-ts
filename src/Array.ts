import { Associative } from './Associative'
import { AssociativeIdentity } from './AssociativeIdentity'
import { Concat } from './Concat'
import { Debug } from './Debug'
import { Either, isLeft, isRight } from './Either'
import { Eq, fromEquals } from './Eq'
import { Just, Maybe, Nothing, isJust } from './Maybe'
import { NonEmptyArray } from './NonEmptyArray'
import * as NEA from './NonEmptyArray'
import { Ord, fromCompare } from './Ord'
import { Predicate } from './Predicate'
import { Refinement } from './Refinement'
import { Lazy, identity, pipe } from './function'
import * as N from './number'

/**
 * Test whether a `ReadonlyArray` is empty.
 *
 * @example
 * import { isEmpty } from 'hkt-ts/Array'
 *
 * assert.strictEqual(isEmpty([]), true)
 *
 */
export const isEmpty = <A>(as: ReadonlyArray<A>): as is readonly [] => as.length === 0

/**
 * Test whether a `ReadonlyArray` is non empty.
 *
 */
export const isNonEmpty: <A>(as: ReadonlyArray<A>) => as is NonEmptyArray<A> = NEA.isNonEmpty

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * Prepend an element to the front of a `ReadonlyArray`, creating a new `ReadonlyNonEmptyArray`.
 *
 * @example
 * import { prepend } from 'hkt-ts/Array'
 * import { pipe } from 'hkt-ts/function'
 *
 * assert.deepStrictEqual(pipe([2, 3, 4], prepend(1)), [1, 2, 3, 4])
 *
 */
export const prepend = NEA.prepend

/**
 * Append an element to the end of a `ReadonlyArray`, creating a new `ReadonlyNonEmptyArray`.
 *
 * @example
 * import { append } from 'hkt-ts/Array'
 * import { pipe } from 'hkt-ts/function'
 *
 * assert.deepStrictEqual(pipe([1, 2, 3], append(4)), [1, 2, 3, 4])
 *
 */
export const append = NEA.append

/**
 * Return a `ReadonlyArray` of length `n` with element `i` initialized with `f(i)`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import { makeBy } from 'hkt-ts/Array'
 *
 * const double = (n: number): number => n * 2
 * assert.deepStrictEqual(makeBy(5, double), [0, 2, 4, 6, 8])
 *
 */
export const makeBy = <A>(n: number, f: (i: number) => A): ReadonlyArray<A> =>
  n <= 0 ? empty : NEA.makeBy(f)(n)

/**
 * Create a `ReadonlyArray` containing a value repeated the specified number of times.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import { replicate } from 'hkt-ts/Array'
 *
 * assert.deepStrictEqual(replicate(3, 'a'), ['a', 'a', 'a'])
 *
 */
export const replicate = <A>(n: number, a: A): ReadonlyArray<A> => makeBy(n, () => a)

export function fromPredicate<A, B extends A>(
  refinement: Refinement<A, B>,
): (a: A) => ReadonlyArray<B>
export function fromPredicate<A>(predicate: Predicate<A>): <B extends A>(b: B) => ReadonlyArray<B>
export function fromPredicate<A>(predicate: Predicate<A>): (a: A) => ReadonlyArray<A>
export function fromPredicate<A>(predicate: Predicate<A>): (a: A) => ReadonlyArray<A> {
  return (a) => (predicate(a) ? [a] : empty)
}

// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------

/**
 * Less strict version of [`match`](#match).
 *
 */
export const match =
  <B, A, C>(onEmpty: Lazy<B>, onNonEmpty: (as: NonEmptyArray<A>) => C) =>
  (as: ReadonlyArray<A>): B | C =>
    isNonEmpty(as) ? onNonEmpty(as) : onEmpty()

/**
 * Less strict version of [`matchLeft`](#matchleft).
 *
 */
export const matchLeft =
  <B, A, C>(onEmpty: Lazy<B>, onNonEmpty: (head: A, tail: ReadonlyArray<A>) => C) =>
  (as: ReadonlyArray<A>): B | C =>
    isNonEmpty(as) ? onNonEmpty(NEA.head(as), NEA.tail(as)) : onEmpty()

/**
 * Alias of [`matchLeft`](#matchleft).
 *
 */
export const foldLeft: <A, B>(
  onEmpty: Lazy<B>,
  onNonEmpty: (head: A, tail: ReadonlyArray<A>) => B,
) => (as: ReadonlyArray<A>) => B = matchLeft

/**
 * Less strict version of [`matchRight`](#matchright).
 *
 */
export const matchRight =
  <B, A, C>(onEmpty: Lazy<B>, onNonEmpty: (init: ReadonlyArray<A>, last: A) => C) =>
  (as: ReadonlyArray<A>): B | C =>
    isNonEmpty(as) ? onNonEmpty(NEA.init(as), NEA.last(as)) : onEmpty()

/**
 * Alias of [`matchRight`](#matchright).
 *
 */
export const foldRight: <A, B>(
  onEmpty: Lazy<B>,
  onNonEmpty: (init: ReadonlyArray<A>, last: A) => B,
) => (as: ReadonlyArray<A>) => B = matchRight

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

export const flatMapWithIndex =
  <A, B>(f: (i: number, a: A) => ReadonlyArray<B>) =>
  (as: ReadonlyArray<A>): ReadonlyArray<B> => {
    if (isEmpty(as)) {
      return empty
    }
    const out: Array<B> = []
    for (let i = 0; i < as.length; i++) {
      out.push(...f(i, as[i]))
    }
    return out
  }

/**
 * Same as `reduce` but it carries over the intermediate steps.
 *
 * @example
 * import { scanLeft } from 'hkt-ts/Array'
 *
 * assert.deepStrictEqual(scanLeft(10, (b, a: number) => b - a)([1, 2, 3]), [10, 9, 7, 4])
 *
 */
export const scanLeft =
  <A, B>(b: B, f: (b: B, a: A) => B) =>
  (as: ReadonlyArray<A>): NonEmptyArray<B> => {
    const len = as.length
    const out = new Array(len + 1) as [B, ...B[]]
    out[0] = b
    for (let i = 0; i < len; i++) {
      out[i + 1] = f(out[i], as[i])
    }
    return out
  }

/**
 * Fold an array from the right, keeping all intermediate results instead of only the final result
 *
 * @example
 * import { scanRight } from 'hkt-ts/Array'
 *
 * assert.deepStrictEqual(scanRight(10, (a: number, b) => b - a)([1, 2, 3]), [4, 5, 7, 10])
 *
 */
export const scanRight =
  <A, B>(b: B, f: (a: A, b: B) => B) =>
  (as: ReadonlyArray<A>): NonEmptyArray<B> => {
    const len = as.length
    const out = new Array(len + 1) as [B, ...B[]]
    out[len] = b
    for (let i = len - 1; i >= 0; i--) {
      out[i] = f(as[i], out[i + 1])
    }
    return out
  }

/**
 * Calculate the number of elements in a `ReadonlyArray`.
 *
 */
export const size = <A>(as: ReadonlyArray<A>): number => as.length

/**
 * Test whether an array contains a particular index
 *
 */
export const isOutOfBound: <A>(i: number, as: ReadonlyArray<A>) => boolean = NEA.isOutOfBound

/**
 * This function provides a safe way to read a value at a particular index from an array
 *
 * @example
 * import { lookup } from 'hkt-ts/Array'
 * import { Just, Nothing } from 'hkt-ts/Maybe'
 * import { pipe } from 'hkt-ts/function'
 *
 * assert.deepStrictEqual(pipe([1, 2, 3], lookup(1)), Just(2))
 * assert.deepStrictEqual(pipe([1, 2, 3], lookup(3)), Nothing)
 *
 */
export function lookup<A>(
  i: number,
  as: ReadonlyArray<A>,
): Maybe<A> | (<A>(as: ReadonlyArray<A>) => Maybe<A>) {
  return isOutOfBound(i, as) ? Nothing : Just(as[i])
}

/**
 * Get the first element in an array, or `None` if the array is empty
 *
 * @example
 * import { head } from 'hkt-ts/Array'
 * import { Just, Nothing } from 'hkt-ts/Maybe'
 *
 * assert.deepStrictEqual(head([1, 2, 3]), Just(1))
 * assert.deepStrictEqual(head([]), Nothing)
 *
 */
export const head = <A>(as: ReadonlyArray<A>): Maybe<A> =>
  isNonEmpty(as) ? Just(NEA.head(as)) : Nothing

/**
 * Get the last element in an array, or `Nothing` if the array is empty
 *
 * @example
 * import { last } from 'hkt-ts/Array'
 * import { Just, Nothing } from 'hkt-ts/Maybe'
 *
 * assert.deepStrictEqual(last([1, 2, 3]), Just(3))
 * assert.deepStrictEqual(last([]), Nothing)
 *
 */
export const last = <A>(as: ReadonlyArray<A>): Maybe<A> =>
  isNonEmpty(as) ? Just(NEA.last(as)) : Nothing

/**
 * Get all but the first element of an array, creating a new array, or `None` if the array is empty
 *
 * @example
 * import { tail } from 'hkt-ts/Array'
 * import { Just, Nothing } from 'hkt-ts/Maybe'
 *
 * assert.deepStrictEqual(tail([1, 2, 3]), Just([2, 3]))
 * assert.deepStrictEqual(tail([]), Nothing)
 *
 */
export const tail = <A>(as: ReadonlyArray<A>): Maybe<ReadonlyArray<A>> =>
  isNonEmpty(as) ? Just(NEA.tail(as)) : Nothing

/**
 * Get all but the last element of an array, creating a new array, or `None` if the array is empty
 *
 * @example
 * import { init } from 'hkt-ts/Array'
 * import { Just, Nothing } from 'hkt-ts/Maybe'
 *
 * assert.deepStrictEqual(init([1, 2, 3]), Just([1, 2]))
 * assert.deepStrictEqual(init([]), Nothing)
 *
 */
export const init = <A>(as: ReadonlyArray<A>): Maybe<ReadonlyArray<A>> =>
  isNonEmpty(as) ? Just(NEA.init(as)) : Nothing

/**
 * Keep only a max number of elements from the start of an `ReadonlyArray`, creating a new `ReadonlyArray`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import * as RA from 'hkt-ts/Array'
 * import { pipe } from 'hkt-ts/function'
 *
 * const input: ReadonlyArray<number> = [1, 2, 3]
 * assert.deepStrictEqual(pipe(input, RA.takeLeft(2)), [1, 2])
 *
 * // out of bounds
 * assert.strictEqual(pipe(input, RA.takeLeft(4)), input)
 * assert.strictEqual(pipe(input, RA.takeLeft(-1)), input)
 *
 */
export const takeLeft =
  (n: number) =>
  <A>(as: ReadonlyArray<A>): ReadonlyArray<A> =>
    isOutOfBound(n, as) ? as : n === 0 ? empty : as.slice(0, n)

/**
 * Keep only a max number of elements from the end of an `ReadonlyArray`, creating a new `ReadonlyArray`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import * as RA from 'hkt-ts/Array'
 * import { pipe } from 'hkt-ts/function'
 *
 * const input: ReadonlyArray<number> = [1, 2, 3]
 * assert.deepStrictEqual(pipe(input, RA.takeRight(2)), [2, 3])
 *
 * // out of bounds
 * assert.strictEqual(pipe(input, RA.takeRight(4)), input)
 * assert.strictEqual(pipe(input, RA.takeRight(-1)), input)
 *
 */
export const takeRight =
  (n: number) =>
  <A>(as: ReadonlyArray<A>): ReadonlyArray<A> =>
    isOutOfBound(n, as) ? as : n === 0 ? empty : as.slice(-n)

/**
 * Calculate the longest initial subarray for which all element satisfy the specified predicate, creating a new array
 *
 * @example
 * import { takeLeftWhile } from 'hkt-ts/Array'
 *
 * assert.deepStrictEqual(takeLeftWhile((n: number) => n % 2 === 0)([2, 4, 3, 6]), [2, 4])
 *
 */
export function takeLeftWhile<A, B extends A>(
  refinement: Refinement<A, B>,
): (as: ReadonlyArray<A>) => ReadonlyArray<B>
export function takeLeftWhile<A>(
  predicate: Predicate<A>,
): <B extends A>(bs: ReadonlyArray<B>) => ReadonlyArray<B>
export function takeLeftWhile<A>(
  predicate: Predicate<A>,
): (as: ReadonlyArray<A>) => ReadonlyArray<A>
export function takeLeftWhile<A>(
  predicate: Predicate<A>,
): (as: ReadonlyArray<A>) => ReadonlyArray<A> {
  return (as: ReadonlyArray<A>) => {
    const out: Array<A> = []
    for (const a of as) {
      if (!predicate(a)) {
        break
      }
      out.push(a)
    }
    const len = out.length
    return len === as.length ? as : len === 0 ? empty : out
  }
}

export interface Spanned<I, R> {
  readonly init: ReadonlyArray<I>
  readonly rest: ReadonlyArray<R>
}

const spanLeftIndex = <A>(as: ReadonlyArray<A>, predicate: Predicate<A>): number => {
  const l = as.length
  let i = 0
  for (; i < l; i++) {
    if (!predicate(as[i])) {
      break
    }
  }
  return i
}

/**
 * Split an array into two parts:
 * 1. the longest initial subarray for which all elements satisfy the specified predicate
 * 2. the remaining elements
 *
 * @example
 * import { spanLeft } from 'hkt-ts/Array'
 *
 * assert.deepStrictEqual(spanLeft((n: number) => n % 2 === 1)([1, 3, 2, 4, 5]), { init: [1, 3], rest: [2, 4, 5] })
 *
 */
export function spanLeft<A, B extends A>(
  refinement: Refinement<A, B>,
): (as: ReadonlyArray<A>) => Spanned<B, A>
export function spanLeft<A>(
  predicate: Predicate<A>,
): <B extends A>(bs: ReadonlyArray<B>) => Spanned<B, B>
export function spanLeft<A>(predicate: Predicate<A>): (as: ReadonlyArray<A>) => Spanned<A, A>
export function spanLeft<A>(predicate: Predicate<A>): (as: ReadonlyArray<A>) => Spanned<A, A> {
  return (as) => {
    const [init, rest] = splitAt(spanLeftIndex(as, predicate))(as)
    return { init, rest }
  }
}

/**
 * Drop a max number of elements from the start of an `ReadonlyArray`, creating a new `ReadonlyArray`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import * as RA from 'hkt-ts/Array'
 * import { pipe } from 'hkt-ts/function'
 *
 * const input: ReadonlyArray<number> = [1, 2, 3]
 * assert.deepStrictEqual(pipe(input, RA.dropLeft(2)), [3])
 * assert.strictEqual(pipe(input, RA.dropLeft(0)), input)
 * assert.strictEqual(pipe(input, RA.dropLeft(-1)), input)
 *
 */
export const dropLeft =
  (n: number) =>
  <A>(as: ReadonlyArray<A>): ReadonlyArray<A> =>
    n <= 0 || isEmpty(as) ? as : n >= as.length ? empty : as.slice(n, as.length)

/**
 * Drop a max number of elements from the end of an `ReadonlyArray`, creating a new `ReadonlyArray`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import * as RA from 'hkt-ts/Array'
 * import { pipe } from 'hkt-ts/function'
 *
 * const input: ReadonlyArray<number> = [1, 2, 3]
 * assert.deepStrictEqual(pipe(input, RA.dropRight(2)), [1])
 * assert.strictEqual(pipe(input, RA.dropRight(0)), input)
 * assert.strictEqual(pipe(input, RA.dropRight(-1)), input)
 *
 */
export const dropRight =
  (n: number) =>
  <A>(as: ReadonlyArray<A>): ReadonlyArray<A> =>
    n <= 0 || isEmpty(as) ? as : n >= as.length ? empty : as.slice(0, as.length - n)

/**
 * Remove the longest initial subarray for which all element satisfy the specified predicate, creating a new array
 *
 * @example
 * import { dropLeftWhile } from 'hkt-ts/Array'
 *
 * assert.deepStrictEqual(dropLeftWhile((n: number) => n % 2 === 1)([1, 3, 2, 4, 5]), [2, 4, 5])
 *
 */
export function dropLeftWhile<A, B extends A>(
  refinement: Refinement<A, B>,
): (as: ReadonlyArray<A>) => ReadonlyArray<B>
export function dropLeftWhile<A>(
  predicate: Predicate<A>,
): <B extends A>(bs: ReadonlyArray<B>) => ReadonlyArray<B>
export function dropLeftWhile<A>(
  predicate: Predicate<A>,
): (as: ReadonlyArray<A>) => ReadonlyArray<A>
export function dropLeftWhile<A>(
  predicate: Predicate<A>,
): (as: ReadonlyArray<A>) => ReadonlyArray<A> {
  return (as) => {
    const i = spanLeftIndex(as, predicate)
    return i === 0 ? as : i === as.length ? empty : as.slice(i)
  }
}

/**
 * Find the first index for which a predicate holds
 *
 * @example
 * import { findIndex } from 'hkt-ts/Array'
 * import { Just, Nothing } from 'hkt-ts/Maybe'
 *
 * assert.deepStrictEqual(findIndex((n: number) => n === 2)([1, 2, 3]), Just(1))
 * assert.deepStrictEqual(findIndex((n: number) => n === 2)([]), Nothing)
 *
 */
export const findIndex =
  <A>(predicate: Predicate<A>) =>
  (as: ReadonlyArray<A>): Maybe<number> => {
    for (let i = 0; i < as.length; i++) {
      if (predicate(as[i])) {
        return Just(i)
      }
    }
    return Nothing
  }

/**
 * Find the first element which satisfies a predicate (or a refinement) function
 *
 * @example
 * import { findFirst } from 'hkt-ts/Array'
 * import { Just } from 'hkt-ts/Maybe'
 *
 * type X = {
 *   readonly a: number
 *   readonly b: number
 * }
 *
 * assert.deepStrictEqual(findFirst((x: X) => x.a === 1)([{ a: 1, b: 1 }, { a: 1, b: 2 }]), Just({ a: 1, b: 1 }))
 *
 */
export function findFirst<A, B extends A>(
  refinement: Refinement<A, B>,
): (as: ReadonlyArray<A>) => Maybe<B>
export function findFirst<A>(
  predicate: Predicate<A>,
): <B extends A>(bs: ReadonlyArray<B>) => Maybe<B>
export function findFirst<A>(predicate: Predicate<A>): (as: ReadonlyArray<A>) => Maybe<A>
export function findFirst<A>(predicate: Predicate<A>): (as: ReadonlyArray<A>) => Maybe<A> {
  return (as) => {
    for (let i = 0; i < as.length; i++) {
      if (predicate(as[i])) {
        return Just(as[i])
      }
    }
    return Nothing
  }
}

/**
 * Find the first element returned by an Maybe based selector function
 *
 * @example
 * import { findFirstMap } from 'hkt-ts/Array'
 * import { Just, Nothing } from 'hkt-ts/Maybe'
 *
 * interface Person {
 *   readonly name: string
 *   readonly age?: number
 * }
 *
 * const persons: ReadonlyArray<Person> = [{ name: 'John' }, { name: 'Mary', age: 45 }, { name: 'Joey', age: 28 }]
 *
 * // returns the name of the first person that has an age
 * assert.deepStrictEqual(findFirstMap((p: Person) => (p.age === undefined ? Nothing: Just(p.name)))(persons), Just('Mary'))
 *
 */
export const findFirstMap =
  <A, B>(f: (a: A) => Maybe<B>) =>
  (as: ReadonlyArray<A>): Maybe<B> => {
    for (let i = 0; i < as.length; i++) {
      const out = f(as[i])
      if (isJust(out)) {
        return out
      }
    }
    return Nothing
  }

/**
 * Find the last element which satisfies a predicate function
 *
 * @example
 * import { findLast } from 'hkt-ts/Array'
 * import { Just } from 'hkt-ts/Maybe'
 *
 * type X = {
 *   readonly a: number
 *   readonly b: number
 * }
 *
 * assert.deepStrictEqual(findLast((x: X) => x.a === 1)([{ a: 1, b: 1 }, { a: 1, b: 2 }]), Just({ a: 1, b: 2 }))
 *
 */
export function findLast<A, B extends A>(
  refinement: Refinement<A, B>,
): (as: ReadonlyArray<A>) => Maybe<B>
export function findLast<A>(
  predicate: Predicate<A>,
): <B extends A>(bs: ReadonlyArray<B>) => Maybe<B>
export function findLast<A>(predicate: Predicate<A>): (as: ReadonlyArray<A>) => Maybe<A>
export function findLast<A>(predicate: Predicate<A>): (as: ReadonlyArray<A>) => Maybe<A> {
  return (as) => {
    for (let i = as.length - 1; i >= 0; i--) {
      if (predicate(as[i])) {
        return Just(as[i])
      }
    }
    return Nothing
  }
}

/**
 * Find the last element returned by an Maybe based selector function
 *
 * @example
 * import { findLastMap } from 'hkt-ts/Array'
 * import { Just, Nothing } from 'hkt-ts/Maybe'
 *
 * interface Person {
 *   readonly name: string
 *   readonly age?: number
 * }
 *
 * const persons: ReadonlyArray<Person> = [{ name: 'John' }, { name: 'Mary', age: 45 }, { name: 'Joey', age: 28 }]
 *
 * // returns the name of the last person that has an age
 * assert.deepStrictEqual(findLastMap((p: Person) => (p.age === undefined ? Nothing: Just(p.name)))(persons), Just('Joey'))
 *
 */
export const findLastMap =
  <A, B>(f: (a: A) => Maybe<B>) =>
  (as: ReadonlyArray<A>): Maybe<B> => {
    for (let i = as.length - 1; i >= 0; i--) {
      const out = f(as[i])
      if (isJust(out)) {
        return out
      }
    }
    return Nothing
  }

/**
 * Returns the index of the last element of the list which matches the predicate
 *
 * @example
 * import { findLastIndex } from 'hkt-ts/Array'
 * import { Just, Nothing } from 'hkt-ts/Maybe'
 *
 * interface X {
 *   readonly a: number
 *   readonly b: number
 * }
 * const xs: ReadonlyArray<X> = [{ a: 1, b: 0 }, { a: 1, b: 1 }]
 * assert.deepStrictEqual(findLastIndex((x: { readonly a: number }) => x.a === 1)(xs), Just(1))
 * assert.deepStrictEqual(findLastIndex((x: { readonly a: number }) => x.a === 4)(xs), Nothing)
 *
 *
 */
export const findLastIndex =
  <A>(predicate: Predicate<A>) =>
  (as: ReadonlyArray<A>): Maybe<number> => {
    for (let i = as.length - 1; i >= 0; i--) {
      if (predicate(as[i])) {
        return Just(i)
      }
    }
    return Nothing
  }

/**
 * Insert an element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @example
 * import { insertAt } from 'hkt-ts/Array'
 * import { Just } from 'hkt-ts/Maybe'
 *
 * assert.deepStrictEqual(insertAt(2, 5)([1, 2, 3, 4]), Just([1, 2, 5, 3, 4]))
 *
 */
export const insertAt =
  <A>(i: number, a: A) =>
  (as: ReadonlyArray<A>): Maybe<NonEmptyArray<A>> =>
    i < 0 || i > as.length ? Nothing : Just([...as.slice(0, i), a, ...as.slice(i)] as any)

/**
 * Change the element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @example
 * import { updateAt } from 'hkt-ts/Array'
 * import { Just, Nothing } from 'hkt-ts/Maybe'
 *
 * assert.deepStrictEqual(updateAt(1, 1)([1, 2, 3]), Just([1, 1, 3]))
 * assert.deepStrictEqual(updateAt(1, 1)([]), Nothing)
 *
 */
export const updateAt = <A>(i: number, a: A): ((as: ReadonlyArray<A>) => Maybe<ReadonlyArray<A>>) =>
  modifyAt(i, () => a)

/**
 * Delete the element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @example
 * import { deleteAt } from 'hkt-ts/Array'
 * import { Just, Nothing } from 'hkt-ts/Maybe'
 *
 * assert.deepStrictEqual(deleteAt(0)([1, 2, 3]), Just([2, 3]))
 * assert.deepStrictEqual(deleteAt(1)([]), Nothing)
 *
 */
export const deleteAt =
  (i: number) =>
  <A>(as: ReadonlyArray<A>): Maybe<ReadonlyArray<A>> =>
    isOutOfBound(i, as) ? Nothing : Just(unsafeDeleteAt(i, as))

/**
 * Apply a function to the element at the specified index, creating a new array, or returning `None` if the index is out
 * of bounds
 *
 * @example
 * import { modifyAt } from 'hkt-ts/Array'
 * import { Just, Nothing } from 'hkt-ts/Maybe'
 *
 * const double = (x: number): number => x * 2
 * assert.deepStrictEqual(modifyAt(1, double)([1, 2, 3]), Just([1, 4, 3]))
 * assert.deepStrictEqual(modifyAt(1, double)([]), Nothing)
 *
 */
export const modifyAt =
  <A>(i: number, f: (a: A) => A) =>
  (as: ReadonlyArray<A>): Maybe<ReadonlyArray<A>> =>
    isOutOfBound(i, as) ? Nothing : Just(unsafeUpdateAt(i, f(as[i]), as))

/**
 * Reverse an array, creating a new array
 *
 * @example
 * import { reverse } from 'hkt-ts/Array'
 *
 * assert.deepStrictEqual(reverse([1, 2, 3]), [3, 2, 1])
 *
 */
export const reverse = <A>(as: ReadonlyArray<A>): ReadonlyArray<A> =>
  as.length <= 1 ? as : as.slice().reverse()

/**
 * Extracts from an array of `Either` all the `Right` elements. All the `Right` elements are extracted in order
 *
 * @example
 * import { rights } from 'hkt-ts/Array'
 * import { right, left } from 'hkt-ts/Either'
 *
 * assert.deepStrictEqual(rights([right(1), left('foo'), right(2)]), [1, 2])
 *
 */
export const rights = <E, A>(as: ReadonlyArray<Either<E, A>>): ReadonlyArray<A> => {
  const r: Array<A> = []
  for (let i = 0; i < as.length; i++) {
    const a = as[i]
    if (isRight(a)) {
      r.push(a.right)
    }
  }
  return r
}

/**
 * Extracts from an array of `Either` all the `Left` elements. All the `Left` elements are extracted in order
 *
 * @example
 * import { lefts } from 'hkt-ts/Array'
 * import { left, right } from 'hkt-ts/Either'
 *
 * assert.deepStrictEqual(lefts([right(1), left('foo'), right(2)]), ['foo'])
 *
 */
export const lefts = <E, A>(as: ReadonlyArray<Either<E, A>>): ReadonlyArray<E> => {
  const r: Array<E> = []
  for (let i = 0; i < as.length; i++) {
    const a = as[i]
    if (isLeft(a)) {
      r.push(a.left)
    }
  }
  return r
}

/**
 * Sort the elements of an array in increasing order, creating a new array
 *
 * @example
 * import { sort } from 'hkt-ts/Array'
 * import * as N from 'hkt-ts/number'
 *
 * assert.deepStrictEqual(sort(N.Ord)([3, 2, 1]), [1, 2, 3])
 *
 */
export const sort =
  <B>(O: Ord<B>) =>
  <A extends B>(as: ReadonlyArray<A>): ReadonlyArray<A> =>
    as.length <= 1 ? as : as.slice().sort(O.compare)

/**
 * Apply a function to pairs of elements at the same index in two arrays, collecting the results in a new array. If one
 * input array is short, excess elements of the longer array are discarded.
 *
 * @example
 * import { zipWith } from 'hkt-ts/Array'
 *
 * assert.deepStrictEqual(zipWith([1, 2, 3], ['a', 'b', 'c', 'd'], (n, s) => s + n), ['a1', 'b2', 'c3'])
 */
export const zipWith =
  <A, B, C>(f: (a: A, b: B) => C, fa: ReadonlyArray<A>) =>
  (fb: ReadonlyArray<B>): ReadonlyArray<C> => {
    const fc: Array<C> = []
    const len = Math.min(fa.length, fb.length)
    for (let i = 0; i < len; i++) {
      fc[i] = f(fa[i], fb[i])
    }
    return fc
  }

/**
 * Takes two arrays and returns an array of corresponding pairs. If one input array is short, excess elements of the
 * longer array are discarded
 *
 * @example
 * import { zip } from 'hkt-ts/Array'
 * import { pipe } from 'hkt-ts/function'
 *
 * assert.deepStrictEqual(pipe([1, 2, 3], zip(['a', 'b', 'c', 'd'])), [[1, 'a'], [2, 'b'], [3, 'c']])
 *
 */
export function zip<A>(
  second: ReadonlyArray<A>,
): <B>(first: ReadonlyArray<B>) => ReadonlyArray<readonly [B, A]> {
  return zipWith((a, b) => [b, a] as const, second)
}

/**
 * The function is reverse of `zip`. Takes an array of pairs and return two corresponding arrays
 *
 * @example
 * import { unzip } from 'hkt-ts/Array'
 *
 * assert.deepStrictEqual(unzip([[1, 'a'], [2, 'b'], [3, 'c']]), [[1, 2, 3], ['a', 'b', 'c']])
 *
 */
export const unzip = <A, B>(
  as: ReadonlyArray<readonly [A, B]>,
): readonly [ReadonlyArray<A>, ReadonlyArray<B>] => {
  const fa: Array<A> = []
  const fb: Array<B> = []
  for (let i = 0; i < as.length; i++) {
    fa[i] = as[i][0]
    fb[i] = as[i][1]
  }
  return [fa, fb]
}

/**
 * Prepend an element to every member of an array
 *
 * @example
 * import { prependAll } from 'hkt-ts/Array'
 *
 * assert.deepStrictEqual(prependAll(9)([1, 2, 3, 4]), [9, 1, 9, 2, 9, 3, 9, 4])
 *
 */
export const prependAll = <A>(middle: A): ((as: ReadonlyArray<A>) => ReadonlyArray<A>) => {
  const f = NEA.prependAll(middle)
  return (as) => (isNonEmpty(as) ? f(as) : as)
}

/**
 * Places an element in between members of an array
 *
 * @example
 * import { intersperse } from 'hkt-ts/Array'
 *
 * assert.deepStrictEqual(intersperse(9)([1, 2, 3, 4]), [1, 9, 2, 9, 3, 9, 4])
 *
 */
export const intersperse = <A>(middle: A): ((as: ReadonlyArray<A>) => ReadonlyArray<A>) => {
  const f = NEA.intersperse(middle)
  return (as) => (isNonEmpty(as) ? f(as) : as)
}

/**
 * Rotate a `ReadonlyArray` by `n` steps.
 *
 * @example
 * import { rotate } from 'hkt-ts/Array'
 *
 * assert.deepStrictEqual(rotate(2)([1, 2, 3, 4, 5]), [4, 5, 1, 2, 3])
 *
 */
export const rotate = (n: number): (<A>(as: ReadonlyArray<A>) => ReadonlyArray<A>) => {
  const f = NEA.rotate(n)
  return (as) => (isNonEmpty(as) ? f(as) : as)
}

/**
 * Test if a value is a member of an array. Takes a `Eq<A>` as a single
 * argument which returns the function to use to search for a value of type `A` in
 * an array of type `ReadonlyArray<A>`.
 *
 * @example
 * import { elem } from 'hkt-ts/Array'
 * import * as N from 'hkt-ts/number'
 * import { pipe } from 'hkt-ts/function'
 *
 * assert.strictEqual(pipe([1, 2, 3], elem(N.Eq)(2)), true)
 * assert.strictEqual(pipe([1, 2, 3], elem(N.Eq)(0)), false)
 *
 */
export function elem<A>(E: Eq<A>): {
  (a: A): (as: ReadonlyArray<A>) => boolean
  (a: A, as: ReadonlyArray<A>): boolean
}
export function elem<A>(
  E: Eq<A>,
): (a: A, as?: ReadonlyArray<A>) => boolean | ((as: ReadonlyArray<A>) => boolean) {
  return (a, as?) => {
    if (as === undefined) {
      const elemE = elem(E)
      return (as) => elemE(a, as)
    }
    const predicate = (element: A) => E.equals(element, a)
    let i = 0
    for (; i < as.length; i++) {
      if (predicate(as[i])) {
        return true
      }
    }
    return false
  }
}

/**
 * Remove duplicates from an array, keeping the first occurrence of an element.
 *
 * @example
 * import { uniq } from 'hkt-ts/Array'
 * import * as N from 'hkt-ts/number'
 *
 * assert.deepStrictEqual(uniq(N.Eq)([1, 2, 1]), [1, 2])
 *
 */
export const uniq = <A>(E: Eq<A>): ((as: ReadonlyArray<A>) => ReadonlyArray<A>) => {
  const f = NEA.uniq(E)
  return (as) => (isNonEmpty(as) ? f(as) : as)
}

/**
 * Sort the elements of an array in increasing order, where elements are compared using first `ords[0]`, then `ords[1]`,
 * etc...
 *
 * @example
 * import { sortBy } from 'hkt-ts/Array'
 * import { contramap } from 'hkt-ts/Ord'
 * import * as S from 'hkt-ts/string'
 * import * as N from 'hkt-ts/number'
 * import { pipe } from 'hkt-ts/function'
 *
 * interface Person {
 *   readonly name: string
 *   readonly age: number
 * }
 * const byName = pipe(S.Ord, contramap((p: Person) => p.name))
 * const byAge = pipe(N.Ord, contramap((p: Person) => p.age))
 *
 * const sortByNameByAge = sortBy([byName, byAge])
 *
 * const persons = [{ name: 'a', age: 1 }, { name: 'b', age: 3 }, { name: 'c', age: 2 }, { name: 'b', age: 2 }]
 * assert.deepStrictEqual(sortByNameByAge(persons), [
 *   { name: 'a', age: 1 },
 *   { name: 'b', age: 2 },
 *   { name: 'b', age: 3 },
 *   { name: 'c', age: 2 }
 * ])
 *
 */
export const sortBy = <B>(
  ords: ReadonlyArray<Ord<B>>,
): (<A extends B>(as: ReadonlyArray<A>) => ReadonlyArray<A>) => {
  const f = NEA.sortBy(ords)
  return (as) => (isNonEmpty(as) ? f(as) : as)
}

/**
 * A useful recursion pattern for processing a `ReadonlyArray` to produce a new `ReadonlyArray`, often used for "chopping" up the input
 * `ReadonlyArray`. Typically `chop` is called with Just function that will consume an initial prefix of the `ReadonlyArray` and produce a
 * value and the tail of the `ReadonlyArray`.
 *
 * @example
 * import { Eq } from 'hkt-ts/Eq'
 * import * as RA from 'hkt-ts/Array'
 * import * as N from 'hkt-ts/number'
 * import { pipe } from 'hkt-ts/function'
 *
 * const group = <A>(S: Eq<A>): ((as: ReadonlyArray<A>) => ReadonlyArray<ReadonlyArray<A>>) => {
 *   return RA.chop(as => {
 *     const { init, rest } = pipe(as, RA.spanLeft((a: A) => S.equals(a, as[0])))
 *     return [init, rest]
 *   })
 * }
 * assert.deepStrictEqual(group(N.Eq)([1, 1, 2, 3, 3, 4]), [[1, 1], [2], [3, 3], [4]])
 *
 */
export const chop = <A, B>(
  f: (as: NonEmptyArray<A>) => readonly [B, ReadonlyArray<A>],
): ((as: ReadonlyArray<A>) => ReadonlyArray<B>) => {
  const g = NEA.chop(f)
  return (as) => (isNonEmpty(as) ? g(as) : empty)
}

/**
 * Splits a `ReadonlyArray` into two pieces, the first piece has max `n` elements.
 *
 * @example
 * import { splitAt } from 'hkt-ts/Array'
 *
 * assert.deepStrictEqual(splitAt(2)([1, 2, 3, 4, 5]), [[1, 2], [3, 4, 5]])
 *
 */
export const splitAt =
  (n: number) =>
  <A>(as: ReadonlyArray<A>): readonly [ReadonlyArray<A>, ReadonlyArray<A>] =>
    n >= 1 && isNonEmpty(as) ? NEA.splitAt(n)(as) : isEmpty(as) ? [as, empty] : [empty, as]

/**
 * Splits a `ReadonlyArray` into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the length of
 * the `ReadonlyArray`. Note that `chunksOf(n)([])` is `[]`, not `[[]]`. This is intentional, and is consistent with a recursive
 * definition of `chunksOf`; it satisfies the property that:
 *
 * ```ts
 * chunksOf(n)(xs).concat(chunksOf(n)(ys)) == chunksOf(n)(xs.concat(ys)))
 * ```
 *
 * whenever `n` evenly divides the length of `as`.
 *
 * @example
 * import { chunksOf } from 'hkt-ts/Array'
 *
 * assert.deepStrictEqual(chunksOf(2)([1, 2, 3, 4, 5]), [[1, 2], [3, 4], [5]])
 *
 */
export const chunksOf = (
  n: number,
): (<A>(as: ReadonlyArray<A>) => ReadonlyArray<NonEmptyArray<A>>) => {
  const f = NEA.chunksOf(n)
  return (as) => (isNonEmpty(as) ? f(as) : empty)
}

/**
 * `ReadonlyArray` comprehension.
 *
 * ```
 * [ f(x, y, ...) | x ← xs, y ← ys, ..., g(x, y, ...) ]
 * ```
 *
 * @example
 * import { comprehension } from 'hkt-ts/Array'
 * import { tuple } from 'hkt-ts/function'
 *
 * assert.deepStrictEqual(comprehension([[1, 2, 3], ['a', 'b']], tuple, (a, b) => (a + b.length) % 2 === 0), [
 *   [1, 'a'],
 *   [1, 'b'],
 *   [3, 'a'],
 *   [3, 'b']
 * ])
 *
 */
export function comprehension<A, B, C, D, R>(
  input: readonly [ReadonlyArray<A>, ReadonlyArray<B>, ReadonlyArray<C>, ReadonlyArray<D>],
  f: (a: A, b: B, c: C, d: D) => R,
  g?: (a: A, b: B, c: C, d: D) => boolean,
): ReadonlyArray<R>
export function comprehension<A, B, C, R>(
  input: readonly [ReadonlyArray<A>, ReadonlyArray<B>, ReadonlyArray<C>],
  f: (a: A, b: B, c: C) => R,
  g?: (a: A, b: B, c: C) => boolean,
): ReadonlyArray<R>
export function comprehension<A, B, R>(
  input: readonly [ReadonlyArray<A>, ReadonlyArray<B>],
  f: (a: A, b: B) => R,
  g?: (a: A, b: B) => boolean,
): ReadonlyArray<R>
export function comprehension<A, R>(
  input: readonly [ReadonlyArray<A>],
  f: (a: A) => R,
  g?: (a: A) => boolean,
): ReadonlyArray<R>
export function comprehension<A, R>(
  input: ReadonlyArray<ReadonlyArray<A>>,
  f: (...xs: ReadonlyArray<A>) => R,
  g: (...xs: ReadonlyArray<A>) => boolean = () => true,
): ReadonlyArray<R> {
  const go = (scope: ReadonlyArray<A>, input: ReadonlyArray<ReadonlyArray<A>>): ReadonlyArray<R> =>
    isNonEmpty(input)
      ? pipe(
          NEA.head(input),
          flatMap((x) => go(pipe(scope, append(x)), NEA.tail(input))),
        )
      : g(...scope)
      ? [f(...scope)]
      : empty
  return go(empty, input)
}

export const concatW =
  <B>(second: ReadonlyArray<B>) =>
  <A>(first: ReadonlyArray<A>): ReadonlyArray<A | B> =>
    isEmpty(first)
      ? second
      : isEmpty(second)
      ? first
      : (first as ReadonlyArray<A | B>).concat(second)

export const concat: <A>(
  second: ReadonlyArray<A>,
) => (first: ReadonlyArray<A>) => ReadonlyArray<A> = concatW

/**
 * Creates an array of unique values, in order, from all given arrays using a `Eq` for equality comparisons
 *
 * @example
 * import { union } from 'hkt-ts/Array'
 * import * as N from 'hkt-ts/number'
 * import { pipe } from 'hkt-ts/function'
 *
 * assert.deepStrictEqual(pipe([1, 2], union(N.Eq)([2, 3])), [1, 2, 3])
 *
 */
export function union<A>(
  E: Eq<A>,
): (xs: ReadonlyArray<A>) => (ys: ReadonlyArray<A>) => ReadonlyArray<A>
export function union<A>(
  E: Eq<A>,
): (xs: ReadonlyArray<A>) => (ys: ReadonlyArray<A>) => ReadonlyArray<A> {
  const unionE = NEA.union(E)
  return (second) => (first) =>
    isNonEmpty(first) && isNonEmpty(second)
      ? unionE(second)(first)
      : isNonEmpty(first)
      ? first
      : second
}

/**
 * Creates an array of unique values that are included in all given arrays using a `Eq` for equality
 * comparisons. The order and references of result values are determined by the first array.
 *
 * @example
 * import { intersection } from 'hkt-ts/Array'
 * import * as N from 'hkt-ts/number'
 * import { pipe } from 'hkt-ts/function'
 *
 * assert.deepStrictEqual(pipe([1, 2], intersection(N.Eq)([2, 3])), [2])
 *
 */
export function intersection<A>(
  E: Eq<A>,
): (xs: ReadonlyArray<A>) => (ys: ReadonlyArray<A>) => ReadonlyArray<A> {
  const elemE = elem(E)
  return (xs) => (ys) => xs.filter((a) => elemE(a, ys))
}

/**
 * Creates an array of array values not included in the other given array using a `Eq` for equality
 * comparisons. The order and references of result values are determined by the first array.
 *
 * @example
 * import { difference } from 'hkt-ts/Array'
 * import * as N from 'hkt-ts/number'
 * import { pipe } from 'hkt-ts/function'
 *
 * assert.deepStrictEqual(pipe([1, 2], difference(N.Eq)([2, 3])), [1])
 *
 */
export function difference<A>(E: Eq<A>): {
  (xs: ReadonlyArray<A>): (ys: ReadonlyArray<A>) => ReadonlyArray<A>
  (xs: ReadonlyArray<A>, ys: ReadonlyArray<A>): ReadonlyArray<A>
}
export function difference<A>(
  E: Eq<A>,
): (xs: ReadonlyArray<A>) => (ys: ReadonlyArray<A>) => ReadonlyArray<A> {
  const elemE = elem(E)

  return (xs) => (ys) => xs.filter((a) => !elemE(a, ys))
}

/**
 * Identifies an associative operation on a type constructor. It is similar to `Associative`, except that it applies to
 * types of kind `* -> *`.
 *
 */
export const alt =
  <B>(that: Lazy<ReadonlyArray<B>>) =>
  <A>(fa: ReadonlyArray<A>): ReadonlyArray<A | B> =>
    (fa as ReadonlyArray<A | B>).concat(that())

/**
 * Apply a function to an argument under a type constructor.
 *
 */
export const ap: <A>(
  fa: ReadonlyArray<A>,
) => <B>(fab: ReadonlyArray<(a: A) => B>) => ReadonlyArray<B> = (fa) =>
  flatMap((f) => pipe(fa, map(f)))

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 */
export const flatMap: <A, B>(
  f: (a: A) => ReadonlyArray<B>,
) => (ma: ReadonlyArray<A>) => ReadonlyArray<B> = (f) => (ma) =>
  pipe(
    ma,
    flatMapWithIndex((_, a) => f(a)),
  )

/**
 * Derivable from `Chain`.
 */
export const flatten: <A>(mma: ReadonlyArray<ReadonlyArray<A>>) => ReadonlyArray<A> =
  /*#__PURE__*/
  flatMap(identity)

/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent Just computational context.
 */
export const map: <A, B>(f: (a: A) => B) => (fa: ReadonlyArray<A>) => ReadonlyArray<B> =
  (f) => (fa) =>
    fa.map((a) => f(a))

export const mapWithIndex: <A, B>(
  f: (i: number, a: A) => B,
) => (fa: ReadonlyArray<A>) => ReadonlyArray<B> = (f) => (fa) => fa.map((a, i) => f(i, a))

export const filter: {
  <A, B extends A>(refinement: Refinement<A, B>): (as: ReadonlyArray<A>) => ReadonlyArray<B>
  <A>(predicate: Predicate<A>): <B extends A>(bs: ReadonlyArray<B>) => ReadonlyArray<B>
  <A>(predicate: Predicate<A>): (as: ReadonlyArray<A>) => ReadonlyArray<A>
} =
  <A>(predicate: Predicate<A>) =>
  <B extends A>(as: ReadonlyArray<B>) =>
    as.filter(predicate)

export const filterMapWithIndex =
  <A, B>(f: (i: number, a: A) => Maybe<B>) =>
  (fa: ReadonlyArray<A>): ReadonlyArray<B> => {
    const out: Array<B> = []
    for (let i = 0; i < fa.length; i++) {
      const MaybeB = f(i, fa[i])
      if (isJust(MaybeB)) {
        out.push(MaybeB.value)
      }
    }
    return out
  }

export const filterMap: <A, B>(
  f: (a: A) => Maybe<B>,
) => (fa: ReadonlyArray<A>) => ReadonlyArray<B> = (f) => filterMapWithIndex((_, a) => f(a))

export const compact: <A>(fa: ReadonlyArray<Maybe<A>>) => ReadonlyArray<A> =
  /*#__PURE__*/
  filterMap(identity)

export const extend: <A, B>(
  f: (fa: ReadonlyArray<A>) => B,
) => (wa: ReadonlyArray<A>) => ReadonlyArray<B> = (f) => (wa) => wa.map((_, i) => f(wa.slice(i)))

/**
 * Derivable from `Extend`.
 *
 */
export const duplicate: <A>(wa: ReadonlyArray<A>) => ReadonlyArray<ReadonlyArray<A>> =
  /*#__PURE__*/
  extend(identity)

export const foldMapWithIndex =
  <M>(M: AssociativeIdentity<M>) =>
  <A>(f: (i: number, a: A) => M) =>
  (fa: ReadonlyArray<A>): M =>
    fa.reduce((b, a, i) => M.concat(b, f(i, a)), M.id)

export const reduce: <A, B>(b: B, f: (b: B, a: A) => B) => (fa: ReadonlyArray<A>) => B = (b, f) =>
  reduceWithIndex(b, (_, b, a) => f(b, a))

export const foldMap: <M>(
  M: AssociativeIdentity<M>,
) => <A>(f: (a: A) => M) => (fa: ReadonlyArray<A>) => M = (M) => {
  const foldMapWithIndexM = foldMapWithIndex(M)
  return (f) => foldMapWithIndexM((_, a) => f(a))
}

export const reduceWithIndex: <A, B>(
  b: B,
  f: (i: number, b: B, a: A) => B,
) => (fa: ReadonlyArray<A>) => B = (b, f) => (fa) => {
  const len = fa.length
  let out = b
  for (let i = 0; i < len; i++) {
    out = f(i, out, fa[i])
  }
  return out
}

export const reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => (fa: ReadonlyArray<A>) => B = (
  b,
  f,
) => reduceRightWithIndex(b, (_, a, b) => f(a, b))

export const reduceRightWithIndex: <A, B>(
  b: B,
  f: (i: number, a: A, b: B) => B,
) => (fa: ReadonlyArray<A>) => B = (b, f) => (fa) => fa.reduceRight((b, a, i) => f(i, a, b), b)

export const unfold = <A, B>(b: B, f: (b: B) => Maybe<readonly [A, B]>): ReadonlyArray<A> => {
  const out: Array<A> = []
  let bb: B = b

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const mt = f(bb)
    if (isJust(mt)) {
      const [a, b] = mt.value
      out.push(a)
      bb = b
    } else {
      break
    }
  }
  return out
}

export const makeDebug = <A>(S: Debug<A>): Debug<ReadonlyArray<A>> => ({
  debug: (as) => `[${as.map(S.debug).join(', ')}]`,
})

export const makeAssociative = <A = never>(): Associative<ReadonlyArray<A>> => ({
  concat: (first, second) =>
    isEmpty(first) ? second : isEmpty(second) ? first : first.concat(second),
})

/**
 * Returns a `AssociativeIdentity` for `ReadonlyArray<A>`.
 *
 * @example
 * import { getAssociativeIdentity } from 'hkt-ts/Array'
 *
 * const M = getAssociativeIdentity<number>()
 * assert.deepStrictEqual(M.concat([1, 2], [3, 4]), [1, 2, 3, 4])
 *
 */
export const makeAssociativeIdentity = <A = never>(): AssociativeIdentity<ReadonlyArray<A>> => ({
  concat: makeAssociative<A>().concat,
  id: empty,
})

/**
 * Derives an `Eq` over the `ReadonlyArray` of a given element type from the `Eq` of that type. The derived `Eq` defines two
 * arrays as equal if all elements of both arrays are compared equal pairwise with the given `E`. In case of arrays of
 * different lengths, the result is non equality.
 *
 * @example
 * import * as S from 'hkt-ts/string'
 * import { getEq } from 'hkt-ts/Array'
 *
 * const E = getEq(S.Eq)
 * assert.strictEqual(E.equals(['a', 'b'], ['a', 'b']), true)
 * assert.strictEqual(E.equals(['a'], []), false)
 *
 */
export const makeEq = <A>(E: Eq<A>): Eq<ReadonlyArray<A>> =>
  fromEquals((xs, ys) => xs.length === ys.length && xs.every((x, i) => E.equals(x, ys[i])))

/**
 * Derives an `Ord` over the `ReadonlyArray` of a given element type from the `Ord` of that type. The ordering between two such
 * arrays is equal to: the first non equal comparison of each arrays elements taken pairwise in increasing order, in
 * case of equality over all the pairwise elements; the longest array is considered the greatest, if both arrays have
 * the same length, the result is equality.
 *
 * @example
 * import { getOrd } from 'hkt-ts/Array'
 * import * as S from 'hkt-ts/string'
 *
 * const O = makeOrd(S.Ord)
 * assert.strictEqual(O.compare(['b'], ['a']), 1)
 * assert.strictEqual(O.compare(['a'], ['a']), 0)
 * assert.strictEqual(O.compare(['a'], ['b']), -1)
 *
 *
 */
export const makeOrd = <A>(O: Ord<A>): Ord<ReadonlyArray<A>> =>
  fromCompare((a, b) => {
    const aLen = a.length
    const bLen = b.length
    const len = Math.min(aLen, bLen)
    for (let i = 0; i < len; i++) {
      const ordering = O.compare(a[i], b[i])
      if (ordering !== 0) {
        return ordering
      }
    }
    return N.Ord.compare(aLen, bLen)
  })

export const getUnionAssociative = <A>(E: Eq<A>): Associative<ReadonlyArray<A>> => {
  const unionE = union(E)
  return {
    concat: (first, second) => unionE(second)(first),
  }
}

export const getUnionAssociativeIdentity = <A>(
  E: Eq<A>,
): AssociativeIdentity<ReadonlyArray<A>> => ({
  concat: getUnionAssociative(E).concat,
  id: empty,
})

export const getIntersectionAssociative = <A>(E: Eq<A>): Associative<ReadonlyArray<A>> => {
  const intersectionE = intersection(E)
  return {
    concat: (first, second) => intersectionE(second)(first),
  }
}

export const getDifferenceConcat = <A>(E: Eq<A>): Concat<ReadonlyArray<A>> => {
  const differenceE = difference(E)
  return {
    concat: (first, second) => differenceE(second)(first),
  }
}

export const chainRecDepthFirst =
  <A, B>(f: (a: A) => ReadonlyArray<Either<A, B>>) =>
  (a: A): ReadonlyArray<B> => {
    const todo: Array<Either<A, B>> = [...f(a)]
    const out: Array<B> = []

    while (todo.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const e = todo.shift()!
      if (isLeft(e)) {
        todo.unshift(...f(e.left))
      } else {
        out.push(e.right)
      }
    }

    return out
  }

export const chainRecBreadthFirst =
  <A, B>(f: (a: A) => ReadonlyArray<Either<A, B>>) =>
  (a: A): ReadonlyArray<B> => {
    const initial = f(a)
    const todo: Array<Either<A, B>> = []
    const out: Array<B> = []

    function go(e: Either<A, B>): void {
      if (isLeft(e)) {
        f(e.left).forEach((v) => todo.push(v))
      } else {
        out.push(e.right)
      }
    }

    for (const e of initial) {
      go(e)
    }

    while (todo.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      go(todo.shift()!)
    }

    return out
  }

// -------------------------------------------------------------------------------------
// unsafe
// -------------------------------------------------------------------------------------

export const unsafeInsertAt = <A>(i: number, a: A, as: ReadonlyArray<A>): NonEmptyArray<A> =>
  [...as.slice(0, i), a, as.slice(i)] as any

export const unsafeUpdateAt = <A>(i: number, a: A, as: ReadonlyArray<A>): ReadonlyArray<A> =>
  isNonEmpty(as) ? NEA.unsafeUpdateAt(i, a, as) : as

export const unsafeDeleteAt = <A>(i: number, as: ReadonlyArray<A>): ReadonlyArray<A> => {
  const xs = as.slice()
  xs.splice(i, 1)
  return xs
}

// -------------------------------------------------------------------------------------
// interop
// -------------------------------------------------------------------------------------

export const toArray = <A>(as: ReadonlyArray<A>): Array<A> => as.slice()

export const fromArray = <A>(as: Array<A>): ReadonlyArray<A> => (isEmpty(as) ? empty : as.slice())

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * An empty array
 *
 */
export const empty: readonly [] = []

/**
 * Check if a predicate holds true for every array member.
 *
 * @example
 * import { every } from 'hkt-ts/Array'
 * import { pipe } from 'hkt-ts/function'
 *
 * const isPositive = (n: number): boolean => n > 0
 *
 * assert.deepStrictEqual(pipe([1, 2, 3], every(isPositive)), true)
 * assert.deepStrictEqual(pipe([1, 2, -3], every(isPositive)), false)
 *
 */
export const every =
  <A>(predicate: Predicate<A>) =>
  (as: ReadonlyArray<A>): boolean =>
    as.every(predicate)

/**
 * Check if a predicate holds true for any array member.
 *
 * @example
 * import { some } from 'hkt-ts/Array'
 * import { pipe } from 'hkt-ts/function'
 *
 * const isPositive = (n: number): boolean => n > 0
 *
 * assert.deepStrictEqual(pipe([-1, -2, 3], some(isPositive)), true)
 * assert.deepStrictEqual(pipe([-1, -2, -3], some(isPositive)), false)
 *
 */
export const some =
  <A>(predicate: Predicate<A>) =>
  (as: ReadonlyArray<A>): as is NonEmptyArray<A> =>
    as.some(predicate)
