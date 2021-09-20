import { rest } from 'msw';

export const handlers = [
  rest.get('https://api.app/message', (_, res, ctx) => {
    return res(
      ctx.delay(100),
      ctx.json({
        title: 'The financial crisis',
        body: 'Unemployment rates in the major advanced economies are at levels substantially higher than those prior to the Lehman shock.',
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
