import { Interface, Static } from '../AST'

import { NaturalTransformation } from './NaturalTransformation'
import { curriedPlaceholder_, hktF } from './common'

export const FromMaybe = new Interface(
  `FromMaybe`,
  [hktF, curriedPlaceholder_(hktF)],
  [
    NaturalTransformation.toTypeClass(hktF)
      .setParams([curriedPlaceholder_(hktF), new Static(`Maybe.MaybeHKT`)])
      .labeled(`fromOption`),
  ],
)
