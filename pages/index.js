import Head from 'next/head';
// Importing components
import Layout from '@/components/Layout';
import Banner from '@/components/Banner';
// Importing styling elements
import { P } from '@/elements/index';
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner />
        <P size="small">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          dolor reprehenderit odit dicta provident ea rerum neque omnis
          veritatis atque aut, exercitationem debitis, harum ad dolore veniam.
          Culpa, maxime similique!
        </P>
        <Banner /> <Banner />
      </main>
    </Layout>
  );
}
