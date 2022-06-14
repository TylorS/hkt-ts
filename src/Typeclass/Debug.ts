import { HKT, Params } from '../HKT'
import { Json } from '../Json'
import { Include } from '../common'
import { flow } from '../function'

import * as AB from './AssociativeBoth'
import * as AE from './AssociativeEither'
import { Contravariant1 } from './Contravariant'
import * as IB from './IdentityBoth'
import { Top1 } from './Top'

export interface Debug<A> {
  readonly debug: (a: A) => string
}

export function Debug<A>(debug: Debug<A>['debug']): Debug<A> {
  return {
    debug,
  }
}

export type InputOf<T> = [T] extends [Debug<infer R>] ? R : never

export const struct = <A>(shows: { readonly [K in keyof A]: Debug<A[K]> }): Debug<{
  readonly [K in keyof A]: A[K]
}> =>
  Debug((a) => {
    let s = '{'
    for (const k in shows) {
      s += `"${k}":${shows[k].debug(a[k])},`
    }
    if (s.length > 1) {
      s = s.slice(0, -1)
    }
    s += '}'
    return s
  })

export const array = <A>(debug: Debug<A>): Debug<ReadonlyArray<A>> =>
  Debug((t) => `[${t.map((a) => debug.debug(a)).join(', ')}]`)

export const tuple = <A extends ReadonlyArray<unknown>>(
  ...shows: { readonly [K in keyof A]: Debug<A[K]> }
): Debug<Readonly<A>> => Debug((t) => `[${t.map((a, i) => shows[i].debug(a)).join(', ')}]`)

export const sum =
  <A extends Readonly<Record<PropertyKey, any>>>() =>
  <T extends keyof A>(tag: T) =>
  (eqs: SumDebugs<A, T>): Debug<A> =>
    Debug((a) => (eqs as any)[a[tag]].debug(a))

export type SumDebugs<A extends Readonly<Record<PropertyKey, any>>, T extends keyof A> = {
  readonly [K in KeysOf<A, T>]: Debug<FindType<A, T, K>>
}

type KeysOf<A, T extends keyof A> = A[T] extends PropertyKey ? A[T] : never

type FindType<A, T extends keyof A, K> = Include<A, { readonly [_ in T]: K }>

export const lazy = <A>(f: () => Debug<A>): Debug<A> => {
  let s: Debug<A>

  return {
    debug: (a) => (s || (s = f())).debug(a),
  }
}

export const nullable = <A>(debug: Debug<A>): Debug<A | null> =>
  Debug((a) => (a === null ? 'null' : debug.debug(a)))

export const optional = <A>(debug: Debug<A>): Debug<A | undefined> =>
  Debug((a) => (a === undefined ? 'undefined' : debug.debug(a)))

export const Stringify: Debug<Json> = Debug((x) => JSON.stringify(x))

export const string: Debug<string> = Stringify
export const number: Debug<number> = Stringify
export const boolean: Debug<boolean> = Stringify

export interface DebugHKT extends HKT {
  readonly type: Debug<this[Params.A]>
}

export const Contravariant: Contravariant1<DebugHKT> = {
  contramap: (f) => (d) => ({
    debug: flow(f, d.debug),
  }),
}

export const contramap = Contravariant.contramap

export const AssociativeBoth: AB.AssociativeBoth1<DebugHKT> = {
  both: (DB) => (DA) => tuple(DA, DB),
}

export const bothWith = AB.bothWith<DebugHKT>({ ...AssociativeBoth, ...Contravariant })

export const AssociativeEither: AE.AssociativeEither1<DebugHKT> = {
  either: (DB) => (DA) => ({
    debug: (either) =>
      either.tag === 'Left' ? `Left<${DA.debug(either.left)}>` : `Right<${DB.debug(either.right)}>`,
  }),
}

export const eitherWith = AE.eitherWith<DebugHKT>({ ...AssociativeEither, ...Contravariant })

export const either = AssociativeEither.either

export const Top: Top1<DebugHKT> = {
  top: Stringify as Debug<unknown>,
}

export const IdentityBoth: IB.IdentityBoth1<DebugHKT> = {
  ...AssociativeBoth,
  ...Top,
}
