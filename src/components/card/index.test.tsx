import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { SWRConfig } from 'swr';
import { handlers } from '../../../.mocks/handlers';
import { Card } from '.';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Card Component', () => {
  it('Should render CSF data after pre-rendered data', async () => {
    render(
      <SWRConfig value={{ dedupingInterval: 0 }}>
        <Card />
      </SWRConfig>,
    );

    await waitFor(() => screen.getByRole('card-title'));
    expect(screen.getByRole('card-title')).toHaveTextContent('The financial crisis');

    await waitFor(() => screen.getByRole('card-body'));
    expect(screen.getByRole('card-body')).toHaveTextContent(
      'Unemployment rates in the major advanced economies are at levels substantially higher than those prior to the Lehman shock.',
    );
    // screen.debug();
  });

  it('Should render Error text when fetch failed', async () => {
    server.use(
      rest.get('https://api.app/message', (_, res, ctx) => {
        return res(
          ctx.status(500),
          // ctx.json({
          //   message: 'Bad Request',
          // }),
        );
      }),
    );

    render(
      <SWRConfig value={{ dedupingInterval: 0 }}>
        <Card />
      </SWRConfig>,
    );

    await waitFor(async () => {
      expect(await screen.findByText('Error')).toBeInTheDocument();
      // const alerts = await screen.findAllByRole('error-text');
      // expect(alerts).toHaveLength(1);
    });
  });
});
