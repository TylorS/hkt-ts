import { None, Option, Some } from './Option.js'

/**
 * ImmutableMap is a small wrapper around ReadonlyMap that makes it a little
 * easier to deal wih immutable data, while still utilizing strict equality
 * for the key comparison.
 */
export interface ImmutableMap<K, V> extends Iterable<readonly [K, V]> {
  readonly has: (key: K) => boolean
  readonly get: (key: K) => Option<V>
  readonly set: <K2, V2>(key: K2, value: V2) => ImmutableMap<K | K2, V | V2>
  readonly remove: (key: K) => ImmutableMap<K, V>
  readonly keys: () => Iterable<K>
  readonly values: () => Iterable<V>
  readonly joinWith: <K2, V2>(
    other: ImmutableMap<K2, V2>,
    join: (v: V, v2: V2) => V | V2,
  ) => ImmutableMap<K | K2, V | V2>
}

export function ImmutableMap<K, V>(cache: ReadonlyMap<K, V> = new Map()): ImmutableMap<K, V> {
  return new ImmutableMapImpl<K, V>(cache)
}

class ImmutableMapImpl<K, V> implements ImmutableMap<K, V> {
  constructor(readonly cache: ReadonlyMap<K, V> = new Map()) {}

  readonly has = (key: K) => this.cache.has(key)

  /**
   * Retrieves the current value of the key, if it exists.
   */
  readonly get = (key: K): Option<V> => {
    // Attempt to get the value from the cache
    if (this.cache.has(key)) {
      return Some(this.cache.get(key) as V)
    }

    return None
  }

  /**
   * Sets the value of the key, returning a new ImmutableMap with the new value.
   */
  readonly set = <K2, V2>(key: K2, value: V2): ImmutableMap<K | K2, V | V2> =>
    ImmutableMap(new Map<K | K2, V | V2>([...this.cache, [key, value]]))

  /**
   * Removes the key from the map, returning a new ImmutableMap with the key removed.
   */
  readonly remove = (key: K): ImmutableMap<K, V> => {
    const map = new Map(this.cache)
    map.delete(key)

    return ImmutableMap(map)
  }

  readonly joinWith = <K2, V2>(
    incoming: ImmutableMap<K2, V2>,
    join: (v: V, v2: V2) => V | V2,
  ): ImmutableMap<K | K2, V | V2> => {
    const outgoing = new Map<K | K2, V | V2>(this.cache)

    Array.from(incoming).forEach(([key, value]) => {
      if (outgoing.has(key)) {
        outgoing.set(key, join(outgoing.get(key) as V, value))
      } else {
        outgoing.set(key, value)
      }
    })

    return new ImmutableMapImpl(outgoing)
  };

  *[Symbol.iterator]() {
    return yield* this.cache
  }

  readonly keys = () => this.cache.keys()
  readonly values = () => this.cache.values()
}
