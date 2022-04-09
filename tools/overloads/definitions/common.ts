import {
  FunctionParam,
  FunctionSignature,
  HKTParam,
  Interface,
  Kind,
  KindParam,
  Labeled,
  Static,
  TypeParam,
} from '../AST'

export const hkt = new HKTParam(Symbol('T'), 'T')
export const placeholder = hkt.toPlaceholder()
export const placeholderWithDefaults = hkt.toPlaceholder(true)

export const aTypeParam = new Static('A')
export const bTypeParam = new Static('B')
export const cTypeParam = new Static('C')
export const dTypeParam = new Static('D')

export const kind_ = (params: readonly KindParam[]) => new Kind(hkt, [placeholder, ...params])

export const kindWithDefaults_ = (params: readonly KindParam[]) =>
  new Kind(hkt, [placeholderWithDefaults, ...params])

export const fn_ = (
  name: string,
  typeParams: ReadonlyArray<TypeParam>,
  functionParams: ReadonlyArray<FunctionParam>,
  returnSignature: KindParam,
) => new FunctionSignature(name, typeParams, functionParams, returnSignature)

export const fnLabeled_ = (
  name: string,
  typeParams: ReadonlyArray<TypeParam>,
  functionParams: ReadonlyArray<FunctionParam>,
  returnSignature: KindParam,
) => fn_(name, typeParams, functionParams, returnSignature).labeled()

export const interface_ = (
  name: string,
  properties: readonly Labeled<KindParam>[],
  extensions: readonly (Interface | KindParam)[] = [],
) => new Interface(name, [hkt], properties, extensions)
