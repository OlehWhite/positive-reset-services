import {
  Container,
  Wrapper,
  Info,
  Picture,
  Post,
  Title,
  Img,
  WrapperImg,
  Text,
  WrapperPicture
} from './styled';
import IMGOne from 'assets/icons/01.png';
import IMGTwo from 'assets/icons/02.png';
import IMGThree from 'assets/icons/03.png';
import IMGFour from 'assets/icons/04.png';
import IMGMan from 'assets/icons/Man-542x1024.png';
import { Box } from '@mui/material';

export const MotivationalQuotes = () => {
  return (
    <Container>
      <Wrapper>
        <Info>
          <Post>
            <WrapperImg>
              <Img src={IMGOne} alt="One Img" title="One Img" />
            </WrapperImg>
            <Box>
              <Title>“THE SECRET OF GETTING AHEAD IS GETTING STARTED.” MARK TWAIN</Title>
              <Text>
                Although it may scare you to death to begin your own franchise or business, the mere
                fact that you’re willing to begin to work toward your goals puts you one step ahead
                of most others.
              </Text>
            </Box>
          </Post>
          <Post>
            <WrapperImg>
              <Img src={IMGTwo} alt="Two Img" title="Two Img" />
            </WrapperImg>
            <Box>
              <Title>“AIM FOR THE MOON. IF YOU MISS, YOU MAY HIT A STAR.” W. CLEMENT STONE</Title>
              <Text>
                Life has a way of switching our paths mid-journey. Go for what you want, but if you
                don’t get exactly what you are wishing for, don’t forget to see the beauty in
                unintended results.
              </Text>
            </Box>
          </Post>
          <Post>
            <WrapperImg>
              <Img src={IMGThree} alt="Three Img" title="Three Img" />
            </WrapperImg>
            <Box>
              <Title>“WHAT YOU DO TODAY CAN IMPROVE ALL YOUR TOMORROWS.” RALPH MARSTON</Title>
              <Text>
                Every decision and action you take today affects what your life will be like
                tomorrow. Don’t be afraid to take risks and pursue your business-related dreams as
                those will be the things that will increase your rewards.
              </Text>
            </Box>
          </Post>
          <Post>
            <WrapperImg>
              <Img src={IMGFour} alt="Four Img" title="Four Img" />
            </WrapperImg>
            <Box>
              <Title>“IF YOU’RE GOING THROUGH HELL, KEEP GOING.” WINSTON CHURCHILL</Title>
              <Text>
                There are going to be moments where you are ready to fly the white flag and
                surrender. No matter how difficult things become though, never give up on your
                dreams. Just keep putting one foot in front of the other and you will arrive at
                success.
              </Text>
            </Box>
          </Post>
        </Info>
        <WrapperPicture>
          <Picture src={IMGMan} alt="Man" title="Man" />
        </WrapperPicture>
      </Wrapper>
    </Container>
  );
};
