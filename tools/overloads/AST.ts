import type { Context } from './Context'

export type AST = FunctionParam | KindParam | ParentNode | TypeParam

export type ParentNode = FunctionSignature | Interface | TypeAlias

export type TypeParam =
  | Dynamic
  | HKTParam
  | HKTPlaceholder
  | Static
  | Typeclass
  | Labeled<KindParam>

export type KindParam =
  | ArrayNode
  | Dynamic
  | FunctionSignature
  | HKTParam
  | HKTPlaceholder
  | Kind
  | ObjectNode
  | Static
  | Tuple
  | Typeclass
  | IntersectionNode
  | UnionNode

export type FunctionParam = Labeled<KindParam>

export const ast = <T extends string>(tag: T) =>
  class Node {
    static tag = tag
    readonly tag = tag
    readonly id = Symbol(tag)
  }

export class Interface extends ast('Interface') {
  constructor(
    readonly name: string,
    readonly typeParams: ReadonlyArray<TypeParam>,
    readonly properties: ReadonlyArray<Labeled<KindParam>>,
    readonly extensions: ReadonlyArray<KindParam | Interface> = [],
  ) {
    super()
  }

  toTypeClass(hkt: HKTParam) {
    return new Typeclass(
      this.name,
      hkt,
      this.typeParams.filter((x) => x !== hkt),
    )
  }
}

export class TypeAlias extends ast('TypeAlias') {
  constructor(
    readonly name: string,
    readonly typeParams: ReadonlyArray<TypeParam>,
    readonly signature: KindParam,
  ) {
    super()
  }
}

export class FunctionSignature extends ast('FunctionSignature') {
  constructor(
    readonly name: string,
    readonly typeParams: ReadonlyArray<TypeParam>,
    readonly functionParams: ReadonlyArray<FunctionParam>,
    readonly returnSignature: KindParam,
  ) {
    super()
  }

  labeled(label: string = this.name) {
    return new Labeled(label, this)
  }
}

export class HKTParam {
  static tag = 'HKTParam' as const
  readonly tag = 'HKTParam' as const

  constructor(readonly id: symbol, readonly name: string, readonly size = 0) {}

  setSize(size: number) {
    return new HKTParam(this.id, this.name, size)
  }

  toPlaceholder(useDefaults = false) {
    return new HKTPlaceholder(this, useDefaults)
  }

  toTypeclass(name: string) {
    return new Typeclass(name, this, [])
  }

  toKind(kindParams: ReadonlyArray<KindParam>) {
    return new Kind(this, kindParams)
  }
}

export class HKTPlaceholder extends ast('HKTPlaceholder') {
  constructor(
    readonly type: HKTParam,
    readonly useDefaults: boolean = false,
    readonly extractFrom: string | null = null,
  ) {
    super()
  }

  extract(param: string) {
    return new HKTPlaceholder(this.type, this.useDefaults, param)
  }
}

export class Typeclass extends ast('Typeclass') {
  constructor(
    readonly name: string,
    readonly type: HKTParam,
    readonly params: readonly TypeParam[],
  ) {
    super()
  }

  setType(type: HKTParam) {
    return new Typeclass(this.name, type, this.params)
  }

  setParams(params: readonly TypeParam[]) {
    return new Typeclass(this.name, this.type, params)
  }

  labeled(label: string = this.name) {
    return new Labeled(label, this)
  }
}

export class Dynamic extends ast('Dynamic') {
  constructor(
    readonly params: readonly KindParam[],
    readonly template: (typeParams: readonly string[], context: Context) => string,
  ) {
    super()
  }

  labeled(label: string) {
    return new Labeled(label, this)
  }
}

export class Kind extends ast('Kind') {
  constructor(readonly type: HKTParam, readonly kindParams: ReadonlyArray<KindParam>) {
    super()
  }

  setType(type: HKTParam) {
    return new Kind(type, this.kindParams)
  }

  setParams(kindParams: ReadonlyArray<KindParam>) {
    return new Kind(this.type, kindParams)
  }

  labeled(label: string) {
    return new Labeled(label, this)
  }
}

export class Tuple extends ast('Tuple') {
  constructor(readonly members: ReadonlyArray<KindParam>) {
    super()
  }

  labeled(label: string) {
    return new Labeled(label, this)
  }
}

export class ArrayNode extends ast('Array') {
  constructor(readonly member: KindParam, readonly isNonEmpty = false) {
    super()
  }

  labeled(label: string) {
    return new Labeled(label, this)
  }

  nonEmpty() {
    return new ArrayNode(this.member, true)
  }
}

export class IntersectionNode extends ast('Intersection') {
  constructor(readonly left: KindParam, readonly right: KindParam) {
    super()
  }

  labeled(label: string) {
    return new Labeled(label, this)
  }
}

export class UnionNode extends ast('Union') {
  constructor(readonly left: KindParam, readonly right: KindParam) {
    super()
  }

  labeled(label: string) {
    return new Labeled(label, this)
  }
}

export class ObjectNode extends ast('Object') {
  constructor(readonly properties: readonly Labeled<KindParam>[]) {
    super()
  }

  setProperties(properties: readonly Labeled<KindParam>[]) {
    return new ObjectNode(properties)
  }

  labeled(label: string) {
    return new Labeled(label, this)
  }
}

export class Static extends ast('Static') {
  constructor(readonly type: string) {
    super()
  }

  labeled(label: string) {
    return new Labeled(label, new Static(this.type.split('extends')[0]))
  }
}

export class Labeled<P> extends ast('Labeled') {
  constructor(readonly label: string, readonly param: P) {
    super()
  }

  setKind<P>(kind: P) {
    return new Labeled(this.label, kind)
  }
}
