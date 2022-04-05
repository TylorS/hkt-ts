import * as A from './Async'
import { Disposable } from './Disposable'
import * as S from './Sync'
import { pipe } from './function'

export interface Resume<A> {
  readonly [Symbol.iterator]: () => Generator<ResumeInstruction<any>, A>
}

export function Resume<A>(f: () => Generator<ResumeInstruction<any>, A>): Resume<A> {
  return {
    [Symbol.iterator]: f,
  }
}

export type ResumeInstruction<A> = S.SyncInstruction<A> | A.AsyncInstruction<A>

export function run<A>(onValue: (a: A) => void) {
  return (resume: Resume<A>): Disposable => pipe(resume, S.runWith, A.run(onValue))
}
