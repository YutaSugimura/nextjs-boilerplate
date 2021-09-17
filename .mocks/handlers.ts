import { rest } from 'msw';

export const handlers = [
  rest.get('https://api.app/message', (_, res, ctx) => {
    return res(
      ctx.delay(100),
      ctx.json({
        message: 'Hello World',
      }),
    );
  }),
  rest.get('/api/hello', (_, res, ctx) => {
    return res(
      ctx.json({
        message: 'Hello World',
      }),
    );
  }),
];
