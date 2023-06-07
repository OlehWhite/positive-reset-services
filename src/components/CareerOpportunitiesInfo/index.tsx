import React from 'react';
import { Accordion, BoxAccordion, Container, TypographyQuestion, TypographyText } from './styled';
import { AccordionSummary, AccordionDetails } from '@mui/material';
import CustomExpandIcon from './CustomExpandIcon';

const CareerOpportunitiesInfo = () => {
  return (
    <Container id="questions">
      <BoxAccordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion variant="h3">WHO WE ARE:</TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              Our Clinic is founded on the mission of improving mental well-being for all
              individuals through education support and advocacy while building safe communities and
              the mind-body connection between mental and physical health. Our ambitious team
              focuses on returning each individual to their families, work places, communities, and
              the activities that they enjoy. We are committed to our employees by providing
              competitive pay, compensation packages, and comprehensive employee benefits programs.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion> CAREER OPPORTUNITIES IN OUR CLINIC</TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              Whether you are a behavioral healthcare professional or have a background in a
              healthcare administrative staff role, we have multiple open positions within various
              departments in our clinic. With our clinic you will have an opportunity to develop
              your behavioral health career while working closely with talented professionals who
              are passionate about our work. We have a variety of full-time, part-time, and
              fee-for-service clinical, medical, and administrative employment opportunities open
              and we would love to hear from you!
            </TypographyText>
          </AccordionDetails>
        </Accordion>
      </BoxAccordion>
    </Container>
  );
};

export default CareerOpportunitiesInfo;
