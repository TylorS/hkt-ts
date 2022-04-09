import { HKTParam, ParentNode, TypeParam } from './AST'

export function findHKTParams(node: ParentNode) {
  return node.typeParams.filter(isHKTParam)
}

export function isHKTParam(param: TypeParam): param is HKTParam {
  return param.tag === HKTParam.tag
}
