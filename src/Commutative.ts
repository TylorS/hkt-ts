import { Associative } from './Associative'

export interface Commutative<A> extends Associative<A> {
  readonly commute: (first: A, second: A) => A
}
