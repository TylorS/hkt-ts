import { TypeLambda } from '../../HKT.js'

import { AssociativeBoth } from './AssociativeBoth.js'

export interface CommutativeBoth<T extends TypeLambda> extends AssociativeBoth<T> {}
