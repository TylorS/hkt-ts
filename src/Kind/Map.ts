/**
 * Map is a ReadonlyMap which utilizes Eq instances to determine value
 * equality of each key. This comes at a performance cost for correctness.
 */
export type Map<K, V> = ReadonlyMap<K, V>
