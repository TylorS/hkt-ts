import {
  aTypeParam,
  fnLabeled_,
  interface_,
  kindWithDefaults_,
  placeholderWithDefaults,
} from './common'

export const node = interface_('Zero', [
  fnLabeled_('zero', [aTypeParam, placeholderWithDefaults], [], kindWithDefaults_([aTypeParam])),
])

export const Zero = node
