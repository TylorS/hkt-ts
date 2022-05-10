/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { pipe } from '../../src/function'

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
import {
  Context,
  buildContext,
  findPlaceholders,
  findPossibilities,
  mergeContexts,
} from './Context'
import { PrintContextManager } from './PrintManagerContext'
import { hktParamNames } from './common'
import { findHKTParams } from './findHKTParams'

const emptyContext = (node: ParentNode): Context => ({
  parent: node,
  lengths: new Map(),
  positions: new Map(),
  existing: new Map(),
  placeholders: new Map(),
})

export function generateOverloads(
  ast: ParentNode | Labeled<ParentNode>,
): ReadonlyArray<readonly [ParentNode, Context]> {
  switch (ast.tag) {
    case FunctionSignature.tag:
      return generateFunctionSignatureOverloads(ast).reverse()
    case Interface.tag:
      return generateInterfaceOverloads(ast)
    case TypeAlias.tag:
      return generateTypeAliasOverloads(ast)
    case Labeled.tag:
      return generateOverloads(ast.param)
  }
}

export function generateFunctionSignatureOverloads(
  signature: FunctionSignature,
  initialContext?: Context,
) {
  const possiblilties = findPossibilities(signature)

  const output: Array<readonly [FunctionSignature, Context]> = []

  for (const possiblilty of possiblilties) {
    const built = (
      initialContext
        ? mergeContexts(initialContext, buildContext(signature, possiblilty))
        : buildContext(signature, possiblilty)
    ) as Context

    for (const placeholders of findPlaceholders(signature, built)) {
      const manager = new PrintContextManager()
      const context = {
        ...built,
        placeholders: new Map([
          ...('placeholders' in built ? built.placeholders : new Map()),
          ...placeholders,
        ]),
      }

      output.push([generateFunctionSignature(signature, context, manager), context])
    }
  }

  if (possiblilties.length === 0) {
    const context: Context = initialContext ?? emptyContext(signature)
    const manager = new PrintContextManager()

    output.push([generateFunctionSignature(signature, context, manager), context])
  }

  return output
}

export function generateInterfaceOverloads(node: Interface) {
  const possiblilties = findPossibilities(node)

  const output: Array<readonly [Interface, Context]> = []

  for (const possiblilty of possiblilties) {
    const built = buildContext(node, possiblilty)

    for (const placeholders of findPlaceholders(node, built)) {
      const context = { ...built, placeholders }
      const manager = new PrintContextManager()

      output.push([generateInterface(node, context, manager), context])
    }
  }

  if (possiblilties.length === 0) {
    const context: Context = emptyContext(node)
    const manager = new PrintContextManager()

    output.push([generateInterface(node, context, manager), context])
  }

  return output
}

export function generateTypeAliasOverloads(node: TypeAlias) {
  const possiblilties = findPossibilities(node)

  const output: Array<readonly [TypeAlias, Context]> = []

  for (const possiblilty of possiblilties) {
    const built = buildContext(node, possiblilty)

    for (const placeholders of findPlaceholders(node, built)) {
      const context = { ...built, placeholders }
      const manager = new PrintContextManager()

      output.push([generateTypeAlias(node, context, manager), context])
    }
  }

  if (possiblilties.length === 0) {
    const context: Context = emptyContext(node)
    const manager = new PrintContextManager()

    output.push([generateTypeAlias(node, context, manager), context])
  }

  return output
}

export function generateFunctionSignature(
  signature: FunctionSignature,
  context: Context,
  manager: PrintContextManager,
) {
  context = { ...context, parent: signature }

  manager.addParentNode(signature)

  manager.addContext('TypeParam')
  const typeParams = generateTypeParams(signature.typeParams, context, manager)
  manager.popContext()

  manager.addContext('FunctionParam')
  const functionParams = generateFunctionParams(signature.functionParams, context, manager)
  manager.popContext()

  manager.addContext('Return')
  const kindParam = generateKindParam(signature.returnSignature, context, manager)[0]
  manager.popContext()

  return new FunctionSignature(signature.name, typeParams, functionParams, kindParam)
}

export function generateTypeParams(
  params: readonly TypeParam[],
  context: Context,
  manager: PrintContextManager,
): readonly TypeParam[] {
  const output: TypeParam[] = []

  for (const p of params) {
    if (p.tag === 'Labeled') {
      output.push(...generateLabeledKindParam(p, context, manager))
    } else {
      output.push(...(generateKindParam(p, context, manager) as TypeParam[]))
    }
  }

  return output
}

export function generateHktPlaceholders(
  p: HKTPlaceholder,
  context: Context,
  manager: PrintContextManager,
) {
  const length = context.lengths.get(p.type.id)

  if (length === undefined) {
    return [p]
  }

  const curriedPlaceholders = context.placeholders.get(p.type.id) ?? []
  const existing = findExistingParams(context, p.type.id)
  const position = context.positions.get(p.type.id)!
  const multiple = context.existing.size > 1
  const shouldRemoveCurriedPlaceholders =
    manager.isWithinTypeParam() && !manager.isWithinKind() && curriedPlaceholders.length > 0
  const params = hktParamNames
    .slice(existing, length)
    .reverse()
    .filter((x) => (shouldRemoveCurriedPlaceholders ? !curriedPlaceholders.includes(x) : true))
  const baseLength = length - existing
  const placeholderLength = shouldRemoveCurriedPlaceholders
    ? baseLength - curriedPlaceholders.length
    : baseLength
  const placeholders = Array.from({ length: placeholderLength }, (_, i) => {
    const name = params[i]
    const base = multiple ? `${name}${position}` : name
    const isCurried = curriedPlaceholders.includes(name)

    if (p.extractFrom && !isCurried) {
      return new Static(`ParamOf<${p.type.name}, ${p.extractFrom}, Params.${name}>`)
    }

    const withExtension = p.useDefaults
      ? `${isCurried ? `` : `${base} = `}DefaultOf<${p.type.name}, Params.${name}>`
      : base

    return new Static(withExtension)
  })

  return placeholders
}

function findExistingParams(context: Context, id: symbol): number {
  const params = context.existing.get(id)

  if (!params) {
    return 0
  }

  return params.length
}

export function generateHKTParam(p: HKTParam, context: Context): HKTParam {
  return p.setSize(context.lengths.get(p.id) ?? 0)
}

export function generateTypeclass(
  p: Typeclass,
  context: Context,
  manager: PrintContextManager,
): Typeclass {
  const p2 = p.setType(generateHKTParam(p.type, context))
  manager.addContext('TypeParam')
  const params = generateTypeParams(
    p.params.filter((p) => p.tag !== HKTParam.tag),
    context,
    manager,
  )

  const p3 = p2.setParams(params)
  manager.popContext()

  return p3
}

export function generateDynamic(
  p: Dynamic,
  context: Context,
  manager: PrintContextManager,
): Dynamic {
  return new Dynamic(generateKindParams(p.params, context, manager), p.template)
}

export function generateKind(kind: Kind, context: Context, manager: PrintContextManager): Kind {
  manager.addContext('Kind')
  const k = new Kind(kind.type, generateKindParams(kind.kindParams, context, manager))
  manager.popContext()
  return k
}

export function generateKindParams(
  params: readonly KindParam[],
  context: Context,
  manager: PrintContextManager,
) {
  const output: KindParam[] = []

  for (const p of params) {
    output.push(...generateKindParam(p, context, manager))
  }

  return output
}

export function generateKindParam(
  param: KindParam,
  context: Context,
  manager: PrintContextManager,
): readonly KindParam[] {
  switch (param.tag) {
    case 'Array': {
      const isNonEmpty = param.isNonEmpty

      manager.addContext('Array')

      const xs = pipe(generateKindParam(param.member, context, manager), (_) =>
        _.map((param) => new ArrayNode(param, isNonEmpty)),
      )

      manager.popContext()

      return xs
    }
    case 'Dynamic': {
      return [generateDynamic(param, context, manager)]
    }
    case 'FunctionSignature': {
      return [generateFunctionSignature(param, context, manager)]
    }
    case 'HKTParam': {
      return [generateHKTParam(param, context)]
    }
    case 'HKTPlaceholder': {
      return generateHktPlaceholders(param, context, manager)
    }
    case 'HKTCurriedPlaceholder': {
      return [param]
    }
    case 'Kind': {
      return [generateKind(param, context, manager)]
    }
    case 'Object': {
      return [generateObjectNode(param, context, manager)]
    }
    case 'Static': {
      return [param]
    }
    case 'Tuple': {
      return [generateTuple(param, context, manager)]
    }
    case 'Typeclass': {
      return [generateTypeclass(param, context, manager)]
    }
    case 'Intersection': {
      const l = generateKindParam(param.left, context, manager)
      const r = generateKindParam(param.right, context, manager)

      return l.flatMap((lv) => r.map((rv) => new IntersectionNode(lv, rv)))
    }
    case 'Union': {
      const l = generateKindParam(param.left, context, manager)
      const r = generateKindParam(param.right, context, manager)

      return l.flatMap((lv) => r.map((rv) => new UnionNode(lv, rv)))
    }
    case 'Interface': {
      return [generateInterface(param, context, manager)]
    }
  }
}

export function generateTuple(tuple: Tuple, context: Context, manager: PrintContextManager): Tuple {
  return new Tuple(generateKindParams(tuple.members, context, manager))
}

export function generateObjectNode(
  node: ObjectNode,
  context: Context,
  manager: PrintContextManager,
): ObjectNode {
  return node.setProperties(generateLabeledKindParams(node.properties, context, manager))
}

export function generateKindReturn(
  kind: Kind,
  context: Context,
  manager: PrintContextManager,
): Kind {
  const params = generateKindParams(kind.kindParams, context, manager)

  return kind.setParams(params)
}

export function generateFunctionParams(
  params: readonly FunctionParam[],
  context: Context,
  manager: PrintContextManager,
): readonly FunctionParam[] {
  const output: FunctionParam[] = []

  for (const p of params) {
    output.push(...generateFunctionParam(p, context, manager))
  }

  return output
}

export function generateFunctionParam(
  param: FunctionParam,
  context: Context,
  manager: PrintContextManager,
): readonly FunctionParam[] {
  const kindParams = generateKindParam(param.param, context, manager)

  return kindParams.map((p) => param.setKind(p))
}

export function generateInterface(
  node: Interface,
  context: Context,
  manager: PrintContextManager,
): Interface {
  manager.addContext('TypeParam')
  const typeParams = generateTypeParams(node.typeParams, context, manager)
  manager.popContext()

  manager.addContext('Property')
  const properties = generateLabeledKindParams(node.properties, context, manager)
  manager.popContext()

  manager.addContext('Extension')
  const extensions: Array<Interface | KindParam> = []
  for (const e of node.extensions) {
    extensions.push(
      ...(e.tag === Interface.tag
        ? [generateInterface(e, context, manager)]
        : generateKindParam(e, context, manager)),
    )
  }
  manager.popContext()

  return new Interface(generateTypeName(node, context), typeParams, properties, extensions)
}

function generateTypeName(node: Interface | TypeAlias, context: Context): string {
  return `${node.name}${generatePostfix(findHKTParams(node), context)}`
}

function generatePostfix(hktParams: readonly HKTParam[], context: Context) {
  return hktParams
    .map((p) => {
      return `${context.lengths.get(p.id) === 0 ? '' : context.lengths.get(p.id) ?? ''}`
    })
    .join('')
}

export function generateTypeAlias(
  node: TypeAlias,
  context: Context,
  manager: PrintContextManager,
): TypeAlias {
  manager.addParentNode(node)

  manager.addContext('TypeParam')
  const typeParams = generateTypeParams(node.typeParams, context, manager)
  manager.popContext()

  manager.addContext('Extension')
  const signature = generateKindParam(node.signature, context, manager)[0]
  manager.popContext()

  return {
    ...node,
    name: generateTypeName(node, context),
    typeParams,
    signature,
  }
}

export function generateLabeledKindParams<P extends ReadonlyArray<Labeled<KindParam>>>(
  labels: P,
  context: Context,
  manager: PrintContextManager,
): ReadonlyArray<Labeled<KindParam>> {
  const output = []

  for (const label of labels) {
    output.push(...generateLabeledKindParam(label, context, manager))
  }

  return output
}

export function generateLabeledKindParam<P extends KindParam>(
  labeled: Labeled<P>,
  context: Context,
  manager: PrintContextManager,
) {
  const params = generateKindParam(labeled.param, context, manager)

  return params.map((p) => labeled.setKind(p))
}
