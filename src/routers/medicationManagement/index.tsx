import { Helmet } from 'react-helmet-async';
import { Title, WrapperHeader, Block, Img, Text, Wrapper, WrapperBlock } from './styled';
import React from 'react';
import { Box } from '@mui/material';
import IMGOne from '../../assets/icons/Medication-Management01.jpg';
import IMGTwo from '../../assets/icons/Medication-Management03.jpg';
import IMGThree from '../../assets/icons/Medication-Management04.jpg';
import {Feedbacks} from "../../components/Feedbacks";

export const MedicationManagement = () => {
  return (
    <>
      <Helmet>
        <title>Positive Reset Services - Call Today | Medication Management</title>
        <meta name="description115" content="BILLING AND INSURANCES" />
        <meta
          name="description116"
          content="Our Medication Management Program is staffed by healthcare professionals that provide evaluation, diagnosis and medication intervention in the treatment of mental health disorders. Individuals receiving medication are monitored for progress, ongoing evaluation of symptoms and quality of life improvement."
        />
        <meta
          name="description117"
          content="Persons served are educated in proper medication usage, intended benefits and adverse effects of medication and the importance of consistency in taking medications to control the symptoms of mental illness.

Psychiatrists or other mental health prescribers who specialize in the diagnosis and treatment of mental health problems, such as depression. They provide counseling and can prescribe medications to treat mental illness.

They may further specialize in specific areas, such as addiction psychiatry, or in treating specific age groups, such as adolescents."
        />
        <meta
          name="description118"
          content="Our mental well-being is directly connected with our overall physical health. Experiences like stress or trauma can leave us anxious, overwhelmed and hopeless. Untreated, these feelings can lead to major psychological and physical illnesses or to behaviors that can become addictive and destructive. Our Clinic approaches mental health and substance use treatment through a multidisciplinary program that focuses on the whole person — physical, spiritual, psychological and social."
        />
      </Helmet>
      <WrapperHeader>
        <Title>MEDICATION MANAGEMENT</Title>
      </WrapperHeader>
      <Wrapper>
        <Block>
          <Box>
            <Img src={IMGOne} alt="Img-1" title="Img-1" />
          </Box>
          <WrapperBlock>
            <Text>
              Our Medication Management Program is staffed by healthcare professionals that provide
              evaluation, diagnosis and medication intervention in the treatment of mental health
              disorders. Individuals receiving medication are monitored for progress, ongoing
              evaluation of symptoms and quality of life improvement.
            </Text>
          </WrapperBlock>
        </Block>
        <Block>
          <WrapperBlock>
            <Text>
              Persons served are educated in proper medication usage, intended benefits and adverse
              effects of medication and the importance of consistency in taking medications to
              control the symptoms of mental illness.
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
            <Img src={IMGTwo} alt="Img-2" title="Img-2" />
          </Box>
        </Block>
        <Block>
          <Box>
            <Img src={IMGThree} alt="Img-3" title="Img-3" />
          </Box>
          <WrapperBlock>
            <Text>
              Our mental well-being is directly connected with our overall physical health.
              Experiences like stress or trauma can leave us anxious, overwhelmed and hopeless.
              Untreated, these feelings can lead to major psychological and physical illnesses or to
              behaviors that can become addictive and destructive. Our Clinic approaches mental
              health and substance use treatment through a multidisciplinary program that focuses on
              the whole person — physical, spiritual, psychological and social.
            </Text>
          </WrapperBlock>
        </Block>
      </Wrapper>
      <Feedbacks />
    </>
  );
};
