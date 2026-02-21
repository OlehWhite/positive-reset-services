import { OtherHeader } from "@/components/Layout/OtherHeader/OtherHeader";
import React from "react";

import {
  Container,
  Title,
  WrapperHeader,
  Post,
  Info,
  Text,
  UnderText,
} from "@/otherPages/telehealth/styled";
import IMGOne from "@/public/Telehealth01.jpg";
import IMGTwo from "@/public/Telehealth02-1024x626.jpg";
import IMGThree from "@/public/Telehealth-1536x910.jpg";
import IMGHeader from "@/public/4Z8WMNtQ.jpeg";
import { Feedbacks } from "@/components/Feedbacks/Feedbacks";
import { Box } from "@mui/material";
import Image from "next/image";
import Head from "next/head";

const Telehealth = () => {
  return (
    <Box>
      <Head>
        <title>Positive Reset Services - Call Today | Telehealth</title>
        <meta
          name="keywords"
          content="Telehealth services, Online therapy, Virtual counseling, Remote mental health support, Telemedicine solutions, Telepsychiatry, Teletherapy sessions, Telehealth benefits, Accessible healthcare, Remote treatment options"
        />
        <meta name="description" content="STATE LICENSE" />
        <meta
          name="description2"
          content="TELEHEALTH: AN EXCITING NEW SEGMENT FOR FRANCHISING OPPORTUNITY"
        />
        <meta name="description3" content="THE FUTURE IS NOW – EMBRACE IT" />
        <meta name="description4" content="A NEW NORMAL MEANS NEW OPPORTUNITIES" />
        <meta name="description5" content="THE DEMAND FOR INNOVATIVE CARE" />
      </Head>
      <OtherHeader />
      <WrapperHeader style={{ backgroundImage: `url(${IMGHeader.src})` }}>
        <Title>TELEHEALTH: AN EXCITING NEW SEGMENT FOR FRANCHISING OPPORTUNITY</Title>
      </WrapperHeader>
      <Container>
        <Post>
          <Box>
            <Image
              id="image"
              src={IMGOne}
              width={625}
              height={355}
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
            <Image
              id="image"
              src={IMGTwo}
              width={625}
              height={355}
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
            <Image
              id="image"
              src={IMGThree}
              width={625}
              height={355}
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

export default Telehealth;
