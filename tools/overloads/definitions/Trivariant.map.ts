import { Trivariant } from './Trivariant.js'
import {
  aTypeParam,
  bTypeParam,
  cTypeParam,
  dTypeParam,
  derived_,
  fab_,
  fn_,
  kind_,
  placeholder,
} from './common.js'

export const map = derived_(
  'map',
  [Trivariant],
  fn_(
    '',
    [aTypeParam, bTypeParam],
    [fab_],
    fn_(
      '',
      [placeholder, cTypeParam, dTypeParam],
      [kind_([cTypeParam, dTypeParam, aTypeParam]).labeled()],
      kind_([cTypeParam, dTypeParam, bTypeParam]),
    ),
  ),
)
