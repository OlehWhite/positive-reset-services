import {
  HeaderContainer,
  Background,
  LeftButton,
  RightButton,
  Buttons,
  Img,
  Title,
  Text
} from './styled';
import IMGRight from 'assets/icons/arrow-point-to-right.png';
import IMGLeft from 'assets/icons/arrow-point-to-left.png';
import { LayoutHeader } from './LayoutHeader';
import { LayoutNav } from './LayoutNav';
import Slider from 'react-slick';
import { useRef, useState } from 'react';
import { Box } from '@mui/material';
import { IMAGES, TEXT } from './LayoutNav/mocData';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  useTransform: false
};

export const Header = () => {
  const ref = useRef<Slider | null>(null);
  const refTwo = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const onNext = (): void => {
    ref.current?.slickNext();
    refTwo.current?.slickNext();
    setCurrentSlide((prevSlide) => (prevSlide + 1) % IMAGES.length);
  };

  const onPrev = (): void => {
    ref.current?.slickPrev();
    refTwo.current?.slickPrev();
    setCurrentSlide((prevSlide) => (prevSlide - 1 + IMAGES.length) % IMAGES.length);
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
        <Background ref={refTwo} {...settings}>
          {TEXT.map((text, index) => (
            <Box key={index} sx={{ marginLeft: 20 }}>
              <Title>{text.title}</Title>
              <Text>{text.text}</Text>
            </Box>
          ))}
        </Background>
        <RightButton src={IMGRight} alt="Right Button" title="Right Button" onClick={onNext} />
      </Buttons>
    </HeaderContainer>
  );
};
