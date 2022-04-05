import { Disposable } from './Disposable'
import { Gen } from './Gen'
import * as Reader from './Reader'
import * as Resume from './Resume'
import * as State from './State'
import { pipe } from './function'

export interface StateReaderResume<S, R, A>
  extends Gen<StateReaderResumeInstruction<S, R, any>, A> {}

export type StateReaderResumeInstruction<S, R, A> =
  | State.StateInstruction<S, A>
  | Reader.ReaderInstruction<R, A>
  | Resume.ResumeInstruction<A>

export function run<S, R, A>(
  initial: S,
  resources: R,
  onValue: (computed: State.StateTuple<S, A>) => void,
) {
  return (srr: StateReaderResume<S, R, A>): Disposable =>
    pipe(srr, Reader.runWith(resources), State.runWith(initial), Resume.run(onValue))
}
