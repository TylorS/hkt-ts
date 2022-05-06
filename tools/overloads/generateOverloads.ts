/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { pipe } from '../../src'

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
import { Context, buildContext, findPossibilities, mergeContexts } from './Context'
import { hktParamNames } from './common'
import { findHKTParams } from './findHKTParams'

const emptyContext = (node: ParentNode): Context => ({
  parent: node,
  lengths: new Map(),
  positions: new Map(),
  existing: new Map(),
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
    const built = buildContext(signature, possiblilty)
    const context = initialContext ? mergeContexts(initialContext, built) : built

    output.push([generateFunctionSignature(signature, context), context])
  }

  if (possiblilties.length === 0) {
    const context: Context = initialContext ?? emptyContext(signature)

    output.push([generateFunctionSignature(signature, context), context])
  }

  return output
}

export function generateInterfaceOverloads(node: Interface) {
  const possiblilties = findPossibilities(node)

  const output: Array<readonly [Interface, Context]> = []

  for (const possiblilty of possiblilties) {
    const context = buildContext(node, possiblilty)

    output.push([generateInterface(node, context), context])
  }

  if (possiblilties.length === 0) {
    const context: Context = emptyContext(node)

    output.push([generateInterface(node, context), context])
  }

  return output
}

export function generateTypeAliasOverloads(node: TypeAlias) {
  const possiblilties = findPossibilities(node)

  const output: Array<readonly [TypeAlias, Context]> = []

  for (const possiblilty of possiblilties) {
    const context = buildContext(node, possiblilty)

    output.push([generateTypeAlias(node, context), context])
  }

  if (possiblilties.length === 0) {
    const context: Context = emptyContext(node)

    output.push([generateTypeAlias(node, context), context])
  }

  return output
}

export function generateFunctionSignature(signature: FunctionSignature, context: Context) {
  context = { ...context, parent: signature }

  return new FunctionSignature(
    signature.name,
    generateTypeParams(signature.typeParams, context),
    generateFunctionParams(signature.functionParams, context),
    generateKindParam(signature.returnSignature, context)[0],
  )
}

export function generateTypeParams(
  params: readonly TypeParam[],
  context: Context,
): readonly TypeParam[] {
  const output: TypeParam[] = []

  for (const p of params) {
    if (p.tag === 'Labeled') {
      output.push(...generateLabeledKindParam(p, context))
    } else {
      output.push(...(generateKindParam(p, context) as TypeParam[]))
    }
  }

  return output
}

export function generateHktPlaceholders(p: HKTPlaceholder, context: Context) {
  const length = context.lengths.get(p.type.id)

  if (length === undefined) {
    return [p]
  }

  const existing = findExistingParams(context, p.type.id)
  const position = context.positions.get(p.type.id)!
  const multiple = context.existing.size > 1
  const params = hktParamNames.slice(existing, length).reverse()
  const placeholders = Array.from({ length: length - existing }, (_, i) => {
    const name = params[i]

    if (p.extractFrom) {
      return new Static(`ParamOf<${p.type.name}, ${p.extractFrom}, Params.${name}>`)
    }

    const base = multiple ? `${name}${position}` : name
    const withExtension = p.useDefaults
      ? `${base} = DefaultOf<${p.type.name}, Params.${name}>`
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

export function generateTypeclass(p: Typeclass, context: Context): Typeclass {
  const p2 = p.setType(generateHKTParam(p.type, context))
  const p3 = p2.setParams(
    generateTypeParams(
      p.params.filter((p) => p.tag !== HKTParam.tag),
      context,
    ),
  )

  return p3
}

export function generateDynamic(p: Dynamic, context: Context): Dynamic {
  return new Dynamic(generateKindParams(p.params, context), p.template)
}

export function generateKind(kind: Kind, context: Context): Kind {
  return new Kind(kind.type, generateKindParams(kind.kindParams, context))
}

export function generateKindParams(params: readonly KindParam[], context: Context) {
  const output: KindParam[] = []

  for (const p of params) {
    output.push(...generateKindParam(p, context))
  }

  return output
}

export function generateKindParam(param: KindParam, context: Context): readonly KindParam[] {
  switch (param.tag) {
    case 'Array': {
      const isNonEmpty = param.isNonEmpty

      return pipe(generateKindParam(param.member, context), (_) =>
        _.map((param) => new ArrayNode(param, isNonEmpty)),
      )
    }
    case 'Dynamic': {
      return [generateDynamic(param, context)]
    }
    case 'FunctionSignature': {
      return [generateFunctionSignature(param, context)]
    }
    case 'HKTParam': {
      return [generateHKTParam(param, context)]
    }
    case 'HKTPlaceholder': {
      return generateHktPlaceholders(param, context)
    }
    case 'Kind': {
      return [generateKind(param, context)]
    }
    case 'Object': {
      return [generateObjectNode(param, context)]
    }
    case 'Static': {
      return [param]
    }
    case 'Tuple': {
      return [generateTuple(param, context)]
    }
    case 'Typeclass': {
      return [generateTypeclass(param, context)]
    }
    case 'Intersection': {
      const l = generateKindParam(param.left, context)
      const r = generateKindParam(param.right, context)

      return l.flatMap((lv) => r.map((rv) => new IntersectionNode(lv, rv)))
    }
    case 'Union': {
      const l = generateKindParam(param.left, context)
      const r = generateKindParam(param.right, context)

      return l.flatMap((lv) => r.map((rv) => new UnionNode(lv, rv)))
    }
    case 'Interface': {
      return [generateInterface(param, context)]
    }
  }
}

export function generateTuple(tuple: Tuple, context: Context): Tuple {
  return new Tuple(generateKindParams(tuple.members, context))
}

export function generateObjectNode(node: ObjectNode, context: Context): ObjectNode {
  return node.setProperties(generateLabeledKindParams(node.properties, context))
}

export function generateKindReturn(kind: Kind, context: Context): Kind {
  const params = generateKindParams(kind.kindParams, context)

  return kind.setParams(params)
}

export function generateFunctionParams(
  params: readonly FunctionParam[],
  context: Context,
): readonly FunctionParam[] {
  const output: FunctionParam[] = []

  for (const p of params) {
    output.push(...generateFunctionParam(p, context))
  }

  return output
}

export function generateFunctionParam(
  param: FunctionParam,
  context: Context,
): readonly FunctionParam[] {
  const kindParams = generateKindParam(param.param, context)

  return kindParams.map((p) => param.setKind(p))
}

export function generateInterface(node: Interface, context: Context): Interface {
  const extensions: Array<Interface | KindParam> = []

  for (const e of node.extensions) {
    extensions.push(
      ...(e.tag === Interface.tag
        ? [generateInterface(e, context)]
        : generateKindParam(e, context)),
    )
  }

  return new Interface(
    generateTypeName(node, context),
    generateTypeParams(node.typeParams, context),
    generateLabeledKindParams(node.properties, context),
    extensions,
  )
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

export function generateTypeAlias(node: TypeAlias, context: Context): TypeAlias {
  return {
    ...node,
    name: generateTypeName(node, context),
    typeParams: generateTypeParams(node.typeParams, context),
    signature: generateKindParam(node.signature, context)[0],
  }
}

export function generateLabeledKindParams<P extends ReadonlyArray<Labeled<KindParam>>>(
  labels: P,
  context: Context,
): ReadonlyArray<Labeled<KindParam>> {
  const output = []

  for (const label of labels) {
    output.push(...generateLabeledKindParam(label, context))
  }

  return output
}

export function generateLabeledKindParam<P extends KindParam>(
  labeled: Labeled<P>,
  context: Context,
) {
  const params = generateKindParam(labeled.param, context)

  return params.map((p) => labeled.setKind(p))
}
