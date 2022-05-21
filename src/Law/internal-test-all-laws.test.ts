import { HKT, HKT2, Kind, Kind2 } from '../HKT'
import { Associative } from '../Typeclass/Associative'
import {
  AssociativeBoth,
  AssociativeBoth1,
  AssociativeBoth2,
  AssociativeBoth2EC,
} from '../Typeclass/AssociativeBoth'
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
import { Inverse } from '../Typeclass/Inverse'
import { Ord } from '../Typeclass/Ord'
import { pipe } from '../function'

import { Arbitrary } from './Arbitrary'
import * as LA from './Associative'
import * as LAB from './AssociativeBoth'
import * as LAF from './AssociativeFlatten'
import * as LC from './Commutative'
import * as LCovariant from './Covariant'
import * as LE from './Eq'
import * as LI from './Identity'
import * as LIB from './IdentityBoth'
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

function assertIsParams<T extends HKT, A, B, C, D, F, G, H>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _x: any,
): asserts _x is HKTLawTestParams<T, A, B, C, D, F, G, H> {
  //
}

export function testAllHKTLaws<T extends HKT2>(): <E, A, B, C, D, F, G, H>(
  params: HKTLawTestParams2<T, E, A, B, C, D, F, G, H>,
) => void
export function testAllHKTLaws<T extends HKT>(): <A, B, C, D, F, G, H>(
  params: HKTLawTestParams<T, A, B, C, D, F, G, H>,
) => void

export function testAllHKTLaws<T extends HKT>() {
  return <A, B, C, D, F, G, H>(params: any): void => {
    assertIsParams<T, A, B, C, D, F, G, H>(params)
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

      if (params.CovariantAssociativeBoth) {
        for (const [name, args] of Object.entries(params.CovariantAssociativeBoth)) {
          describe(`AssociativeBoth & Covariant (${name})`, () => {
            it(`has a valid instance`, () =>
              pipe(Arbitrary, LAB.testCovariantAssociativeBoth(...args))(fc))
          })
        }
      }

      if (params.CovariantIdentityBoth) {
        for (const [name, args] of Object.entries(params.CovariantIdentityBoth)) {
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

        if (params.CovariantAssociativeFlatten) {
          for (const [name, args] of Object.entries(params.CovariantAssociativeFlatten)) {
            describe(`AssociativeFlatten & Covariant (${name})`, () => {
              const [AFC, f, g, Eq] = args
              const { associativity } = pipe(
                Arbitrary,
                LAF.testCovariantAssociativeFlatten(AFC, f, g, Eq),
              )(fc)

              it(`Associativity`, associativity)
              it(`Derived AssociativeBoth`, associativity)
            })
          }
        }
      }
    })
  }
}

export interface HKTLawTestParams2<T extends HKT2, E, A, B, C, D, F, G, H> {
  readonly name: string
  readonly fc: typeof import('fast-check')
  readonly Arbitrary: Arbitrary<Kind2<T, E, A>>

  readonly Covariant?:
    | Record<string, [Covariant2<T>, (a: A) => B, (b: B) => C, Eq<Kind2<T, E, C>>?]>
    | Record<string, [Covariant2EC<T, E>, (a: A) => B, (b: B) => C, Eq<Kind2<T, E, C>>?]>

  readonly CovariantAssociativeBoth?:
    | Record<
        string,
        [
          AssociativeBoth2<T> & Covariant2<T>,
          Kind2<T, E, (a: A) => B>,
          Kind2<T, E, (b: B) => C>,
          Eq<Kind2<T, E, C>>?,
        ]
      >
    | Record<
        string,
        [
          AssociativeBoth2EC<T, E> & Covariant2EC<T, E>,
          Kind2<T, E, (a: A) => B>,
          Kind2<T, E, (b: B) => C>,
          Eq<Kind2<T, E, C>>?,
        ]
      >

  readonly CovariantIdentityBoth?:
    | Record<
        string,
        [IdentityBoth2<T> & Covariant2<T>, (a: A) => D, Eq<Kind<T, A>>?, Eq<Kind<T, D>>?]
      >
    | Record<
        string,
        [IdentityBoth2EC<T, E> & Covariant2EC<T, E>, (a: A) => D, Eq<Kind<T, A>>?, Eq<Kind<T, D>>?]
      >

  readonly CovariantAssociativeFlatten?:
    | Record<
        string,
        [
          AFC: AssociativeFlatten2<T> & Covariant2<T>,
          f: (a: F) => Kind<T, G>,
          g: (b: G) => Kind<T, H>,
          Eq?: Eq<Kind<T, H>>,
        ]
      >
    | Record<
        string,
        [
          AFC: AssociativeFlatten2EC<T, E> & Covariant2EC<T, E>,
          f: (a: F) => Kind<T, G>,
          g: (b: G) => Kind<T, H>,
          Eq?: Eq<Kind<T, H>>,
        ]
      >
}

export interface HKTLawTestParams<T extends HKT, A, B, C, D, F, G, H> {
  readonly name: string
  readonly fc: typeof import('fast-check')
  readonly Arbitrary: Arbitrary<Kind<T, A>>
  readonly ArbitraryA: Arbitrary<A>

  readonly Covariant?:
    | Record<string, [Covariant<T>, (a: A) => B, (b: B) => C, Eq<Kind<T, C>>?]>
    | Record<string, [Covariant1<T>, (a: A) => B, (b: B) => C, Eq<Kind<T, C>>?]>

  readonly CovariantAssociativeBoth?:
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

  readonly CovariantIdentityBoth?:
    | Record<
        string,
        [IdentityBoth<T> & Covariant<T>, (a: A) => D, Eq<Kind<T, A>>?, Eq<Kind<T, D>>?]
      >
    | Record<
        string,
        [IdentityBoth1<T> & Covariant1<T>, (a: A) => D, Eq<Kind<T, A>>?, Eq<Kind<T, D>>?]
      >

  readonly CovariantAssociativeFlatten?:
    | Record<
        string,
        [
          AFC: AssociativeFlatten<T> & Covariant<T>,
          f: (a: F) => Kind<T, G>,
          g: (b: G) => Kind<T, H>,
          Eq?: Eq<Kind<T, H>>,
        ]
      >
    | Record<
        string,
        [
          AFC: AssociativeFlatten1<T> & Covariant1<T>,
          f: (a: F) => Kind<T, G>,
          g: (b: G) => Kind<T, H>,
          Eq?: Eq<Kind<T, H>>,
        ]
      >
}
