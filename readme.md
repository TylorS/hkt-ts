# HKT-TS

`HKT-TS` is an encoding for Higher-Kinded-Types (HKT) in TypeScript. 
It requires writing 0 overloads for your functions, and does not need to modify an existing package.
This means the use of HKTs for your libraries can be opt-in, delivered by an external package, and 
potentially from the community!

## Installation (NOT YET !!)

```sh
# NPM
npm i --save hkt-ts

# Yarn
yarn install hkt-ts
```

## How to register a new HKT

```typescript
import { TypeParams } from 'hkt-ts'

export const URI = Symbol.for('Either') // Could be string | number | symbol
export type Left<A> = { left: true, value: A }
export type Right<A> = { left: false, value: A}
export type Either<A, B> = Left<A> | Right<B>

// The URI must match in both type-level maps to work correctly.
declare module "hkt-ts" {
  // Setup how to pass new type-parameters to a Type, looked up by the given URI.
  export interface Hkts<Values> {
    // TypeParams.First, TypeParams.Second,..., TypeParams.Fifth, are helpers for extracting
    // type parameters from Values working from right-to-left.
    [URI]: Either<TypeParams.Second<Values>, TypeParams.First<Values>>
  }
  
  // Setup how to extract a Tuple of type-parameters from a registered Type, looked up by the given URI.
  export interface HktValues<T> {
    // Wrapping in a tuple helps to avoid returning an invalid union e.g. [A, unknown] | [unknown, B]
    [URI]: [T] extends [Either<infer A, infer B>] ? [A, B] : never
  }
}

```

## How to create a new type-class

```typescript
import { PossibleValues, Type, Types, TypeParams } from 'hkt-ts'

// All type-classes should use an a `extends Types` clause to ensure it's working with
// registered types.
export interface Functor<T extends Types> {
  // Adding the Type to any methods type-parameters will help with inference
  // PossibleValues is a helpful placeholder for supporting Types with up to 5 type-parameters.
  map: <A, B, F extends Type<T, [...PossibleValues, A]>>(f: (a: A) => b, functor: F) => 
    Type<T, [...TypeParams.DropLast<F, 1>, B]> 
    // TypeParams.DropLast (and TypeParams.Drop!) is another helper for creating type-classes. It retrieves the type-paramaters
    // for a registered Type, and pops off up to 5 of the last values from the tuple.
}
```
