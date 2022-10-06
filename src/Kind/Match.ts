import { Option } from './Option.js'

export interface Match<A, B> {
  (a: A): Option<B>
}
