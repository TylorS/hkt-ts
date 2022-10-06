import { TypeLambda } from '../../HKT.js'

import { AssociativeFlattenRec } from './AssociativeFlattenRec.js'
import { Monad } from './Monad.js'

export interface MonadRec<T extends TypeLambda> extends Monad<T>, AssociativeFlattenRec<T> {}
