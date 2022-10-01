import type { Endomorphism } from 'fp-ts/Endomorphism'

export interface InvariantUnary<A> extends Endomorphism<A> {
  (a: A): A
}
