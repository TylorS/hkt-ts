import { Associative } from './Associative'
import { Identity } from './Identity'

export interface AssociativeIdentity<A> extends Identity<A>, Associative<A> {}
