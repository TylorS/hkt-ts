import * as fc from 'fast-check'
import { describe } from 'vitest'

import * as L from './Law/index.js'
import { testAllDataLaws } from './Law/internal-test-all-laws.js'
import * as P from './Progress.js'

describe(import.meta.url, () => {
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
