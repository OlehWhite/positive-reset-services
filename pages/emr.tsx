import {
  Main,
  Wrapper,
  Title,
  WrapperHeader,
  Block,
  Text,
  WrapperBlock,
} from "@/otherPages/emr/styled";
import IMGOne from "@/public/erm-Slidе02.jpg";
import IMGTwo from "@/public/erm.jpg";
import IMGThree from "@/public/erm-04-4.jpg";
import IMGHeader from "@/public/Background-EMR.jpg";
import { OtherHeader } from "@/components/Layout/OtherHeader/OtherHeader";
import { Feedbacks } from "@/components/Feedbacks/Feedbacks";
import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import Head from "next/head";

const Emr = () => {
  return (
    <>
      <Head>
        <title>Positive Reset Services - Call Today | EMR</title>
        <meta
          name="keywords"
          content="Electronic Medical Records,
EMR Solutions,
Digital Healthcare,
Medical Record Management System,
Transition to Electronic Medical Records,
Optimizing Medical Documentation,
Efficient Medical Data Management,
Medical Data Storage,
Electronic Access to Patient Records,
Streamlining Medical Record Processes"
        />
        <meta name="description" content="EMR COMPLETE" />
        <meta name="description2" content="WHAT IS MENTAL HEALTH EMR COMPLETE?" />
        <meta name="description3" content="WHY YOU NEED EMR COMPLETE?" />
        <meta name="description4" content="OPTIMIZE SERVICES" />
      </Head>
      <OtherHeader />
      <Main>
        <WrapperHeader
          style={{
            backgroundImage: `url(${IMGHeader.src})`,
          }}
        >
          <Title>EMR COMPLETE</Title>
        </WrapperHeader>
        <Wrapper>
          <Block>
            <Box>
              <Image
                id="image"
                width={630}
                height={247}
                src={IMGOne}
                alt="WHAT IS MENTAL HEALTH EMR COMPLETE?"
                title="WHAT IS MENTAL HEALTH EMR COMPLETE?"
              />
            </Box>
            <WrapperBlock>
              <Title>WHAT IS MENTAL HEALTH EMR COMPLETE?</Title>
              <Text>
                They are essentially an electronic form of paper charts. With effective workflows
                you can see more patients in less time, reducing the time it takes for new patients
                to get an appointment and improving your ability to provide follow-up care. Clients
                are also less likely to need emergency mental-health-related treatment when they can
                access servises.
              </Text>
            </WrapperBlock>
          </Block>
          <Block>
            <WrapperBlock>
              <Title>WHY YOU NEED EMR COMPLETE?</Title>
              <Text>
                EMR COMPLETE is a practice management system for mental health clinic providers. It
                helps automate functions such as scheduling recurring appointments, creating and
                sending invoices against patient care, and generating reports to assess practice
                performance and make data-driven decisions.
              </Text>
              <Text>
                EMR COMPLETE offers video consultations to reduce the administrative burden of
                onboarding patients. It also records each session. For practitioners that handle
                prescriptions, the software maintains a record of patient dosages and medication
                types.
              </Text>
              <Text>
                With EMR COMPLETE, mental health professionals can create therapy programs with
                personalized patient treatment plans and trackable behavioral therapy courses and
                progress reports.
              </Text>
            </WrapperBlock>
            <Box>
              <Image
                id="image"
                width={630}
                height={419}
                src={IMGTwo}
                alt="WHY YOU NEED EMR COMPLETE?"
                title="WHY YOU NEED EMR COMPLETE?"
              />
            </Box>
          </Block>
          <Block>
            <Box>
              <Image
                id="image"
                width={630}
                height={354}
                src={IMGThree}
                alt="OPTIMIZE SERVICES"
                title="OPTIMIZE SERVICES"
              />
            </Box>
            <WrapperBlock>
              <Title>OPTIMIZE SERVICES</Title>
              <Text>
                Any behavioral clinic needs to perform administrative tasks such as scheduling
                appointments, maintaining patient records, and creating invoices. The EHR COMPLETE
                mental health software can help your practice overcome such barriers. These tools
                have features specifically designed to optimize the performance of a behavioral
                mental health clinic.
              </Text>
            </WrapperBlock>
          </Block>
        </Wrapper>
        <Feedbacks />
      </Main>
    </>
  );
};

export default Emr;
