import { Cause } from './Cause.js'
import { Either } from './Either.js'

export type Exit<E, A> = Either<Cause<E>, A>
