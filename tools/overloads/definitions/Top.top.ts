import { Static } from '../AST'

import { Covariant } from './Covariant'
import { Top } from './Top'
import { composed_, kindFWithDefaults_, kindGWithDefaults_ } from './common'

export const top = composed_(
  'top',
  [Top, Covariant],
  [Top],
  kindFWithDefaults_([kindGWithDefaults_([new Static(`unknown`)])]),
)
