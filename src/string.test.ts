import * as fc from 'fast-check'
import { describe } from 'vitest'

import * as L from './Law/index.js'
import { testAllDataLaws } from './Law/internal-test-all-laws.js'
import * as S from './string.js'

describe(import.meta.url, () => {
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
