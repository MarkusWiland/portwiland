import { data } from '@/utils/images';
export default function handler({ query: { category } }, res) {
  const filtered = data.Images.filter(
    (article) => article.category === category
  );
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: 'doesnt found' });
  }
}
