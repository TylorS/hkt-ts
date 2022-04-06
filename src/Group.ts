import { Inverse } from './Inverse'
import { Monoid } from './Monoid'

export interface Group<A> extends Monoid<A>, Inverse<A> {}
