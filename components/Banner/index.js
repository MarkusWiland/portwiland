import {
  BannerContainer,
  BannerLeft,
  BannerRight,
  BannerIcons,
  BannerIcon,
  H1,
  P,
} from '@/elements/index';
import { FiInstagram } from 'react-icons/fi';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
export default function index() {
  return (
    <>
      <BannerContainer>
        <BannerLeft>
          <H1>Markus Wiland</H1>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            consequuntur sapiente rem harum vel, nihil asperiores atque iusto
            officiis cum molestias ducimus, odit natus. Sit autem alias quia est
            cumque.
          </P>
          <BannerIcons>
            <BannerIcon>
              <FiInstagram />
            </BannerIcon>
            <BannerIcon>
              <FaTwitter />
            </BannerIcon>
            <BannerIcon>
              <FaLinkedin />
            </BannerIcon>
          </BannerIcons>
        </BannerLeft>

        <BannerRight>
          <img src="/markuswiland.jpg" alt="Markus Wiland" />
        </BannerRight>
      </BannerContainer>
    </>
  );
}
