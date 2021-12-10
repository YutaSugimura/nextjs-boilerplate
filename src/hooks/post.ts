import useSWR from "swr";
import type { FetchPost } from "../pages/api/post";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const usePostData = (id: number | string, fallbackData?: FetchPost) => {
  const { data, error, mutate } = useSWR<FetchPost>(
    `/api/post?id=${id}`,
    fetcher,
    {
      fallbackData,
    }
  );

  return {
    isLoading: !data && !error,
    isError: error ? true : false,
    data: data?.data,
    mutate,
  };
};
