import * as fc from 'fast-check'

export interface Arbitrary<A> {
  (fastCheck: typeof fc): fc.Arbitrary<A>
}
