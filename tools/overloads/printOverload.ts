/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { pipe } from '../../src/function'

import {
  ArrayNode,
  Dynamic,
  FunctionParam,
  FunctionSignature,
  HKTCurriedPlaceholder,
  HKTParam,
  HKTPlaceholder,
  Interface,
  IntersectionNode,
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
  UnionNode,
} from './AST'
import { Context } from './Context'
import { PrintContextManager } from './PrintManagerContext'
import { findHKTParams } from './findHKTParams'
import { generateFunctionSignatureOverloads } from './generateOverloads'

export function printOverload(
  node: ParentNode,
  context: Context,
  manager: PrintContextManager = new PrintContextManager(),
): string {
  switch (node.tag) {
    case FunctionSignature.tag:
      return printFunctionSignature(node, context, manager)
    case Interface.tag:
      return printInterface(node, context, manager)
    case TypeAlias.tag:
      return printTypeAlias(node, context, manager)
  }
}

export function printTypeAlias(
  node: TypeAlias,
  context: Context,
  manager: PrintContextManager,
): string {
  manager.addParentNode(node)

  if (node.typeParams.length === 0) {
    return `export type ${node.name} = ${printKindParam(node.signature, context, manager)}`
  }

  manager.addContext('TypeParam')

  const printed = node.typeParams.map((p) => printTypeParam(p, context, manager))

  const params = printed.join(', ')
  manager.popContext()

  return `export type ${node.name}<${params}> = ${printKindParam(node.signature, context, manager)}`
}

export function printInterface(
  node: Interface,
  context: Context,
  manager: PrintContextManager,
): string {
  manager.addParentNode(node)

  if (manager.isWithinExtension()) {
    manager.addContext('TypeParam')

    const printed = node.typeParams
      .map((p) => printTypeParam(p, context, manager))
      .filter((x) => x.length > 0)
    const placeholders = findHKTParams(node)
      .flatMap((hkt) => context.placeholders.get(hkt.id) ?? [])
      .filter((x) => x.length > 0)

    const s = `${node.name}${placeholders.length > 0 ? placeholders.join('') + 'C' : ''}${
      node.typeParams.length ? `<${printed.join(', ')}>` : ''
    }`

    manager.popContext()

    return s
  }

  manager.addContext('TypeParam')

  const printedTypeParams = node.typeParams
    .map((p) => printTypeParam(p, context, manager))
    .filter((x) => x.length > 0)
  const placeholders = findHKTParams(node)
    .flatMap((hkt) => context.placeholders.get(hkt.id) ?? [])
    .filter((x) => x.length > 0)

  const prefix = `${manager.isWithinFunction() ? `` : `export interface `}${node.name}${
    placeholders.length > 0 ? placeholders.join('') + 'C' : ''
  }${node.typeParams.length ? `<${printedTypeParams.join(', ')}>` : ''}`

  manager.popContext()

  if (manager.isWithinFunction()) {
    return prefix
  }

  manager.addContext('Property')

  const printedProperties = pipe(
    node.properties.map((p) => printLabeledKindParam(p, context, manager)),
  )

  const postfix = ` {
  ${printedProperties.join('\n')}
}`
  manager.popContext()

  if (!node.extensions.length) {
    return prefix + postfix
  }

  manager.addContext('Extension')

  const extensions = pipe(
    node.extensions.map((i) =>
      i.tag === Interface.tag
        ? printInterface(i, context, manager)
        : printKindParam(i, context, manager),
    ),
  ).join(', ')

  manager.popContext()

  return `${prefix} extends ${extensions}${postfix}`
}

export function printLabeledKindParam(
  property: Labeled<KindParam>,
  context: Context,
  manager: PrintContextManager,
): string {
  if (manager.isWithinProperty()) {
    return `readonly ${property.label}: ${printKindParam(property.param, context, manager)}`
  }

  return `${property.label} extends ${printKindParam(property.param, context, manager)}`
}

export function printFunctionSignature(
  node: FunctionSignature,
  context: Context,
  manager: PrintContextManager,
  recursive = false,
): string {
  manager.addParentNode(node)

  let s = ''

  if (!manager.isWithinInterface() && !manager.isWithinTypeAlias() && !manager.isWithinReturn()) {
    s += `export function `
  }

  if (manager.shouldPrintFunctionName()) {
    s += `${node.name} `
  }

  const hktParams = findHKTParams(node)

  if (
    !recursive &&
    hktParams.length > 0 &&
    (manager.isWithinInterface() || manager.isWithinReturn())
  ) {
    const overloads = generateFunctionSignatureOverloads(node, context)

    const printed = overloads.map(([p, c]) => printFunctionSignature(p, c, manager.clone(), true))

    return `{\n  ${printed.reverse().join('\n    ')}\n  }`
  }

  if (node.typeParams.length) {
    manager.addContext('TypeParam')

    const printed = pipe(
      node.typeParams.map((p) => printTypeParam(p, context, manager)).filter((x) => x.length > 0),
    )

    s += '<'
    s += printed.join(', ')
    s += '>'

    manager.popContext()
  }

  s += '('
  if (node.functionParams.length) {
    manager.addContext('FunctionParam')

    const printed = node.functionParams.map((p) => printFunctionParam(p, context, manager))

    s += printed.join(', ')

    manager.popContext()
  }
  s += ')'

  s += manager.shouldUseColon() ? ': ' : ' => '

  manager.addContext('Return')

  s += printKindParam(node.returnSignature, context, manager)

  return s
}

export function printTypeParam(
  p: TypeParam,
  context: Context,
  manager: PrintContextManager,
): string {
  switch (p.tag) {
    case Labeled.tag:
      return printLabeledKindParam(p, context, manager)

    case HKTParam.tag:
      return (manager.isWithinReturn() || manager.isWithinExtension()) &&
        manager.isWithinTypeParam()
        ? p.name
        : `${p.name} extends HKT${p.size < 2 ? '' : `${p.size}`}`
    case HKTCurriedPlaceholder.tag: {
      // TODO: Print current placeholder
      const placeholders = context.placeholders.get(p.type.id)

      if (!placeholders) {
        return ''
      }

      return placeholders
        .map((s) => (context.positions.size > 1 ? `${s}${context.positions.get(p.type.id)}` : s))
        .join(', ')
    }
    case HKTPlaceholder.tag: {
      return ''
    }
    case Typeclass.tag: {
      const baseName = `${p.name}${p.type.size === 0 ? '' : p.type.size}`
      const params = p.params
        .map((p) => printTypeParam(p, context, manager))
        .filter((x) => x.trim().length > 0)
      const placeholders = context.placeholders.get(p.type.id)

      return `${baseName}${
        placeholders && placeholders.length > 0 ? placeholders.join('') + 'C' : ''
      }<${p.type.name}${params.length > 0 ? ', ' : ''}${params.join(', ')}>`
    }
    case Static.tag: {
      return printStatic(p, manager)
    }
    case Dynamic.tag: {
      const printed = pipe(p.params.map((t) => printKindParam(t, context, manager)))

      return p.template(printed, context)
    }
  }
}

export function printFunctionParam(
  p: FunctionParam,
  context: Context,
  manager: PrintContextManager,
): string {
  return `${p.label}: ${printKindParam(p.param, context, manager)}`
}

export function printKind(kind: Kind, context: Context, manager: PrintContextManager): string {
  manager.addContext('Kind')

  const length = context.lengths.get(kind.type.id)!
  const printed = kind.kindParams.map((p) => printKindParam(p, context, manager))

  const prefix = `Kind${length < 2 ? '' : length}<${kind.type.name}`
  const params = printed.length > 0 ? `, ${printed.join(', ')}` : ''
  const postfix = `>`

  manager.popContext()

  return `${prefix}${params}${postfix}`
}

function printKindParam(
  kindParam: KindParam,
  context: Context,
  manager: PrintContextManager,
): string {
  switch (kindParam.tag) {
    case ArrayNode.tag:
      return printArray(kindParam, context, manager)
    case Kind.tag:
      return printKind(kindParam, context, manager)
    case Tuple.tag:
      return printTuple(kindParam, context, manager)
    case ObjectNode.tag:
      return printObjectNode(kindParam, context, manager)
    case Static.tag:
      return printStatic(kindParam, manager)
    case FunctionSignature.tag:
      return printFunctionSignature(kindParam, context, manager)
    case IntersectionNode.tag:
      return `${printKindParam(kindParam.left, context, manager)} & ${printKindParam(
        kindParam.right,
        context,
        manager,
      )}`
    case UnionNode.tag:
      return `${printKindParam(kindParam.left, context, manager)} | ${printKindParam(
        kindParam.right,
        context,
        manager,
      )}`
    case Interface.tag:
      return printInterface(kindParam, context, manager)
    default:
      return printTypeParam(kindParam, context, manager)
  }
}

function printTuple(tuple: Tuple, context: Context, manager: PrintContextManager): string {
  const printed = tuple.members.map((p) => printKindParam(p, context, manager))

  return `readonly [${printed.join(', ')}]`
}

function printArray(array: ArrayNode, context: Context, manager: PrintContextManager): string {
  manager.addContext('Array')

  const printed = printKindParam(array.member, context, manager)

  manager.popContext()

  return `${array.isNonEmpty ? `NonEmpty` : `Readonly`}Array<${printed}>`
}

function printObjectNode(node: ObjectNode, context: Context, manager: PrintContextManager): string {
  manager.addContext('Property')

  const printed = pipe(node.properties.map((p) => printLabeledKindParam(p, context, manager)))

  manager.popContext()

  return `{
    ${printed.join('\n  ')}
}`
}

function printStatic(node: Static, manager: PrintContextManager) {
  const hasDefaultValue = node.type.includes('=')
  const hasExtension = node.type.includes('extends')

  if (hasDefaultValue && manager.isWithinKind() && manager.isWithinReturn()) {
    const x = node.type.split('= ')

    return x[1] ? x[1] : x[0]
  }

  // Allow printing default values inside of non-function returning kinds
  if (hasDefaultValue && (!manager.isWithinFunction() || manager.isWithinArray())) {
    return trimType(node.type, ['name', 'extension'])
  }

  if (hasExtension && !manager.isWithinTypeParam()) {
    return trimType(node.type, ['extension', 'default'])
  }

  if ((hasExtension || hasDefaultValue) && manager.isWithinKind()) {
    return trimType(node.type, ['default', 'extension'])
  }

  return node.type
}

function trimType(type: string, trim: ReadonlyArray<'name' | 'extension' | 'default'>) {
  // Fast path for getting only the default value
  if (trim.length === 2 && trim.includes('name') && trim.includes('extension')) {
    return type.split('=')[1].trim()
  }

  if (trim.includes('default')) {
    type = type.split('=')[0].trim()
  }

  if (trim.includes('extension')) {
    type = type.split('extends')[0].trim()
  }

  if (trim.includes('name')) {
    const name = type.split('extends')[0].split('=')[0].trim()

    type = type.replace(new RegExp(`${name}\\s+`), '')

    if (type.trim().startsWith('= ')) {
      type = type.split('= ')[1]
    }
  }

  return type
}
