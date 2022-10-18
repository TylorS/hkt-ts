export declare const BRAND: unique symbol

export type Branded<T, A> = A & Brand<T>

export interface Brand<T> {
  readonly [BRAND]: (t: T) => never
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Branded {
  export type BrandOf<T> = T extends Brand<infer R> ? R : never
  export type ValueOf<T> = T extends Branded<BrandOf<T>, infer A> ? A : never
}

export function Branded<T extends Branded<any, any>>() {
  return <A extends Branded.ValueOf<T>>(a: A): Branded<Branded.BrandOf<T>, A> => {
    return make<any>(a)
  }
}

export function make<T extends Branded<any, any>>(a: Branded.ValueOf<T>): T {
  return a as any
}
