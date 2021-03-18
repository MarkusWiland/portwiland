import {
  BannerContainer,
  BannerLeft,
  BannerRight,
  BannerImg,
  H1,
} from '@/elements/index';
export default function index() {
  return (
    <BannerContainer>
      <BannerLeft>
        <H1 background={('#000', '#f3fd')}>Markus Wiland</H1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nesciunt
        aliquid atque tenetur? Eligendi rerum omnis sit quod, eos vel commodi
        debitis atque sed fugiat, quidem sapiente iusto sunt reprehenderit!
      </BannerLeft>
      <BannerRight>
        <BannerImg src="/markuswiland.jpg" alt="Markus Wiland" />
      </BannerRight>
    </BannerContainer>
  );
}
