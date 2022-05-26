import * as fc from 'fast-check'

import * as L from './Law/index'
import { testAllDataLaws } from './Law/internal-test-all-laws.test'
import * as P from './Progress'

describe(__filename, () => {
  testAllDataLaws({
    name: `Progress Instances`,
    fc,
    Arbitrary: L.Progress,
    Associative: {
      Progress: [P.Associative, P.Eq],
    },
    Commutative: {
      Progress: [P.Commutative, P.Eq],
    },
    Identity: {
      Progress: [P.Identity, P.Eq],
    },
    Eq: {
      Progress: P.Eq,
    },
    Ord: {
      Progress: P.Ord,
    },
  })
})
