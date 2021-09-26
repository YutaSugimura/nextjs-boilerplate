import '@testing-library/jest-dom/extend-expect';
import { renderHook } from '@testing-library/react-hooks';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { SWRConfig } from 'swr';
import { handlers } from '../../.mocks/handlers';
import { usePostData } from './post';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('usePostData()', () => {
  it('initial value', () => {
    const { result } = renderHook(() => usePostData(1));

    expect(result.current.isLoading).toBe(true);
    expect(result.current.isError).toBe(false);
    expect(result.current.data).toBe(undefined);
  });

  it('Should render CSF data after pre-rendered data', async () => {
    const wrapper = ({ children }: { children: React.ReactChild }) => (
      <SWRConfig value={{ dedupingInterval: 0 }}>{children}</SWRConfig>
    );
    const { result, waitForNextUpdate } = renderHook(() => usePostData(0), { wrapper });

    await waitForNextUpdate();

    expect(result.current.data?.title).toBe('Financial Crisis');
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
  });

  it('Should render Error text when fetch failed', async () => {
    server.use(
      rest.get('/api/post', (_, res, ctx) => {
        return res(ctx.status(400));
      }),
    );

    const wrapper = ({ children }: { children: React.ReactChild }) => (
      <SWRConfig value={{ dedupingInterval: 0, provider: () => new Map() }}>{children}</SWRConfig>
    );
    const { result, waitForNextUpdate } = renderHook(() => usePostData(0), { wrapper });

    await waitForNextUpdate();

    expect(result.current.data?.title).toBe(undefined);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(true);
  });
});
