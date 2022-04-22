import { Associative as I } from './Associative'

export interface Identity<A> extends I<A> {
  readonly id: A
}
