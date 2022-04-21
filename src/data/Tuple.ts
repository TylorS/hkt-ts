import { Associative } from '../typeclasses/concrete/Associative'
import { Debug } from '../typeclasses/concrete/Debug'
import { Identity } from '../typeclasses/concrete/Identity'

export type Tuple<A, B> = readonly [first: A, second: B]

/**
 * @category destructors
 */
export function fst<A, E>(ea: Tuple<A, E>): A {
  return ea[0]
}

/**
 * @category destructors
 */
export function snd<A, E>(ea: Tuple<A, E>): E {
  return ea[1]
}

/**
 * @category combinators
 */
export const swap = <A, E>(ea: Tuple<A, E>): Tuple<E, A> => [snd(ea), fst(ea)]

export const bimap: <E, G, A, B>(
  mapSnd: (e: E) => G,
  mapFst: (a: A) => B,
) => (fa: readonly [A, E]) => readonly [B, G] = (f, g) => (fa) => [g(fst(fa)), f(snd(fa))]

export const mapFst: <A, B>(f: (a: A) => B) => <E>(fa: readonly [A, E]) => readonly [B, E] =
  (f) => (fa) =>
    [f(fst(fa)), snd(fa)]

export const mapSnd: <E, G>(f: (e: E) => G) => <A>(fa: readonly [A, E]) => readonly [A, G] =
  (f) => (fa) =>
    [fst(fa), f(snd(fa))]

export const compose: <A, B>(ab: readonly [B, A]) => <C>(bc: readonly [C, B]) => readonly [C, A] =
  (ab) => (bc) =>
    [fst(bc), snd(ab)]

export const foldMap: <M>(
  M: Associative<M> & Identity<M>,
) => <A>(f: (a: A) => M) => <E>(fa: readonly [A, E]) => M = () => (f) => (fa) => f(fst(fa))

export const reduce: <A, B>(b: B, f: (b: B, a: A) => B) => <E>(fa: readonly [A, E]) => B =
  (b, f) => (fa) =>
    f(b, fst(fa))

export const reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => <E>(fa: readonly [A, E]) => B =
  (b, f) => (fa) =>
    f(fst(fa), b)

export function makeDebug<A, B>(A: Debug<A>, B: Debug<B>): Debug<Tuple<A, B>> {
  return {
    debug: ([a, b]) => `[${A.debug(a)},${B.debug(b)}]`,
  }
}
