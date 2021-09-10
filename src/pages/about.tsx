import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Card } from '../components/molecules/card';

type Props = {
  data: {
    title: string;
    text: string;
  };
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  if (process.env.NODE_ENV === 'development') {
    return {
      props: {
        data: {
          title: '',
          text: '',
        },
      },
    };
  }

  const data = await fetch('https://myapi.dev/ssr').then((res) => res.json());

  return {
    props: {
      data,
    },
  };
};

const Page: React.VFC<Props> = ({ data }) => {
  return (
    <div>
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>About Page</h1>

        <div>
          <h2>{data.title}</h2>
          <p>{data.text}</p>
        </div>

        <Card />
      </main>

      <Link href="/">
        <a>to Index</a>
      </Link>
    </div>
  );
};

export default Page;
