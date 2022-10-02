import { TypeLambda } from '../HKT.js'

import { ReaderTaskEither } from './ReaderTaskEither.js'

export interface Queue<RI, EI, I, RO, EO, O> extends Enqueue<RI, EI, I>, Dequeue<RO, EO, O> {}

export interface Enqueue<R, E, A> {
  readonly enqueue: (a: A) => ReaderTaskEither<R, E, boolean>
}

export interface Dequeue<R, E, A> {
  readonly dequeue: ReaderTaskEither<R, E, A>
}

export interface Queueλ extends TypeLambda {
  readonly type: Queue<
    this['In2'],
    this['Out4'],
    this['Out3'],
    this['In1'],
    this['Out2'],
    this['Out1']
  >
}
