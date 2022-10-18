export interface Combine<A> {
  readonly combine: (y: A) => (x: A) => A
}

export function Combine<A>(combine: Combine<A>['combine']): Combine<A> {
  return { combine }
}
