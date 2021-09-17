import useSWR from 'swr';

type Props = {};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const Card: React.VFC<Props> = () => {
  const { data, error } = useSWR<{ message: string }>('https://api.app/message', fetcher);

  if (error) return <p role="error-text">Error</p>;
  if (!data) return <p role="loading-text">Loading...</p>;

  return <h2 role="title">{data.message}</h2>;
};
