export type Tree<Parent, Child> = ParentNode<Parent, Child> | LeafNode<Child>

export type Forest<Parent, Child> = readonly Tree<Parent, Child>[]

export interface ParentNode<Parent, Child> {
  readonly type: 'Parent'
  readonly value: Parent
  readonly forest: Forest<Parent, Child>
}

export const parent = <Parent, Child>(
  value: Parent,
  forest: Forest<Parent, Child>,
): ParentNode<Parent, Child> => ({
  type: 'Parent',
  value,
  forest,
})

export interface LeafNode<Child> {
  readonly type: 'Leaf'
  readonly value: Child
}

export const leaf = <Child>(value: Child): LeafNode<Child> => ({
  type: 'Leaf',
  value,
})

export function getChildLength<P, C>(tree: Tree<P, C>): number {
  if (tree.type === 'Leaf') {
    return 1
  }

  return tree.forest.length
}
