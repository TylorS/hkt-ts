import { ObjectNode, Static } from '../../AST.js'
import { curriedPlaceholder_, fn_, hkt } from '../common.js'

export const testAllHKTLaws = fn_(
  'testAllHKTLaws',
  [hkt, curriedPlaceholder_(hkt)],
  [
    new ObjectNode([
      new Static(`typeof import('fast-check')`).labeled('fc'),
      new Static(`typeof import('fast-check')`).labeled('fc'),
      new Static(`typeof import('fast-check')`).labeled('fc'),
    ]).labeled('params'),
  ],
  new Static(`void`),
)
