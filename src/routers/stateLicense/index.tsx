import {
  Main,
  WrapperHeader,
  TitleHeader,
  Wrapper,
  Block,
  Img,
  Text,
  Title,
  WrapperBlock
} from './styled';
import React from 'react';
import IMGOne from 'assets/icons/StateLicense-01.jpg';
import IMGTwo from 'assets/icons/StateLicense-02.jpg';
import IMGThee from 'assets/icons/StateLicense-03.jpg';
import { Box } from '@mui/material';
import { Feedbacks } from 'components/Feedbacks';
import { Helmet } from 'react-helmet-async';

export const StateLicense = () => {
  return (
    <Main>
      <Helmet>
        <title>Positive Reset Services - Call Today | State License</title>
        <meta name="description36" content="STATE LICENSE" />
        <meta
          name="description37"
          content="GETTING STATE LICENSE
POSITIVE RESET SERVICES Franchise has developed a one-stop approach and a successful system for complying with state requirements, adjusting policies and procedures to meet those requirements, and using sound business judgment to create profitable and effective mental health programs."
        />
        <meta
          name="description38"
          content="UNIVERSAL SYSTEM
There are many hurdles and red tape involved in becoming a licensed mental health facility. At POSITIV RESET SERVICES, we’ve made it our mission to cut through the red tape and help you overcome obstacles to make your vision a reality – not just a reality, but a profitable one."
        />
        <meta
          name="description39"
          content="LICENSE OF BEHAVIORAL HEALTH CLINIC | HOW CAN WE HELP?
The franchise has, hopefully, already done the work of building a brand and patients trust. That means you’re more likely to have customers as soon as you open, and you can even leverage on existing knowledge of the brand to build excitement for the opening beforehand. Your business is backed by the overall franchise, which means you have more leeway for growing pains than you might with a stand-alone small business."
        />
        <meta
          name="description40"
          content="POSITIVE RESET SERVICES takes the responsibility of developing a successful franchise system and obtaining a license for a mental health clinic, you can get a profitable business with a reliable system. Our experience allows you to combine your vision with acceptable standards and corresponding paid services. You manage the project with your vision, and we will make sure that its parts bring you a successful future."
        />
      </Helmet>
      <WrapperHeader>
        <TitleHeader>STATE LICENSE</TitleHeader>
      </WrapperHeader>
      <Wrapper>
        <Block>
          <Box>
            <Img src={IMGThee} alt="GETTING STATE LINCENSE" title="GETTING STATE LINCENSE" />
          </Box>
          <WrapperBlock>
            <Title>GETTING STATE LICENSE</Title>
            <Text>
              POSITIVE RESET SERVICES Franchise has developed a one-stop approach and a successful
              system for complying with state requirements, adjusting policies and procedures to
              meet those requirements, and using sound business judgment to create profitable and
              effective mental health programs.
            </Text>
          </WrapperBlock>
        </Block>
        <Block>
          <WrapperBlock>
            <Title>UNIVERSAL SYSTEM</Title>
            <Text>
              There are many hurdles and red tape involved in becoming a licensed mental health
              facility. At POSITIVE RESET SERVICES, we’ve made it our mission to cut through the red
              tape and help you overcome obstacles to make your vision a reality – not just a
              reality, but a profitable one.
            </Text>
          </WrapperBlock>
          <Box>
            <Img src={IMGOne} alt="UNIVERSAL SYSTEM" title="UNIVERSAL SYSTEM" />
          </Box>
        </Block>
        <Block>
          <Box>
            <Img
              src={IMGTwo}
              alt="LICENSE OF BEHAVIORAL HEALTH CLINIC | HOW CAN WE HELP?"
              title="LICENSE OF BEHAVIORAL HEALTH CLINIC | HOW CAN WE HELP?"
            />
          </Box>
          <WrapperBlock>
            <Title>LICENSE OF BEHAVIORAL HEALTH CLINIC | HOW CAN WE HELP?</Title>
            <Text>
              The franchise has, hopefully, already done the work of building a brand and patients
              trust. That means you’re more likely to have customers as soon as you open, and you
              can even leverage on existing knowledge of the brand to build excitement for the
              opening beforehand. Your business is backed by the overall franchise, which means you
              have more leeway for growing pains than you might with a stand-alone small business.
            </Text>
          </WrapperBlock>
        </Block>
        <Text>
          POSITIVE RESET SERVICES takes the responsibility of developing a successful franchise
          system and obtaining a license for a mental health clinic, you can get a profitable
          business with a reliable system. Our experience allows you to combine your vision with
          acceptable standards and corresponding paid services. You manage the project with your
          vision, and we will make sure that its parts bring you a successful future.
        </Text>
      </Wrapper>
      <Feedbacks />
    </Main>
  );
};
