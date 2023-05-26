import { HeaderContainer, Background, LeftButton, RightButton, Buttons, Img } from './styled';
import IMGRight from 'assets/icons/arrow-point-to-right.png';
import IMGLeft from 'assets/icons/arrow-point-to-left.png';
import IMGThree from 'assets/icons/images-three.jpg';
import IMGOne from 'assets/icons/images-one.jpg';
import IMGTwo from 'assets/icons/images-two.jpg';
import { LayoutHeader } from './LayoutHeader';
import { LayoutNav } from './LayoutNav';
import Slider from 'react-slick';
import { useRef } from 'react';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  useTransform: false
};

const IMAGES = [IMGOne, IMGTwo, IMGThree];

export const Header = () => {
  const ref = useRef<Slider | null>(null);

  const onNext = (): void => {
    ref.current?.slickNext();
  };

  const onPrev = (): void => {
    ref.current?.slickPrev();
  };

  return (
    <HeaderContainer>
      <Background ref={ref} {...settings}>
        {IMAGES.map((img, index) => (
          <Img key={index} src={img} alt={img} title={img} />
        ))}
      </Background>
      <LayoutHeader />
      <LayoutNav />
      <Buttons>
        <LeftButton src={IMGLeft} alt="Left Button" title="Left Button" onClick={onPrev} />
        <RightButton src={IMGRight} alt="Right Button" title="Right Button" onClick={onNext} />
      </Buttons>
    </HeaderContainer>
  );
};
