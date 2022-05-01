import { Identity } from './Identity'

export interface Inverse<A> extends Identity<A> {
  readonly inverse: (a: A, b: A) => A
}

export function multiply<A>(I: Inverse<A>) {
  return (a: A, amount: number) => {
    const multiply_ = (seed: A, n: number): A => {
      if (n === 0) {
        return seed
      }

      if (n > 0) {
        return multiply_(I.concat(seed, a), n - 1)
      }

      return multiply_(I.inverse(seed, a), n + 1)
    }

    return multiply_(I.id, amount)
  }
}
