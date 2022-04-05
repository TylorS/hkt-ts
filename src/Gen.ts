export interface Gen<Y extends { readonly tag: string }, R, N = unknown> {
  readonly [Symbol.iterator]: () => Generator<Y, R, N>
}

export function Gen<Y extends { readonly tag: string }, R, N>(
  f: () => Generator<Y, R, N>,
): Gen<Y, R, N> {
  return {
    [Symbol.iterator]: f,
  }
}

export type YieldOf<T> = [T] extends [Gen<infer Y, any, any>] ? Y : never

export type ReturnOf<T> = [T] extends [Gen<never, infer R, any>]
  ? R
  : [T] extends [Gen<any, infer R, any>]
  ? R
  : never

export type NextOf<T> = [T] extends [Gen<never, any, infer N>]
  ? N
  : [T] extends [Gen<any, any, infer N>]
  ? N
  : never

export function iterator<Y extends { readonly tag: string }, R, N>(
  gen: Gen<Y, R, N>,
): Generator<Y, R, N> {
  return gen[Symbol.iterator]()
}
