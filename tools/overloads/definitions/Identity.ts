import { Interface } from '../AST'

import { aTypeParam } from './common'

export const node = new Interface('Identity', [aTypeParam], [aTypeParam.labeled('id')])

export const Identity = node
