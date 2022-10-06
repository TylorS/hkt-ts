import { TypeLambda } from '../../HKT.js'
import { Covariant } from '../Variance/Covariant.js'

import { Extend } from './Extend.js'
import { Extract } from './Extract.js'

export interface Comonad<T extends TypeLambda> extends Extract<T>, Extend<T>, Covariant<T> {}
