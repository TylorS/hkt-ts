export declare const TAG: unique symbol

export type Tagged<T, A> = A & Tag<T>

export interface Tag<T> {
  readonly [TAG]: () => T
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Tagged {
  export type TagOf<T> = T extends Tag<infer R> ? R : never
  export type ValueOf<T> = T extends Tagged<TagOf<T>, infer A> ? A : never
}

export function Tagged<T extends Tagged<any, any>>() {
  return <A extends Tagged.ValueOf<T>>(a: A): Tagged<Tagged.TagOf<T>, A> => {
    return make<any>(a)
  }
}

export function make<T extends Tagged<any, any>>(a: Tagged.ValueOf<T>): T {
  return a as any
}
