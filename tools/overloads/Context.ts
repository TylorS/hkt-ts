import { A, U } from 'ts-toolbelt'

import {
  AST,
  Dynamic,
  FunctionParam,
  FunctionSignature,
  HKTParam,
  HKTPlaceholder,
  Interface,
  Kind,
  KindParam,
  Labeled,
  ObjectNode,
  ParentNode,
  Static,
  Tuple,
  TypeAlias,
} from './AST'
import { findHKTParams } from './findHKTParams'

// TODO: Keep track of position of Existing Params
// TODO: Keep track of remaining args for each HKT
// TODO: Keep track of curried args for each HKT
export interface Context {
  readonly tag: ParentNode['tag']
  readonly lengths: Map<symbol, number>
  readonly positions: Map<symbol, number>
  readonly existing: Map<symbol, readonly KindParam[]>
}

export function buildContext(ast: ParentNode, possibility: ReadonlyArray<number>): Context {
  switch (ast.tag) {
    case FunctionSignature.tag:
      return buildContextFromFunctionSignature(ast, possibility)
    case Interface.tag:
      return buildContextFromInterface(ast, possibility)
    case TypeAlias.tag:
      return buildContextFromTypeAlias(ast, possibility)
  }
}

export function buildContextFromFunctionSignature(
  signature: FunctionSignature,
  possibility: ReadonlyArray<number>,
): Context {
  const hkts = findHKTParams(signature.typeParams)
  const lengths = new Map<symbol, number>(hkts.map((hkt, i) => [hkt.id, possibility[i]] as const))
  const positions = new Map<symbol, number>(hkts.map((hkt, i) => [hkt.id, i + 1] as const))
  const existing = findExistingParameters(signature)

  return {
    tag: signature.tag,
    lengths,
    positions,
    existing,
  }
}

export function buildContextFromInterface(
  node: Interface,
  possibility: ReadonlyArray<number>,
): Context {
  const hkts = findHKTParams(node.typeParams)
  const lengths = new Map<symbol, number>(hkts.map((hkt, i) => [hkt.id, possibility[i]] as const))
  const positions = new Map<symbol, number>(hkts.map((hkt, i) => [hkt.id, i + 1] as const))
  const existing = findExistingParameters(node)

  return {
    tag: node.tag,
    lengths,
    positions,
    existing,
  }
}

export function buildContextFromTypeAlias(
  node: TypeAlias,
  possibility: ReadonlyArray<number>,
): Context {
  const hkts = findHKTParams(node.typeParams)
  const lengths = new Map<symbol, number>(hkts.map((hkt, i) => [hkt.id, possibility[i]] as const))
  const positions = new Map<symbol, number>(hkts.map((hkt, i) => [hkt.id, i + 1] as const))
  const existing = findExistingParameters(node)

  return {
    tag: node.tag,
    lengths,
    positions,
    existing,
  }
}

export function findExistingParameters(ast: ParentNode): Map<symbol, readonly KindParam[]> {
  switch (ast.tag) {
    case FunctionSignature.tag:
      return findExistingParametersForFunctionSignature(ast)
    case Interface.tag:
      return findExistingParametersForInterface(ast)
    case TypeAlias.tag:
      return findExistingParametersForTypeAlias(ast)
  }
}

export function findExistingParametersForFunctionSignature(
  signature: FunctionSignature,
): Map<symbol, readonly KindParam[]> {
  const existing = new Map<symbol, readonly KindParam[]>()

  walkAst(signature, {
    ...defaultVisitors(),
    Kind: (node) => {
      existing.set(
        node.type.id,
        node.kindParams.filter((x) => x.tag !== 'HKTPlaceholder'),
      )
    },
  })

  return existing
}

export function findExistingParametersForInterface(
  node: Interface,
): Map<symbol, readonly KindParam[]> {
  const existing = new Map<symbol, readonly KindParam[]>()

  walkAst(node, {
    ...defaultVisitors(),
    Kind: (node) => {
      existing.set(
        node.type.id,
        node.kindParams.filter((x) => x.tag !== 'HKTPlaceholder'),
      )
    },
  })

  return existing
}

export function findExistingParametersForTypeAlias(
  node: TypeAlias,
): Map<symbol, readonly KindParam[]> {
  const existing = new Map<symbol, readonly KindParam[]>()

  walkAst(node, {
    ...defaultVisitors(),
    Kind: (node) => {
      existing.set(
        node.type.id,
        node.kindParams.filter((x) => x.tag !== 'HKTPlaceholder'),
      )
    },
  })

  return existing
}

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

function defaultVisitors(): Visitors {
  return {
    CurriedPlacholder: identity,
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

function walkAst(node: AST, visitors: Visitors) {
  switch (node.tag) {
    case Interface.tag:
      return walkInterface(node, visitors)
    case FunctionSignature.tag:
      return walkFunctionSignature(node, visitors)
    case HKTParam.tag:
      return walkHKTParam(node, visitors)
    case HKTPlaceholder.tag:
      return walkHKTPlaceholder(node, visitors)
    case Kind.tag:
      return walkKind(node, visitors)
    case Labeled.tag:
      return walkLabeled(node, visitors)
    case Static.tag:
      return walkStatic(node, visitors)
    case Dynamic.tag:
      return walkDynamic(node, visitors)
    case Tuple.tag:
      return walkTuple(node, visitors)
    case ObjectNode.tag:
      return walkObjectNode(node, visitors)
    case TypeAlias.tag:
      return walkTypeAlias(node, visitors)
  }
}

function walkInterface(node: Interface, visitors: Visitors) {
  visitors.Interface(node)
  node.typeParams.forEach((typeParam) => walkAst(typeParam, visitors))
  node.extensions.forEach((e) => walkAst(e, visitors))
  node.properties.forEach((property) => walkAst(property, visitors))
}

function walkFunctionSignature(node: FunctionSignature, visitors: Visitors): void {
  visitors.FunctionSignature(node)

  node.typeParams.forEach((typeParam) => walkAst(typeParam, visitors))
  node.functionParams.forEach((p) => walkAst(p, visitors))
  walkAst(node.returnSignature, visitors)
}

function walkHKTParam(node: HKTParam, visitors: Visitors) {
  visitors.HKTParam(node)
}

function walkHKTPlaceholder(node: HKTPlaceholder, visitors: Visitors) {
  visitors.HKTPlaceholder(node)
}

function walkDynamic(node: Dynamic, visitors: Visitors) {
  visitors.Dynamic(node)
  node.params.forEach((t) => walkAst(t, visitors))
}

function walkStatic(node: Static, visitors: Visitors) {
  visitors.Static(node)
}

function walkKind(node: Kind, visitors: Visitors) {
  visitors.Kind(node)
  node.kindParams.forEach((p) => walkAst(p, visitors))
}

function walkTuple(node: Tuple, visitors: Visitors) {
  visitors.Tuple(node)

  node.members.forEach((m) => walkAst(m, visitors))
}

function walkObjectNode(node: ObjectNode, visitors: Visitors) {
  visitors.Object(node)

  node.properties.forEach((m) => walkAst(m, visitors))
}

function walkTypeAlias(node: TypeAlias, visitors: Visitors) {
  visitors.TypeAlias(node)

  node.typeParams.forEach((t) => walkAst(t, visitors))

  walkAst(node.signature, visitors)
}

function walkLabeled<T extends FunctionParam>(node: T, visitors: Visitors) {
  visitors.Labeled(node)

  walkAst(node.param, visitors)
}
