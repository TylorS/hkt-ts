import { SignatureOverride, Type, TypeParams, UriOf, Uris } from '../'
import { CommonOptions, GetLength } from '../common'
import { Applicative } from './Applicative'

/**
 * @name Traversable
 * @laws
 * Naturality: f(T.traverse(A, x => x, u)) ≡ T.traverse(B, f, u) for any f such that B.map(g, f(a)) ≡ f(A.map(g, a))
 * Identity: T.traverse(F, F.of, u) ≡ F.of(u) for any Applicative F
 * Composition: T.traverse(Compose(A, B))(x => x, u) ≡ A.map(v => T.traverse(B)(x => x, v), T.traverse(A)(x => x, u)) for Compose defined bellow and for any Applicatives A and B
 */
export interface Traversable<
  // @ts-expect-error Uris is 'never' until extended externally
  T extends Uris = any,
  Options extends TraversableOptions = TraversableOptions
> {
  readonly URI: T
  readonly traverse: SignatureOverride<
    T,
    Options['traverse'],
    {
      1: <A extends Applicative>(applicative: A) => Traverse1<T, UriOf<A>>
      2: <A extends Applicative>(applicative: A) => Traverse2<T, UriOf<A>>
      3: <A extends Applicative>(applicative: A) => Traverse3<T, UriOf<A>>
      4: <A extends Applicative>(applicative: A) => Traverse4<T, UriOf<A>>
      5: <A extends Applicative>(applicative: A) => Traverse5<T, UriOf<A>>
    }[GetLength<Options, T>]
  >
}

export type TraversableOptions = CommonOptions & {
  readonly traverse: string
}

type Traverse1<T extends Uris, U extends Uris> = {
  1: <A, B>(f: (a: A) => Type<U, [B]>, t: Type<T, [A]>) => Type<U, [Type<T, [B]>]>
  2: <A, B, C>(f: (a: A) => Type<U, [B, C]>, t: Type<T, [A]>) => Type<U, [B, Type<T, [C]>]>
  3: <A, B, C, D>(f: (a: A) => Type<U, [B, C, D]>, t: Type<T, [A]>) => Type<U, [B, C, Type<T, [D]>]>
  4: <A, B, C, D, E>(
    f: (a: A) => Type<U, [B, C, D, E]>,
    t: Type<T, [A]>,
  ) => Type<U, [B, C, D, Type<T, [E]>]>
  5: <A, B, C, D, E, F>(
    f: (a: A) => Type<U, [B, C, D, E, F]>,
    t: Type<T, [A]>,
  ) => Type<U, [B, C, D, E, Type<T, [F]>]>
}[TypeParams.Length<U>]

type Traverse2<T extends Uris, U extends Uris> = {
  1: <A, B, C>(f: (a: A) => Type<U, [B]>, t: Type<T, [C, A]>) => Type<U, [Type<T, [C, A]>]>
  2: <A, B, C, D>(f: (a: A) => Type<U, [B, C]>, t: Type<T, [D, A]>) => Type<U, [B, Type<T, [D, C]>]>
  3: <A, B, C, D, E>(
    f: (a: A) => Type<U, [B, C, D]>,
    t: Type<T, [E, A]>,
  ) => Type<U, [B, C, Type<T, [E, D]>]>
  4: <A, B, C, D, E, F>(
    f: (a: A) => Type<U, [B, C, D, E]>,
    t: Type<T, [F, A]>,
  ) => Type<U, [B, C, D, Type<T, [F, E]>]>
  5: <A, B, C, D, E, F, G>(
    f: (a: A) => Type<U, [B, C, D, E, F]>,
    t: Type<T, [G, A]>,
  ) => Type<U, [B, C, D, E, Type<T, [G, F]>]>
}[TypeParams.Length<U>]

type Traverse3<T extends Uris, U extends Uris> = {
  1: <A, B, C, D>(f: (a: A) => Type<U, [B]>, t: Type<T, [C, D, A]>) => Type<U, [Type<T, [C, D, A]>]>
  2: <A, B, C, D, E>(
    f: (a: A) => Type<U, [B, C]>,
    t: Type<T, [D, E, A]>,
  ) => Type<U, [B, Type<T, [D, E, C]>]>
  3: <A, B, C, D, E, F>(
    f: (a: A) => Type<U, [B, C, D]>,
    t: Type<T, [E, F, A]>,
  ) => Type<U, [B, C, Type<T, [E, F, D]>]>
  4: <A, B, C, D, E, F, G>(
    f: (a: A) => Type<U, [B, C, D, E]>,
    t: Type<T, [F, G, A]>,
  ) => Type<U, [B, C, D, Type<T, [F, G, E]>]>
  5: <A, B, C, D, E, F, G, H>(
    f: (a: A) => Type<U, [B, C, D, E, F]>,
    t: Type<T, [G, H, A]>,
  ) => Type<U, [B, C, D, E, Type<T, [G, H, F]>]>
}[TypeParams.Length<U>]

type Traverse4<T extends Uris, U extends Uris> = {
  1: <A, B, C, D, E>(
    f: (a: A) => Type<U, [B]>,
    t: Type<T, [C, D, E, A]>,
  ) => Type<U, [Type<T, [C, D, E, A]>]>
  2: <A, B, C, D, E, F>(
    f: (a: A) => Type<U, [B, C]>,
    t: Type<T, [D, E, F, A]>,
  ) => Type<U, [B, Type<T, [D, E, F, C]>]>
  3: <A, B, C, D, E, F, G>(
    f: (a: A) => Type<U, [B, C, D]>,
    t: Type<T, [E, F, G, A]>,
  ) => Type<U, [B, C, Type<T, [E, F, G, D]>]>
  4: <A, B, C, D, E, F, G, H>(
    f: (a: A) => Type<U, [B, C, D, E]>,
    t: Type<T, [F, G, H, A]>,
  ) => Type<U, [B, C, D, Type<T, [F, G, H, E]>]>
  5: <A, B, C, D, E, F, G, H, I>(
    f: (a: A) => Type<U, [B, C, D, E, F]>,
    t: Type<T, [G, H, I, A]>,
  ) => Type<U, [B, C, D, E, Type<T, [G, H, I, F]>]>
}[TypeParams.Length<U>]

type Traverse5<T extends Uris, U extends Uris> = {
  1: <A, B, C, D, E, F>(
    f: (a: A) => Type<U, [B]>,
    t: Type<T, [C, D, E, F, A]>,
  ) => Type<U, [Type<T, [C, D, E, F, A]>]>
  2: <A, B, C, D, E, F, G>(
    f: (a: A) => Type<U, [B, C]>,
    t: Type<T, [D, E, F, G, A]>,
  ) => Type<U, [B, Type<T, [D, E, F, G, C]>]>
  3: <A, B, C, D, E, F, G, H>(
    f: (a: A) => Type<U, [B, C, D]>,
    t: Type<T, [E, F, G, H, A]>,
  ) => Type<U, [B, C, Type<T, [E, F, G, H, D]>]>
  4: <A, B, C, D, E, F, G, H, I>(
    f: (a: A) => Type<U, [B, C, D, E]>,
    t: Type<T, [F, G, H, I, A]>,
  ) => Type<U, [B, C, D, Type<T, [F, G, H, I, E]>]>
  5: <A, B, C, D, E, F, G, H, I, J>(
    f: (a: A) => Type<U, [B, C, D, E, F]>,
    t: Type<T, [G, H, I, J, A]>,
  ) => Type<U, [B, C, D, E, Type<T, [G, H, I, J, F]>]>
}[TypeParams.Length<U>]
