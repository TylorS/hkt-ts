import type { Context } from './Context'

export type AST = FunctionParam | KindParam | ParentNode | TypeParam

export type ParentNode = FunctionSignature | Interface | TypeAlias

export type TypeParam = Dynamic | HKTParam | HKTPlaceholder | Static | Typeclass

export type KindParam =
  | Dynamic
  | FunctionSignature
  | HKTParam
  | HKTPlaceholder
  | Kind
  | ObjectNode
  | Static
  | Tuple
  | Typeclass

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
    return new Typeclass(this.name, hkt)
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

  labeled(label: string) {
    return new Labeled(label, this)
  }
}

export class HKTParam extends ast('HKTParam') {
  constructor(readonly name: string, readonly size = 0) {
    super()
  }

  setSize(size: number) {
    return new HKTParam(this.name, size)
  }

  toPlaceholder(useDefaults = false) {
    return new HKTPlaceholder(this, useDefaults)
  }

  toTypeclass(name: string) {
    return new Typeclass(name, this)
  }

  toKind(kindParams: ReadonlyArray<KindParam>) {
    return new Kind(this, kindParams)
  }
}

export class HKTPlaceholder extends ast('HKTPlaceholder') {
  constructor(readonly type: HKTParam, readonly useDefaults: boolean = false) {
    super()
  }
}

export class Typeclass extends ast('Typeclass') {
  constructor(readonly name: string, readonly type: HKTParam) {
    super()
  }

  setType(type: HKTParam) {
    return new Typeclass(this.name, type)
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
    return new Labeled(label, this)
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
