import { TypeLambda } from '../../HKT.js'

import { Apply } from './Apply.js'
import { Top } from './Top.js'

export interface Applicative<T extends TypeLambda> extends Apply<T>, Top<T> {}
