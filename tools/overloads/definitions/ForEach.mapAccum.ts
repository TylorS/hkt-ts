import { Static, Tuple } from '../AST'

import { ForEach } from './ForEach'
import { aTypeParam, bTypeParam, fnLabeled_, fn_, hkt, kind_, placeholder } from './common'

const sTypeParam = new Static(`S`)

export const mapAccum = fn_(
  'mapAccum',
  [hkt],
  [ForEach.toTypeClass(hkt).labeled('FE')],
  fn_(
    '',
    [sTypeParam, aTypeParam, bTypeParam],
    [
      sTypeParam.labeled('s'),
      fnLabeled_(
        'f',
        [],
        [sTypeParam.labeled('s'), aTypeParam.labeled('a')],
        new Tuple([sTypeParam, bTypeParam]),
      ),
    ],
    fn_(
      '',
      [placeholder],
      [kind_([aTypeParam]).labeled()],
      new Tuple([sTypeParam, kind_([bTypeParam])]),
    ),
  ),
)

export const node = mapAccum
