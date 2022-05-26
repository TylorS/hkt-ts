import { HKT, Kind, Params } from '../HKT'
import * as AB from '../Typeclass/AssociativeBoth'
import { Covariant, map } from '../Typeclass/Covariant'
import { Eq } from '../Typeclass/Eq'
import * as FE from '../Typeclass/ForEach/index'
import * as IB from '../Typeclass/IdentityBoth'
import * as T from '../Typeclass/Top'
import { pipe } from '../function'

import * as Arbitrary from './Arbitrary'

export function testForEach<T extends HKT, T2 extends HKT, T3 extends HKT, A>(
  FE: FE.ForEach<T>,
  IBC1: IB.IdentityBoth<T2> & Covariant<T2>,
  IBC2: IB.IdentityBoth<T3> & Covariant<T3>,
  E: Eq<Kind<T2, Kind<T, A>>>,
  E2: Eq<Kind<T2, Kind<T3, A>>>,
) {
  return (A: Arbitrary.Arbitrary<Kind<T, A>>) => (fc: typeof import('fast-check')) => ({
    identity: () => testForEachIdentity(FE, IBC1, E)(A).property(fc),
    associativity: () => testForEachAssociativity(FE, IBC1, IBC2, E2)(A).property(fc),
  })
}

function testForEachIdentity<T extends HKT, T2 extends HKT, A>(
  FE: FE.ForEach<T>,
  IBC: IB.IdentityBoth<T2> & Covariant<T2>,
  E: Eq<Kind<T2, Kind<T, A>>>,
) {
  return (A: Arbitrary.Arbitrary<Kind<T, A>>) =>
    pipe(
      A,
      Arbitrary.toProperty((kind) => {
        const l = FE.forEach(IBC)(T.makeFromValue(IBC))(kind)
        const r = T.makeFromValue(IBC)(kind)

        return E.equals(l, r)
      }),
    )
}

function testForEachAssociativity<T extends HKT, T2 extends HKT, T3 extends HKT, A>(
  FE: FE.ForEach<T>,
  IBC: IB.IdentityBoth<T2> & Covariant<T2>,
  IBC2: IB.IdentityBoth<T3> & Covariant<T3>,
  E: Eq<Kind<T2, Kind<T3, A>>>,
) {
  return (A: Arbitrary.Arbitrary<Kind<T, A>>) => {
    const both_ = AB.both<T2, T3>(IBC, IBC2)
    const top_ = T.top<T2, T3>(IBC, IBC2)
    const map_ = map<T2, T3>(IBC, IBC2)
    interface HKT_ extends HKT {
      readonly type: Kind<T2, Kind<T3, this[Params.A]>>
    }
    const IBC_: IB.IdentityBoth<HKT_> & Covariant<HKT_> = {
      map: map_,
      both: both_,
      top: top_,
    }

    return pipe(
      A,
      Arbitrary.toProperty((kind) =>
        E.equals(
          pipe(kind, FE.forEach(IBC_)(T.makeFromValue<HKT_>(IBC_))),
          pipe(
            kind,
            FE.forEach(IBC)(T.makeFromValue(IBC)),
            IBC.map(FE.forEach(IBC2)(T.makeFromValue(IBC2))),
          ),
        ),
      ),
    )
  }
}
