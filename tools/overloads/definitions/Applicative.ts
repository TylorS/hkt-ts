import { AssociativeBoth } from './AssociativeBoth'
import { FromValue } from './FromValue'
import { interface_ } from './common'

export const Applicative = interface_('Applicative', [], [FromValue, AssociativeBoth])

export const node = Applicative
