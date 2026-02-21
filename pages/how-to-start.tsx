import {
  Main,
  Wrapper,
  Title,
  Text,
  WrapperHeader,
  TitleHeader,
  Block,
  WrapperBlock,
} from "@/otherPages/howToStart/styled";
import IMGGrate from "@/public/franchise-how-to-start.png";
import IMGLogo from "@/public/how-to-start-01.jpg";
import { InfoBlock } from "@/otherPages/howToStart/infoBlock/infoBlock";
import { Box } from "@mui/material";
import React from "react";
import { Feedbacks } from "@/components/Feedbacks/Feedbacks";
import { OtherHeader } from "@/components/Layout/OtherHeader/OtherHeader";
import IMGHeader from "@/public/start-how-to-start.jpg";
import Image from "next/image";
import Head from "next/head";

const HowToStart = () => {
  return (
    <>
      <Head>
        <title>Positive Reset Services - Call Today | How to Start</title>
        <meta
          name="keywords"
          content="Getting started,
Steps to begin,
Starting guide,
Begin your journey,
How to get started,
Starting process,
First steps,
Launching your journey,
Initiating the process,
Beginning your path,
Starting point,
Getting underway"
        />
        <meta name="description" content="HOW TO START" />
        <meta name="description2" content="HOW TO START A FRANCHISING" />
        <meta name="description3" content="GREAT OPPORTUNITY FROM THE MENTAL HEALTH FRANCHISE" />
      </Head>
      <OtherHeader />
      <Main>
        <WrapperHeader
          style={{
            backgroundImage: `url(${IMGHeader.src})`,
          }}
        >
          <TitleHeader>HOW TO START</TitleHeader>
        </WrapperHeader>
        <Wrapper>
          <Block>
            <Box>
              <Image
                id="image"
                src={IMGLogo}
                width={630}
                height={378}
                alt="HOW TO START A FRANCHISING"
                title="HOW TO START A FRANCHISING"
              />
            </Box>
            <WrapperBlock>
              <Title>HOW TO START A FRANCHISING</Title>
              <Text>
                When you’re looking to buy or start your own company in US, you have several
                options. You could start from scratch, building your own original business from the
                ground up. You could buy an existing stand-alone business someone has already built.
                Or, you might buy into a franchise business model, system (either an existing
                business or a new one). As with any of these options, franchise business models come
                with their own set of pros and cons, but sometimes they make a lot of sense for a
                business owner.
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
                opening beforehand. Your business is backed by the overall franchise, which means
                you have more leeway for growing pains than you might with a stand-alone small
                business.
              </Text>
            </WrapperBlock>
            <Box>
              <Image
                id="image"
                src={IMGGrate}
                width={630}
                height={354}
                alt="GREAT OPPORTUNITY FROM THE MENTAL HEALTH FRANCHISE"
                title="GREAT OPPORTUNITY FROM THE MENTAL HEALTH FRANCHISE"
              />
            </Box>
          </Block>
        </Wrapper>
        <Feedbacks />
      </Main>
    </>
  );
};

export default HowToStart;
