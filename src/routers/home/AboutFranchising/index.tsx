import {
  Container,
  Info,
  Text,
  Title,
  Carusell,
  Clinicals,
  LeftButton,
  RightButton,
  Img,
  Wrapper,
  Button,
  PostText
} from './styled';
import IMGRight from 'assets/icons/arrow-point-to-right.png';
import IMGLeft from 'assets/icons/arrow-point-to-left.png';
import { DATA_ABOUT_FRANCHISING } from './mocData';
import { Box } from '@mui/material';
import Slider from 'react-slick';
import {FC, useEffect, useRef} from 'react';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  useTransform: false
};

export const AboutFranchising: FC = () => {
  const ref = useRef<Slider | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      onNext();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const onNext = (): void => {
    ref.current?.slickNext();
  };

  const onPrev = (): void => {
    ref.current?.slickPrev();
  };

  return (
    <Container>
      <Info>
        <Title>NEWS ABOUT FRANCHISING OPPORTUNITIES</Title>
        <Text>
          Reading news helps you to learn something new every day, and slow down aging. Reading news
          helps you to distinguish truth from falsehoods. Reading news can enhance your creativity.
          Reading news gives you leads with events.
        </Text>
      </Info>
      <Carusell>
        <LeftButton src={IMGLeft} alt="Left Button" title="Left Button" onClick={onPrev} />
        <Clinicals ref={ref} {...settings}>
          {DATA_ABOUT_FRANCHISING.map((franchising, index) => (
            <Wrapper key={index}>
              <Box>
                <Img src={franchising.img} alt={franchising.img} title={franchising.img} />
              </Box>
              <Box>
                <Button>{franchising.button}</Button>
                <PostText>{franchising.text}</PostText>
              </Box>
            </Wrapper>
          ))}
        </Clinicals>
        <RightButton src={IMGRight} alt="Right Button" title="Right Button" onClick={onNext} />
      </Carusell>
    </Container>
  );
};
