// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const api = (_: NextApiRequest, res: NextApiResponse): void => {
  res.statusCode = 200;
  res.json({
    message: 'Hello World',
  });
};

export default api;
