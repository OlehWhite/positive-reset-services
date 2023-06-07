import { Helmet } from 'react-helmet-async';
import {
  Title,
  WrapperHeader,
  Wrapper,
  Block,
  Img,
  Text,
  WrapperBlock,
  Button,
  Iframe
} from './styled';
import React, {useRef} from 'react';
import { Box } from '@mui/material';
import IMGOne from 'assets/icons/Career-Opp01-scaled.jpg';
import IMGTwo from 'assets/icons/pexels-lukas-653429-scaled.jpg';
import CareerOpportunitiesInfo from 'components/CareerOpportunitiesInfo';
import { PersonalForm } from './PersonalForm';
import {Feedbacks} from "../../components/Feedbacks";

export const CareerOpportunities = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Positive Reset Services - Call Today | Career Opportunities</title>
        <meta name="description107" content="CAREER OPPORTUNITIES" />
        <meta
          name="description108"
          content="GROW WITH THE TEAM THAT PUTS PATIENTS FIRST
As an employer, our clinic offers professional opportunities that will challenge your abilities, expand your skills, and reward your contributions. Ours is a positive work environment that encourages both personal and professional growth for every employee. A philosophy of mutual respect is fostered; as a result, many of our team members have been with us for years.
Ensuring the safety and well-being of our patients, visitors, staff, and communities is our deepest commitment at our clinic. As a condition of employment, in our clinic requires all new hires to be fully vaccinated for COVID-19, unless there is an approved exemption. New hires will be required to have at least one dose of the vaccine prior to starting employment, with a second dose scheduled, or submit proof of previous vaccination."
        />
        <meta
          name="description109"
          content="WHO WE ARE: Our Clinic is founded on the mission of improving mental well-being for all individuals through education support and advocacy while building safe communities and the mind-body connection between mental and physical health. Our ambitious team focuses on returning each individual to their families, work places, communities, and the activities that they enjoy. We are committed to our employees by providing competitive pay, compensation packages, and comprehensive employee benefits programs."
        />
        <meta
          name="description110"
          content="CAREER OPPORTUNITIES IN OUR CLINIC Whether you are a behavioral healthcare professional or have a background in a healthcare administrative staff role, we have multiple open positions within various departments in our clinic. With our clinic you will have an opportunity to develop your behavioral health career while working closely with talented professionals who are passionate about our work.
We have a variety of full-time, part-time, and fee-for-service clinical, medical, and administrative employment opportunities open and we would love to hear from you!"
        />
      </Helmet>
      <WrapperHeader>
        <Title>CAREER OPPORTUNITIES</Title>
      </WrapperHeader>
      <Wrapper>
        <Block>
          <Box>
            <Img
              src={IMGOne}
              alt="GROW WITH THE TEAM THAT PUTS PATIENTS FIRST"
              title="GROW WITH THE TEAM THAT PUTS PATIENTS FIRST"
            />
          </Box>
          <WrapperBlock>
            <Title>GROW WITH THE TEAM THAT PUTS PATIENTS FIRST</Title>
            <Text>
              As an employer, our clinic offers professional opportunities that will challenge your
              abilities, expand your skills, and reward your contributions. Ours is a positive work
              environment that encourages both personal and professional growth for every employee.
              A philosophy of mutual respect is fostered; as a result, many of our team members have
              been with us for years.
            </Text>
            <Text>
              Ensuring the safety and well-being of our patients, visitors, staff, and communities
              is our deepest commitment at our clinic. As a condition of employment, in our clinic
              requires all new hires to be fully vaccinated for COVID-19, unless there is an
              approved exemption. New hires will be required to have at least one dose of the
              vaccine prior to starting employment, with a second dose scheduled, or submit proof of
              previous vaccination.
            </Text>
            <Text sx={{ fontSize: 20 }}>To apply for a position click on the link below:</Text>
            <Button onClick={scrollToForm}>APPLY HERE</Button>
          </WrapperBlock>
        </Block>
        <Block>
          <WrapperBlock>
            <CareerOpportunitiesInfo />
          </WrapperBlock>
          <Box>
            <Img src={IMGTwo} alt="WHO WE ARE" title="WHO WE ARE" />
          </Box>
        </Block>
        <Block>
          <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.9976174567655!2d-87.84931488465014!3d42.08610057920619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc78ff6fb9a55%3A0xcef7ae6ec5c39689!2sLife%20Balance%20Clinic!5e0!3m2!1sen!2sua!4v1638590254244!5m2!1sen!2sua"></Iframe>
        </Block>
        <Box sx={{marginBottom: '65px'}} ref={formRef}>
          <PersonalForm />
        </Box>
      </Wrapper>
      <Feedbacks />
    </>
  );
};
