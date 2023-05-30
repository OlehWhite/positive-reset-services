import React from 'react';
import {
  Accordion,
  BoxAccordion,
  Container,
  TypographyQuestion,
  TypographyText
} from './styled';
import { AccordionSummary, AccordionDetails } from '@mui/material';
import CustomExpandIcon from './CustomExpandIcon';

const Questions = () => {
  return (
    <Container id="questions">
      <BoxAccordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion variant="h3">OUR MISSION</TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              Each day our mission is to enable people to realize their dreams. We do this with each
              new franchisee we add to our family. For some of them that dream may be tied to a
              financial goal.
            </TypographyText>
            <TypographyText paragraph>
              For others it’s the independence of business ownership, and in some cases, it may be
              as simple as creating job opportunities for friends and family; but through keeping
              this mission top of mind each day, we remain inspired in the work that we do. We use
              modern marketing, sales tools, and strategies to find outstanding candidates and help
              them become franchisees.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>OUR VALUES</TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              Franchises have a higher rate of success than start-up businesses. You may find it
              easier to secure finance for a franchise.
            </TypographyText>
            <TypographyText paragraph>
              It may cost less to buy a franchise than start your own business of the same type. The
              value of franchising lies in the franchise system’s gives aspiring business owners a
              head start toward becoming their own boss, with a proven business model that can set
              up new business owners for success.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>OUR VISION</TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              Our vision is to become a leading franchising company providing key services to
              people, families and communities. Ultimately, we would like to enhance the quality of
              life in the communities we serve across the U.S.A.
            </TypographyText>
            <TypographyText paragraph>
              We believe that the franchise model will bring more value and more help to
              individuals, families and communities as it creates a strong unified system for many
              behavioral clinics.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>OUR GOAL</TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              What is the main goal of franchising business? It sells the right to use its name and
              idea. The franchisee buys this right to sell the franchisor’s services under an
              existing business model and trademark. Franchises are a popular way for entrepreneurs
              to start a business, especially when entering a highly competitive industry such as
              behavioral care. It is also the goal of the franchise company that franchisors are
              more successful and financially independent. The more successful the franchise
              company, the more benefits the franchisee receives.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
      </BoxAccordion>
    </Container>
  );
};

export default Questions;
