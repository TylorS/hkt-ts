export type BicovariantTree<P, C> = ParentNode<P, C> | ChildNode<C>

export type BicovariantForest<P, C> = readonly BicovariantTree<P, C>[]

export interface ParentNode<P, C> {
  readonly tag: 'Parent'
  readonly value: P
  readonly forest: BicovariantForest<P, C>
}

export interface ChildNode<C> {
  readonly tag: 'Child'
  readonly value: C
}
