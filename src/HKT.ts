import * as HKT from 'fp-ts/HKT'

/**
 * Extends fp-ts TypeLambda with additional Invariant, Contravariant, and
 * Covariant parameters.
 */
export interface TypeLambda extends HKT.TypeLambda {
  // Invariant Parameters
  readonly InOut3?: unknown
  readonly InOut2?: unknown

  // Contravariant Parameters
  readonly In3?: unknown
  readonly In2?: unknown

  // Covariant Parameters
  readonly Out6?: unknown
  readonly Out5?: unknown
  readonly Out4?: unknown
}

export type Kind<
  T extends TypeLambda,
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
> = T extends { readonly type: unknown }
  ? (T & {
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
      readonly [HKT.URI]: T
      readonly InOut3: InOut3
      readonly InOut2: InOut2
      readonly InOut1: InOut1
      readonly In3: (in3: In3) => never
      readonly In2: (in2: In2) => never
      readonly In1: (in1: In1) => never
      readonly Out6: () => Out6
      readonly Out5: () => Out5
      readonly Out4: () => Out4
      readonly Out3: () => Out3
      readonly Out2: () => Out2
      readonly Out1: () => Out1
    }

export interface TypeClass<T extends TypeLambda> extends HKT.TypeClass<T> {}
