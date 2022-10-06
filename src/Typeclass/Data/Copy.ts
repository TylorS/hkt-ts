export interface Copy<A> {
  readonly copy: (options?: Partial<A>) => (a: A) => A
}
