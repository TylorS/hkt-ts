import * as fc from 'fast-check'

import * as L from './Law/index'
import { testAllDataLaws } from './Law/internal-test-all-laws.test'
import * as B from './boolean'

describe(__filename, () => {
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
