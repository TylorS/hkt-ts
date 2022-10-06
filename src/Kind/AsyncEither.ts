import * as TE from 'fp-ts/TaskEither'

export type AsyncEither<E, A> = TE.TaskEither<E, A>

export interface AsyncEitherλ extends TE.TaskEitherλ {}
