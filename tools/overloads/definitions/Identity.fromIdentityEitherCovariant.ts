import { Dynamic } from '../AST'

import { Covariant } from './Covariant'
import { IdentityEither } from './IdentityEither'
import { aTypeParam, derived_, fn_, kindWithDefaults_, placeholder } from './common'

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
