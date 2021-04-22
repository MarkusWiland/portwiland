import { client } from '@/utils/client';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { Input } from '@/elements/index';
import { useState } from 'react';
export default function blog({ articles }) {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e);
  };
  const filterData = () => {
    const search = articles.filter((data) =>
      data.fields.title.toLowerCase().includes(value.toLowerCase())
    );
    return search;
  };
  return (
    <Layout>
      <Input
        type="text"
        placeholder="Sök efter blogg inlägg"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      {filterData() ? (
        filterData().map((article) => (
          <>
            <Link href={`/blog/${article.fields.slug}`} key={article.sys.id}>
              <a>
                <h1>{article.fields.title}</h1>
              </a>
            </Link>
            <p>{article.fields.excerpt}</p>
          </>
        ))
      ) : (
        <div>Finns inga posts..</div>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await client.getEntries({
    content_type: 'posts',
  });
  return {
    props: {
      articles: data.items,
    },
  };
}
