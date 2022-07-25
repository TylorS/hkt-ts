import { deepStrictEqual } from 'node:assert'

import { describe, it } from 'vitest'

import * as Array from '../../Array.js'
import * as Data from '../../Data.js'
import * as Either from '../../Either.js'
import { pipe } from '../../function.js'
import * as N from '../../number.js'

import * as ForEach from './index.js'

describe(import.meta.url, () => {
  describe(ForEach.foldMap.name, () => {
    it('derives foldMap from ForEach instance', () => {
      const foldMapArray = ForEach.foldMap(Array.ForEach)(N.IdentitySum)
      const foldMapData = ForEach.foldMap(Data.ForEach)(N.IdentitySum)
      const foldMapEither = ForEach.foldMap(Either.ForEach)(N.IdentitySum)

      deepStrictEqual(
        pipe(
          [1, 2, 3],
          foldMapArray((x: number) => x + 1),
        ),
        9,
      )

      deepStrictEqual(
        pipe(
          Data.Replete(1),
          foldMapData((x: number) => x + 1),
        ),
        2,
      )

      deepStrictEqual(
        pipe(
          Either.Right(1),
          foldMapEither((a: number) => a + 1),
        ),
        2,
      )
    })
  })
})
