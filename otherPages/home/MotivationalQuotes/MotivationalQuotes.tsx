import {
  Container,
  Wrapper,
  Info,
  Post,
  Title,
  WrapperImg,
  Text,
  WrapperPicture,
  WrapperBox,
} from "./styled";
import IMGOne from "@/public/01.png";
import IMGTwo from "@/public/02.png";
import IMGThree from "@/public/03.png";
import IMGFour from "@/public/04.png";
import IMGMan from "@/public/Man-542x1024.png";
import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";

export const MotivationalQuotes = () => {
  return (
    <Container>
      <Wrapper>
        <Info>
          <Post>
            <WrapperImg>
              <WrapperBox>
                <Image src={IMGOne} width={82} height={82} alt="One Img" title="One Img" />
              </WrapperBox>
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
              <WrapperBox>
                <Image src={IMGTwo} width={82} height={82} alt="One Img" title="One Img" />
              </WrapperBox>
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
              <WrapperBox>
                <Image src={IMGThree} width={82} height={82} alt="One Img" title="One Img" />
              </WrapperBox>
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
              <WrapperBox>
                <Image src={IMGFour} width={82} height={82} alt="One Img" title="One Img" />
              </WrapperBox>
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
          <Image src={IMGMan} width={359} height={678} alt="Man" title="Man" />
        </WrapperPicture>
      </Wrapper>
    </Container>
  );
};
