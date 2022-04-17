import type { Forest, Tree } from './Tree'

// A specialization of Tree which has the same parent + child nodes
export type RoseTree<A> = Tree<A, A>

export type RoseForest<A> = Forest<A, A>

export function RoseTree<A>(value: A, forest: RoseForest<A> = []): RoseTree<A> {
  return {
    type: 'Parent',
    value,
    forest,
  }
}

const draw = (indentation: string, forest: RoseForest<string>): string => {
  let r = ''
  const len = forest.length
  const lastIndex = len - 1
  let tree: Tree<string, string>
  for (let i = 0; i < len; i++) {
    tree = forest[i]
    const isLast = i === lastIndex
    r += indentation + (isLast ? '└' : '├') + '─ ' + tree.value

    if (tree.type === 'Parent') {
      r += draw(indentation + (len > 1 && !isLast ? '│  ' : '   '), tree.forest)
    }
  }
  return r
}

export function drawForest(forest: RoseForest<string>): string {
  return draw('\n', forest)
}

export function drawTree(tree: RoseTree<string>): string {
  if (tree.type === 'Leaf') {
    return tree.value
  }

  return tree.value + drawForest(tree.forest)
}
