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
  InfoCard,
  TitleCard,
  Address,
  Wrapper
} from './styled';
import IMGLeft from 'assets/icons/arrow-point-to-left.png';
import IMGRight from 'assets/icons/arrow-point-to-right.png';
import { DATA_CLINICALS } from './mocData';
import { Box } from '@mui/material';
import Slider from 'react-slick';
import { FC, useEffect, useRef } from 'react';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  useTransform: false
};

export const Location: FC = () => {
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
        <Title>POSITIVE RESET SERVICES LOCATIONS</Title>
        <Text>
          POSITIVE RESET SERVICES is a successful franchise company that opens Mental Health Clinics
          across Unlined Sates. POSITIVE RESET SERVICES works like a professional system that has
          stood the test of time, financial success and successful treatment outcomes.
        </Text>
      </Info>
      <Carusell>
        <LeftButton src={IMGLeft} alt="Left Button" title="Left Button" onClick={onPrev} />
        <Clinicals ref={ref} {...settings}>
          {DATA_CLINICALS.map((clinical, index) => (
            <Wrapper key={index}>
              <Box>
                <Img src={clinical.img} alt={clinical.img} title={clinical.img} />
              </Box>
              <Box>
                <TitleCard>{clinical.name}</TitleCard>
                <Address>{clinical.address}</Address>
                <InfoCard>{clinical.tel}</InfoCard>
                <InfoCard>{clinical.mail}</InfoCard>
                <InfoCard>{clinical.site}</InfoCard>
              </Box>
            </Wrapper>
          ))}
        </Clinicals>
        <RightButton src={IMGRight} alt="Right Button" title="Right Button" onClick={onNext} />
      </Carusell>
    </Container>
  );
};
