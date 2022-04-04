/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  CurriedPlacholder,
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
  TypeParam,
  Typeclass,
} from './AST'
import { Context } from './Context'

export function printOverload(node: ParentNode, context: Context): string {
  switch (node.tag) {
    case FunctionSignature.tag:
      return printFunctionSignature(node, context, false)
    case Interface.tag:
      return printInterface(node, context)
    case TypeAlias.tag:
      return printTypeAlias(node, context)
  }
}

export function printTypeAlias(node: TypeAlias, context: Context): string {
  return `export type ${node.name}${
    node.typeParams.length
      ? `<${node.typeParams.map((p) => printTypeParam(p, context, false)).join(', ')}>`
      : ''
  } = ${printKindParam(node.signature, context, true)}`
}

export function printInterface(node: Interface, context: Context, isExtension = false): string {
  if (isExtension) {
    return `${node.name}${
      node.typeParams.length
        ? `<${node.typeParams.map((p) => printTypeParam(p, context, true)).join(', ')}>`
        : ''
    }`
  }

  const prefix = `export interface ${node.name}${
    node.typeParams.length
      ? `<${node.typeParams.map((p) => printTypeParam(p, context, false)).join(', ')}>`
      : ''
  }`

  const postfix = ` {
  ${node.properties.map((p) => printProperty(p, context)).join('\n')}
}`

  if (!node.extensions.length) {
    return prefix + postfix
  }

  const extensions = node.extensions
    .map((i) =>
      i.tag === Interface.tag ? printInterface(i, context, true) : printKindParam(i, context, true),
    )
    .join(', ')

  return `${prefix} extends ${extensions}${postfix}`
}

export function printProperty(property: Labeled<KindParam>, context: Context): string {
  return `readonly ${property.label}: ${printKindParam(property.param, context, true)}`
}

export function printFunctionSignature(
  node: FunctionSignature,
  context: Context,
  isReturn: boolean,
  isParam = false,
): string {
  let s = ''

  if (!isReturn && !isParam) {
    s += `export function `
  }

  if (!isReturn || isParam) {
    s += `${node.name}${isParam ? ':' : ''} `
  }

  if (node.typeParams.length) {
    s += '<'
    s += node.typeParams.map((p) => printTypeParam(p, context, false)).join(', ')
    s += '>'
  }

  s += '('
  if (node.functionParams.length) {
    s += node.functionParams.map((p) => printFunctionParam(p, context, isReturn)).join(', ')
  }
  s += ')'

  s += isReturn ? ' => ' : ': '

  s += printKindParam(node.returnSignature, context, true)

  return s
}

export function printTypeParam(p: TypeParam, context: Context, printStatic: boolean): string {
  switch (p.tag) {
    case HKTParam.tag:
      return printStatic ? p.name : `${p.name} extends HKT${p.size < 2 ? '' : `${p.size}`}`
    case HKTPlaceholder.tag:
    case CurriedPlacholder.tag:
      return '' // Should be replaced in generateOverloads with Array<StaticTypeParam>
    case Typeclass.tag: {
      const baseName = `${p.name}${p.type.size === 0 ? '' : p.type.size}`

      return printStatic ? baseName : `${baseName}<${p.type.name}>`
    }

    case Static.tag: {
      if (printStatic) {
        return p.type.split('extends')[0]
      }

      return p.type
    }
    case Dynamic.tag: {
      return p.template(
        p.params.map((t) => printKindParam(t, context, true)),
        context,
      )
    }
  }
}

export function printFunctionParam(p: FunctionParam, context: Context, isReturn: boolean): string {
  return `${p.label}: ${printKindParam(p.param, context, isReturn)}`
}

export function printKind(kind: Kind, context: Context): string {
  const length = context.lengths.get(kind.type.id)!

  return `Kind${length < 2 ? '' : length}<${kind.type.name}${
    kind.kindParams.length ? ', ' : ''
  }${kind.kindParams.map((p) => printKindParam(p, context, true)).join(', ')}>`
}

function printKindParam(kindParam: KindParam, context: Context, printStatic: boolean): string {
  switch (kindParam.tag) {
    case Kind.tag:
      return printKind(kindParam, context)
    case Tuple.tag:
      return printTuple(kindParam, context)
    case ObjectNode.tag:
      return printObjectNode(kindParam, context)
    case Static.tag:
      return kindParam.type
    case FunctionSignature.tag:
      return printFunctionSignature(kindParam, context, printStatic, false)
    default:
      return printTypeParam(kindParam, context, true)
  }
}

function printTuple(tuple: Tuple, context: Context): string {
  return `readonly [${tuple.members.map((m) => printKindParam(m, context, true)).join(', ')}]`
}

function printObjectNode(node: ObjectNode, context: Context): string {
  return `{
    ${node.properties.map((p) => printProperty(p, context))}
}`
}
