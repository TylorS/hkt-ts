import { Type, TypeDefinition, TypeParams, Uris } from '../'

/**
 * @name ChainRec
 * @laws
 * Equivalence: C.chainRec((next, done, v) => p(v) ? C.map(done, d(v)) : C.map(next, n(v)), i) ≡ (function step(v) { return p(v) ? d(v) : C.chain(step, n(v)) }(i))
 * Stack usage of C.chainRec(f, i) must be at most a constant multiple of the stack usage of f itself.
 */
export interface ChainRec<
  // @ts-expect-error Uris is 'never' until extended externally
  T extends Uris = any,
  Options extends ChainRecOptions = ChainRecOptionsDefault
> {
  readonly URI: T
  readonly chainRec: TypeDefinition<
    T,
    Options['chainRec'],
    {
      1: <A, B>(
        f: (next: (a: A) => Next<A>, done: (b: B) => Done<B>, a: A) => Type<T, [Next<A> | Done<B>]>,
        a: A,
      ) => Type<T, [B]>
      2: <A, B, C>(
        f: (
          next: (a: A) => Next<A>,
          done: (b: B) => Done<B>,
          a: A,
        ) => Type<T, [C, Next<A> | Done<B>]>,
        a: A,
      ) => Type<T, [C, B]>
      3: <A, B, C, D>(
        f: (
          next: (a: A) => Next<A>,
          done: (b: B) => Done<B>,
          a: A,
        ) => Type<T, [C, D, Next<A> | Done<B>]>,
        a: A,
      ) => Type<T, [C, D, B]>
      4: <A, B, C, D, E>(
        f: (
          next: (a: A) => Next<A>,
          done: (b: B) => Done<B>,
          a: A,
        ) => Type<T, [C, D, E, Next<A> | Done<B>]>,
        a: A,
      ) => Type<T, [C, D, E, B]>
      5: <A, B, C, D, E, F>(
        f: (
          next: (a: A) => Next<A>,
          done: (b: B) => Done<B>,
          a: A,
        ) => Type<T, [C, D, E, F, Next<A> | Done<B>]>,
        a: A,
      ) => Type<T, [C, D, E, F, B]>
    }[TypeParams.Length<T>]
  >
}

export type ChainRecOptions = {
  readonly chainRec: string
}

export type ChainRecOptionsDefault = {
  readonly chainRec: 'chainRec'
}

export type Next<A> = {
  readonly done: false
  readonly value: A
}

export namespace Next {
  export const of = <A>(value: A): Next<A> => ({ done: false, value })
}

export type Done<A> = {
  readonly done: true
  readonly value: A
}

export namespace Done {
  export const of = <A>(value: A): Done<A> => ({ done: true, value })
}

export function tailRecursion<A, B>(value: A, f: (value: A) => Next<A> | Done<B>): B {
  let result = f(value)

  while (!result.done) {
    result = f(result.value)
  }

  return result.value
}
