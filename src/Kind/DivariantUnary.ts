import { TypeLambda } from '../HKT.js'

export type DivariantUnary<A, B> = (a: A) => B

export interface DivariantUnaryλ extends TypeLambda {
  readonly type: DivariantUnary<this['In1'], this['Out1']>
}
