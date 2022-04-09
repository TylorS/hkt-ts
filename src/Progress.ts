import { Maybe, Nothing } from './Maybe'
import { NonNegativeInteger } from './number'

export interface Progress {
  readonly loaded: NonNegativeInteger
  readonly total: Maybe<NonNegativeInteger>
}

export function Progress(
  loaded: NonNegativeInteger,
  total: Maybe<NonNegativeInteger> = Nothing,
): Progress {
  return {
    loaded,
    total,
  }
}
