import { TypeLambda } from '../../HKT.js'
import { Covariant } from '../Variance/Covariant.js'

import { AssociativeBoth } from './AssociativeBoth.js'

export interface Apply<T extends TypeLambda> extends AssociativeBoth<T>, Covariant<T> {}
