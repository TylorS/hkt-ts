import { Commutative } from './Commutative'
import { Identity } from './Identity'

export interface CommutativeIdentity<A> extends Identity<A>, Commutative<A> {}
