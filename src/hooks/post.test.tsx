import '@testing-library/jest-dom/extend-expect';
import { renderHook } from '@testing-library/react-hooks';
import { setupServer } from 'msw/node';
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
    expect(result.current.isLoading).toEqual(true);
    expect(result.current.isError).toEqual(false);
    expect(result.current.data).toStrictEqual(undefined);
  });

  it('Should render CSF data after pre-rendered data', async () => {
    const wrapper = ({ children }: { children: React.ReactChild }) => (
      <SWRConfig value={{ dedupingInterval: 0 }}>{children}</SWRConfig>
    );
    const { result, waitForNextUpdate } = renderHook(() => usePostData(0), { wrapper });

    await waitForNextUpdate();

    expect(result.current.data?.title).toEqual('Financial Crisis');
    expect(result.current.isLoading).toEqual(false);
    expect(result.current.isError).toEqual(false);
  });
});
