import { Associative } from '../Typeclass/concrete/Associative'
import { Debug } from '../Typeclass/concrete/Debug'
import { Identity } from '../Typeclass/concrete/Identity'

export type Tuple<A, B> = readonly [first: A, second: B]

export function fst<A, E>(ea: Tuple<A, E>): A {
  return ea[0]
}

export function snd<A, E>(ea: Tuple<A, E>): E {
  return ea[1]
}

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

export const foldMap: <A, M>(f: (a: A) => M) => <E>(fa: readonly [A, E]) => M = (f) => (fa) =>
  f(fst(fa))

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

export const makeAssociative = <A, B>(
  A: Associative<A>,
  B: Associative<B>,
): Associative<Tuple<A, B>> => ({
  concat: (f, s) => [A.concat(fst(f), fst(s)), B.concat(snd(f), snd(s))],
})

export const makeIdentity = <A, B>(A: Identity<A>, B: Identity<B>): Identity<Tuple<A, B>> => ({
  ...makeAssociative(A, B),
  id: [A.id, B.id],
})
