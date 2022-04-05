import { Disposable } from './Disposable'
import { Gen } from './Gen'
import * as R from './Reader'
import * as Re from './Resume'
import { pipe } from './function'

export interface ReaderResume<R, A> extends Gen<ReaderResumeInstruction<R, any>, A> {}

export type ReaderResumeInstruction<R, A> = R.ReaderInstruction<R, A> | Re.ResumeInstruction<A>

export function run<R, A>(resources: R, onValue: (a: A) => void) {
  return (rr: ReaderResume<R, A>): Disposable => pipe(rr, R.runWith(resources), Re.run(onValue))
}

export function toResume<R>(resources: R) {
  return <A>(rr: ReaderResume<R, A>): Re.Resume<A> => pipe(rr, R.runWith(resources))
}
