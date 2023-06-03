import {
  Main,
  Block,
  Img,
  Text,
  Title,
  TitleHeader,
  Wrapper,
  WrapperBlock,
  WrapperHeader
} from './styled';
import TrainingBottons from '../../components/TrainingBottons';
import IMGFour from '../../assets/icons/training-04-1.jpg';
import IMGThee from '../../assets/icons/training-01-1.jpg';
import IMGOne from '../../assets/icons/training-03-1.jpg';
import IMGTwo from '../../assets/icons/training-02-1.jpg';
import { Feedbacks } from '../../components/Feedbacks';
import { Box } from '@mui/material';
import React from 'react';

export const Training = () => {
  return (
    <Main>
      <WrapperHeader>
        <TitleHeader>TRAINING</TitleHeader>
      </WrapperHeader>
      <Wrapper>
        <Block>
          <Box>
            <Img src={IMGThee} alt="FRANCHISE TRAINING IS IMPORTANT" title="FRANCHISE TRAINING IS IMPORTANT" />
          </Box>
          <WrapperBlock>
            <Title>FRANCHISE TRAINING IS IMPORTANT</Title>
            <Text>
              Entrusting franchise owners to represent a brand is a significant risk. Most
              franchises provide training programs to ensure all those representing the brand are
              aligned with the franchisor. Franchisees attend an initial training program and often
              have ongoing training to keep everyone on the same page. This guidance also keeps the
              team abreast of changes as the system evolves.
            </Text>
          </WrapperBlock>
        </Block>
        <Block>
          <WrapperBlock>
            <Title>LEARN TO DUPLICATE</Title>
            <Text>
              One of the most important reasons franchises offer training programs is to achieve
              brand consistency so every customer has the same experience no matter which location
              they enter. The franchise has to educate and instruct its owners on how to duplicate
              the original.
            </Text>
          </WrapperBlock>
          <Box>
            <Img src={IMGTwo} alt="LEARN TO DUPLICATE" title="LEARN TO DUPLICATE" />
          </Box>
        </Block>
        <Block>
          <Box>
            <Img src={IMGOne} alt="Logo" title="Logo" />
          </Box>
          <WrapperBlock>
            <TrainingBottons />
          </WrapperBlock>
        </Block>
        <Block>
          <WrapperBlock>
            <Title>WHY TRAINING IS IMPORTANT?</Title>
            <Text>
              Why do Franchisors Provide Training Programs? The goals of any great franchise system
              are to achieve consistent, sustainable replication of their brand promise to
              consumers, and for the franchise system to be financially successful at every level.
              Training is a major component of achieving that goal.
            </Text>
          </WrapperBlock>
          <Box>
            <Img src={IMGFour} alt="WHY TRAINING IS IMPORTANT?" title="WHY TRAINING IS IMPORTANT?" />
          </Box>
        </Block>
      </Wrapper>
      <Feedbacks />
    </Main>
  );
};
