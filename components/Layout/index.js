import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Wrapper, Container } from '@/elements/index';
export default function index({ children }) {
  return (
    <Wrapper>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </Wrapper>
  );
}
