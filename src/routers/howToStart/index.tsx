import {
  Main,
  Wrapper,
  Img,
  Title,
  Text,
  WrapperHeader,
  TitleHeader,
  Block,
  WrapperBlock
} from './styled';
import IMGGrate from 'assets/icons/franchise-how-to-start.png';
import IMGLogo from 'assets/icons/how-to-start-01.jpg';
import { InfoBlock } from './infoBlock';
import { Box } from '@mui/material';
import React from 'react';
import { Feedbacks } from 'components/Feedbacks';

export const HowToStart = () => {
  return (
    <Main>
      <WrapperHeader>
        <TitleHeader>HOW TO START</TitleHeader>
      </WrapperHeader>
      <Wrapper>
        <Block>
          <Box>
            <Img src={IMGLogo} alt="Logo" title="Logo" />
          </Box>
          <WrapperBlock>
            <Title>HOW TO START A FRANCHISING</Title>
            <Text>
              When you’re looking to buy or start your own company in US, you have several options.
              You could start from scratch, building your own original business from the ground up.
              You could buy an existing stand-alone business someone has already built. Or, you
              might buy into a franchise business model, system (either an existing business or a
              new one). As with any of these options, franchise business models come with their own
              set of pros and cons, but sometimes they make a lot of sense for a business owner.
            </Text>
          </WrapperBlock>
        </Block>
      </Wrapper>
      <InfoBlock />
      <Wrapper>
        <Block>
          <WrapperBlock>
            <Title>GREAT OPPORTUNITY FROM THE MENTAL HEALTH FRANCHISE</Title>
            <Text>
              The franchise has, hopefully, already done the work of building a brand and patients
              trust. That means you’re more likely to have customers as soon as you open, and you
              can even leverage on existing knowledge of the brand to build excitement for the
              opening beforehand. Your business is backed by the overall franchise, which means you
              have more leeway for growing pains than you might with a stand-alone small business.
            </Text>
          </WrapperBlock>
          <Box>
            <Img src={IMGGrate} alt="Logo" title="Logo" />
          </Box>
        </Block>
      </Wrapper>
      <Feedbacks />
    </Main>
  );
};
