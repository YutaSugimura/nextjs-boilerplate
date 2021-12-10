/**
 * @jest-environment jsdom
 */

import { renderHook } from "@testing-library/react-hooks";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { SWRConfig } from "swr";
import { handlers } from "../../../.mocks/handlers";
import { useFetch } from "./";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("useFetch()", () => {
  it("initial value", () => {
    const { result } = renderHook(() => useFetch());

    expect(result.current.isLoading).toBe(true);
    expect(result.current.isError).toBe(false);
    expect(result.current.data).toBe(undefined);
  });

  it("Should render CSF data after pre-rendered data", async () => {
    const wrapper = ({ children }: { children: React.ReactChild }) => (
      <SWRConfig value={{ provider: () => new Map(), dedupingInterval: 0 }}>
        {children}
      </SWRConfig>
    );
    const { result, waitForNextUpdate } = renderHook(() => useFetch(), {
      wrapper,
    });

    await waitForNextUpdate();

    expect(result.current.data).toEqual({ message: "Hello World" });
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
  });

  it("Should render Error text when fetch failed", async () => {
    server.use(
      rest.get("/api/hello", (_, res, ctx) => {
        return res(ctx.status(400));
      })
    );

    const wrapper = ({ children }: { children: React.ReactChild }) => (
      <SWRConfig value={{ provider: () => new Map(), dedupingInterval: 0 }}>
        {children}
      </SWRConfig>
    );

    const { result, waitForNextUpdate } = renderHook(() => useFetch(), {
      wrapper,
    });

    await waitForNextUpdate();

    expect(result.current.data).toBe(undefined);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(true);
  });
});
