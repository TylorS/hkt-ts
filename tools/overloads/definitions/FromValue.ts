import {
  aTypeParam,
  fnLabeled_,
  interface_,
  kindWithDefaults_,
  placeholderWithDefaults,
} from './common'

export const node = interface_('FromValue', [
  fnLabeled_(
    'fromValue',
    [aTypeParam, placeholderWithDefaults],
    [aTypeParam.labeled('a')],
    kindWithDefaults_([aTypeParam]),
  ),
])

export const FromValue = node
