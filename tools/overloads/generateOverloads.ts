/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { pipe } from '../../src'
import * as Eff from '../../src/Eff'
import * as S from '../../src/Sync'

import {
  ArrayNode,
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
import { Context, buildContext, findPossibilities, mergeContexts } from './Context'
import { hktParamNames } from './common'
import { findHKTParams } from './findHKTParams'

const emptyContext = (node: ParentNode): Context => ({
  parent: node,
  lengths: new Map(),
  positions: new Map(),
  existing: new Map(),
})

export function generateOverloads(ast: ParentNode) {
  return pipe(ast, generateOverloadsSafe, S.runWith, Eff.run)
}

export function generateOverloadsSafe(
  ast: ParentNode | Labeled<ParentNode>,
): S.Sync<ReadonlyArray<readonly [ParentNode, Context]>> {
  return Eff.Eff(function* () {
    switch (ast.tag) {
      case FunctionSignature.tag:
        return (yield* generateFunctionSignatureOverloads(ast)).reverse()
      case Interface.tag:
        return yield* generateInterfaceOverloads(ast)
      case TypeAlias.tag:
        return yield* generateTypeAliasOverloads(ast)
      case Labeled.tag:
        return yield* generateOverloadsSafe(ast.param)
    }
  })
}

export function generateFunctionSignatureOverloads(
  signature: FunctionSignature,
  initialContext?: Context,
) {
  const possiblilties = findPossibilities(signature)

  return Eff.Eff(function* () {
    const output: Array<readonly [FunctionSignature, Context]> = []

    for (const possiblilty of possiblilties) {
      const built = buildContext(signature, possiblilty)
      const context = initialContext ? mergeContexts(initialContext, built) : built

      output.push([yield* generateFunctionSignature(signature, context), context])
    }

    if (possiblilties.length === 0) {
      const context: Context = initialContext ?? emptyContext(signature)

      output.push([yield* generateFunctionSignature(signature, context), context])
    }

    return output
  })
}

export function generateInterfaceOverloads(node: Interface) {
  const possiblilties = findPossibilities(node)

  return Eff.Eff(function* () {
    const output: Array<readonly [Interface, Context]> = []

    for (const possiblilty of possiblilties) {
      const context = buildContext(node, possiblilty)

      output.push([yield* generateInterface(node, context), context])
    }

    if (possiblilties.length === 0) {
      const context: Context = emptyContext(node)

      output.push([yield* generateInterface(node, context), context])
    }

    return output
  })
}

export function generateTypeAliasOverloads(node: TypeAlias) {
  const possiblilties = findPossibilities(node)

  return Eff.Eff(function* () {
    const output: Array<readonly [TypeAlias, Context]> = []

    for (const possiblilty of possiblilties) {
      const context = buildContext(node, possiblilty)

      output.push([yield* generateTypeAlias(node, context), context])
    }

    if (possiblilties.length === 0) {
      const context: Context = emptyContext(node)

      output.push([yield* generateTypeAlias(node, context), context])
    }

    return output
  })
}

export function generateFunctionSignature(signature: FunctionSignature, context: Context) {
  return Eff.Eff(function* () {
    context = { parent: signature, ...context }

    return new FunctionSignature(
      signature.name,
      yield* generateTypeParams(signature.typeParams, context),
      yield* generateFunctionParams(signature.functionParams, context),
      (yield* generateKindParam(signature.returnSignature, context))[0],
    )
  })
}

export function generateTypeParams(
  params: readonly TypeParam[],
  context: Context,
): S.Sync<readonly TypeParam[]> {
  return Eff.Eff(function* () {
    const output: TypeParam[] = []

    for (const p of params) {
      if (p.tag === 'Labeled') {
        output.push(...(yield* generateLabeledKindParam(p, context)))
      } else {
        output.push(...((yield* generateKindParam(p, context)) as TypeParam[]))
      }
    }

    return output
  })
}

export function generateHktPlaceholders(p: HKTPlaceholder, context: Context, printStatic: boolean) {
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
    const withExtension =
      !printStatic && p.useDefaults ? `${base} = ${p.type.name}['defaults'][Params.${name}]` : base

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

export function generateHKTParam(p: HKTParam, context: Context): S.Sync<HKTParam> {
  // eslint-disable-next-line require-yield
  return Eff.Eff(function* () {
    return p.setSize(context.lengths.get(p.id) ?? 0)
  })
}

export function generateTypeclass(p: Typeclass, context: Context): S.Sync<Typeclass> {
  return Eff.Eff(function* () {
    return p.setType(yield* generateHKTParam(p.type, context))
  })
}

export function generateDynamic(p: Dynamic, context: Context): S.Sync<Dynamic> {
  return Eff.Eff(function* () {
    return new Dynamic(yield* generateKindParams(p.params, context), p.template)
  })
}

export function generateKind(kind: Kind, context: Context): S.Sync<Kind> {
  return Eff.Eff(function* () {
    return new Kind(kind.type, yield* generateKindParams(kind.kindParams, context))
  })
}

export function generateKindParams(params: readonly KindParam[], context: Context) {
  return Eff.Eff(function* () {
    const output: KindParam[] = []

    for (const p of params) {
      output.push(...(yield* generateKindParam(p, context)))
    }

    return output
  })
}

export function generateKindParam(
  param: KindParam,
  context: Context,
): S.Sync<readonly KindParam[]> {
  return Eff.Eff(function* () {
    switch (param.tag) {
      case 'Array': {
        const isNonEmpty = param.isNonEmpty

        return yield* pipe(
          yield* generateKindParam(param.member, context),
          S.forEach((param) => S.of(new ArrayNode(param, isNonEmpty))),
        )
      }
      case 'Dynamic': {
        return [yield* generateDynamic(param, context)]
      }
      case 'FunctionSignature': {
        return [yield* generateFunctionSignature(param, context)]
      }
      case 'HKTParam': {
        return [yield* generateHKTParam(param, context)]
      }
      case 'HKTPlaceholder': {
        return generateHktPlaceholders(param, context, true)
      }
      case 'Kind': {
        return [yield* generateKind(param, context)]
      }
      case 'Object': {
        return [yield* generateObjectNode(param, context)]
      }
      case 'Static': {
        return [param]
      }
      case 'Tuple': {
        return [yield* generateTuple(param, context)]
      }
      case 'Typeclass': {
        return [yield* generateTypeclass(param, context)]
      }
    }
  })
}

export function generateTuple(tuple: Tuple, context: Context): S.Sync<Tuple> {
  return Eff.Eff(function* () {
    return new Tuple(yield* generateKindParams(tuple.members, context))
  })
}

export function generateObjectNode(node: ObjectNode, context: Context): S.Sync<ObjectNode> {
  return Eff.Eff(function* () {
    return node.setProperties(yield* generateLabeledKindParams(node.properties, context))
  })
}

export function generateKindReturn(kind: Kind, context: Context): S.Sync<Kind> {
  return Eff.Eff(function* () {
    const params = yield* generateKindParams(kind.kindParams, context)

    return kind.setParams(params)
  })
}

export function generateFunctionParams(
  params: readonly FunctionParam[],
  context: Context,
): S.Sync<readonly FunctionParam[]> {
  return Eff.Eff(function* () {
    const output: FunctionParam[] = []

    for (const p of params) {
      output.push(...(yield* generateFunctionParam(p, context)))
    }

    return output
  })
}

export function generateFunctionParam(
  param: FunctionParam,
  context: Context,
): S.Sync<readonly FunctionParam[]> {
  return Eff.Eff(function* () {
    const kindParams = yield* generateKindParam(param.param, context)

    return kindParams.map((p) => param.setKind(p))
  })
}

export function generateInterface(node: Interface, context: Context): S.Sync<Interface> {
  return Eff.Eff(function* () {
    const extensions: Array<Interface | KindParam> = []

    for (const e of node.extensions) {
      extensions.push(
        ...(e.tag === Interface.tag
          ? [yield* generateInterface(e, context)]
          : yield* generateKindParam(e, context)),
      )
    }

    return new Interface(
      generateTypeName(node, context),
      yield* generateTypeParams(node.typeParams, context),
      yield* generateLabeledKindParams(node.properties, context),
      extensions,
    )
  })
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

export function generateTypeAlias(node: TypeAlias, context: Context): S.Sync<TypeAlias> {
  return Eff.Eff(function* () {
    return {
      ...node,
      name: generateTypeName(node, context),
      typeParams: yield* generateTypeParams(node.typeParams, context),
      signature: (yield* generateKindParam(node.signature, context))[0],
    }
  })
}

export function generateLabeledKindParams<P extends ReadonlyArray<Labeled<KindParam>>>(
  labels: P,
  context: Context,
): S.Sync<ReadonlyArray<Labeled<KindParam>>> {
  return Eff.Eff(function* () {
    const output = []

    for (const label of labels) {
      output.push(...(yield* generateLabeledKindParam(label, context)))
    }

    return output
  })
}

export function generateLabeledKindParam<P extends KindParam>(
  labeled: Labeled<P>,
  context: Context,
) {
  return Eff.Eff(function* () {
    const params = yield* generateKindParam(labeled.param, context)

    return params.map((p) => labeled.setKind(p))
  })
}
