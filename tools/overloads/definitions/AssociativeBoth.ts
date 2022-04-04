import { FunctionSignature, Interface, Kind, Tuple } from '../AST'

import { node as Covariant } from './Covariant'
import { aTypeParam, bTypeParam, hkt, placeholder } from './common'

export const AssociativeBoth = new Interface(
  'AssociativeBoth',
  [hkt],
  [
    new FunctionSignature(
      '',
      [placeholder, bTypeParam],
      [new Kind(hkt, [placeholder, bTypeParam]).labeled('second')],
      new FunctionSignature(
        '',
        [aTypeParam],
        [new Kind(hkt, [placeholder, aTypeParam]).labeled('first')],
        new Kind(hkt, [placeholder, new Tuple([aTypeParam, bTypeParam])]),
      ),
    ).labeled('both'),
  ],
  [Covariant],
)

export const node = AssociativeBoth
