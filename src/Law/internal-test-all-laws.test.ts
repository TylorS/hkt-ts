import { HKT, HKT2, Kind, Kind2 } from '../HKT'
import { Associative } from '../Typeclass/Associative'
import {
  AssociativeBoth,
  AssociativeBoth1,
  AssociativeBoth2,
  AssociativeBoth2EC,
} from '../Typeclass/AssociativeBoth'
import {
  AssociativeEither,
  AssociativeEither1,
  AssociativeEither2,
  AssociativeEither2EC,
} from '../Typeclass/AssociativeEither'
import {
  AssociativeFlatten,
  AssociativeFlatten1,
  AssociativeFlatten2,
  AssociativeFlatten2EC,
} from '../Typeclass/AssociativeFlatten'
import { Commutative } from '../Typeclass/Commutative'
import { Covariant, Covariant1, Covariant2, Covariant2EC } from '../Typeclass/Covariant'
import { DeepEquals, Eq } from '../Typeclass/Eq'
import { Identity } from '../Typeclass/Identity'
import {
  IdentityBoth,
  IdentityBoth1,
  IdentityBoth2,
  IdentityBoth2EC,
} from '../Typeclass/IdentityBoth'
import {
  IdentityEither,
  IdentityEither1,
  IdentityEither2,
  IdentityEither2EC,
} from '../Typeclass/IdentityEither'
import {
  IdentityFlatten,
  IdentityFlatten1,
  IdentityFlatten2,
  IdentityFlatten2EC,
} from '../Typeclass/IdentityFlatten'
import { Inverse } from '../Typeclass/Inverse'
import { Ord } from '../Typeclass/Ord'
import { pipe } from '../function'

import { Arbitrary } from './Arbitrary'
import * as LA from './Associative'
import * as LAB from './AssociativeBoth'
import * as LAE from './AssociativeEither'
import * as LAF from './AssociativeFlatten'
import * as LC from './Commutative'
import * as LCovariant from './Covariant'
import * as LE from './Eq'
import * as LI from './Identity'
import * as LIB from './IdentityBoth'
import * as LIE from './IdentityEither'
import * as LIF from './IdentityFlatten'
import * as LIV from './Inverse'
import * as LO from './Ord'

export const testAllDataLaws = <A>(params: DataLawTestParams<A>) => {
  const { fc } = params

  describe(`${params.name} (Data)`, () => {
    if (params.Associative) {
      for (const [name, args] of Object.entries(params.Associative)) {
        describe(`Associative (${name})`, () => {
          it('has a valid instance', () =>
            pipe(params.Arbitrary, LA.testAssociativity<A>(...args))(fc))
        })
      }
    }

    if (params.Commutative) {
      for (const [name, args] of Object.entries(params.Commutative)) {
        describe(`Commutative (${name})`, () => {
          it('has a valid instance', () =>
            pipe(params.Arbitrary, LC.testCommutativity<A>(...args))(fc))
        })
      }
    }

    if (params.Eq) {
      for (const [name, eq] of Object.entries(params.Eq)) {
        describe(`Eq (${name})`, () => {
          const { reflexivity, symmetry, transitivity } = pipe(
            params.Arbitrary,
            LE.testEq<A>(eq),
          )(fc)

          it('Reflexivity', reflexivity)
          it('Symmetry', symmetry)
          it('Transitivity', transitivity)
        })
      }
    }

    if (params.Identity) {
      for (const [name, args] of Object.entries(params.Identity)) {
        describe(`Identity (${name})`, () => {
          const { left, right } = pipe(params.Arbitrary, LI.testIdentity<A>(...args))(fc)

          it('Left Identity', left)
          it('Right Identity', right)
        })
      }
    }

    if (params.Inverse) {
      for (const [name, args] of Object.entries(params.Inverse)) {
        describe(`Inverse (${name})`, () => {
          it('has a valid instance', () => pipe(params.Arbitrary, LIV.testInverse<A>(...args))(fc))
        })
      }
    }

    if (params.Ord) {
      for (const [name, ord] of Object.entries(params.Ord)) {
        describe(`Ord (${name})`, () => {
          const { totality, reflexivity, antisymmetry, transitivity } = pipe(
            params.Arbitrary,
            LO.testOrd<A>(ord),
          )(fc)

          it('Totality', totality)
          it('Reflexivity', reflexivity)
          it('Antisymmetry', antisymmetry)
          it('Transitivity', transitivity)
        })
      }
    }
  })
}

export interface DataLawTestParams<A> {
  readonly name: string
  readonly fc: typeof import('fast-check')
  readonly Arbitrary: Arbitrary<A>

  readonly Associative?: Record<string, [Associative<A>, Eq<A>?]>
  readonly Commutative?: Record<string, [Commutative<A>, Eq<A>?]>
  readonly Eq?: Record<string, Eq<A>>
  readonly Identity?: Record<string, [Identity<A>, Eq<A>?]>
  readonly Inverse?: Record<string, [Inverse<A>, Eq<A>?]>
  readonly Ord?: Record<string, Ord<A>>
}

function assertIsCovariantParams<T extends HKT, A, B, C, D, F, G, H, I, J>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _x: any,
): asserts _x is CovariantHKTLawTestParams<T, A, B, C, D, F, G, H, I, J> {
  //
}

export function testAllCovariantHKTLaws<T extends HKT2>(): <E, A, B, C, D, F, G, H, I, J>(
  params: CovariantHKTLawTestParams2<T, E, A, B, C, D, F, G, H, I, J>,
) => void
export function testAllCovariantHKTLaws<T extends HKT>(): <A, B, C, D, F, G, H, I, J>(
  params: CovariantHKTLawTestParams<T, A, B, C, D, F, G, H, I, J>,
) => void

export function testAllCovariantHKTLaws<T extends HKT>() {
  return <A, B, C, D, F, G, H, I, J>(params: any): void => {
    assertIsCovariantParams<T, A, B, C, D, F, G, H, I, J>(params)
    const { name, fc, Arbitrary, ArbitraryA } = params

    describe(`${name} (HKT)`, () => {
      if (params.Covariant) {
        for (const [name, args] of Object.entries(params.Covariant)) {
          describe(`Covariant (${name})`, () => {
            const { identity, associativity } = pipe(
              Arbitrary,
              LCovariant.testCovariant(...args),
            )(fc)

            it('Identity', identity)
            it('Associativity', associativity)
          })
        }
      }

      if (params.AssociativeBoth) {
        for (const [name, args] of Object.entries(params.AssociativeBoth)) {
          describe(`AssociativeBoth & Covariant (${name})`, () => {
            it(`has a valid instance`, () =>
              pipe(Arbitrary, LAB.testCovariantAssociativeBoth(...args))(fc))
          })
        }
      }

      if (params.IdentityBoth) {
        for (const [name, args] of Object.entries(params.IdentityBoth)) {
          describe(`IdentityBoth & Covariant (${name})`, () => {
            const [IBC, f, EqA, EqC] = args
            const { identity, homomorphism, interchange } = pipe(
              ArbitraryA,
              LIB.testCovariantIdentityBoth<T, A, D>(IBC, EqA ?? DeepEquals, f, EqC ?? DeepEquals),
            )(fc)

            it(`Identity`, identity)
            it(`Homomorphism`, homomorphism)
            it(`Interchange`, interchange)
          })
        }

        if (params.AssociativeFlatten) {
          for (const [name, args] of Object.entries(params.AssociativeFlatten)) {
            describe(`AssociativeFlatten & Covariant (${name})`, () => {
              const [AFC, f, g, Eq] = args
              const { associativity, derivedAssociativeBoth } = pipe(
                Arbitrary,
                LAF.testCovariantAssociativeFlatten(AFC, f, g, Eq ?? DeepEquals),
              )(fc)

              it(`Associativity`, associativity)
              it(`Derived AssociativeBoth`, derivedAssociativeBoth)
            })
          }
        }

        if (params.IdentityFlatten) {
          for (const [name, args] of Object.entries(params.IdentityFlatten)) {
            describe(`IdentityFlatten & Covariant (${name})`, () => {
              const [AFC, f, Eq] = args
              const { leftIdentity, rightIdentity } = pipe(
                ArbitraryA,
                LIF.testCovariantIdentityFlatten(AFC, f, Eq ?? DeepEquals),
              )(fc)

              it(`Left Identity`, leftIdentity)
              it(`Right Identity`, rightIdentity)
            })
          }
        }

        if (params.AssociativeEither) {
          for (const [name, args] of Object.entries(params.AssociativeEither)) {
            describe(`AssociativeEither & Covariant (${name})`, () => {
              const [AEC, f, EqA = DeepEquals, EqB = DeepEquals] = args
              const { associativity, distributivity } = pipe(
                Arbitrary,
                LAE.testCovariantAssociativeEither(AEC, EqA, f, EqB),
              )(fc)

              it(`Associativity`, associativity)
              it(`Distributivity`, distributivity)
            })
          }
        }

        if (params.IdentityEither) {
          for (const [name, args] of Object.entries(params.IdentityEither)) {
            describe(`IdentityEither & Covariant (${name})`, () => {
              const [AEC, f, EqA = DeepEquals, EqB = DeepEquals] = args
              const { leftIdentity, rightIdentity, distributivity, annihilation } = pipe(
                Arbitrary,
                LIE.testCovariantIdentityEither(AEC, EqA, f, EqB),
              )(fc)

              it(`Left Identity`, leftIdentity)
              it(`Right Identity`, rightIdentity)
              it(`Distributivity`, distributivity)
              it(`Annihilation`, annihilation)
            })
          }
        }
      }
    })
  }
}

export interface CovariantHKTLawTestParams2<T extends HKT2, E, A, B, C, D, F, G, H, I, J> {
  readonly name: string
  readonly fc: typeof import('fast-check')
  readonly Arbitrary: Arbitrary<Kind2<T, E, A>>

  readonly Covariant?:
    | Record<string, [Covariant2<T>, (a: A) => B, (b: B) => C, Eq<Kind2<T, E, C>>?]>
    | Record<string, [Covariant2EC<T, E>, (a: A) => B, (b: B) => C, Eq<Kind2<T, E, C>>?]>

  readonly AssociativeBoth?:
    | Record<
        string,
        [AssociativeBoth2<T> & Covariant2<T>, Kind2<T, E, (a: A) => B>, Eq<Kind2<T, E, C>>?]
      >
    | Record<
        string,
        [
          AssociativeBoth2EC<T, E> & Covariant2EC<T, E>,
          Kind2<T, E, (a: A) => B>,
          Eq<Kind2<T, E, C>>?,
        ]
      >

  readonly IdentityBoth?:
    | Record<
        string,
        [IdentityBoth2<T> & Covariant2<T>, (a: A) => D, Eq<Kind<T, A>>?, Eq<Kind<T, D>>?]
      >
    | Record<
        string,
        [IdentityBoth2EC<T, E> & Covariant2EC<T, E>, (a: A) => D, Eq<Kind<T, A>>?, Eq<Kind<T, D>>?]
      >

  readonly AssociativeFlatten?:
    | Record<
        string,
        [
          AFC: AssociativeFlatten2<T> & Covariant2<T>,
          f: (a: A) => Kind<T, F>,
          g: (b: F) => Kind<T, G>,
          Eq?: Eq<Kind<T, G>>,
        ]
      >
    | Record<
        string,
        [
          AFC: AssociativeFlatten2EC<T, E> & Covariant2EC<T, E>,
          f: (a: A) => Kind<T, F>,
          g: (b: F) => Kind<T, G>,
          Eq?: Eq<Kind<T, G>>,
        ]
      >

  readonly IdentityFlatten?:
    | Record<
        string,
        [AFC: IdentityFlatten2<T> & Covariant2<T>, f: (a: A) => Kind<T, H>, Eq?: Eq<Kind<T, H>>]
      >
    | Record<
        string,
        [
          AFC: IdentityFlatten2EC<T, E> & Covariant2EC<T, E>,
          f: (a: A) => Kind<T, H>,
          Eq?: Eq<Kind<T, H>>,
        ]
      >

  readonly AssociativeEither?:
    | Record<
        string,
        [
          AFC: AssociativeEither2<T> & Covariant2<T>,
          f: (a: A) => I,
          EqA?: Eq<Kind2<T, E, A>>,
          EqB?: Eq<Kind2<T, E, I>>,
        ]
      >
    | Record<
        string,
        [
          AFC: AssociativeEither2EC<T, E> & Covariant2EC<T, E>,
          f: (a: A) => I,
          EqA?: Eq<Kind2<T, E, A>>,
          EqB?: Eq<Kind2<T, E, I>>,
        ]
      >

  readonly IdentityEither?:
    | Record<
        string,
        [
          AFC: IdentityEither2<T> & Covariant2<T>,
          f: (a: A) => J,
          EqA?: Eq<Kind<T, A>>,
          EqB?: Eq<Kind<T, J>>,
        ]
      >
    | Record<
        string,
        [
          AFC: IdentityEither2EC<T, E> & Covariant2EC<T, E>,
          f: (a: A) => J,
          EqA?: Eq<Kind<T, A>>,
          EqB?: Eq<Kind<T, J>>,
        ]
      >
}

export interface CovariantHKTLawTestParams<T extends HKT, A, B, C, D, F, G, H, I, J> {
  readonly name: string
  readonly fc: typeof import('fast-check')
  readonly Arbitrary: Arbitrary<Kind<T, A>>
  readonly ArbitraryA: Arbitrary<A>

  readonly Covariant?:
    | Record<string, [Covariant<T>, (a: A) => B, (b: B) => C, Eq<Kind<T, C>>?]>
    | Record<string, [Covariant1<T>, (a: A) => B, (b: B) => C, Eq<Kind<T, C>>?]>

  readonly AssociativeBoth?:
    | Record<
        string,
        [
          AssociativeBoth<T> & Covariant<T>,
          Kind<T, (a: A) => B>,
          Kind<T, (b: B) => C>,
          Eq<Kind<T, C>>?,
        ]
      >
    | Record<
        string,
        [
          AssociativeBoth1<T> & Covariant1<T>,
          Kind<T, (a: A) => B>,
          Kind<T, (b: B) => C>,
          Eq<Kind<T, C>>?,
        ]
      >

  readonly IdentityBoth?:
    | Record<
        string,
        [IdentityBoth<T> & Covariant<T>, (a: A) => D, Eq<Kind<T, A>>?, Eq<Kind<T, D>>?]
      >
    | Record<
        string,
        [IdentityBoth1<T> & Covariant1<T>, (a: A) => D, Eq<Kind<T, A>>?, Eq<Kind<T, D>>?]
      >

  readonly AssociativeFlatten?:
    | Record<
        string,
        [
          AFC: AssociativeFlatten<T> & Covariant<T>,
          f: (a: A) => Kind<T, F>,
          g: (b: F) => Kind<T, G>,
          Eq?: Eq<Kind<T, G>>,
        ]
      >
    | Record<
        string,
        [
          AFC: AssociativeFlatten1<T> & Covariant1<T>,
          f: (a: A) => Kind<T, F>,
          g: (b: F) => Kind<T, G>,
          Eq?: Eq<Kind<T, G>>,
        ]
      >

  readonly IdentityFlatten?:
    | Record<
        string,
        [AFC: IdentityFlatten<T> & Covariant<T>, f: (a: A) => Kind<T, H>, Eq?: Eq<Kind<T, H>>]
      >
    | Record<
        string,
        [AFC: IdentityFlatten1<T> & Covariant1<T>, f: (a: A) => Kind<T, H>, Eq?: Eq<Kind<T, H>>]
      >

  readonly AssociativeEither?:
    | Record<
        string,
        [
          AFC: AssociativeEither<T> & Covariant<T>,
          f: (a: A) => I,
          EqA?: Eq<Kind<T, A>>,
          EqB?: Eq<Kind<T, I>>,
        ]
      >
    | Record<
        string,
        [
          AFC: AssociativeEither1<T> & Covariant1<T>,
          f: (a: A) => I,
          EqA?: Eq<Kind<T, A>>,
          EqB?: Eq<Kind<T, I>>,
        ]
      >

  readonly IdentityEither?:
    | Record<
        string,
        [
          AFC: IdentityEither<T> & Covariant<T>,
          f: (a: A) => J,
          EqA?: Eq<Kind<T, A>>,
          EqB?: Eq<Kind<T, J>>,
        ]
      >
    | Record<
        string,
        [
          AFC: IdentityEither1<T> & Covariant1<T>,
          f: (a: A) => J,
          EqA?: Eq<Kind<T, A>>,
          EqB?: Eq<Kind<T, J>>,
        ]
      >
}
