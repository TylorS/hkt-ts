import * as fc from 'fast-check'

import * as L from './Law/index'
import { testAllDataLaws } from './Law/internal-test-all-laws.test'
import * as S from './string'

describe(__filename, () => {
  testAllDataLaws({
    name: 'String Instances',
    fc,
    Arbitrary: L.string(),
    Eq: {
      string: S.Eq,
    },
    Ord: {
      string: S.Ord,
    },
    Associative: {
      string: [S.Associative, S.Eq],
    },
    Identity: {
      string: [S.Identity, S.Eq],
    },
  })
})
