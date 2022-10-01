import { Ord } from './Ord.js'

export interface Bounded<A> extends Ord<A> {
  readonly top: A
  readonly bottom: A
}
