import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useFetch = () => {
  const { data, error } = useSWR('/api/hello', fetcher);

  return {
    data,
    isLoading: data ? false : error ? false : true,
    isError: error ? true : false,
  };
};
