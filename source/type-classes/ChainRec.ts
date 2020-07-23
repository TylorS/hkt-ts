import { Type, Types } from '../Hkts'
import { TypeParams } from '../TypeParams'

export interface ChainRec<T extends Types> {
  readonly chainRec: {
    1: <A, B>(
      f: (n: (a: A) => Next<A>, d: (b: B) => Done<B>) => Type<T, [Next<A> | Done<B>]>,
      a: A,
    ) => Type<T, [B]>
    2: <A, B, C>(
      f: (n: (a: A) => Next<A>, d: (b: B) => Done<B>) => Type<T, [C, Next<A> | Done<B>]>,
      a: A,
    ) => Type<T, [C, B]>
    3: <A, B, C, D>(
      f: (n: (a: A) => Next<A>, d: (b: B) => Done<B>) => Type<T, [C, D, Next<A> | Done<B>]>,
      a: A,
    ) => Type<T, [C, D, B]>
    4: <A, B, C, D, E>(
      f: (n: (a: A) => Next<A>, d: (b: B) => Done<B>) => Type<T, [C, D, E, Next<A> | Done<B>]>,
      a: A,
    ) => Type<T, [C, D, E, B]>
    5: <A, B, C, D, E, F>(
      f: (n: (a: A) => Next<A>, d: (b: B) => Done<B>) => Type<T, [C, D, E, F, Next<A> | Done<B>]>,
      a: A,
    ) => Type<T, [C, D, E, F, B]>
  }[TypeParams.Length<T>]
}

export type Next<A> = {
  readonly done: false
  readonly value: A
}

export type Done<A> = {
  readonly done: true
  readonly value: A
}
