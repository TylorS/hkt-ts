import { Inverse } from './Inverse'
import { AssociativeIdentity } from './AssociativeIdentity'

export interface Group<A> extends AssociativeIdentity<A>, Inverse<A> {}
