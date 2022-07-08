import { Identity } from './Identity'

export interface Inverse<A> extends Identity<A> {
  readonly inverse: (a: A, b: A) => A
}

export function multiply<A>(I: Inverse<A>) {
  return (a: A, amount: number) => {
    if (amount === 0) {
      return I.id
    }

    let i = amount
    let r = I.id

    const multiply_ = amount > 0 ? () => (r = I.concat(r, a)) : () => (r = I.inverse(r, a))
    const updateIndex = amount > 0 ? () => (i -= 1) : () => (i += 1)

    while (i !== 0) {
      multiply_()
      updateIndex()
    }

    return r
  }
}
