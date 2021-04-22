import Head from 'next/head';
import { client } from '@/utils/client';
// Importing components
import Layout from '@/components/Layout';
import Banner from '@/components/Banner';
import Posts from '@/components/Posts';
// Importing styling elements
import { P, Section, H1 } from '@/elements/index';
export default function Home({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Section>
          <Banner />
        </Section>
        <Section>
          <H1>
            Tre senaste <span>blogginlägg</span>
          </H1>
          <Posts posts={posts} />
        </Section>
      </main>
    </Layout>
  );
}
export async function getStaticProps() {
  const data = await client.getEntries({
    content_type: 'posts',
  });
  return {
    props: {
      posts: data.items,
    },
  };
}
