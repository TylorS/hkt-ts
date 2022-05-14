# HKT-TS

`HKT-TS` is an encoding for Higher-Kinded Types (HKT) for TypeScript, with composable Typclasses to describe the majority of functionality you'll be using to write your programs.

It is principled, based primarily [Type Theory](https://en.wikipedia.org/wiki/Type_theory) and [Alegbra](https://en.wikipedia.org/wiki/Algebra), but also with roots in [Category Theory](https://en.wikipedia.org/wiki/Category_theory).

If you've ever used a compiler for a strictly-typed language like TypeScript before, the annotations you're writing already follow all of these rules, and you likely know more about
it already than you may realize. If something is an Algebra, it can be solved, like how your type-checker solves for the correctness of your program.

Right now there's not a lot to see besides the code itself, but it is my goal to make learning materials accessible on all of the topics above as well as the contents of this 
library -- check back soon for more.

## Acknoledgements

HKT-TS has been greatly influenced by numerous other open-source projects, the biggest being the Scala library [ZIO-Prelude](https://zio.github.io/zio-prelude/)
which is the pioneer of a brand new way to blend Category Theory with programming languages that aren't Haskell.

With the TyepScript space, I've been inspired and taken influence from [Effect-TS](https://github.com/Effect-TS/core) which offers a port of a larger portion of ZIO including ZIO-Prelude.
When looking through their codebase I noticed that had many more Typeclasses than ZIO-Prelude. I chose to replicate most of these Typeclasses to allow derived functions to ask for 
only what they need, and because some data types will have optimizations available to them for certain operators that will be lost through deriving the implementation with another set of Typeclasses. 

If you're interested in powerful effects that are built upon abstractions like these, with a strong standard library, check them out. Also if you love FP, then check out the amazing things they're doing with [TS+](https://dev.to/matechs/the-case-for-ts-18b3) for functional programmers. I look forward to seeing it continue to mature!

Last but certainly not least, I have to give a huge shoutout to [fp-ts](https://github.com/gcanti/fp-ts), another HKT encoding for TypeScript that provides a Haskell-like 
expression of Category Theory with a rich standard library and ecosystem, which I've been using for a few years now. It's helped me greatly to dive into the world of Category 
Theory as it is applied to programming, but after seeing [this talk](https://www.youtube.com/watch?v=OwmHgL9F_9Q) during the beginning months of COVID, I've constantly been questioning if it's the easiest approach to learn and teach.

HKT-TS is the culmination of my attempts to learn this new set of TypeClasses and what they're capable of.

## Installation

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

