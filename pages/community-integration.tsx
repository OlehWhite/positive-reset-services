import {
  Title,
  WrapperHeader,
  Info,
  Post,
  Text,
  Container,
  Ul,
  Li,
} from "@/otherPages/communityIntegration/styled";
import React from "react";
import { Box } from "@mui/material";
import IMGOne from "@/public/01-4.jpg";
import IMGTwo from "@/public/04-6.jpg";
import IMGThree from "@/public/02b.jpg";
import IMGFour from "@/public/03-5.jpg";
import IMGHeader from "@/public/Integration-Background.jpg";
import { BigPost } from "@/otherPages/communityIntegration/BigPost/BigPost";
import { Feedbacks } from "@/components/Feedbacks/Feedbacks";
import Image from "next/image";
import { OtherHeader } from "@/components/Layout/OtherHeader/OtherHeader";
import Head from "next/head";

const CommunityIntegration = () => {
  return (
    <>
      <Head>
        <title>Positive Reset Services - Call Today | Community Integration</title>
        <meta
          name="keywords"
          content="Community Integration Programs,
Supportive Community Services,
Building Connections in the Community,
Community Integration for Mental Health,
Social Integration Services,
Community Reintegration Support,
Promoting Inclusion and Engagement,
Community Outreach Programs,
Enhancing Social Skills,
Community Integration Resources"
        />
        <meta name="description" content="COMMUNITY INTEGRATION" />
        <meta name="description2" content="OUR RESEARCH ON HUMAN INTEGRATION" />
        <meta
          name="description3"
          content="HOW POSITIVE RESET SERVICES CAN PROMOTE MENTAL HEALTH COMMUNITY INTEGRATION?"
        />
        <meta name="description4" content="EXPERIENCE OF OUR PARTNERS" />
        <meta name="description5" content="THREE OBSERVABLE TRENDS EMERGING ACROSS THE INDUSTRY" />
      </Head>
      <OtherHeader />
      <Box>
        <WrapperHeader
          style={{
            backgroundImage: `url(${IMGHeader.src})`,
          }}
        >
          <Title>COMMUNITY INTEGRATION</Title>
        </WrapperHeader>
        <Container>
          <Post>
            <Box>
              <Image
                id="image"
                width={625}
                height={398}
                src={IMGOne}
                alt="HOW POSITIVE RESET SERVICES CAN PROMOTE MENTAL HEALTH COMMUNITY INTEGRATION?"
                title="HOW POSITIVE RESET SERVICES CAN PROMOTE MENTAL HEALTH COMMUNITY INTEGRATION?"
              />
            </Box>
            <Info>
              <Title>
                HOW POSITIVE RESET SERVICES CAN PROMOTE MENTAL HEALTH COMMUNITY INTEGRATION?
              </Title>
              <Ul>
                <Li>
                  Identify barriers to community integration and target obstacles that prevent
                  people from being full members of their communities
                </Li>
                <Li>
                  Provide supports which bring about meaningful changes in the lives of people with
                  psychiatric disabilities (i.e. – Supported Education, Supported Employment,
                  Self-Help Groups, Parenting Classes, etc.)
                </Li>
                <Li>
                  Expand the range of opportunities for people who have mental illnesses to
                  participate in their communities as active, equal members
                </Li>
              </Ul>
            </Info>
          </Post>
          <Post>
            <Info>
              <Title>OUR RESEARCH ON HUMAN INTEGRATION</Title>
              <Text>
                Community integration is integral to recovery for individuals with severe mental
                illness. We explored the integration of individuals with severe mental illness into
                mental health and non–mental health communities and associations with mental health
                service intensity.
              </Text>
            </Info>
            <Box>
              <Image
                id="image"
                width={512}
                height={333}
                src={IMGTwo}
                alt="OUR RESEARCH ON HUMAN INTEGRATION"
                title="OUR RESEARCH ON HUMAN INTEGRATION"
              />
            </Box>
          </Post>
          <Post>
            <Box>
              <Image
                id="image"
                width={625}
                height={414}
                src={IMGFour}
                alt="EXPERIENCE OF OUR PARTNERS"
                title="EXPERIENCE OF OUR PARTNERS"
              />
            </Box>{" "}
            <Info>
              <Title>EXPERIENCE OF OUR PARTNERS</Title>
              <Text>
                We are working with our partners to survey mental health clinics to better
                understand their experience of integrating behavioral health care lines with
                physical care. In our practice, we use survey results and highlight three trends
                emerging in the mental health industry.
              </Text>
            </Info>
          </Post>
          <Post>
            <Info>
              <Title>THREE OBSERVABLE TRENDS EMERGING ACROSS THE INDUSTRY:</Title>
              <Text>
                1. EHR optimization is needed for successful integration <br />
                2. Patient experience and care coordination drive improvements <br />
                3. Full integration is deemed desirable and attainable
              </Text>
            </Info>
            <Box>
              <Image
                id="image"
                width={625}
                height={285}
                src={IMGThree}
                alt="THREE OBSERVABLE TRENDS EMERGING ACROSS THE INDUSTRY"
                title="THREE OBSERVABLE TRENDS EMERGING ACROSS THE INDUSTRY"
              />
            </Box>
          </Post>
          <BigPost />
        </Container>
        <Feedbacks />
      </Box>
    </>
  );
};

export default CommunityIntegration;
