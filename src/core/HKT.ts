import * as _ from '@fp-ts/core/HKT'

/**
 * An extended version of fp-ts' TypeLambda with an additional
 * 2 invariant, 2 contravariant, and 3 covariant type parameters.
 * This comes with added verbosity, but allows for more complex signatures.
 * All FP-TS type classes are inherently compatible with all TypeClasses defined
 * in hkt-ts, but not the other way around if the additional parameters are utilized.
 */
export interface TypeLambda extends _.TypeLambda {
  readonly InOut3?: unknown
  readonly InOut2?: unknown

  readonly In3?: unknown
  readonly In2?: unknown

  readonly Out6?: unknown
  readonly Out5?: unknown
  readonly Out4?: unknown
}

export type Kind<
  F extends TypeLambda,
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
> = F extends {
  readonly type: unknown
}
  ? (F & {
      readonly InOut3: InOut3
      readonly InOut2: InOut2
      readonly InOut1: InOut1
      readonly In3: In3
      readonly In2: In2
      readonly In1: In1
      readonly Out6: Out6
      readonly Out5: Out5
      readonly Out4: Out4
      readonly Out3: Out3
      readonly Out2: Out2
      readonly Out1: Out1
    })['type']
  : {
      readonly F: F
      readonly InOut3: (_: InOut3) => InOut3
      readonly InOut2: (_: InOut2) => InOut2
      readonly InOut1: (_: InOut1) => InOut1
      readonly In3: (_: In3) => void
      readonly In2: (_: In2) => void
      readonly In1: (_: In1) => void
      readonly Out6: () => Out6
      readonly Out5: () => Out5
      readonly Out4: () => Out4
      readonly Out3: () => Out3
      readonly Out2: () => Out2
      readonly Out1: () => Out1
    }

export interface TypeClass<F extends TypeLambda> extends _.TypeClass<F> {}

export { URI } from '@fp-ts/core/HKT'
