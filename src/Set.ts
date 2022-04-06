import { Associative } from './Associative'
import { AssociativeIdentity } from './AssociativeIdentity'
import { Concat } from './Concat'
import { Debug } from './Debug'
import { Eq, fromEquals } from './Eq'
import { Maybe } from './Maybe'
import { Ord } from './Ord'
import { Predicate, not } from './Predicate'
import { Refinement } from './Refinement'
import { identity } from './function'

// -------------------------------------------------------------------------------------
// interop
// -------------------------------------------------------------------------------------

/**
 * @category interop
 */
export const fromSet = <A>(s: Set<A>): ReadonlySet<A> => new Set(s)

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * Create a set with one element
 *
 * @category constructors
 */
export const singleton = <A>(a: A): ReadonlySet<A> => new Set([a])

/**
 * Create a `ReadonlySet` from a `ReadonlyArray`
 *
 * @category constructors
 */
export const fromArray =
  <A>(E: Eq<A>) =>
  (as: ReadonlyArray<A>): ReadonlySet<A> => {
    const len = as.length
    const out = new Set<A>()
    const has = elem(E)
    for (let i = 0; i < len; i++) {
      const a = as[i]
      if (!has(a)(out)) {
        out.add(a)
      }
    }
    return out
  }

// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------

/**
 * @category destructors
 */
export function toSet<A>(s: ReadonlySet<A>): Set<A> {
  return new Set(s)
}

interface Next<A> {
  readonly done?: boolean
  readonly value: A
}

/**
 * Projects a Set through a function
 *
 * @category combinators
 */
export function map<B>(E: Eq<B>): <A>(f: (x: A) => B) => (set: ReadonlySet<A>) => ReadonlySet<B> {
  const elemE = elem(E)
  return (f) => (set) => {
    const r = new Set<B>()
    set.forEach((e) => {
      const v = f(e)
      if (!elemE(v)(r)) {
        r.add(v)
      }
    })
    return r
  }
}

/**
 * @category combinators
 */
export function chain<B>(
  E: Eq<B>,
): <A>(f: (x: A) => ReadonlySet<B>) => (set: ReadonlySet<A>) => ReadonlySet<B> {
  const elemE = elem(E)
  return (f) => (set) => {
    const r = new Set<B>()
    set.forEach((e) => {
      f(e).forEach((e) => {
        if (!elemE(e)(r)) {
          r.add(e)
        }
      })
    })
    return r
  }
}

/**
 * @category combinators
 */
export function filter<A, B extends A>(
  refinement: Refinement<A, B>,
): (set: ReadonlySet<A>) => ReadonlySet<B>
export function filter<A>(
  predicate: Predicate<A>,
): <B extends A>(set: ReadonlySet<B>) => ReadonlySet<B>
export function filter<A>(predicate: Predicate<A>): (set: ReadonlySet<A>) => ReadonlySet<A>
export function filter<A>(predicate: Predicate<A>): (set: ReadonlySet<A>) => ReadonlySet<A> {
  return (set: ReadonlySet<A>) => {
    const values = set.values()
    let e: Next<A>
    const r = new Set<A>()
    // tslint:disable-next-line: strict-boolean-expressions
    while (!(e = values.next()).done) {
      const a = e.value
      if (predicate(a)) {
        r.add(a)
      }
    }
    return r
  }
}

/**
 * Form the union of two sets
 *
 * @category combinators
 */
export function union<A>(
  E: Eq<A>,
): (that: ReadonlySet<A>) => (me: ReadonlySet<A>) => ReadonlySet<A> {
  const elemE = elem(E)
  return (that) => (me) => {
    if (isEmpty(me)) {
      return that
    }

    if (isEmpty(that)) {
      return me
    }

    const r = new Set(me)

    that.forEach((e) => {
      if (!elemE(e)(r)) {
        r.add(e)
      }
    })

    return r
  }
}

/**
 * The set of elements which are in both the first and second set
 *
 * @category combinators
 */
export function intersection<A>(
  E: Eq<A>,
): (that: ReadonlySet<A>) => (me: ReadonlySet<A>) => ReadonlySet<A> {
  const elemE = elem(E)
  return (that) => (me) => {
    if (isEmpty(me) || isEmpty(that)) {
      return empty
    }

    const r = new Set<A>()

    me.forEach((e) => {
      if (elemE(e)(that)) {
        r.add(e)
      }
    })

    return r
  }
}

/**
 * Form the set difference (`x` - `y`)
 *
 * @example
 * import { difference } from 'hkt-ts/Set'
 * import * as N from 'hkt-ts/number'
 * import { pipe } from 'hkt-ts/function'
 *
 * assert.deepStrictEqual(pipe(new Set([1, 2]), difference(N.Eq)(new Set([1, 3]))), new Set([2]))
 *
 * @category combinators
 */
export function difference<A>(
  E: Eq<A>,
): (that: ReadonlySet<A>) => (me: ReadonlySet<A>) => ReadonlySet<A> {
  const elemE = elem(E)
  return (that) => (me) => filter((a: A) => !elemE(a)(that))(me)
}

export function reduce<A>(O: Ord<A>): <B>(b: B, f: (b: B, a: A) => B) => (fa: ReadonlySet<A>) => B {
  const toReadonlyArrayO = toReadonlyArray(O)
  return (b, f) => (fa) => toReadonlyArrayO(fa).reduce(f, b)
}

export function foldMap<A, M>(
  O: Ord<A>,
  M: AssociativeIdentity<M>,
): (f: (a: A) => M) => (fa: ReadonlySet<A>) => M {
  const toReadonlyArrayO = toReadonlyArray(O)
  return (f) => (fa) => toReadonlyArrayO(fa).reduce((b, a) => M.concat(b, f(a)), M.id)
}

export const reduceRight = <A>(
  O: Ord<A>,
): (<B>(b: B, f: (a: A, b: B) => B) => (fa: ReadonlySet<A>) => B) => {
  const toReadonlyArrayO = toReadonlyArray(O)
  return (b, f) => (fa) => toReadonlyArrayO(fa).reduceRight((b, a) => f(a, b), b)
}

/**
 * Insert a value into a set
 *
 * @category combinators
 */
export function insert<A>(E: Eq<A>): (a: A) => (set: ReadonlySet<A>) => ReadonlySet<A> {
  const elemE = elem(E)
  return (a) => (set) => {
    if (!elemE(a)(set)) {
      const r = new Set(set)
      r.add(a)
      return r
    } else {
      return set
    }
  }
}

/**
 * Delete a value from a set
 *
 * @category combinators
 */
export const remove =
  <A>(E: Eq<A>) =>
  (a: A) =>
  (set: ReadonlySet<A>): ReadonlySet<A> =>
    filter((ax: A) => !E.equals(a, ax))(set)

/**
 * Checks an element is a member of a set;
 * If yes, removes the value from the set
 * If no, inserts the value to the set
 *
 * @category combinators
 */
export const toggle = <A>(E: Eq<A>): ((a: A) => (set: ReadonlySet<A>) => ReadonlySet<A>) => {
  const elemE = elem(E)
  const removeE = remove(E)
  const insertE = insert(E)
  return (a) => (set) => (elemE(a)(set) ? removeE : insertE)(a)(set)
}

/**
 * @category combinators
 */
export const compact = <A>(E: Eq<A>): ((fa: ReadonlySet<Maybe<A>>) => ReadonlySet<A>) =>
  filterMap(E)(identity)

/**
 * @category combinators
 */
export function filterMap<B>(
  E: Eq<B>,
): <A>(f: (a: A) => Maybe<B>) => (fa: ReadonlySet<A>) => ReadonlySet<B> {
  const elemE = elem(E)
  return (f) => (fa) => {
    const r: Set<B> = new Set()
    fa.forEach((a) => {
      const ob = f(a)
      if (ob.tag === 'Just' && !elemE(ob.value)(r)) {
        r.add(ob.value)
      }
    })
    return r
  }
}

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

export const empty: ReadonlySet<never> = new Set()

/**
 * Test whether a `ReadonlySet` is empty.
 *
 */
export const isEmpty = <A>(set: ReadonlySet<A>): boolean => set.size === 0

/**
 * Calculate the number of elements in a `ReadonlySet`.
 *
 */
export const size = <A>(set: ReadonlySet<A>): number => set.size

export const some =
  <A>(predicate: Predicate<A>) =>
  (set: ReadonlySet<A>): boolean => {
    const values = set.values()
    let e: Next<A>
    let found = false
    // tslint:disable-next-line: strict-boolean-expressions
    while (!found && !(e = values.next()).done) {
      found = predicate(e.value)
    }
    return found
  }

export const every = <A>(predicate: Predicate<A>): ((set: ReadonlySet<A>) => boolean) =>
  not(some(not(predicate)))

/**
 * `true` if and only if every element in the first set is an element of the second set
 *
 */

export function isSubset<A>(E: Eq<A>): (that: ReadonlySet<A>) => (me: ReadonlySet<A>) => boolean {
  const elemE = elem(E)

  return (that) => (me) => every((a: A) => elemE(a)(that))(me)
}

/**
 * Test if a value is a member of a set
 *
 */
export function elem<A>(E: Eq<A>): (a: A) => (set: ReadonlySet<A>) => boolean {
  return (a) => (set) => {
    const values = set.values()
    let e: Next<A>
    let found = false
    // tslint:disable-next-line: strict-boolean-expressions
    while (!found && !(e = values.next()).done) {
      found = E.equals(a, e.value)
    }
    return found
  }
}

/**
 * Get a sorted `ReadonlyArray` of the values contained in a `ReadonlySet`.
 *
 */
export const toReadonlyArray =
  <A>(O: Ord<A>) =>
  (set: ReadonlySet<A>): ReadonlyArray<A> => {
    const out: Array<A> = []
    set.forEach((e) => out.push(e))
    return out.sort(O.compare)
  }

export function makeDebug<A>(S: Debug<A>): Debug<ReadonlySet<A>> {
  return {
    debug: (s) => {
      const entries: Array<string> = []
      s.forEach((a) => {
        entries.push(S.debug(a))
      })

      return `Set [${entries.join(',\n  ')}]`
    },
  }
}

export function makeEq<A>(E: Eq<A>): Eq<ReadonlySet<A>> {
  const subsetE = isSubset(E)

  return fromEquals((x, y) => subsetE(y)(x) && subsetE(x)(y))
}

export const makeUnionAssociative = <A>(E: Eq<A>): Associative<ReadonlySet<A>> => ({
  concat: (a, b) => union(E)(b)(a),
})

export const makeUnionAssociativeIdentity = <A>(E: Eq<A>): AssociativeIdentity<ReadonlySet<A>> => ({
  concat: makeUnionAssociative(E).concat,
  id: empty,
})

export const makeIntersectionAssociative = <A>(E: Eq<A>): Associative<ReadonlySet<A>> => ({
  concat: (a, b) => intersection(E)(b)(a),
})

export const makeDifferenceConcat = <A>(E: Eq<A>): Concat<ReadonlySet<A>> => ({
  concat: (a, b) => difference(E)(b)(a),
})
