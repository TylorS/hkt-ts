import { A, U } from 'ts-toolbelt'

import { Eff } from '../../src'
import * as Sync from '../../src/Sync'
import { pipe } from '../../src/function'

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
    Dynamic: identity,
    FunctionSignature: identity,
    HKTParam: identity,
    HKTPlaceholder: identity,
    Labeled: identity,
    Interface: identity,
    Kind: identity,
    Object: identity,
    Static: identity,
    Tuple: identity,
    TypeAlias: identity,
    Typeclass: identity,
  }
}

export function walkAst(node: AST, visitors: Visitors) {
  return pipe(walkAstSafe(node, visitors), Sync.runWith, Eff.run)
}

function walkAstSafe(node: AST, visitors: Visitors): Sync.Sync<void> {
  const run = Sync.Sync(function* () {
    switch (node.tag) {
      case Interface.tag: {
        yield* Sync.fromLazy(() => visitors.Interface(node))

        for (const param of node.typeParams) {
          yield* walkAstSafe(param, visitors)
        }

        for (const e of node.extensions) {
          yield* walkAstSafe(e, visitors)
        }

        for (const p of node.properties) {
          yield* walkAstSafe(p, visitors)
        }

        break
      }
      case FunctionSignature.tag: {
        yield* Sync.fromLazy(() => visitors.FunctionSignature(node))

        for (const param of node.typeParams) {
          yield* walkAstSafe(param, visitors)
        }

        for (const p of node.functionParams) {
          yield* walkAstSafe(p, visitors)
        }

        yield* walkAstSafe(node.returnSignature, visitors)

        break
      }
      case HKTParam.tag:
        return yield* Sync.fromLazy(() => visitors.HKTParam(node))
      case HKTPlaceholder.tag:
        return yield* Sync.fromLazy(() => visitors.HKTPlaceholder(node))
      case Kind.tag: {
        yield* Sync.fromLazy(() => visitors.Kind(node))

        for (const param of node.kindParams) {
          yield* walkAstSafe(param, visitors)
        }

        break
      }
      case Labeled.tag: {
        yield* Sync.fromLazy(() => visitors.Labeled(node))

        return yield* walkAstSafe(node.param, visitors)
      }
      case Static.tag:
        return yield* Sync.fromLazy(() => visitors.Static(node))
      case Dynamic.tag: {
        yield* Sync.fromLazy(() => visitors.Dynamic(node))

        for (const param of node.params) {
          yield* walkAstSafe(param, visitors)
        }

        break
      }
      case Tuple.tag: {
        yield* Sync.fromLazy(() => visitors.Tuple(node))

        for (const param of node.members) {
          yield* walkAstSafe(param, visitors)
        }

        break
      }
      case ObjectNode.tag: {
        yield* Sync.fromLazy(() => visitors.Object(node))

        for (const param of node.properties) {
          yield* walkAstSafe(param, visitors)
        }

        break
      }
      case TypeAlias.tag: {
        yield* Sync.fromLazy(() => visitors.TypeAlias(node))

        for (const param of node.typeParams) {
          yield* walkAstSafe(param, visitors)
        }

        return yield* walkAstSafe(node.signature, visitors)
      }
      case Typeclass.tag:
        return yield* Sync.fromLazy(() => visitors.Typeclass(node))
    }
  })

  return run
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
