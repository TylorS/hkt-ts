import * as fc from 'fast-check'

import * as L from './Law/index'
import { testAllDataLaws } from './Law/internal-test-all-laws.test'
import * as N from './number'

describe(__filename, () => {
  testAllDataLaws({
    name: 'Number Instances',
    fc,
    Arbitrary: L.number({ min: -10000, max: 10000 }),
    Eq: {
      number: N.Eq,
    },
    Ord: {
      number: N.Ord,
    },
    Associative: {
      Sum: [N.AssociativeSum, N.Eq],
      Product: [N.AssociativeProduct, N.Eq],
    },
    Commutative: {
      Sum: [N.CommutativeSum, N.Eq],
      Product: [N.CommutativeProduct, N.Eq],
    },
    Identity: {
      Sum: [N.IdentitySum, N.Eq],
      Product: [N.IdentityProduct, N.Eq],
    },
    Inverse: {
      Sum: [N.Inverse, N.Eq],
    },
  })
})
