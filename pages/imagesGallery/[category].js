import { server } from '../../config/index';
import Layout from '@/components/Layout';
import { Img } from '@/elements/index';
export default function category({ owner }) {
  console.log(owner);

  return (
    <Layout>
      <div>
        <h1>{owner.category}</h1>
        {owner && owner.img.map((img, i) => <Img src={img} key={i} />)}
      </div>
    </Layout>
  );
}
export async function getStaticProps(context) {
  const response = await fetch(`${server}/api/data/${context.params.category}`);

  const owner = await response.json();

  return {
    props: {
      owner,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch(`${server}/api/data/data`);
  const data = await response.json();
  const paths = data.Images.map((ninja) => {
    return {
      params: { category: ninja.category },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
