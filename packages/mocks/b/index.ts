import { rest } from 'msw'
import example from './example'

/** @see https://github.com/mswjs/msw/issues/397#issuecomment-751230924 */
function url(path: string) {
  return `/api/b/${path}`
}

export const handlers = [
  rest.get(url('example'), example.get),
  rest.get(url('*'), (_req, res, ctx) => res(ctx.status(404))),
]
