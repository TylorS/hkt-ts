import * as Data from './Data'
import * as Either from './Either'
import { HKT2, Kind_, Params } from './HKT'
import * as AB from './Typeclass/AssociativeBoth'
import * as AE from './Typeclass/AssociativeEither'
import * as AF from './Typeclass/AssociativeFlatten'
import * as BC from './Typeclass/Bicovariant'
import * as B from './Typeclass/Bottom'
import * as C from './Typeclass/Covariant'
import * as FE from './Typeclass/ForEach'
import * as FM from './Typeclass/FoldMap'
import * as IB from './Typeclass/IdentityBoth'
import * as IE from './Typeclass/IdentityEither'
import * as IF from './Typeclass/IdentityFlatten'
import * as T from './Typeclass/Top'

export type DataEither<E, A> = Kind_<[Data.DataHKT, Either.EitherHKT], [E, A]>

export interface DataEitherHKT extends HKT2 {
  readonly type: DataEither<this[Params.E], this[Params.A]>
}

export const bimap = BC.bimap(Data.Covariant, Either.Bicovariant)

export const Bicovariant: BC.Bicovariant2<DataEitherHKT> = {
  bimap,
}

export const map = BC.map(Bicovariant)
export const mapLeft = BC.mapLeft(Bicovariant)

export const Covariant: C.Covariant2<DataEitherHKT> = {
  map,
}

export const bindTo = C.bindTo(Covariant)
export const flap = C.flap(Covariant)
export const mapTo = C.mapTo(Covariant)
export const tupled = C.tupled(Covariant)

export const both = AB.both<Data.DataHKT, Either.EitherHKT>(
  { ...Data.AssociativeBoth, ...Data.Covariant },
  Either.AssociativeBoth,
)

export const AssociativeBoth: AB.AssociativeBoth2<DataEitherHKT> = {
  both,
}

export const zipLeft = AB.zipLeft<DataEitherHKT>({ ...AssociativeBoth, ...Covariant })
export const zipRight = AB.zipRight<DataEitherHKT>({ ...AssociativeBoth, ...Covariant })

export const either = AE.either<Data.DataHKT, Either.EitherHKT>(
  { ...Data.AssociativeFlatten, ...Data.Covariant },
  Either.AssociativeEither,
)

export const AssociativeEither: AE.AssociativeEither2<DataEitherHKT> = {
  either,
}

export const orElse = AE.orElse<DataEitherHKT>({ ...AssociativeEither, ...Covariant })
export const race = AE.tuple<DataEitherHKT>({ ...AssociativeEither, ...Covariant })

export const flatten = AF.flatten<Data.DataHKT, Either.EitherHKT>(
  { ...Data.IdentityBoth, ...Data.IdentityFlatten, ...Data.Covariant },
  { ...Either.Flatten, ...Either.ForEach },
)

export const Flatten: AF.AssociativeFlatten2<DataEitherHKT> = {
  flatten,
}

export const flatMap = AF.flatMap<DataEitherHKT>({ ...Flatten, ...Covariant })
export const bind = AF.bind<DataEitherHKT>({ ...Flatten, ...Covariant })

export const top = T.top<Data.DataHKT, Either.EitherHKT>(
  { ...Data.Top, ...Data.Covariant },
  Either.Top,
)

export const Top: T.Top2<DataEitherHKT> = {
  top,
}

export const Bottom: B.Bottom2<DataEitherHKT> = {
  bottom: Data.NoData,
}

export const IdentityBoth: IB.IdentityBoth2<DataEitherHKT> = {
  ...AssociativeBoth,
  ...Top,
}

export const tuple = IB.tuple<DataEitherHKT>({ ...IdentityBoth, ...Covariant })
export const struct = IB.struct<DataEitherHKT>({ ...IdentityBoth, ...Covariant })

export const IdentityEither: IE.IdentityEither2<DataEitherHKT> = {
  ...AssociativeEither,
  ...Bottom,
}

export const IdentityFlatten: IF.IdentityFlatten2<DataEitherHKT> = {
  ...Flatten,
  ...Top,
}

export const foldMap = FM.foldMap(Data.FoldMap, Either.FoldMap)

export const FoldMap: FM.FoldMap2<DataEitherHKT> = {
  foldMap,
}

export const forEach = FE.forEach(Data.ForEach, Either.ForEach)

export const ForEach: FE.ForEach2<DataEitherHKT> = {
  map,
  forEach,
}

export const foldLeft = FM.foldLeft(FoldMap)
export const contains = FM.contains(FoldMap)
export const count = FM.count(FoldMap)
export const exists = FM.exists(FoldMap)
export const find = FM.find(FoldMap)
export const reverse = FM.reverse<DataEitherHKT>({ ...FoldMap, ...ForEach })
export const every = FM.every(FoldMap)
export const some = FM.some(FoldMap)
export const groupBy = FM.groupBy(FoldMap)
export const intercalate = FM.intercalate(FoldMap)
export const isEmpty = FM.isEmpty(FoldMap)
export const isNonEmpty = FM.isNonEmpty(FoldMap)
