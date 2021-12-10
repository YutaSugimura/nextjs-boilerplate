import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
  };
};

const Page: NextPage = () => {
  return (
    <div className="w-screen min-h-screen p-5">
      <Head>
        <title>About | Nextjs</title>
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

      <main className="flex flex-col justify-center items-center w-full h-full">
        <div className="w-full">
          <h1 className="text-black text-2xl font-bold mt-3">About</h1>
        </div>

        <div className="w-full pt-5">
          <section className="w-full">
            <h2 className="text-black text-xl font-bold">Deploy</h2>
            <p>Where to deploy a site using Nextjs</p>

            <ul className="list-disc list-inside">
              <li>
                <a
                  className="text-sm text-blue-500 hover:text-gray-400"
                  href="https://vercel.com/solutions/nextjs?utm_source=next-site&utm_medium=banner&utm_campaign=next-website"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vercel
                </a>
              </li>

              <li>
                <a
                  className="text-sm text-blue-500 hover:text-gray-400"
                  href="https://www.serverless.com/plugins/serverless-nextjs-plugin"
                  target="_blank"
                  rel="noreferrer"
                >
                  AWS(Deploying with Serverless Nextjs)
                </a>
              </li>
            </ul>
          </section>

          <section className="w-full pt-2">
            <h2 className="text-black text-xl font-bold">
              Client Data Fetching
            </h2>
            <p>
              The name “SWR” is derived from stale-while-revalidate, a HTTP
              cache invalidation strategy popularized by HTTP RFC 5861. SWR is a
              strategy to first return the data from cache (stale), then send
              the fetch request (revalidate), and finally come with the
              up-to-date data.
            </p>

            <ul className="list-disc list-inside">
              <li>
                <a
                  className="text-sm text-blue-500 hover:text-gray-400"
                  href="https://swr.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  SWR
                </a>
              </li>
            </ul>
          </section>

          <section className="w-full pt-2">
            <h2 className="text-black text-xl font-bold">State</h2>
            <p></p>

            <ul className="list-disc list-inside">
              <li>
                <a
                  className="text-sm text-blue-500 hover:text-gray-400"
                  href="https://reactjs.org/docs/hooks-intro.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hooks, Context
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-blue-500 hover:text-gray-400"
                  href="https://recoiljs.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Recoil
                </a>
              </li>
            </ul>
          </section>

          <section className="w-full pt-2">
            <h2 className="text-black text-xl font-bold">Styles</h2>

            <ul className="list-disc list-inside">
              <li>
                <a
                  className="text-sm text-blue-500 hover:text-gray-400"
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tailwind
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="pt-10">
          <Link href="/">
            <a className="text-sm text-blue-500 hover:text-gray-400">
              top page
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Page;
