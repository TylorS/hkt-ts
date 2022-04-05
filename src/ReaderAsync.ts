import * as A from './Async'
import { Disposable } from './Disposable'
import { Gen } from './Gen'
import * as R from './Reader'
import { pipe } from './function'

export interface ReaderAsync<R, A> extends Gen<ReaderAsyncInstruction<R, any>, A> {}

export type ReaderAsyncInstruction<R, A> = R.ReaderInstruction<R, A> | A.AsyncInstruction<A>

export function run<R, A>(resources: R, onValue: (a: A) => void) {
  return (ra: ReaderAsync<R, A>): Disposable => pipe(ra, R.runWith(resources), A.run(onValue))
}
