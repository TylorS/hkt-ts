export declare const PHANTOM: unique symbol

export type Phantom<P, A> = A & PhantomType<P>

export interface PhantomType<P> {
  readonly [PHANTOM]: (_: P) => P
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Phantom {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export type TypeOf<T> = T extends Phantom<infer P, infer _A> ? P : never
  export type ValueOf<T> = [T] extends [Phantom<TypeOf<T>, infer A>] ? A : never
}

export function Phantom<T extends Phantom<any, any>>() {
  return <A extends Phantom.ValueOf<T>>(a: A): Phantom<Phantom.TypeOf<T>, A> => {
    return make<any>(a)
  }
}

export function make<T extends Phantom<any, any>>(a: Phantom.ValueOf<T>): T {
  return a as any
}
