import { Gen } from './Gen'
import * as R from './Reader'
import * as S from './Sync'
import { pipe } from './function'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ReaderSync<R, A> extends Gen<ReaderSyncInstruction<R, any>, A> {}

export type ReaderSyncInstruction<R, A> = R.ReaderInstruction<R, A> | S.SyncInstruction<A>

export function run<R>(resources: R) {
  return <A>(rs: ReaderSync<R, A>): A => pipe(rs, R.runWith(resources), S.run)
}
