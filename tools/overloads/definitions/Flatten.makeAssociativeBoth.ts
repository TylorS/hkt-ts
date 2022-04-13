import { Typeclass } from '../AST'

import { fn_, hkt } from './common'

export const makeAssociativeBoth = fn_(
  'makeAssociativeBoth',
  [hkt],
  [new Typeclass('Flatten', hkt).labeled('F')],
  new Typeclass('AssociativeBoth', hkt),
)

export const node = makeAssociativeBoth
