import { Container, Wrapper, Name, Text } from './styled';
import { DATA_FEEDBACKS } from './mocData';
import { Box } from '@mui/material';
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

export const Feedbacks = () => {
  const ref = useRef<Slider | null>(null);

  return (
    <Container>
      <Wrapper>
        <Slider ref={ref} {...settings}>
          {DATA_FEEDBACKS.map((feedback, index) => (
            <Wrapper key={index}>
              <Box style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={feedback.img} alt={feedback.img} title={feedback.img} />
              </Box>
              <Box>
                <Text>{feedback.feedbacks}</Text>
                <Name>{feedback.info}</Name>
              </Box>
            </Wrapper>
          ))}
        </Slider>
      </Wrapper>
    </Container>
  );
};
