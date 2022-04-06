import { Associative } from './Associative'
import { Identity } from './Identity'

export interface Monoid<A> extends Identity<A>, Associative<A> {}
