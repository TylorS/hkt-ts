import { pipe } from './Function.js'
import { AnyOf, Kind, TypeLambda } from './HKT.js'
import { Left, Right } from './Kind/Either.js'
import { Lazy } from './TypeClass/Kind/Lazy.js'
import { MonadRec } from './TypeClass/Kind/MonadRec.js'

export function makeDo<T extends TypeLambda>(M: MonadRec<T> & Lazy<T>) {
  return <Y extends AnyOf<T>, R>(
    f: ($: Lift<T>) => Generator<Y, R>,
  ): Kind<
    T,
    Kind.InOut3Of<T, Y>,
    Kind.InOut2Of<T, Y>,
    Kind.InOut1Of<T, Y>,
    Kind.In3Of<T, Y>,
    Kind.In2Of<T, Y>,
    Kind.In1Of<T, Y>,
    Kind.Out6Of<T, Y>,
    Kind.Out5Of<T, Y>,
    Kind.Out4Of<T, Y>,
    Kind.Out3Of<T, Y>,
    Kind.Out2Of<T, Y>,
    R
  > =>
    M.lazy(() => {
      const gen = f(lift as Lift<T>)

      return runGenerator(M, gen, gen.next())
    })
}

export type Lift<T extends TypeLambda> = <
  InOut3,
  InOut2,
  InOut1,
  In3,
  In2,
  In1,
  Out6,
  Out5,
  Out4,
  Out3,
  Out2,
  Out1,
>(
  kind: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, Out1>,
) => Generator<typeof kind, Out1, Out1>

const runGenerator = <T extends TypeLambda, Y extends AnyOf<T>, R>(
  M: MonadRec<T> & Lazy<T>,
  gen: Generator<Y, R>,
  result: IteratorResult<Y, R>,
): Kind<
  T,
  Kind.InOut3Of<T, Y>,
  Kind.InOut2Of<T, Y>,
  Kind.InOut1Of<T, Y>,
  Kind.In3Of<T, Y>,
  Kind.In2Of<T, Y>,
  Kind.In1Of<T, Y>,
  Kind.Out6Of<T, Y>,
  Kind.Out5Of<T, Y>,
  Kind.Out4Of<T, Y>,
  Kind.Out3Of<T, Y>,
  Kind.Out2Of<T, Y>,
  R
> => {
  const of = <A>(value: A) =>
    pipe(
      M.top<Kind.InOut3Of<T, Y>, Kind.InOut2Of<T, Y>, Kind.InOut1Of<T, Y>>(),
      M.map(() => value),
    )

  if (result.done) {
    return of(result.value)
  }

  return pipe(
    result.value,
    M.map(
      M.flattenRec<any, any, any, any, any, any, any, any, any, any, any, any, any>((a) => {
        const result = gen.next(a)

        return result.done ? of(Right(result.value)) : M.map(Left)(result.value)
      }),
    ),
    M.flatten,
  )
}

export function* lift<T extends TypeLambda, U extends AnyOf<T>>(
  kind: U,
): Generator<U, Kind.Out1Of<T, U>, any> {
  return yield kind
}
