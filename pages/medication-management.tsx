import {
  Title,
  WrapperHeader,
  Block,
  Text,
  Wrapper,
  WrapperBlock,
} from "@/otherPages/medicationManagement/styled";
import React from "react";
import { Box } from "@mui/material";
import IMGOne from "@/public/Medication-Management01.jpg";
import IMGTwo from "@/public/Medication-Management03.jpg";
import IMGThree from "@/public/Medication-Management04.jpg";
import IMGHeader from "@/public/Medication-Management05.jpg";
import { Feedbacks } from "@/components/Feedbacks/Feedbacks";
import { OtherHeader } from "@/components/Layout/OtherHeader/OtherHeader";
import Image from "next/image";
import Head from "next/head";

const MedicationManagement = () => {
  return (
    <>
      <Head>
        <title>Positive Reset Services - Call Today | Medication Management</title>
        <meta
          name="keywords"
          content="Medication management, Medication administration, Medication monitoring, Medication adherence, Medication safety, Medication optimization, Prescription management, Medication reminders, Medication tracking, Medication support"
        />
        <meta name="description" content="MEDICATION MANAGEMENT" />
      </Head>
      <OtherHeader />
      <Box>
        <WrapperHeader
          style={{
            backgroundImage: `url(${IMGHeader.src})`,
          }}
        >
          <Title>MEDICATION MANAGEMENT</Title>
        </WrapperHeader>
        <Wrapper>
          <Block>
            <Box>
              <Image id="image" width={630} height={230} src={IMGOne} alt="Img-1" title="Img-1" />
            </Box>
            <WrapperBlock>
              <Text>
                Our Medication Management Program is staffed by healthcare professionals that
                provide evaluation, diagnosis and medication intervention in the treatment of mental
                health disorders. Individuals receiving medication are monitored for progress,
                ongoing evaluation of symptoms and quality of life improvement.
              </Text>
            </WrapperBlock>
          </Block>
          <Block>
            <WrapperBlock>
              <Text>
                Persons served are educated in proper medication usage, intended benefits and
                adverse effects of medication and the importance of consistency in taking
                medications to control the symptoms of mental illness.
              </Text>
              <Text>
                Psychiatrists or other mental health prescribers who specialize in the diagnosis and
                treatment of mental health problems, such as depression. They provide counseling and
                can prescribe medications to treat mental illness.
              </Text>
              <Text>
                They may further specialize in specific areas, such as addiction psychiatry, or in
                treating specific age groups, such as adolescents.
              </Text>
            </WrapperBlock>
            <Box>
              <Image id="image" width={630} height={354} src={IMGTwo} alt="Img-2" title="Img-2" />
            </Box>
          </Block>
          <Block>
            <Box>
              <Image id="image" width={630} height={384} src={IMGThree} alt="Img-3" title="Img-3" />
            </Box>
            <WrapperBlock>
              <Text>
                Our mental well-being is directly connected with our overall physical health.
                Experiences like stress or trauma can leave us anxious, overwhelmed and hopeless.
                Untreated, these feelings can lead to major psychological and physical illnesses or
                to behaviors that can become addictive and destructive. Our Clinic approaches mental
                health and substance use treatment through a multidisciplinary program that focuses
                on the whole person — physical, spiritual, psychological and social.
              </Text>
            </WrapperBlock>
          </Block>
        </Wrapper>
        <Feedbacks />
      </Box>
    </>
  );
};

export default MedicationManagement;
