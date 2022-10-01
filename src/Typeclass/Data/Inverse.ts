import { Identity } from './Identity.js'

export interface Inverse<A> extends Identity<A> {
  readonly inverse: (first: A, second: A) => A
}
