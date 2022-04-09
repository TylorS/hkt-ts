/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Eff, pipe } from '../../src'
import * as Sync from '../../src/Sync'

import {
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
import { findHKTParams } from './findHKTParams'
import { generateFunctionSignatureOverloads } from './generateOverloads'

type PrintContext = {
  parentNodes: ParentNode[]
  contextStack: CurrentContext[]
}

type CurrentContext = 'TypeParam' | 'Property' | 'FunctionParam' | 'Return' | 'Extension'

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
  return pipe(printOverloadSafe(node, context), Sync.runWith, Eff.run)
}

export function printOverloadSafe(
  node: ParentNode,
  context: Context,
  manager: PrintContextManager = new PrintContextManager(),
): Sync.Sync<string> {
  return Sync.Sync(function* () {
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
): Sync.Sync<string> {
  return Sync.Sync(function* () {
    manager.addParentNode(node)

    if (node.typeParams.length === 0) {
      return `export type ${node.name} = ${yield* printKindParam(node.signature, context, manager)}`
    }

    manager.addContext('TypeParam')

    const printed = yield* pipe(
      node.typeParams,
      Sync.forEach((p) => printTypeParam(p, context, manager)),
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
): Sync.Sync<string> {
  return Sync.Sync(function* () {
    manager.addParentNode(node)

    if (manager.isWithinExtension()) {
      manager.addContext('TypeParam')

      const printed = yield* pipe(
        node.typeParams,
        Sync.forEach((p) => printTypeParam(p, context, manager)),
      )

      const s = `${node.name}${node.typeParams.length ? `<${printed.join(', ')}>` : ''}`

      manager.popContext()

      return s
    }

    manager.addContext('TypeParam')

    const printedTypeParams = yield* pipe(
      node.typeParams,
      Sync.forEach((p) => printTypeParam(p, context, manager)),
    )

    const prefix = `export interface ${node.name}${
      node.typeParams.length ? `<${printedTypeParams.join(', ')}>` : ''
    }`

    manager.popContext()

    manager.addContext('Property')

    const printedProperties = yield* pipe(
      node.properties,
      Sync.forEach((p) => printProperty(p, context, manager)),
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
      Sync.forEach((i) =>
        i.tag === Interface.tag
          ? printInterface(i, context, manager)
          : printKindParam(i, context, manager),
      ),
    )).join(', ')

    manager.popContext()

    return `${prefix} extends ${extensions}${postfix}`
  })
}

export function printProperty(
  property: Labeled<KindParam>,
  context: Context,
  manager: PrintContextManager,
): Sync.Sync<string> {
  return Sync.Sync(function* () {
    manager.addContext('Property')

    const s = `readonly ${property.label}: ${yield* printKindParam(
      property.param,
      context,
      manager,
    )}`

    manager.popContext()

    return s
  })
}

export function printFunctionSignature(
  node: FunctionSignature,
  context: Context,
  manager: PrintContextManager,
  recursive = false,
): Sync.Sync<string> {
  return Sync.Sync(function* () {
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
          Sync.forEach(([p, c]) => {
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
        Sync.forEach((p) => printTypeParam(p, context, manager)),
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
        Sync.forEach((p) => printFunctionParam(p, context, manager)),
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
): Sync.Sync<string> {
  switch (p.tag) {
    case HKTParam.tag:
      return Sync.fromLazy(() =>
        manager.isWithinReturn() || manager.isWithinExtension()
          ? p.name
          : `${p.name} extends HKT${p.size < 2 ? '' : `${p.size}`}`,
      )
    case HKTPlaceholder.tag: {
      return Sync.of('')
    }
    case Typeclass.tag: {
      return Sync.fromLazy(() => {
        const baseName = `${p.name}${p.type.size === 0 ? '' : p.type.size}`

        return manager.isWithinReturn() ? baseName : `${baseName}<${p.type.name}>`
      })
    }

    case Static.tag: {
      return Sync.fromLazy(() => {
        if (manager.isWithinReturn()) {
          return p.type.split('extends')[0]
        }

        return p.type
      })
    }
    case Dynamic.tag: {
      return Sync.Sync(function* () {
        const printed = yield* pipe(
          p.params,
          Sync.forEach((t) => printKindParam(t, context, manager)),
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
): Sync.Sync<string> {
  return Sync.Sync(function* () {
    return `${p.label}: ${yield* printKindParam(p.param, context, manager)}`
  })
}

export function printKind(
  kind: Kind,
  context: Context,
  manager: PrintContextManager,
): Sync.Sync<string> {
  return Sync.Sync(function* () {
    const length = context.lengths.get(kind.type.id)
    const printed = yield* pipe(
      kind.kindParams,
      Sync.forEach((p) => printKindParam(p, context, manager)),
    )

    return `Kind${
      length < 2 ? '' : length
    }<${kind.type.name}${kind.kindParams.length ? ', ' : ''}${printed.join(', ')}>`
  })
}

function printKindParam(
  kindParam: KindParam,
  context: Context,
  manager: PrintContextManager,
): Sync.Sync<string> {
  switch (kindParam.tag) {
    case Kind.tag:
      return printKind(kindParam, context, manager)
    case Tuple.tag:
      return printTuple(kindParam, context, manager)
    case ObjectNode.tag:
      return printObjectNode(kindParam, context, manager)
    case Static.tag:
      return Sync.of(kindParam.type)
    case FunctionSignature.tag:
      return printFunctionSignature(kindParam, context, manager)
    default:
      return printTypeParam(kindParam, context, manager)
  }
}

function printTuple(
  tuple: Tuple,
  context: Context,
  manager: PrintContextManager,
): Sync.Sync<string> {
  return Sync.Sync(function* () {
    const printed = yield* pipe(
      tuple.members,
      Sync.forEach((p) => printKindParam(p, context, manager)),
    )

    return `readonly [${printed.join(', ')}]`
  })
}

function printObjectNode(
  node: ObjectNode,
  context: Context,
  manager: PrintContextManager,
): Sync.Sync<string> {
  return Sync.Sync(function* () {
    const printed = yield* pipe(
      node.properties,
      Sync.forEach((p) => printProperty(p, context, manager)),
    )

    return `{
    ${printed.join('\n')}
}`
  })
}
