import Link from 'next/link';
import { Footer, Flex } from '@/elements/index';
export default function index() {
  return (
    <Footer>
      <Flex>
        <div className="FooterLogo">
          Kodad i Next.JS med Contentful som CMS.
        </div>
        <div className="FlexDiv">
          <Link href="#">
            <a href="#">Start</a>
          </Link>
          <Link href="#">
            <a href="#">Om Mig</a>
          </Link>
          <Link href="#">
            <a href="#">Kontakta Mig</a>
          </Link>
        </div>
        <div className="FlexDiv">
          <Link href="#">
            <a href="#">Start</a>
          </Link>
          <Link href="#">
            <a href="#">Om Mig</a>
          </Link>
          <Link href="#">
            <a href="#">Kontakta Mig</a>
          </Link>
        </div>
      </Flex>
    </Footer>
  );
}
