import { Ord } from '../concrete/Ord'

export interface Bounded<A> extends Ord<A> {
  readonly top: A
  readonly bottom: A
}
