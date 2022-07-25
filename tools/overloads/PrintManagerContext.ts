import { FunctionSignature, Interface, ParentNode, TypeAlias } from './AST.js'

export type PrintContext = {
  parentNodes: ParentNode[]
  contextStack: CurrentContext[]
}

export type CurrentContext =
  | 'TypeParam'
  | 'Property'
  | 'FunctionParam'
  | 'Return'
  | 'Extension'
  | 'Kind'
  | 'Array'

export class PrintContextManager {
  context: PrintContext
  recursive = false

  constructor() {
    this.context = {
      parentNodes: [],
      contextStack: [],
    }
  }

  clone() {
    const manager = new PrintContextManager()

    manager.recursive = true
    manager.context = {
      parentNodes: this.context.parentNodes.slice(0),
      contextStack: this.context.contextStack.slice(0),
    }

    return manager
  }

  addParentNode(node: ParentNode) {
    this.context.parentNodes.push(node)
  }

  popParentNode() {
    return this.context.parentNodes.pop()
  }

  addContext(currentContext: CurrentContext) {
    this.context.contextStack.push(currentContext)
  }

  popContext() {
    return this.context.contextStack.pop()
  }

  isWithinInterface(): boolean {
    return !!this.context.parentNodes.find((x) => x.tag === Interface.tag)
  }

  isWithinFunction(): boolean {
    return !!this.context.parentNodes.find((x) => x.tag === FunctionSignature.tag)
  }

  isWithinTypeAlias(): boolean {
    return !!this.context.parentNodes.find((x) => x.tag === TypeAlias.tag)
  }

  isWithinExtension(): boolean {
    return !!this.context.contextStack.find((x) => x === 'Extension')
  }

  isWithinReturn(): boolean {
    return !!this.context.contextStack.find((x) => x === 'Return')
  }

  isWithinProperty(): boolean {
    return !!this.context.contextStack.find((x) => x === 'Property')
  }

  isWithinTypeParam(): boolean {
    return !!this.context.contextStack.find((x) => x === 'TypeParam')
  }

  isWithinFunctionParam(): boolean {
    return !!this.context.contextStack.find((x) => x === 'FunctionParam')
  }

  isWithinKind(): boolean {
    return !!this.context.contextStack.find((x) => x === 'Kind')
  }

  isWithinArray(): boolean {
    return !!this.context.contextStack.find((x) => x === 'Array')
  }

  shouldPrintFunctionName(): boolean {
    return !this.isWithinReturn() && !this.isWithinProperty() && !this.isWithinFunctionParam()
  }

  shouldUseColon(): boolean {
    if (this.recursive) {
      this.recursive = false

      return true
    }

    return (
      !this.isWithinProperty() &&
      !this.isWithinReturn() &&
      !this.isWithinExtension() &&
      !this.isWithinFunctionParam()
    )
  }

  getParentNode() {
    return this.context.parentNodes[this.context.parentNodes.length - 1]
  }

  getCurrentContext() {
    return this.context.contextStack[this.context.contextStack.length - 1]
  }
}
