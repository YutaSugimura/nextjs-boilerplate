import Head from 'next/head';

type Props = {};

const Page: React.VFC<Props> = () => {
  return (
    <div>
      <Head>
        <title>Recipe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>カリカリ甘辛れんこん</h1>
        <p>
          東海テレビ「スイッチ！」で紹介！
          れんこんは大きめに切ることで食感を楽しめます。れんこんを袋に入れて薄力粉をまぶす事で甘辛味がしっかりつき、ごはんに合う1品になります。
        </p>

        <div className="flex flex-row">
          <div className="w-1/2">
            <img
              className="w-6/12"
              width="400px"
              src="https://firebasestorage.googleapis.com/v0/b/kairyomeshi.appspot.com/o/demo.jpeg?alt=media&token=43cc76f8-e7bd-4661-bd6a-a2b5714d79ea"
              alt="title"
            />
          </div>

          <div className="w-1/2">
            <span>レシピ</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
