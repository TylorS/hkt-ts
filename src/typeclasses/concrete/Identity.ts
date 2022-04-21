import { Associative } from './Associative'

export interface Identity<A> extends Associative<A> {
  readonly id: A
}
