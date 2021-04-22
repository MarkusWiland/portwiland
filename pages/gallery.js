import Layout from '@/components/Layout';
import { server } from '../config/index';
import Link from 'next/link';
import { Img } from '@/elements/index';
export default function gallery({ data }) {
  return (
    <Layout>
      <h1>Gallery</h1>
      {data &&
        data.Images.map((images) => (
          <span key={images.title}>
            <Link href={`/imagesGallery/${images.category}`}>
              <a>
                <Img src={images.img[0]} />
              </a>
            </Link>
          </span>
        ))}
    </Layout>
  );
}
export async function getStaticProps() {
  const res = await fetch(`${server}/api/data/data`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
