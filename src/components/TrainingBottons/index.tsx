import React from 'react';
import { Accordion, BoxAccordion, Container, TypographyQuestion, TypographyText } from './styled';
import { AccordionSummary, AccordionDetails } from '@mui/material';
import CustomExpandIcon from './CustomExpandIcon';

const Questions = () => {
  return (
    <Container id="questions">
      <BoxAccordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion variant="h3">OPERATIONS MANUAL</TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              The operations manual is the rule book if you will for a franchise system. It contains
              all the aspects of the business the owners need to learn to operate the franchise.
              Like a school syllabus outlines a course, the manual serves a similar purpose. Every
              business has its unique styles, including dialect, recipes, uniforms, how to greet
              customers, etc. Traditionally, the operations manual includes the franchise goals,
              daily procedures, accounting, customer service, personnel topics and training
              employees. The information included in the manual is confidential. Often, franchisees
              are required to sign a non-disclosure agreement before beginning this phase. The
              franchisor also outlines specific performance expectations and instructions on how to
              provide sales reports, etc.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>TRAINING AT HEADQUARTERS</TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              After the operations manual training, franchisees are taken to corporate headquarters
              for hands-on training. In this stage, new franchise owners tour the facility and
              witness the experts in action. During this tour, is a perfect opportunity for
              franchisees to ask questions and test what they have learned. It’s also a time to see
              how to operate the machinery and/or make recipes for the first time.
            </TypographyText>
            <TypographyText paragraph>
              Training at headquarters can last a few days to one week. This is the time franchise
              owners need to grasp each concept to operate their business. In many cases, franchise
              owners are encouraged to bring along a manager or employee who will train other staff
              members on-site.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>ON-SITE TRAINING</TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              This type of training is carried out at the new franchise location. The franchisee
              must be familiar with the machinery, recipes, customer service training as well as
              knowledge on all business procedures. On-site, the franchisee, is one step from being
              an expert. When they get to this phase, they hire and train staff for specific roles
              such as cashiers, customer service, and office positions. Often times, a franchise
              mentor from the corporate office is assigned to new franchisees. This representative
              can assist with the grand opening of the new franchise.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>CONTINUOUS TRAINING</TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              At this point, the new franchisee is up to speed in carrying out the daily operations
              of the business. A few functions may still need attention to work out the kinks, but
              the bulk of what was included in the manual is mastered. Franchise teams provide
              ongoing training through field training programs, webinars, on-site visits, and
              conferences. Continuous training is essential to keeping franchisees informed about
              insider tips, new products or services, and future advertising and marketing
              campaigns.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
      </BoxAccordion>
    </Container>
  );
};

export default Questions;
