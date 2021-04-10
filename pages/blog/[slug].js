import { client } from '@/utils/client';
import Layout from '@/components/Layout';
import { Article } from '@/elements/index';
export default function index({ articles }) {
  const {
    fields: { author, body, date, excerpt, img, title, slug },
    sys: { id },
  } = articles;
  const dates = new Date(date);
  return (
    <Layout>
      <Article>
        <div className="article-imgBox">
          <img src={img.fields.file.url} alt={img.fields.title} />
        </div>
        <div className="article-content">
          <h1 className="article-title">{title}</h1>
          <small className="article-date">
            {dates.toLocaleDateString('sv-SV')}
          </small>
          <span className="article-author">{author}</span>
          <h3 className="article-excerpt">{excerpt}</h3>
          <p className="article-body">{body}</p>
        </div>
      </Article>
    </Layout>
  );
}

export async function getStaticPaths() {
  let data = await client.getEntries({
    content_type: 'posts',
  });

  return {
    paths: data.items.map((item) => ({
      params: { slug: item.fields.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: 'posts',
    'fields.slug': params.slug,
  });

  return {
    props: {
      articles: data.items[0],
    },
  };
}
