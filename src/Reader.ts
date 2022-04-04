export interface Reader<R, A> {
  readonly type: 'Reader'
  readonly [Symbol.iterator]: () => Generator<ReaderInstruction<R, any>, A>
}

export interface ReaderInstruction<R, A> {
  readonly type: 'Reader'
  readonly asks: (r: R) => A
}
