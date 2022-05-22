import { HKT, Kind } from '../HKT'
import * as FE from '../Typeclass/ForEach'

import { Arbitrary } from './Arbitrary'

export function testForEach<T extends HKT, A>(FE: FE.ForEach<T>) {
  return (A: Arbitrary<Kind<T, A>>) => (fc: typeof import('fast-check')) => ({})
}

function testForEachNaturality<T extends HKT, A>(FE: FE.ForEach<T>) {}

function testForEachIdentity<T extends HKT, A>(FE: FE.ForEach<T>) {}

function testForEachAssociativity<T extends HKT, A>(FE: FE.ForEach<T>) {}
