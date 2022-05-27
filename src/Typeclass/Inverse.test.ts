import { deepStrictEqual } from 'assert'

import { InverseAll, InverseAny } from '../boolean'
import { Inverse } from '../number'

import { multiply } from './Inverse'

describe(__filename, () => {
  describe(multiply.name, () => {
    it('allows multiplying a value', () => {
      deepStrictEqual(multiply(Inverse)(2, 2), 4)
      deepStrictEqual(multiply(Inverse)(2, -2), -4)
      deepStrictEqual(multiply(InverseAll)(true, 2), true)
      deepStrictEqual(multiply(InverseAll)(false, 2), false)
      deepStrictEqual(multiply(InverseAny)(true, 2), true)
      deepStrictEqual(multiply(InverseAny)(false, 2), false)
    })
  })
})
