import { Static } from '../AST.js'

import { Bottom } from './Bottom.js'
import { Covariant } from './Covariant.js'
import { Top } from './Top.js'
import { composed_, kindFWithDefaults_, kindGWithDefaults_ } from './common.js'

export const bottom = composed_(
  'bottom',
  [Top, Covariant],
  [Bottom],
  kindFWithDefaults_([kindGWithDefaults_([new Static(`never`)])]),
)
