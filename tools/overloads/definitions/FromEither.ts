import { Interface, Static } from '../AST'

import { NaturalTransformation } from './NaturalTransformation'
import { curriedPlaceholder_, hktF } from './common'

export const FromEither = new Interface(
  `FromEither`,
  [hktF, curriedPlaceholder_(hktF)],
  [
    NaturalTransformation.toTypeClass(hktF)
      .setParams([curriedPlaceholder_(hktF), new Static(`Either.EitherHKT`)])
      .labeled(`fromEither`),
  ],
)
