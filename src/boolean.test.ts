import * as fc from 'fast-check'
import { describe } from 'vitest'

import * as L from './Law/index.js'
import { testAllDataLaws } from './Law/internal-test-all-laws.js'
import * as B from './boolean.js'

describe(import.meta.url, () => {
  testAllDataLaws({
    name: 'Boolean Instances',
    fc,
    Arbitrary: L.boolean,
    Eq: {
      boolean: B.Eq,
    },
    Ord: {
      boolean: B.Ord,
    },
    Associative: {
      All: [B.AssociativeAll, B.Eq],
      Any: [B.AssociativeAny, B.Eq],
    },
    Identity: {
      All: [B.All, B.Eq],
      Any: [B.Any, B.Eq],
    },
  })
})
