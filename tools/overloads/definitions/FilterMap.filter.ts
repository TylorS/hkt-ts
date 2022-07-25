import { Dynamic, Static } from '../AST.js'

import { FilterMap } from './FilterMap.js'
import { aTypeParam, bTypeParam, derived_, fn_, kind_, placeholder } from './common.js'

const pred = fn_(
  '',
  [aTypeParam],
  [new Static(`Predicate<A>`).labeled('predicate')],
  fn_('', [placeholder], [kind_([aTypeParam]).labeled('kind')], kind_([aTypeParam])),
)

const refine = fn_(
  '',
  [aTypeParam, new Static(`B extends A`)],
  [new Static(`Refinement<A, B>`).labeled('refinement')],
  fn_('', [placeholder], [kind_([aTypeParam]).labeled('kind')], kind_([bTypeParam])),
)

export const filter = derived_(
  'filter',
  [FilterMap],
  new Dynamic(
    [pred, refine],
    ([p, r]) => `{\n  ${printOverloadFunction(r)}\n  ${printOverloadFunction(p)}}`,
  ),
)

function printOverloadFunction(f: string) {
  const i = f.indexOf('=>')

  return f.slice(0, i).trim() + `: ` + f.slice(i + 2).trim()
}

export const node = filter
