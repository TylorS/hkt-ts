import { CurriedPlacholder, HKTParam, HKTPlaceholder, Static } from '../AST'

export const hkt = new HKTParam('T')
export const placeholder = new HKTPlaceholder(hkt)
export const placeholderWithDefaults = new HKTPlaceholder(hkt, true)
export const curriedPlaceholder = new CurriedPlacholder(hkt)

export const aTypeParam = new Static('A')
export const bTypeParam = new Static('B')
export const cTypeParam = new Static('C')
export const dTypeParam = new Static('D')
