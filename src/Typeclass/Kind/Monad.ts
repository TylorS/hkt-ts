import { TypeLambda } from '../../HKT.js'
import { Covariant } from '../Variance/Covariant.js'

import { IdentityFlatten } from './IdentityFlatten.js'

export interface Monad<T extends TypeLambda> extends IdentityFlatten<T>, Covariant<T> {}
