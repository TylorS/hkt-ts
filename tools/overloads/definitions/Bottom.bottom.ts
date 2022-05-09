import { Static } from '../AST'

import { Bottom } from './Bottom'
import { Covariant } from './Covariant'
import { Top } from './Top'
import { composed_, kindFWithDefaults_, kindGWithDefaults_ } from './common'

export const bottom = composed_(
  'bottom',
  [Top, Covariant],
  [Bottom],
  kindFWithDefaults_([kindGWithDefaults_([new Static(`never`)])]),
)
