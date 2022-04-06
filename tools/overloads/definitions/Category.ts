import { node as AssociativeCompose } from './AssociativeCompose'
import {
  aTypeParam,
  fnLabeled_,
  interface_,
  kindWithDefaults_,
  placeholderWithDefaults,
} from './common'

export const node = interface_(
  'Category',
  [fnLabeled_('id', [aTypeParam, placeholderWithDefaults], [], kindWithDefaults_([aTypeParam]))],
  [AssociativeCompose],
)

export const Category = node
