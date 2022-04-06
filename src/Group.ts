import { AssociativeIdentity } from './AssociativeIdentity'
import { Inverse } from './Inverse'

export interface Group<A> extends AssociativeIdentity<A>, Inverse<A> {}
