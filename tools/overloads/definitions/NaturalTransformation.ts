import { Interface } from '../AST'

import {
  aTypeParam,
  curriedPlaceholder_,
  fnLabeled_,
  hktF,
  hktG,
  kindF_,
  kindG_,
  placeholderF,
  placeholderG,
} from './common'

export const NaturalTransformation = new Interface(
  'NaturalTransformation',
  [hktF, curriedPlaceholder_(hktF), hktG, curriedPlaceholder_(hktG)],
  [
    fnLabeled_(
      'naturalTransformation',
      [placeholderF, aTypeParam, placeholderG],
      [kindF_([aTypeParam]).labeled()],
      kindG_([aTypeParam]),
    ),
  ],
)
