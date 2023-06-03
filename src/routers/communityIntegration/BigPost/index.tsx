import { Block, TextLow, ImgLow, TitleLow } from '../styled';
import { Container, Wrapper, Logo, Img, WrapperContent } from './styled';
import { Box } from '@mui/material';
import IMGOne from 'assets/icons/05-4.jpg';
import IMGTwo from 'assets/icons/06.jpg';
import IMGThree from 'assets/icons/07.png';
import IMGFour from 'assets/icons/08.png';
import React from 'react';

export const BigPost = () => {
  return (
    <>
      <Container>
        <Block>
          <Wrapper>
            <Box>
              <ImgLow
                src={IMGOne}
                alt="COMMUNITY INTEGRATION IS THE KEY TO RECOVERY?"
                title="COMMUNITY INTEGRATION IS THE KEY TO RECOVERY?"
              />
            </Box>
            <WrapperContent>
              <TitleLow>COMMUNITY INTEGRATION IS THE KEY TO RECOVERY?</TitleLow>
              <TextLow>
                Mental health treatments have become patient-clinic. Evaluating recovery in people
                with mental health difficulties living in the community can help to develop better
                patient-clinic services. Community integration is critical to recovery in patients
                with mental health difficulties.
              </TextLow>
            </WrapperContent>
          </Wrapper>
          <Wrapper>
            <Box>
              <ImgLow
                src={IMGTwo}
                alt="COMMUNITY INTEGRATION IS THE KEY TO RECOVERY."
                title="COMMUNITY INTEGRATION IS THE KEY TO RECOVERY."
              />
            </Box>
            <WrapperContent>
              <TitleLow>COMMUNITY INTEGRATION IS THE KEY TO RECOVERY.</TitleLow>
              <TextLow>
                Participating in mental health clinic programs promoted mental health recovery in
                people with mental health difficulties living in the community.
                Independence/self-actualization, psychological integration and social support
                improved mental health recovery in people with mental health difficulties living in
                the community.
              </TextLow>
            </WrapperContent>
          </Wrapper>
          <Wrapper>
            <Box>
              <ImgLow
                src={IMGThree}
                alt="COMMUNITY INTEGRATION IS THE KEY TO RECOVERY!"
                title="COMMUNITY INTEGRATION IS THE KEY TO RECOVERY!"
              />
            </Box>
            <WrapperContent>
              <TitleLow>COMMUNITY INTEGRATION IS THE KEY TO RECOVERY!</TitleLow>
              <TextLow>
                There is a need to develop and actively promote programs that attract people with
                mental health difficulties living in the community so that they will actively use
                mental health clinic services. Offering systematic social skills training and
                occupational rehabilitation therapy to people with mental health difficulties living
                in the community may help them function independently.
              </TextLow>
            </WrapperContent>
          </Wrapper>
        </Block>
        <Logo>
          <Img src={IMGFour} />
        </Logo>
      </Container>
    </>
  );
};
