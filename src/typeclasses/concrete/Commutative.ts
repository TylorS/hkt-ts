import * as A from './Associative'

export interface Commutative<A> extends A.Associative<A> {}

export const struct = A.struct as <A>(commutatives: {
  readonly [K in keyof A]: Commutative<A[K]>
}) => Commutative<{ readonly [K in keyof A]: A[K] }>

export const tuple = A.tuple as <A extends readonly unknown[]>(
  ...commutatives: { readonly [K in keyof A]: Commutative<A[K]> }
) => Commutative<Readonly<A>>

export const concatAll = A.concatAll as <A>(
  C: Commutative<A>,
) => (startWith: A) => (as: readonly A[]) => A
