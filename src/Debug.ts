export interface Debug<A> {
  readonly debug: (a: A) => string
}

export type InputOf<T> = [T] extends [Debug<infer R>] ? R : never

export const struct = <A>(shows: { readonly [K in keyof A]: Debug<A[K]> }): Debug<{
  readonly [K in keyof A]: A[K]
}> => ({
  debug: (a) => {
    let s = '{'
    for (const k in shows) {
      s += `"${k}":${shows[k].debug(a[k])},`
    }
    if (s.length > 1) {
      s = s.slice(0, -1)
    }
    s += '}'
    return s
  },
})

export const tuple = <A extends ReadonlyArray<unknown>>(
  ...shows: { readonly [K in keyof A]: Debug<A[K]> }
): Debug<Readonly<A>> => ({
  debug: (t) => `[${t.map((a, i) => shows[i].debug(a)).join(', ')}]`,
})

export const sum =
  <A extends Readonly<Record<PropertyKey, any>>>() =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  <T extends keyof A>(tag: T) =>
  (eqs: SumDebugs<A, T>): Debug<A> => ({
    debug: (a) => (eqs as any)[a[tag]].debug(a),
  })

export type SumDebugs<A extends Readonly<Record<PropertyKey, any>>, T extends keyof A> = {
  readonly [K in KeysOf<A, T>]: Debug<FindType<A, T, K>>
}

type KeysOf<A, T extends keyof A> = A[T] extends PropertyKey ? A[T] : never

type FindType<A, T extends keyof A, K> = Include<A, { readonly [_ in T]: K }>
type Include<T, A> = T extends A ? T : never

export const lazy = <A>(f: () => Debug<A>): Debug<A> => {
  let s: Debug<A>

  return {
    debug: (a) => (s || (s = f())).debug(a),
  }
}

export const nullable = <A>(debug: Debug<A>): Debug<A | null> => ({
  debug: (a) => (a === null ? 'null' : debug.debug(a)),
})

export const optional = <A>(debug: Debug<A>): Debug<A | undefined> => ({
  debug: (a) => (a === undefined ? 'undefined' : debug.debug(a)),
})
