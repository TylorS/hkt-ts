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

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Kind {
  /* eslint-disable @typescript-eslint/no-unused-vars */

  export type Out1Of<T extends TypeLambda, U> = [U] extends [
    Kind<
      T,
      infer _InOut3,
      infer _InOut2,
      infer _InOut1,
      infer _In3,
      infer _In2,
      infer _In1,
      infer _Out6,
      infer _Out5,
      infer _Out4,
      infer _Out3,
      infer _Out2,
      infer Out1
    >,
  ]
    ? Out1
    : never

  export type Out2Of<T extends TypeLambda, U> = [U] extends [
    Kind<
      T,
      infer _InOut3,
      infer _InOut2,
      infer _InOut1,
      infer _In3,
      infer _In2,
      infer _In1,
      infer _Out6,
      infer _Out5,
      infer _Out4,
      infer _Out3,
      infer Out2,
      infer _Out1
    >,
  ]
    ? Out2
    : never

  export type Out3Of<T extends TypeLambda, U> = [U] extends [
    Kind<
      T,
      infer _InOut3,
      infer _InOut2,
      infer _InOut1,
      infer _In3,
      infer _In2,
      infer _In1,
      infer _Out6,
      infer _Out5,
      infer _Out4,
      infer Out3,
      infer _Out2,
      infer _Out1
    >,
  ]
    ? Out3
    : never

  export type Out4Of<T extends TypeLambda, U> = [U] extends [
    Kind<
      T,
      infer _InOut3,
      infer _InOut2,
      infer _InOut1,
      infer _In3,
      infer _In2,
      infer _In1,
      infer _Out6,
      infer _Out5,
      infer Out4,
      infer _Out3,
      infer _Out2,
      infer _Out1
    >,
  ]
    ? Out4
    : never

  export type Out5Of<T extends TypeLambda, U> = [U] extends [
    Kind<
      T,
      infer _InOut3,
      infer _InOut2,
      infer _InOut1,
      infer _In3,
      infer _In2,
      infer _In1,
      infer _Out6,
      infer Out5,
      infer _Out4,
      infer _Out3,
      infer _Out2,
      infer _Out1
    >,
  ]
    ? Out5
    : never

  export type Out6Of<T extends TypeLambda, U> = [U] extends [
    Kind<
      T,
      infer _InOut3,
      infer _InOut2,
      infer _InOut1,
      infer _In3,
      infer _In2,
      infer _In1,
      infer Out6,
      infer _Out5,
      infer _Out4,
      infer _Out3,
      infer _Out2,
      infer _Out1
    >,
  ]
    ? Out6
    : never

  export type In1Of<T extends TypeLambda, U> = [U] extends [
    Kind<
      T,
      infer _InOut3,
      infer _InOut2,
      infer _InOut1,
      infer _In3,
      infer _In2,
      infer In1,
      infer _Out6,
      infer _Out5,
      infer _Out4,
      infer _Out3,
      infer _Out2,
      infer _Out1
    >,
  ]
    ? In1
    : never

  export type In2Of<T extends TypeLambda, U> = [U] extends [
    Kind<
      T,
      infer _InOut3,
      infer _InOut2,
      infer _InOut1,
      infer _In3,
      infer In2,
      infer _In1,
      infer _Out6,
      infer _Out5,
      infer _Out4,
      infer _Out3,
      infer _Out2,
      infer _Out1
    >,
  ]
    ? In2
    : never

  export type In3Of<T extends TypeLambda, U> = [U] extends [
    Kind<
      T,
      infer _InOut3,
      infer _InOut2,
      infer _InOut1,
      infer In3,
      infer _In2,
      infer _In1,
      infer _Out6,
      infer _Out5,
      infer _Out4,
      infer _Out3,
      infer _Out2,
      infer _Out1
    >,
  ]
    ? In3
    : never

  export type InOut1Of<T extends TypeLambda, U> = [U] extends [
    Kind<
      T,
      infer _InOut3,
      infer _InOut2,
      infer InOut1,
      infer _In3,
      infer _In2,
      infer _In1,
      infer _Out6,
      infer _Out5,
      infer _Out4,
      infer _Out3,
      infer _Out2,
      infer _Out1
    >,
  ]
    ? InOut1
    : never

  export type InOut2Of<T extends TypeLambda, U> = [U] extends [
    Kind<
      T,
      infer _InOut3,
      infer InOut2,
      infer _InOut1,
      infer _In3,
      infer _In2,
      infer _In1,
      infer _Out6,
      infer _Out5,
      infer _Out4,
      infer _Out3,
      infer _Out2,
      infer _Out1
    >,
  ]
    ? InOut2
    : never

  export type InOut3Of<T extends TypeLambda, U> = [U] extends [
    Kind<
      T,
      infer InOut3,
      infer _InOut2,
      infer _InOut1,
      infer _In3,
      infer _In2,
      infer _In1,
      infer _Out6,
      infer _Out5,
      infer _Out4,
      infer _Out3,
      infer _Out2,
      infer _Out1
    >,
  ]
    ? InOut3
    : never
  /* eslint-enable @typescript-eslint/no-unused-vars */
}

export interface TypeClass<T extends TypeLambda> extends HKT.TypeClass<T> {}

export type BottomOf<T extends TypeLambda> = Kind<
  T,
  unknown,
  unknown,
  unknown,
  unknown,
  unknown,
  unknown,
  never,
  never,
  never,
  never,
  never,
  never
>

export type AnyOf<T extends TypeLambda> = Kind<
  T,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any
>
