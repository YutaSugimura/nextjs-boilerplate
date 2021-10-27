import type {
  GetServerSideProps,
  GetStaticPaths,
  InferGetStaticPropsType,
  // GetStaticProps,
  NextPage,
} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { usePostData } from '../../hooks/post';
import type { FetchPost } from '../api/post';

type Props = InferGetStaticPropsType<typeof getServerSideProps>;

const Page: NextPage<Props> = ({ fallbackData }) => {
  const router = useRouter();
  const { id } = router.query;
  const _id = !id ? '0' : Array.isArray(id) ? id[0] : id;
  const { isLoading, isError, data } = usePostData(_id, fallbackData);

  if (isLoading) {
    return <div>loading</div>;
  }

  if (isError || !data) {
    return <div>error</div>;
  }

  const { title, body } = data;

  return (
    <div className="w-screen h-screen">
      <Head>
        <title>{title} | Nextjs</title>
        <meta name="description" content="Nextjs Top Page" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="http://localhost:3000/" />
        <link rel="apple-touch-icon" href="webclip.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <meta property="og:admins" content="（FB_ID）" /> */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Create Next App" />
        <meta property="og:site_name" content="Create Next App" />
        <meta property="og:description" content="Nextjs Top Page" />
        <meta property="og:url" content="http://localhost:3000/" />
        <meta
          property="og:image"
          content="https://camo.githubusercontent.com/92ec9eb7eeab7db4f5919e3205918918c42e6772562afb4112a2909c1aaaa875/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313630373535343338352f7265706f7369746f726965732f6e6578742d6a732f6e6578742d6c6f676f2e706e67"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Tweeter_id" />
      </Head>

      <div className="container h-full p-3 mx-auto">
        <main className="w-full">
          <h1 className="text-black text-xl md:text-2xl font-bold">{title}</h1>

          <div className="pt-5">
            <p className="text-black text-sm md:text-base">{body}</p>
          </div>
        </main>

        <div className="pt-5">
          <Link href="/">
            <a className="flex justify-center items-center leading-none text-base text-blue-500 hover:text-black">
              ← top page
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;

/** Server Side Rendering */
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const path = context.resolvedUrl;
  const url = context.req.headers.referer;

  if (!url) {
    return {
      props: {},
    };
  }

  if (!id || Array.isArray(id)) {
    return {
      props: {},
    };
  }

  const basePath = url.replace(path, '');
  const data: FetchPost = await fetch(`${basePath}/api/post?id=${id}`).then((res) => res.json());

  return {
    props: {
      fallbackData: data,
    },
  };
};

/** Static Site Generation */
// export const getStaticProps: GetStaticProps = async (context) => {
//   const { id } = context.params;

//   const res = await fetch(`https://.../api/post?id=${id}`);
//   const data: FetchPost = await res.json();

//   return {
//     props: {
//       fallbackData: data,
//     },
//   };
// };

/** Incremental Static Regeneration */
// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [{ params: { id: '1' } }],
//     fallback: true,
//     revalidate: 60,
//   };
// };
