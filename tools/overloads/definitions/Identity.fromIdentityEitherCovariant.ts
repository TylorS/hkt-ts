import { Dynamic, IntersectionNode } from '../AST'

import { Covariant } from './Covariant'
import { IdentityEither } from './IdentityEither'
import { aTypeParam, fn_, hkt, kindWithDefaults_, placeholder } from './common'

export const fromIdentityEitherCovariant = fn_(
  'fromIdentityEitherCovariant',
  [hkt],
  [
    new IntersectionNode(IdentityEither.toTypeClass(hkt), Covariant.toTypeClass(hkt)).labeled(
      'IEC',
    ),
  ],
  fn_(
    '',
    [placeholder, aTypeParam],
    [],
    new Dynamic([kindWithDefaults_([aTypeParam])], ([k]) => `Identity<${k}>`),
  ),
)
