import { Associative } from './Associative.js'

export interface Identity<A> extends Associative<A> {
  readonly id: A
}
