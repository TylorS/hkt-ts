import { Dynamic } from '../AST.js'

import { Covariant } from './Covariant.js'
import { IdentityEither } from './IdentityEither.js'
import { aTypeParam, derived_, fn_, kindWithDefaults_, placeholder } from './common.js'

export const fromIdentityEitherCovariant = derived_(
  'fromIdentityEitherCovariant',
  [IdentityEither, Covariant],
  fn_(
    '',
    [placeholder, aTypeParam],
    [],
    new Dynamic([kindWithDefaults_([aTypeParam])], ([k]) => `Identity<${k}>`),
  ),
)
