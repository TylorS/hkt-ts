import { Static } from '../AST.js'

import { Covariant } from './Covariant.js'
import { Top } from './Top.js'
import { composed_, kindFWithDefaults_, kindGWithDefaults_ } from './common.js'

export const top = composed_(
  'top',
  [Top, Covariant],
  [Top],
  kindFWithDefaults_([kindGWithDefaults_([new Static(`unknown`)])]),
)
