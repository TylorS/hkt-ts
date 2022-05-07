import { A, U } from 'ts-toolbelt'

import {
  AST,
  Dynamic,
  FunctionSignature,
  HKTParam,
  HKTPlaceholder,
  Interface,
  Kind,
  Labeled,
  ObjectNode,
  ParentNode,
  Static,
  Tuple,
  TypeAlias,
  Typeclass,
} from './AST'

type Visitors = {
  readonly [K in AST['tag']]: (node: FindAstNode<K>) => void
}

type FindAstNode<K extends AST['tag']> = FindAstNode_<U.ListOf<AST>, K>

type FindAstNode_<Nodes extends readonly AST[], K extends AST['tag']> = Nodes extends readonly [
  infer Head,
  ...infer Tail,
]
  ? A.Cast<Head, AST>['tag'] extends K
    ? Head
    : FindAstNode_<A.Cast<Tail, readonly AST[]>, K>
  : unknown

function identity<A>(value: A): A {
  return value
}

export function defaultVisitors(): Visitors {
  return {
    Array: identity,
    Dynamic: identity,
    FunctionSignature: identity,
    HKTParam: identity,
    HKTPlaceholder: identity,
    HKTCurriedPlaceholder: identity,
    Labeled: identity,
    Interface: identity,
    Kind: identity,
    Object: identity,
    Static: identity,
    Tuple: identity,
    TypeAlias: identity,
    Typeclass: identity,
    Intersection: identity,
    Union: identity,
  }
}

export function walkAst(node: AST, visitors: Visitors): void {
  switch (node.tag) {
    case Interface.tag: {
      visitors.Interface(node)

      for (const param of node.typeParams) {
        walkAst(param, visitors)
      }

      for (const e of node.extensions) {
        walkAst(e, visitors)
      }

      for (const p of node.properties) {
        walkAst(p, visitors)
      }

      break
    }
    case FunctionSignature.tag: {
      visitors.FunctionSignature(node)

      for (const param of node.typeParams) {
        walkAst(param, visitors)
      }

      for (const p of node.functionParams) {
        walkAst(p, visitors)
      }

      walkAst(node.returnSignature, visitors)

      break
    }
    case HKTParam.tag:
      return visitors.HKTParam(node)
    case HKTPlaceholder.tag:
      return visitors.HKTPlaceholder(node)
    case Kind.tag: {
      visitors.Kind(node)

      for (const param of node.kindParams) {
        walkAst(param, visitors)
      }

      break
    }
    case Labeled.tag: {
      visitors.Labeled(node)

      return walkAst(node.param, visitors)
    }
    case Static.tag:
      return visitors.Static(node)
    case Dynamic.tag: {
      visitors.Dynamic(node)

      for (const param of node.params) {
        walkAst(param, visitors)
      }

      break
    }
    case Tuple.tag: {
      visitors.Tuple(node)

      for (const param of node.members) {
        walkAst(param, visitors)
      }

      break
    }
    case ObjectNode.tag: {
      visitors.Object(node)

      for (const param of node.properties) {
        walkAst(param, visitors)
      }

      break
    }
    case TypeAlias.tag: {
      visitors.TypeAlias(node)

      for (const param of node.typeParams) {
        walkAst(param, visitors)
      }

      return walkAst(node.signature, visitors)
    }
    case Typeclass.tag:
      return visitors.Typeclass(node)
  }
}

export function findAllHKTParams(node: ParentNode): readonly HKTParam[] {
  const params: HKTParam[] = []

  walkAst(node, {
    ...defaultVisitors(),
    HKTParam: (node) => {
      params.push(node)
    },
  })

  return params
}
