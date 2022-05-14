# HKT-TS

`HKT-TS` is an encoding for Higher-Kinded Types (HKT) for TypeScript, with composable Typclasses to describe the majority of functionality you'll be using to write your programs.

It is principled, based primarily in [Type Theory](https://en.wikipedia.org/wiki/Type_theory) and [Alegbra](https://en.wikipedia.org/wiki/Algebra), but also with roots in [Category Theory](https://en.wikipedia.org/wiki/Category_theory).

If you've ever used a compiler for a strictly-typed language like TypeScript before, the annotations you're writing already follow all of these rules, and you likely know more about
it already than you may realize. If something is an Algebra, it can be solved, like how your type-checker solves for the correctness of your program.

The laws required to build something like a type-checker are generally applicable to all programming -- this is where HKT-TS comes in. HKT-TS provides the highest level of abstractions possible
within TypeScript and will allow you to place composition at the forefront of programs. It will allow you to rapidly compose small solutions into larger solutions with an emphasis on type safety.

Right now there's not a lot to see besides the code itself, but it is my goal to make learning materials accessible on all of the topics above as well as the contents of this 
library -- check back soon for more.

## Acknowledgments

HKT-TS has been greatly influenced by numerous other open-source projects, the biggest being the Scala library [ZIO-Prelude](https://zio.github.io/zio-prelude/)
which is the pioneer of a brand new way to blend Category Theory with programming languages that aren't Haskell.

Within the TypeScript space, I've been inspired and taken influence from [Effect-TS](https://github.com/Effect-TS/core) which offers a port of a larger portion of ZIO including ZIO-Prelude.
If you're interested in powerful effects that are built upon abstractions like these, with a strong standard library, check them out. Also if you love FP, then check out the amazing things they're doing with [TS+](https://dev.to/matechs/the-case-for-ts-18b3) for functional programmers. I look forward to seeing it continue to mature!

Last but certainly not least, I have to give a huge shoutout to [fp-ts](https://github.com/gcanti/fp-ts), another HKT encoding for TypeScript that provides a Haskell-like 
expression of Category Theory with a rich standard library and ecosystem, which I've been using for a few years now. It's helped me greatly to dive into the world of Category 
Theory as it is applied to programming, but after seeing [this talk](https://www.youtube.com/watch?v=OwmHgL9F_9Q) during the beginning months of COVID, I've constantly been questioning if it's the easiest approach to learn and teach.

HKT-TS is the culmination of my attempts to learn this new set of TypeClasses and what they're capable of.

## Installation

** NOTE: This version is not currently published to NPM **

```sh
# NPM
npm i --save hkt-ts

# Yarn
yarn add hkt-ts

# PNPM
pnpm add hkt-ts
```

## Related Links

- [zio-prelude](https://zio.github.io/zio-prelude/)
- [Effect-TS](https://github.com/Effect-TS/core)
- [fp-ts](https://github.com/gcanti/fp-ts)
- 

