import type { ResponseResolver, RestContext, RestRequest } from 'msw'

export const get: ResponseResolver<
  RestRequest<undefined, {}>,
  RestContext,
  { message: string }
> = (_req, res, ctx) => {
  return res(ctx.status(200), ctx.json({ message: 'app b' }))
}
