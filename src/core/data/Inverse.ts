import { Identity } from './Identity.js'

export interface Inverse<A> extends Identity<A> {
  readonly inverse: (y: A) => (x: A) => A
}
