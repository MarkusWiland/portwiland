import Layout from '@/components/Layout';
import { Input } from '@/elements/index';
export default function blog() {
  return (
    <Layout>
      <Input type="text" placeholder="Sök efter blogg inlägg" />
    </Layout>
  );
}
