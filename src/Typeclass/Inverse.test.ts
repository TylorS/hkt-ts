import { deepStrictEqual } from 'node:assert'

import { InverseAll, InverseAny } from '../boolean.js'
import { Inverse } from '../number.js'

import { multiply } from './Inverse.js'

describe(__filename, () => {
  describe(multiply.name, () => {
    it('allows multiplying a value', () => {
      deepStrictEqual(multiply(Inverse)(2, 2), 4)
      deepStrictEqual(multiply(Inverse)(2, -2), -4)

      deepStrictEqual(multiply(InverseAll)(true, 2), true, 'InverseAll :: true * 2 = true')
      deepStrictEqual(multiply(InverseAll)(true, -1), false, 'InverseAll :: true * -1 = false')
      deepStrictEqual(multiply(InverseAll)(false, 2), false, 'InverseAll :: false * 2 = false')
      deepStrictEqual(multiply(InverseAll)(false, 1), false, 'InverseAll :: false * 1 = false')
      deepStrictEqual(multiply(InverseAll)(false, -1), true, 'InverseAll :: false * -1 = true')

      deepStrictEqual(multiply(InverseAny)(true, 2), true, 'InverseAny :: true * 2 = true')
      deepStrictEqual(multiply(InverseAny)(true, -1), false, 'InverseAny :: true * -1 = false')
      deepStrictEqual(multiply(InverseAny)(false, 2), false, 'InverseAny :: false * 2 = false')
      deepStrictEqual(multiply(InverseAny)(false, 1), false, 'InverseAny :: false * 1 = false')
      deepStrictEqual(multiply(InverseAny)(false, -1), true, 'InverseAny :: false * -1 = true')
    })
  })
})
