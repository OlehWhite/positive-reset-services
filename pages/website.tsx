import {
  Container,
  Title,
  WrapperHeader,
  Info,
  Post,
  Text,
  Block,
  Wrapper,
} from "@/otherPages/website/styled";
import { Box } from "@mui/material";
import IMGOne from "@/public/004.jpg";
import IMGTwo from "@/public/001.jpg";
import IMGThree from "@/public/002.jpg";
import IMGFour from "@/public/003.jpg";
import { VideoPost } from "@/otherPages/website/VideoPost/VideoPost";
import { InfoPost } from "@/otherPages/website/InfoPost/InfoPost";
import { Feedbacks } from "@/components/Feedbacks/Feedbacks";
import IMGHeader from "@/public/Website.jpg";
import { OtherHeader } from "@/components/Layout/OtherHeader/OtherHeader";
import Image from "next/image";
import Head from "next/head";
import React from "react";

const Website = () => {
  return (
    <>
      <Head>
        <title>Positive Reset Services - Call Today | Website</title>
        <meta
          name="keywords"
          content="Web development, web design, website, Professional website, Website creation, Business website, Expanding online presence, Turnkey website, Mobile-responsive website"
        />
        <meta name="description" content="WEBSITE" />
        <meta
          name="description2"
          content="YOU GET A GREAT LOOKING FRANCHISE WEBSITE THAT EXCEEDS YOUR EXPECTATIONS."
        />
        <meta name="description3" content="WHY FRANCHISE OWNERS LOVE OUR WEBSITE?" />
        <meta
          name="description4"
          content="YOU ARE NOT ALONE IN THIS DIFFICULT WORLD OF THE INTERNET AND WEB TECHNOLOGIES."
        />
        <meta
          name="description5"
          content="RECOGNITION, POPULARITY AND ACCESSIBILITY IN THE ONLINE COMMUNITY IS THE KEY TO SUCCESS."
        />
        <meta name="description6" content="WHAT MAKES A FRANCHISE WEBSITE EFFECTIVE?" />
      </Head>
      <OtherHeader />
      <Box>
        <WrapperHeader
          style={{
            backgroundImage: `url(${IMGHeader.src})`,
          }}
        >
          <Title>WEBSITE</Title>
        </WrapperHeader>
        <Container>
          <Post>
            <Info>
              <Title>
                YOU GET A GREAT LOOKING FRANCHISE WEBSITE THAT EXCEEDS YOUR EXPECTATIONS.
              </Title>
              <Text>
                Grow your business with a franchised website brought to you by Positive Reset
                Services focused on the growth, success and popularity of your behavioral clinic. As
                a franchise owner, you need a powerful website that works for you and generates
                patients.
              </Text>
            </Info>
            <Box>
              <Image
                id="image"
                width={625}
                height={355}
                src={IMGOne}
                alt="YOU GET A GREAT LOOKING FRANCHISE WEBSITE THAT EXCEEDS YOUR EXPECTATIONS."
                title="YOU GET A GREAT LOOKING FRANCHISE WEBSITE THAT EXCEEDS YOUR EXPECTATIONS."
              />
            </Box>
          </Post>
          <Post>
            <Box>
              <Image
                id="image"
                width={625}
                height={356}
                src={IMGTwo}
                alt="WHY FRANCHISE OWNERS LOVE OUR WEBSITE?"
                title="WHY FRANCHISE OWNERS LOVE OUR WEBSITE?"
              />
            </Box>
            <Info>
              <Title>WHY FRANCHISE OWNERS LOVE OUR WEBSITE?</Title>
              <Text>
                We have created a unified website that reflects all the directions of the mental
                health clinic, shows all the services and all the possibilities that the clinic uses
                to help, support and heal patients. Our website is based on modern technical
                developments with professional look and high quality balanced graphics. Our website
                offers complete information about the activities of the behavioral clinic.
              </Text>
            </Info>
          </Post>
        </Container>
        <Block>
          <Wrapper sx={{ justifyContent: "space-evenly" }}>
            <Box sx={{ display: "flex" }}>
              <InfoPost />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <VideoPost />
            </Box>
          </Wrapper>
        </Block>
        <Container>
          <Post>
            <Box>
              <Image
                id="image"
                width={625}
                height={325}
                src={IMGThree}
                alt="YOU ARE NOT ALONE IN THIS DIFFICULT WORLD OF THE INTERNET AND WEB TECHNOLOGIES."
                title="YOU ARE NOT ALONE IN THIS DIFFICULT WORLD OF THE INTERNET AND WEB TECHNOLOGIES."
              />
            </Box>
            <Info>
              <Title>
                YOU ARE NOT ALONE IN THIS DIFFICULT WORLD OF THE INTERNET AND WEB TECHNOLOGIES.
              </Title>
              <Text>
                You get a support team that centrally monitors technological updates, business
                changes and can immediately quickly and accurately implement actions that do not
                interfere with the daily work of the clinic. You get a great franchise site that
                exceeds your expectations.
              </Text>
            </Info>
          </Post>
          <Post>
            <Info>
              <Title>
                RECOGNITION, POPULARITY AND ACCESSIBILITY IN THE ONLINE COMMUNITY IS THE KEY TO
                SUCCESS.
              </Title>
              <Text>
                You get a measurable improvement in your organic search rankings and visit to lead
                conversion rate. Our franchised clinics are experiencing 100-300% performance
                increases over other website builders and templates and the website provided to you
                in areas such as organic traffic generation (SEO) and conversion rates of visits to
                leads!
              </Text>
            </Info>
            <Box>
              <Image
                id="image"
                width={625}
                height={396}
                src={IMGFour}
                alt="RECOGNITION, POPULARITY AND ACCESSIBILITY IN THE ONLINE COMMUNITY IS THE KEY TO SUCCESS."
                title="RECOGNITION, POPULARITY AND ACCESSIBILITY IN THE ONLINE COMMUNITY IS THE KEY TO SUCCESS."
              />
            </Box>
          </Post>
          <Post>
            <Box>
              <Title>WHAT MAKES A FRANCHISE WEBSITE EFFECTIVE?</Title>
              <Text>
                Long before today, the Internet has established itself as a common starting point
                for franchise buyers. Websites have constantly competed for the attention of
                potential customers, so in order to compete with other mental health franchises or
                other behavioral clinics, it is imperative to use best practices in SEO,
                mobile-friendly design, and immersive, scannable copy.
              </Text>
            </Box>
          </Post>
        </Container>
        <Feedbacks />
      </Box>
    </>
  );
};

export default Website;
