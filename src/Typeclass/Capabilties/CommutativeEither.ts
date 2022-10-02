import { TypeLambda } from '../../HKT.js'

import { AssociativeEither } from './AssociativeEither.js'

export interface CommutativeEither<T extends TypeLambda> extends AssociativeEither<T> {}
