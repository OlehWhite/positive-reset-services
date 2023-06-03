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
            <TypographyQuestion variant="h3">
              1. OPTIMIZE SPACE AND INCREASE EFFICIENCY
            </TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              One of the biggest factors in determining the revenue of a mental health clinic is the
              number of patients they can see. Using your rooms efficiently is important in order to
              allow your staff to see patients in a timely manner. For practices struggling with
              space issues, one of the best ways to optimize space and increase efficiency may this:
              assign small groups of rooms to specialists and support staff.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>2. CONSIDER THE BIG PICTURE</TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              With the help of a space management tool, start by creating a floor plan of your
              current layout and resources. The next step is to decide how you would like to change
              the overall layout of your office—meaning the big picture changes you’d like to make
              to change company culture and productivity. You may consider an open office plan to
              encourage visibility and collaboration, or you might want cubicles to ensure privacy
              and concentration.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>3. MAP OUT FURNITURE PLACEMENT</TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              Keep in mind that wayfinding plays a key role in your employees’ productivity, and
              ensure that the design you pick will encourage the appropriate amount of interaction
              between employees. Experiment with different layout options to determine the best
              balance between an aesthetic design and the needs of your business.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>4. FIND AN INTERNET PROVIDER</TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              Before committing to any office lease, make sure the location is serviceable by a
              high-speed internet provider. Research which internet service provider (ISP) can
              connect your office well before you move in. Then, once you’ve found a few providers,
              compare their plans, prices, and contracts. Also, remember that commercial accounts
              often differ from residential ones, so be careful when looking at their terms.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
      </BoxAccordion>
    </Container>
  );
};

export default Questions;
