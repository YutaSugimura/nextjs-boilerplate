// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Head from 'next/head';
import { Card } from '../components/molecules/card';

type Props = {};

const Page: React.VFC<Props> = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Home</h1>
        <p>text</p>
        <Card />
      </main>
    </>
  );
};

export default Page;
