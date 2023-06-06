import React from 'react';
import { Container, Title, WrapperHeader, Post, Info, Img, Text, UnderText } from './styled';
import IMGOne from 'assets/icons/Telehealth01.jpg';
import IMGTwo from 'assets/icons/Telehealth02-1024x626.jpg';
import IMGThree from 'assets/icons/Telehealth-1536x910.jpg';
import { Feedbacks } from '../../components/Feedbacks';
import { Box } from '@mui/material';
import {Helmet} from "react-helmet-async";

export const Telehealth = () => {
  return (
    <Box>
      <Helmet>
        <title>Positive Reset Services - Call Today | Telehealth</title>
        <meta
          name="description25"
          content="Telehealth"
        />
        <meta
          name="description24"
          content="TELEHEALTH: AN EXCITING NEW SEGMENT FOR FRANCHISING OPPORTUNITY"
        />
        <meta
          name="description26"
          content="THE FUTURE IS NOW – EMBRACE IT
All franchisees have access to the proprietary telehealth software system. Telehealth immediately clicked with existing and prospective franchisees, which they herald as an innovative business model that will be attractive to future investors trying to see what business opportunities will be viable in our current economic environment."
        />
        <meta
          name="description27"
          content="A NEW NORMAL MEANS NEW OPPORTUNITIES
Positive Reset Services is a behavioral care franchise that has developed a telemedicine system that transforms and simplifies mental health services. Our network of physicians supporting this unique Behavioral Care model is at the center of its success. The presence of doctors every hour when the clinic is open allows patients to receive services. This is a great competitive advantage given that by normal industry standards, it takes a long time to see a doctor. This is a new and secure business model that allows clinics to operate, franchisees to run their business, hire employees and take care of patients. All franchisees have access to a proprietary telemedicine software system. Telemedicine immediately resonated with existing and potential franchisees, which they proclaim as an innovative business model that will be attractive to future investors trying to see what business opportunities will be viable in our current economic climate.

This allows an investor with no experience in the behavioral field to scale their business in the industry. If you combine the fact that mental health care is recession resistant with our advanced telemedicine software, you have a recipe for success with or without a pandemic, of course."
        />
        <meta
          name="description28"
          content="THE DEMAND FOR INNOVATIVE CARE
Thanks to telehealth and the need for mental health services, franchisees can depend on a successful business model that performs well during even the most challenging economic circumstances. The path to success is very straightforward to understand. Not only is it a business model that’s going to work for a year or two, it’s a concept that you can easily see working for the length of the franchise agreement."
        />
      </Helmet>
      <WrapperHeader>
        <Title>TELEHEALTH: AN EXCITING NEW SEGMENT FOR FRANCHISING OPPORTUNITY</Title>
      </WrapperHeader>
      <Container>
        <Post>
          <Box>
            <Img
              src={IMGOne}
              alt="THE FUTURE IS NOW – EMBRACE IT"
              title="THE FUTURE IS NOW – EMBRACE IT"
            />
          </Box>
          <Info>
            <Title>THE FUTURE IS NOW – EMBRACE IT</Title>
            <Text>
              All franchisees have access to the proprietary telehealth software system. Telehealth
              immediately clicked with existing and prospective franchisees, which they herald as an
              innovative business model that will be attractive to future investors trying to see
              what business opportunities will be viable in our current economic environment.
            </Text>
          </Info>
        </Post>
        <Post>
          <Info>
            <Title>A NEW NORMAL MEANS NEW OPPORTUNITIES</Title>
            <Text>
              Positive Reset Services is a behavioral care franchise that has developed a
              telemedicine system that transforms and simplifies mental health services. Our network
              of physicians supporting this unique Behavioral Care model is at the center of its
              success. The presence of doctors every hour when the clinic is open allows patients to
              receive services. This is a great competitive advantage given that by normal industry
              standards, it takes a long time to see a doctor. This is a new and secure business
              model that allows clinics to operate, franchisees to run their business, hire
              employees and take care of patients.
            </Text>
          </Info>

          <Box>
            <Img
              src={IMGTwo}
              alt="A NEW NORMAL MEANS NEW OPPORTUNITIES"
              title="A NEW NORMAL MEANS NEW OPPORTUNITIES"
            />
          </Box>
        </Post>
        <UnderText>
          <Text>
            All franchisees have access to a proprietary telemedicine software system. Telemedicine
            immediately resonated with existing and potential franchisees, which they proclaim as an
            innovative business model that will be attractive to future investors trying to see what
            business opportunities will be viable in our current economic climate.
          </Text>
          <Text>
            This allows an investor with no experience in the behavioral field to scale their
            business in the industry. If you combine the fact that mental health care is recession
            resistant with our advanced telemedicine software, you have a recipe for success with or
            without a pandemic, of course.
          </Text>
        </UnderText>
        <Post>
          <Box>
            <Img
              src={IMGThree}
              alt="THE DEMAND FOR INNOVATIVE CARE"
              title="THE DEMAND FOR INNOVATIVE CARE"
            />
          </Box>
          <Info>
            <Title>THE DEMAND FOR INNOVATIVE CARE</Title>
            <Text>
              Thanks to telehealth and the need for mental health services, franchisees can depend
              on a successful business model that performs well during even the most challenging
              economic circumstances. The path to success is very straightforward to understand. Not
              only is it a business model that’s going to work for a year or two, it’s a concept
              that you can easily see working for the length of the franchise agreement.
            </Text>
          </Info>
        </Post>
      </Container>
      <Feedbacks />
    </Box>
  );
};
