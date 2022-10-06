import * as T from 'fp-ts/Task'

export type Async<A> = T.Task<A>

export interface Asyncλ extends T.Taskλ {}
