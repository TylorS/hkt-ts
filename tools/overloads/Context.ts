import { Params } from '../../src/HKT'

import {
  AST,
  FunctionSignature,
  HKTParam,
  HKTPlaceholder,
  Interface,
  Kind,
  KindParam,
  ParentNode,
  TypeAlias,
} from './AST'
import { combinations, hktParamNames, possibleLengths, uniq, uniqBy } from './common'
import { findHKTParams } from './findHKTParams'
import { defaultVisitors, walkAst } from './walkAst'

const SUPPORTED_PLACEHOLDER_LENGTH = 4

export interface Context {
  readonly parent: ParentNode
  readonly lengths: Map<symbol, number>
  readonly positions: Map<symbol, number>
  readonly existing: Map<symbol, readonly KindParam[]>
  readonly placeholders: Map<symbol, readonly Params[]>
}

export function buildContext(
  ast: ParentNode,
  possibility: ReadonlyArray<number>,
): Omit<Context, 'placeholders'> {
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
): Omit<Context, 'placeholders'> {
  const hkts = findHKTParams(signature)
  const lengths = new Map<symbol, number>(hkts.map((hkt, i) => [hkt.id, possibility[i]] as const))
  const positions = new Map<symbol, number>(hkts.map((hkt, i) => [hkt.id, i + 1] as const))
  const existing = findExistingParameters(signature)

  return {
    parent: signature,
    lengths,
    positions,
    existing,
  }
}

export function buildContextFromInterface(
  node: Interface,
  possibility: ReadonlyArray<number>,
): Omit<Context, 'placeholders'> {
  const hkts = findHKTParams(node)
  const lengths = new Map<symbol, number>(hkts.map((hkt, i) => [hkt.id, possibility[i]] as const))
  const positions = new Map<symbol, number>(hkts.map((hkt, i) => [hkt.id, i + 1] as const))
  const existing = findExistingParameters(node)

  return {
    parent: node,
    lengths,
    positions,
    existing,
  }
}

export function buildContextFromTypeAlias(
  node: TypeAlias,
  possibility: ReadonlyArray<number>,
): Omit<Context, 'placeholders'> {
  const hkts = findHKTParams(node)
  const lengths = new Map<symbol, number>(hkts.map((hkt, i) => [hkt.id, possibility[i]] as const))
  const positions = new Map<symbol, number>(hkts.map((hkt, i) => [hkt.id, i + 1] as const))
  const existing = findExistingParameters(node)

  return {
    parent: node,
    lengths,
    positions,
    existing,
  }
}

export function findExistingParameters(node: ParentNode): Map<symbol, readonly KindParam[]> {
  const existing = new Map<symbol, readonly KindParam[]>()

  walkAst(node, {
    ...defaultVisitors(),
    Kind: (kind) => {
      const id = kind.type.id
      const params = kind.kindParams.filter((x) => x.tag !== HKTPlaceholder.tag)
      const previous = existing.get(id)

      if (previous && previous.length !== params.length) {
        throw new Error(
          `Currently unable to construct Kinds with different number of existing parameters`,
        )
      }

      existing.set(
        kind.type.id,
        kind.kindParams.filter((x) => x.tag !== HKTPlaceholder.tag),
      )
    },
  })

  return existing
}

export function findPossibilities(ast: ParentNode): ReadonlyArray<ReadonlyArray<number>> {
  return uniq(combinations(findHKTParams(ast).map(() => possibleLengths)))
}

export function mergeContexts(a: Context, b: Context | Omit<Context, 'placeholders'>): Context {
  const c: Context = {
    parent: b.parent,
    lengths: new Map([...a.lengths, ...b.lengths]),
    positions: new Map([
      ...a.positions,
      ...Array.from(b.positions).map(([k, v]) => [k, v + a.positions.size - 1] as const),
    ]),
    existing: new Map([...a.existing, ...b.existing]),
    placeholders: new Map([...a.placeholders, ...('placeholders' in b ? b.placeholders : [])]),
  }

  c.lengths.forEach((v, k) => a.lengths.set(k, v))
  c.positions.forEach((v, k) => a.positions.set(k, v))
  c.existing.forEach((v, k) => a.existing.set(k, v))

  return c
}

export function findPlaceholders(
  ast: ParentNode | Kind,
  context: Omit<Context, 'placeholders'>,
): ReadonlyArray<Context['placeholders']> {
  const placeholders: Array<Context['placeholders']> = []
  const hktParams =
    ast.tag === Kind.tag ? ast.kindParams.filter((x) => x.tag === HKTParam.tag) : findHKTParams(ast)

  const addPlaceholder = (i: number, hkt: symbol, params: ReadonlyArray<Params>) => {
    if (!placeholders[i]) {
      placeholders[i] = new Map()
    }

    const map = placeholders[i]

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (map.has(hkt) && map.get(hkt)!.length > params.length) {
      return
    }

    map.set(hkt, params)
  }

  for (const hkt of hktParams) {
    const length = context.lengths.get(hkt.id) ?? 1
    const hasNoPlaceholders = length < 2

    addPlaceholder(0, hkt.id, [])

    if (hasNoPlaceholders || length > SUPPORTED_PLACEHOLDER_LENGTH) {
      continue
    }

    const existing = context.existing.get(hkt.id) ?? []
    const possiblilties = possibleLengths.slice(
      existing.length,
      Math.min(SUPPORTED_PLACEHOLDER_LENGTH, length),
    )
    const possibleParams = possiblilties.map((p) => hktParamNames[p]).filter((x) => x !== Params.A)
    const params = uniqBy(combinations(possiblilties.map(() => possibleParams)).map(uniq), (x) =>
      x.slice().sort(),
    )
      .slice()
      .reverse()

    const shouldAddAll = possibleParams.length > 2

    if (shouldAddAll) {
      addPlaceholder(1, hkt.id, possibleParams.reverse())
    }

    params.forEach((params, i) => addPlaceholder(i + (shouldAddAll ? 2 : 1), hkt.id, params))

    const tags = [
      FunctionSignature.tag,
      Interface.tag,
      TypeAlias.tag,
      Kind.tag,
    ] as readonly string[]

    const recurse = (node: AST) => {
      if (tags.includes(node.tag)) {
        findPlaceholders(node as any, context).forEach((map, i) =>
          map.forEach((params, id) => addPlaceholder(i, id, params)),
        )
      }

      return []
    }

    switch (ast.tag) {
      case FunctionSignature.tag: {
        recurse(ast.returnSignature)
        break
      }
      case Interface.tag: {
        if (Array.isArray(ast.properties)) {
          for (const prop of ast.properties) {
            recurse(prop.param)
          }
        } else {
          recurse(ast.properties as FunctionSignature)
        }

        break
      }
      case TypeAlias.tag: {
        recurse(ast.signature)
      }
    }
  }

  return placeholders
}
