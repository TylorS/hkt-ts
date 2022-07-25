import * as fc from 'fast-check'

import * as L from './Law/index.js'
import { testAllDataLaws } from './Law/internal-test-all-laws.test.js'
import * as N from './number.js'

describe(__filename, () => {
  testAllDataLaws({
    name: 'Number Instances',
    fc,
    // Only constrained because really large numbers used in multiplication w/ JavaScript aren't exactly deterministic
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
