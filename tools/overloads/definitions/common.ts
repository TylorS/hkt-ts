import {
  FunctionParam,
  FunctionSignature,
  HKTCurriedPlaceholder,
  HKTParam,
  Interface,
  IntersectionNode,
  Kind,
  KindParam,
  Labeled,
  Static,
  TypeParam,
  Typeclass,
} from '../AST'

export const hkt = new HKTParam(Symbol('T'), 'T')
export const placeholder = hkt.toPlaceholder()
export const placeholderWithDefaults = hkt.toPlaceholder(true)

export const aTypeParam = new Static('A')
export const bTypeParam = new Static('B')
export const cTypeParam = new Static('C')
export const dTypeParam = new Static('D')

export const boolean_ = new Static(`boolean`)
export const number_ = new Static(`number`)
export const string_ = new Static(`string`)
export const null_ = new Static(`null`)
export const undefined_ = new Static(`undefined`)

export const kind_ = (params: readonly KindParam[]) => new Kind(hkt, [placeholder, ...params])

export const kindWithDefaults_ = (params: readonly KindParam[]) =>
  new Kind(hkt, [placeholderWithDefaults, ...params])

export const fn_ = (
  name: string,
  typeParams: ReadonlyArray<TypeParam>,
  functionParams: ReadonlyArray<FunctionParam>,
  returnSignature: KindParam,
) => new FunctionSignature(name, typeParams, functionParams, returnSignature)

export const derived_ = (
  name: string,
  is: readonly Interface[],
  returnSignature: KindParam,
  hktParam: HKTParam = hkt,
) => {
  const typeclasses = is.map((i) =>
    i
      .toTypeClass(hktParam)
      .setParams([
        ...i.typeParams.filter((x) => x.tag !== HKTCurriedPlaceholder.tag),
        curriedPlaceholder_(hktParam),
      ]),
  )
  const derivedName = is
    .map((i) =>
      Array.from(i.name)
        .filter((x) => x === x.toUpperCase())
        .join(''),
    )
    .join('')

  return new FunctionSignature(
    name,
    [hktParam, curriedPlaceholder_(hktParam)],
    [
      typeclasses.length > 1
        ? typeclasses
            .slice(1)
            .reduce(
              (acc, curr) => new IntersectionNode(acc, curr),
              typeclasses[0] as Typeclass | IntersectionNode,
            )
            .labeled(derivedName)
        : typeclasses[0].labeled(derivedName),
    ],
    returnSignature,
  )
}

export const fnLabeled_ = (
  name: string,
  typeParams: ReadonlyArray<TypeParam>,
  functionParams: ReadonlyArray<FunctionParam>,
  returnSignature: KindParam,
) => fn_(name, typeParams, functionParams, returnSignature).labeled()

export const fab_ = fnLabeled_('f', [], [aTypeParam.labeled('a')], bTypeParam)

export const curriedPlaceholder_ = (hkt: HKTParam, useDefaults?: boolean) =>
  new HKTCurriedPlaceholder(hkt, useDefaults)

export const interface_ = (
  name: string,
  properties: readonly Labeled<KindParam>[],
  extensions: readonly (Interface | KindParam)[] = [],
) => new Interface(name, [hkt, curriedPlaceholder_(hkt)], properties, extensions)

export const hktF = new HKTParam(Symbol('F'), 'F')
export const hktG = new HKTParam(Symbol('G'), 'G')
export const placeholderF = hktF.toPlaceholder()
export const placeholderG = hktG.toPlaceholder()

export const kindF_ = (params: readonly KindParam[]) => new Kind(hktF, [placeholderF, ...params])
export const kindFWithDefaults_ = (params: readonly KindParam[]) =>
  new Kind(hktF, [hktF.toPlaceholder(true), ...params])
export const kindG_ = (params: readonly KindParam[]) => new Kind(hktG, [placeholderG, ...params])

export const kindGWithDefaults_ = (params: readonly KindParam[]) =>
  new Kind(hktG, [hktG.toPlaceholder(true), ...params])

export const composed_ = (
  name: string,
  isF: readonly Interface[],
  isG: readonly Interface[],
  returnSignature: KindParam,
) => {
  const typeclassesF = isF.map((i) =>
    i
      .toTypeClass(hktF)
      .setParams([
        ...i.typeParams.filter((x) => x.tag !== HKTCurriedPlaceholder.tag),
        curriedPlaceholder_(hktF),
      ]),
  )
  const typeclassesG = isG.map((i) =>
    i
      .toTypeClass(hktG)
      .setParams([
        ...i.typeParams.filter((x) => x.tag !== HKTCurriedPlaceholder.tag),
        curriedPlaceholder_(hktG),
      ]),
  )

  return new FunctionSignature(
    name,
    [hktF, curriedPlaceholder_(hktF), hktG, curriedPlaceholder_(hktG)],
    [
      typeclassesF.length > 1
        ? typeclassesF
            .slice(1)
            .reduce(
              (acc, curr) => new IntersectionNode(acc, curr),
              typeclassesF[0] as Typeclass | IntersectionNode,
            )
            .labeled('F')
        : typeclassesF[0].labeled('F'),
      typeclassesG.length > 1
        ? typeclassesG
            .slice(1)
            .reduce(
              (acc, curr) => new IntersectionNode(acc, curr),
              typeclassesG[0] as Typeclass | IntersectionNode,
            )
            .labeled('G')
        : typeclassesG[0].labeled('G'),
    ],
    returnSignature,
  )
}
