import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useFetch = () => {
  const { data, error, mutate } = useSWR("/api/hello", fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error ? true : false,
    mutate,
  };
};
