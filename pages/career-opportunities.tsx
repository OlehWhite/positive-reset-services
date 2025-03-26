import {
  Title,
  WrapperHeader,
  Wrapper,
  Block,
  Text,
  WrapperBlock,
  Button,
  Iframe,
} from "../otherPages/careerOpportunities/styled";
import React, {useRef} from "react";
import {Box, Stack, Typography} from "@mui/material";
import IMGOne from "../public/career.jpg";
import IMGTwo from "../public/pexels-lukas-653429-scaled.jpg";
import CareerOpportunitiesInfo from "../components/CareerOpportunitiesInfo";
import {PersonalForm} from "../otherPages/careerOpportunities/PersonalForm/PersonalForm";
import {Feedbacks} from "../components/Feedbacks/Feedbacks";
import IMGHeader from "../public/couple-with-problems02а.jpg";
import Image from "next/image";
import {OtherHeader} from "../components/Layout/OtherHeader/OtherHeader";
import Head from "next/head";
import {useGetProjects} from "../services/getInfo";

const CareerOpportunities = () => {
  const {project} = useGetProjects();
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({behavior: "smooth"});
    }
  };

  return (
    <>
      <Head>
        <title>
          Positive Reset Services - Call Today | Career Opportunities
        </title>
        <meta
          name="keywords"
          content="Career opportunities, Job openings, Employment opportunities, Careers, Hiring, Job vacancies, Work with us, Join our team, Job positions, Job application."
        />
        <meta name="description" content="CAREER OPPORTUNITIES"/>
        <meta
          name="description2"
          content="GROW WITH THE TEAM THAT PUTS PATIENTS FIRST"
        />
      </Head>
      <OtherHeader/>
      <Box>
        <WrapperHeader
          style={{
            backgroundImage: `url(${IMGHeader.src})`,
          }}
        >
          <Title>CAREER OPPORTUNITIES</Title>
        </WrapperHeader>
        <Wrapper>
          <Block>
            <Box>
              <Image
                width={635}
                height={421}
                src={IMGOne}
                id="img"
                alt="GROW WITH THE TEAM THAT PUTS PATIENTS FIRST"
                title="GROW WITH THE TEAM THAT PUTS PATIENTS FIRST"
              />
            </Box>
            <WrapperBlock>
              <Title>GROW WITH THE TEAM THAT PUTS PATIENTS FIRST</Title>
              <Text>
                As an employer, our clinic offers professional opportunities
                that will challenge your abilities, expand your skills, and
                reward your contributions. Ours is a positive work environment
                that encourages both personal and professional growth for every
                employee. A philosophy of mutual respect is fostered; as a
                result, many of our team members have been with us for years.
              </Text>
              <Text>
                Ensuring the safety and well-being of our patients, visitors,
                staff, and communities is our deepest commitment at our clinic.
                As a condition of employment, in our clinic requires all new
                hires to be fully vaccinated for COVID-19, unless there is an
                approved exemption. New hires will be required to have at least
                one dose of the vaccine prior to starting employment, with a
                second dose scheduled, or submit proof of previous vaccination.
              </Text>
              <Text sx={{fontSize: 20}}>
                To apply for a position click on the link below:
              </Text>
              <Button onClick={scrollToForm}>APPLY HERE</Button>
            </WrapperBlock>
          </Block>
          <Block>
            <WrapperBlock>
              <CareerOpportunitiesInfo/>
            </WrapperBlock>
            <Box>
              <Image
                id="image"
                width={630}
                height={417}
                src={IMGTwo}
                alt="WHO WE ARE"
                title="WHO WE ARE"
              />
            </Box>
          </Block>
          <Block>
            <Iframe src={project?.googleMaps}/>
          </Block>
          <Box sx={{marginBottom: "65px"}} ref={formRef}>
            <PersonalForm/>
          </Box>
          <Stack width={1} maxWidth={1300} m="0 auto">
            <Typography
              sx={{
                fontSize: 14,
                color: "#959595",
                fontStyle: "italic",
                mt: "-40px",
              }}
            >
              {`"By providing a telephone number and submitting this form you are
              consenting to be contacted by call or SMS text message. Message &
              data rates may apply. You can reply STOP to opt-out of further
              text messaging. No mobile information will be shared with third
              parties/affiliates for marketing/promotional purposes. All other
              categories exclude text messaging originator opt-in data and
              consent; this information will not be shared with any third
              parties."`}
            </Typography>
          </Stack>
        </Wrapper>
        <Feedbacks/>
      </Box>
    </>
  );
};

export default CareerOpportunities;
