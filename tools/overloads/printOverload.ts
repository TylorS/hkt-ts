/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Eff, pipe } from '../../src'

import {
  ArrayNode,
  Dynamic,
  FunctionParam,
  FunctionSignature,
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
import { findHKTParams } from './findHKTParams'
import { generateFunctionSignatureOverloads } from './generateOverloads'

type PrintContext = {
  parentNodes: ParentNode[]
  contextStack: CurrentContext[]
}

type CurrentContext =
  | 'TypeParam'
  | 'Property'
  | 'FunctionParam'
  | 'Return'
  | 'Extension'
  | 'Kind'
  | 'Array'

export class PrintContextManager {
  context: PrintContext
  recursive = false

  constructor() {
    this.context = {
      parentNodes: [],
      contextStack: [],
    }
  }

  clone() {
    const manager = new PrintContextManager()

    manager.recursive = true
    manager.context = {
      parentNodes: this.context.parentNodes.slice(),
      contextStack: this.context.contextStack.slice(),
    }

    return manager
  }

  addParentNode(node: ParentNode) {
    this.context.parentNodes.push(node)
  }

  popParentNode() {
    return this.context.parentNodes.pop()
  }

  addContext(currentContext: CurrentContext) {
    this.context.contextStack.push(currentContext)
  }

  popContext() {
    return this.context.contextStack.pop()
  }

  isWithinInterface(): boolean {
    return !!this.context.parentNodes.find((x) => x.tag === Interface.tag)
  }

  isWithinFunction(): boolean {
    return !!this.context.parentNodes.find((x) => x.tag === FunctionSignature.tag)
  }

  isWithinTypeAlias(): boolean {
    return !!this.context.parentNodes.find((x) => x.tag === TypeAlias.tag)
  }

  isWithinExtension(): boolean {
    return !!this.context.contextStack.find((x) => x === 'Extension')
  }

  isWithinReturn(): boolean {
    return !!this.context.contextStack.find((x) => x === 'Return')
  }

  isWithinProperty(): boolean {
    return !!this.context.contextStack.find((x) => x === 'Property')
  }

  isWithinTypeParam(): boolean {
    return !!this.context.contextStack.find((x) => x === 'TypeParam')
  }

  isWithinKind(): boolean {
    return !!this.context.contextStack.find((x) => x === 'Kind')
  }

  isWithinArray(): boolean {
    return !!this.context.contextStack.find((x) => x === 'Array')
  }

  shouldPrintFunctionName(): boolean {
    return !this.isWithinReturn() && !this.isWithinProperty()
  }

  shouldUseColon(): boolean {
    if (this.recursive) {
      this.recursive = false

      return true
    }

    return !this.isWithinProperty() && !this.isWithinReturn() && !this.isWithinExtension()
  }

  getParentNode() {
    return this.context.parentNodes[this.context.parentNodes.length - 1]
  }

  getCurrentContext() {
    return this.context.contextStack[this.context.contextStack.length - 1]
  }
}

export function printOverload(node: ParentNode, context: Context): string {
  return pipe(printOverloadSafe(node, context), Eff.run)
}

export function printOverloadSafe(
  node: ParentNode,
  context: Context,
  manager: PrintContextManager = new PrintContextManager(),
): Eff.Eff<never, string> {
  return Eff.Eff(function* () {
    switch (node.tag) {
      case FunctionSignature.tag:
        return yield* printFunctionSignature(node, context, manager)
      case Interface.tag:
        return yield* printInterface(node, context, manager)
      case TypeAlias.tag:
        return yield* printTypeAlias(node, context, manager)
    }
  })
}

export function printTypeAlias(
  node: TypeAlias,
  context: Context,
  manager: PrintContextManager,
): Eff.Eff<never, string> {
  return Eff.Eff(function* () {
    manager.addParentNode(node)

    if (node.typeParams.length === 0) {
      return `export type ${node.name} = ${yield* printKindParam(node.signature, context, manager)}`
    }

    manager.addContext('TypeParam')

    const printed = yield* pipe(
      node.typeParams,
      Eff.forEach((p) => printTypeParam(p, context, manager)),
    )

    const params = printed.join(', ')
    manager.popContext()

    return `export type ${
      node.name
    }<${params}> = ${yield* printKindParam(node.signature, context, manager)}`
  })
}

export function printInterface(
  node: Interface,
  context: Context,
  manager: PrintContextManager,
): Eff.Eff<never, string> {
  return Eff.Eff(function* () {
    manager.addParentNode(node)

    if (manager.isWithinExtension()) {
      manager.addContext('TypeParam')

      const printed = yield* pipe(
        node.typeParams,
        Eff.forEach((p) => printTypeParam(p, context, manager)),
      )

      const s = `${node.name}${node.typeParams.length ? `<${printed.join(', ')}>` : ''}`

      manager.popContext()

      return s
    }

    manager.addContext('TypeParam')

    const printedTypeParams = yield* pipe(
      node.typeParams,
      Eff.forEach((p) => printTypeParam(p, context, manager)),
    )

    const prefix = `export interface ${node.name}${
      node.typeParams.length ? `<${printedTypeParams.join(', ')}>` : ''
    }`

    manager.popContext()

    manager.addContext('Property')

    const printedProperties = yield* pipe(
      node.properties,
      Eff.forEach((p) => printLabeledKindParam(p, context, manager)),
    )

    const postfix = ` {
  ${printedProperties.join('\n')}
}`
    manager.popContext()

    if (!node.extensions.length) {
      return prefix + postfix
    }

    manager.addContext('Extension')

    const extensions = (yield* pipe(
      node.extensions,
      Eff.forEach((i) =>
        i.tag === Interface.tag
          ? printInterface(i, context, manager)
          : printKindParam(i, context, manager),
      ),
    )).join(', ')

    manager.popContext()

    return `${prefix} extends ${extensions}${postfix}`
  })
}

export function printLabeledKindParam(
  property: Labeled<KindParam>,
  context: Context,
  manager: PrintContextManager,
): Eff.Eff<never, string> {
  return Eff.Eff(function* () {
    if (manager.isWithinProperty()) {
      return `readonly ${property.label}: ${yield* printKindParam(
        property.param,
        context,
        manager,
      )}`
    }

    return `${property.label} extends ${yield* printKindParam(property.param, context, manager)}`
  })
}

export function printFunctionSignature(
  node: FunctionSignature,
  context: Context,
  manager: PrintContextManager,
  recursive = false,
): Eff.Eff<never, string> {
  return Eff.Eff(function* () {
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
      manager.isWithinInterface() &&
      !manager.isWithinReturn()
    ) {
      const overloads = yield* generateFunctionSignatureOverloads(node, context)
      const printed = [
        ...(yield* pipe(
          overloads,
          Eff.forEach(([p, c]) => {
            return printFunctionSignature(p, c, manager.clone(), true)
          }),
        )),
      ]

      return `{\n  ${printed.reverse().join('\n    ')}\n  }`
    }

    if (node.typeParams.length) {
      manager.addContext('TypeParam')

      const printed = yield* pipe(
        node.typeParams,
        Eff.forEach((p) => printTypeParam(p, context, manager)),
      )

      s += '<'
      s += printed.join(', ')
      s += '>'

      manager.popContext()
    }

    s += '('
    if (node.functionParams.length) {
      manager.addContext('FunctionParam')

      const printed = yield* pipe(
        node.functionParams,
        Eff.forEach((p) => printFunctionParam(p, context, manager)),
      )

      s += printed.join(', ')

      manager.popContext()
    }
    s += ')'

    s += manager.shouldUseColon() ? ': ' : ' => '

    manager.addContext('Return')

    s += yield* printKindParam(node.returnSignature, context, manager)

    return s
  })
}

export function printTypeParam(
  p: TypeParam,
  context: Context,
  manager: PrintContextManager,
): Eff.Eff<never, string> {
  switch (p.tag) {
    case Labeled.tag:
      return printLabeledKindParam(p, context, manager)

    case HKTParam.tag:
      return Eff.fromLazy(() =>
        manager.isWithinReturn() || manager.isWithinExtension()
          ? p.name
          : `${p.name} extends HKT${p.size < 2 ? '' : `${p.size}`}`,
      )
    case HKTPlaceholder.tag: {
      return Eff.of('')
    }
    case Typeclass.tag: {
      return Eff.fromLazy(() => {
        const baseName = `${p.name}${p.type.size === 0 ? '' : p.type.size}`

        return manager.isWithinTypeParam() ? baseName : `${baseName}<${p.type.name}>`
      })
    }
    case Static.tag:
      return printStatic(p, manager)
    case Dynamic.tag: {
      return Eff.Eff(function* () {
        const printed = yield* pipe(
          p.params,
          Eff.forEach((t) => printKindParam(t, context, manager)),
        )

        return p.template(printed, context)
      })
    }
  }
}

export function printFunctionParam(
  p: FunctionParam,
  context: Context,
  manager: PrintContextManager,
): Eff.Eff<never, string> {
  return Eff.Eff(function* () {
    return `${p.label}: ${yield* printKindParam(p.param, context, manager)}`
  })
}

export function printKind(
  kind: Kind,
  context: Context,
  manager: PrintContextManager,
): Eff.Eff<never, string> {
  return Eff.Eff(function* () {
    manager.addContext('Kind')

    const length = context.lengths.get(kind.type.id)
    const printed = yield* pipe(
      kind.kindParams,
      Eff.forEach((p) =>
        Eff.Eff(function* () {
          const printed = yield* printKindParam(p, context, manager)

          return printed
        }),
      ),
    )

    const prefix = `Kind${length < 2 ? '' : length}<${kind.type.name}`
    const params = printed.length > 0 ? `, ${printed.join(', ')}` : ''
    const postfix = `>`

    manager.popContext()

    return `${prefix}${params}${postfix}`
  })
}

function printKindParam(
  kindParam: KindParam,
  context: Context,
  manager: PrintContextManager,
): Eff.Eff<never, string> {
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
      return Eff.Eff(function* () {
        return `${yield* printKindParam(
          kindParam.left,
          context,
          manager,
        )} & ${yield* printKindParam(kindParam.right, context, manager)}`
      })
    case UnionNode.tag:
      return Eff.Eff(function* () {
        return `${yield* printKindParam(
          kindParam.left,
          context,
          manager,
        )} | ${yield* printKindParam(kindParam.right, context, manager)}`
      })
    default:
      return printTypeParam(kindParam, context, manager)
  }
}

function printTuple(
  tuple: Tuple,
  context: Context,
  manager: PrintContextManager,
): Eff.Eff<never, string> {
  return Eff.Eff(function* () {
    const printed = yield* pipe(
      tuple.members,
      Eff.forEach((p) => printKindParam(p, context, manager)),
    )

    return `readonly [${printed.join(', ')}]`
  })
}

function printArray(
  array: ArrayNode,
  context: Context,
  manager: PrintContextManager,
): Eff.Eff<never, string> {
  return Eff.Eff(function* () {
    manager.addContext('Array')

    const printed = yield* printKindParam(array.member, context, manager)

    manager.popContext()

    return `${array.isNonEmpty ? `NonEmpty` : `Readonly`}Array<${printed}>`
  })
}

function printObjectNode(
  node: ObjectNode,
  context: Context,
  manager: PrintContextManager,
): Eff.Eff<never, string> {
  return Eff.Eff(function* () {
    manager.addContext('Property')

    const printed = yield* pipe(
      node.properties,
      Eff.forEach((p) => printLabeledKindParam(p, context, manager)),
    )

    manager.popContext()

    return `{
    ${printed.join('\n  ')}
}`
  })
}

function printStatic(node: Static, manager: PrintContextManager) {
  return Eff.fromLazy(() => {
    const hasDefaultValue = node.type.includes('=')
    const hasExtension = node.type.includes('extends')

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
  })
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
  }

  return type
}
