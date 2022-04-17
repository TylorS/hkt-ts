export interface Inverse<A> {
  readonly inverse: (a: A, b: A) => A
}
