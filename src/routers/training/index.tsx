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
import TrainingBottons from 'components/TrainingBottons';
import IMGFour from 'assets/icons/training-04-1.jpg';
import IMGThee from 'assets/icons/training-01-1.jpg';
import IMGOne from 'assets/icons/training-03-1.jpg';
import IMGTwo from 'assets/icons/training-02-1.jpg';
import { Feedbacks } from 'components/Feedbacks';
import { Box } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export const Training = () => {
  return (
    <Main>
      <Helmet>
        <title>Positive Reset Services - Call Today | Training</title>
        <meta name="description41" content="TRAINING" />
        <meta
          name="description42"
          content="FRANCHISE TRAINING IS IMPORTANT
Entrusting franchise owners to represent a brand is a significant risk. Most franchises provide training programs to ensure all those representing the brand are aligned with the franchisor. Franchisees attend an initial training program and often have ongoing training to keep everyone on the same page. This guidance also keeps the team abreast of changes as the system evolves."
        />
        <meta
          name="description43"
          content="LEARN TO DUPLICATE
One of the most important reasons franchises offer training programs is to achieve brand consistency so every customer has the same experience no matter which location they enter. The franchise has to educate and instruct its owners on how to duplicate the original."
        />
        <meta
          name="description44"
          content="OPERATION MANUAL The operations manual is the rule book if you will for a franchise system. It contains all the aspects of the business the owners need to learn to operate the franchise. Like a school syllabus outlines a course, the manual serves a similar purpose. Every business has its unique styles, including dialect, recipes, uniforms, how to greet customers, etc. Traditionally, the operations manual includes the franchise goals, daily procedures, accounting, customer service, personnel topics and training employees. The information included in the manual is confidential. Often, franchisees are required to sign a non-disclosure agreement before beginning this phase. The franchisor also outlines specific performance expectations and instructions on how to provide sales reports, etc."
        />
        <meta
          name="description45"
          content="TRAINING AT HEADQUARTERS After the operations manual training, franchisees are taken to corporate headquarters for hands-on training. In this stage, new franchise owners tour the facility and witness the experts in action. During this tour, is a perfect opportunity for franchisees to ask questions and test what they have learned. It’s also a time to see how to operate the machinery and/or make recipes for the first time.

Training at headquarters can last a few days to one week. This is the time franchise owners need to grasp each concept to operate their business. In many cases, franchise owners are encouraged to bring along a manager or employee who will train other staff members on-site."
        />
        <meta
          name="description47"
          content="ON_SITE TRAINING This type of training is carried out at the new franchise location. The franchisee must be familiar with the machinery, recipes, customer service training as well as knowledge on all business procedures. On-site, the franchisee, is one step from being an expert. When they get to this phase, they hire and train staff for specific roles such as cashiers, customer service, and office positions. Often times, a franchise mentor from the corporate office is assigned to new franchisees. This representative can assist with the grand opening of the new franchise."
        />
        <meta
          name="description48"
          content="CONTINUOUS TRAINING At this point, the new franchisee is up to speed in carrying out the daily operations of the business. A few functions may still need attention to work out the kinks, but the bulk of what was included in the manual is mastered. Franchise teams provide ongoing training through field training programs, webinars, on-site visits, and conferences. Continuous training is essential to keeping franchisees informed about insider tips, new products or services, and future advertising and marketing campaigns."
        />
        <meta
          name="description49"
          content="WHY TRAINING IS IMPORTANT?
Why do Franchisors Provide Training Programs? The goals of any great franchise system are to achieve consistent, sustainable replication of their brand promise to consumers, and for the franchise system to be financially successful at every level. Training is a major component of achieving that goal."
        />
      </Helmet>
      <WrapperHeader>
        <TitleHeader>TRAINING</TitleHeader>
      </WrapperHeader>
      <Wrapper>
        <Block>
          <Box>
            <Img
              src={IMGThee}
              alt="FRANCHISE TRAINING IS IMPORTANT"
              title="FRANCHISE TRAINING IS IMPORTANT"
            />
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
            <Img
              src={IMGFour}
              alt="WHY TRAINING IS IMPORTANT?"
              title="WHY TRAINING IS IMPORTANT?"
            />
          </Box>
        </Block>
      </Wrapper>
      <Feedbacks />
    </Main>
  );
};
