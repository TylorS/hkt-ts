import { DeepEquals, Eq } from '../Typeclass/Eq'
import { Identity } from '../Typeclass/Identity'
import { pipe } from '../function'

import * as Arbitrary from './Arbitrary'

export function testIdentity<A>(I: Identity<A>, Eq: Eq<A> = DeepEquals) {
  const left = testLeftIdentity(I, Eq)
  const right = testRightIdentity(I, Eq)

  return (Arb: Arbitrary.Arbitrary<A>) => (fc: typeof import('fast-check')) => ({
    left: () => left(Arb).property(fc),
    right: () => right(Arb).property(fc),
  })
}

export function testLeftIdentity<A>(I: Identity<A>, Eq: Eq<A> = DeepEquals) {
  return (Arb: Arbitrary.Arbitrary<A>) =>
    pipe(
      Arb,
      Arbitrary.toProperty((a) => Eq.equals(I.concat(a, I.id), a)),
    )
}

export function testRightIdentity<A>(I: Identity<A>, Eq: Eq<A> = DeepEquals) {
  return (Arb: Arbitrary.Arbitrary<A>) =>
    pipe(
      Arb,
      Arbitrary.toProperty((a) => Eq.equals(I.concat(I.id, a), a)),
    )
}
