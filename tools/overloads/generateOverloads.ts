/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as Eff from '../../src/Eff'
import * as S from '../../src/Sync'

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
import { Context, buildContext } from './Context'
import { hktParamNames } from './common'
import { findHKTParams } from './findHKTParams'
import { findPossibilities } from './findPossibilities'

const emptyContext = (node: ParentNode): Context => ({
  tag: node.tag,
  lengths: new Map(),
  positions: new Map(),
  existing: new Map(),
})

export function generateOverloads(ast: ParentNode) {
  return Eff.run(S.runWith(generateOverloadsSafe(ast)))
}

export function generateOverloadsSafe(
  ast: ParentNode,
): S.Sync<ReadonlyArray<readonly [ParentNode, Context]>> {
  return S.Sync(function* () {
    switch (ast.tag) {
      case FunctionSignature.tag:
        return (yield* generateFunctionSignatureOverloads(ast)).reverse()
      case Interface.tag:
        return yield* generateInterfaceOverloads(ast)
      case TypeAlias.tag:
        return yield* generateTypeAliasOverloads(ast)
    }
  })
}

export function generateFunctionSignatureOverloads(signature: FunctionSignature) {
  const possiblilties = findPossibilities(signature)

  return S.Sync(function* () {
    const output: Array<readonly [FunctionSignature, Context]> = []

    for (const possiblilty of possiblilties) {
      const context = buildContext(signature, possiblilty)

      output.push([yield* generateFunctionSignature(signature, context), context])
    }

    if (possiblilties.length === 0) {
      const context: Context = emptyContext(signature)

      output.push([yield* generateFunctionSignature(signature, context), context])
    }

    return output
  })
}

export function generateInterfaceOverloads(node: Interface) {
  const possiblilties = findPossibilities(node)

  return S.Sync(function* () {
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

  return S.Sync(function* () {
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
  return S.Sync(function* () {
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
  return S.Sync(function* () {
    const output: TypeParam[] = []

    for (const p of params) {
      switch (p.tag) {
        case HKTPlaceholder.tag: {
          output.push(...generateHktPlaceholders(p, context, false))
          break
        }
        case HKTParam.tag: {
          output.push(yield* generateHKTParam(p, context))
          break
        }
        case Typeclass.tag: {
          output.push(yield* generateTypeclass(p, context))
          break
        }
        case Dynamic.tag: {
          output.push(yield* generateDynamic(p, context))
          break
        }
        case Static.tag: {
          output.push(p)
          break
        }
      }
    }

    return output
  })
}

export function generateHktPlaceholders(p: HKTPlaceholder, context: Context, printStatic: boolean) {
  const length = context.lengths.get(p.type.id)!
  const existing = findExistingParams(context, p.type.id)
  const position = context.positions.get(p.type.id)!
  const multiple = context.lengths.size > 1

  if (!length || length === 0) {
    return []
  }

  const params = hktParamNames.slice(existing, length).reverse()
  const placholders = Array.from({ length: length - existing }, (_, i) => {
    const name = params[i]
    const base = multiple ? `${name}${position}` : name
    const withExtension =
      !printStatic && p.useDefaults ? `${base} = ${p.type.name}['defaults'][Params.${name}]` : base

    return new Static(withExtension)
  })

  return placholders
}

function findExistingParams(context: Context, id: symbol): number {
  const params = context.existing.get(id)

  if (!params) {
    return 0
  }

  // TODO: Check if multiple values should be here
  return params.length
}

export function generateHKTParam(p: HKTParam, context: Context): S.Sync<HKTParam> {
  // eslint-disable-next-line require-yield
  return S.Sync(function* () {
    return p.setSize(context.lengths.get(p.id) ?? 0)
  })
}

export function generateTypeclass(p: Typeclass, context: Context): S.Sync<Typeclass> {
  return S.Sync(function* () {
    return p.setType(yield* generateHKTParam(p.type, context))
  })
}

export function generateDynamic(p: Dynamic, context: Context): S.Sync<Dynamic> {
  return S.Sync(function* () {
    return new Dynamic(yield* generateKindParams(p.params, context), p.template)
  })
}

export function generateKind(kind: Kind, context: Context): S.Sync<Kind> {
  return S.Sync(function* () {
    return new Kind(kind.type, yield* generateKindParams(kind.kindParams, context))
  })
}

export function generateKindParams(params: readonly KindParam[], context: Context) {
  return S.Sync(function* () {
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
  return S.Sync(function* () {
    switch (param.tag) {
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
  return S.Sync(function* () {
    return new Tuple(yield* generateKindParams(tuple.members, context))
  })
}

export function generateObjectNode(node: ObjectNode, context: Context): S.Sync<ObjectNode> {
  return S.Sync(function* () {
    return node.setProperties(yield* generateLabeledKindParams(node.properties, context))
  })
}

export function generateKindReturn(kind: Kind, context: Context): S.Sync<Kind> {
  return S.Sync(function* () {
    const params = yield* generateKindParams(kind.kindParams, context)

    return kind.setParams(params)
  })
}

export function generateFunctionParams(
  params: readonly FunctionParam[],
  context: Context,
): S.Sync<readonly FunctionParam[]> {
  return S.Sync(function* () {
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
  return S.Sync(function* () {
    const kindParams = yield* generateKindParam(param.param, context)

    return kindParams.map((p) => param.setKind(p))
  })
}

export function generateInterface(node: Interface, context: Context): S.Sync<Interface> {
  return S.Sync(function* () {
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
  return `${node.name}${generatePostfix(findHKTParams(node.typeParams), context)}`
}

function generatePostfix(hktParams: readonly HKTParam[], context: Context) {
  return hktParams
    .map((p) => `${context.lengths.get(p.id) === 0 ? '' : context.lengths.get(p.id) ?? ''}`)
    .join('')
}

export function generateTypeAlias(node: TypeAlias, context: Context): S.Sync<TypeAlias> {
  return S.Sync(function* () {
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
  return S.Sync(function* () {
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
  return S.Sync(function* () {
    const params = yield* generateKindParam(labeled.param, context)

    return params.map((p) => labeled.setKind(p))
  })
}
