import * as IOE from 'fp-ts/IOEither'

export type SyncEither<E, A> = IOE.IOEither<E, A>

export interface SyncEitherλ extends IOE.IOEitherλ {}
