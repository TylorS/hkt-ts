/**
 * Map is a ReadonlyMap which utilizes strict equality. This improves
 * performance in cases this can be an optimization over value-based equality.
 */
export type ImmutableMap<K, V> = ReadonlyMap<K, V>
