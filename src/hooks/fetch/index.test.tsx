import '@testing-library/jest-dom/extend-expect';
import { renderHook } from '@testing-library/react-hooks';
import { setupServer } from 'msw/node';
import { SWRConfig } from 'swr';
import { handlers } from '../../../.mocks/handlers';
import { useFetch } from '.';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('useFetch()', () => {
  it('initial value', () => {
    const { result } = renderHook(() => useFetch());
    expect(result.current.isLoading).toEqual(true);
    expect(result.current.isError).toEqual(false);
    expect(result.current.data).toStrictEqual(undefined);
  });

  it('Should render CSF data after pre-rendered data', async () => {
    const wrapper = ({ children }: { children: React.ReactChild }) => (
      <SWRConfig value={{ dedupingInterval: 0 }}>{children}</SWRConfig>
    );
    const { result, waitForNextUpdate } = renderHook(() => useFetch(), { wrapper });

    await waitForNextUpdate();

    expect(result.current.data).toStrictEqual({ message: 'Hello World' });
    expect(result.current.isLoading).toEqual(false);
    expect(result.current.isError).toEqual(false);
  });
});
