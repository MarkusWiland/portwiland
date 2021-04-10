import { PostSection } from '@/elements/index';
import Link from 'next/link';
export default function index({
  fields: { author, body, date, excerpt, img, title, slug },
  sys: { id },
}) {
  const dates = new Date(date);

  return (
    <PostSection>
      <div className="post-postImg">
        <img src={img?.fields?.file?.url} alt={img?.fields?.description} />
      </div>

      <div className="post-postInfo">
        <h1 className="post-title">{title}</h1>
        <small className="post-date">{dates.toLocaleDateString('sv-SV')}</small>
        <p className="post-excerpt">{excerpt}</p>
        <Link href={`/blog/${slug}`}>
          <a href="#" className="post-cta">
            Läs Mer
          </a>
        </Link>
      </div>
    </PostSection>
  );
}
