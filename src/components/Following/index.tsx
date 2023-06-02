import React from 'react';
import {
  Accordion,
  BoxAccordion,
  Container,
  Link,
  TypographyQuestion,
  TypographyText
} from './styled';
import { AccordionSummary, AccordionDetails } from '@mui/material';
import CustomExpandIcon from './CustomExpandIcon';

const Following = () => {
  return (
    <Container id="questions">
      <BoxAccordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion variant="h3">1. PREPARE FOR THE INTERVIEW</TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              Prepare for the upcoming interview by evaluating the position you’re hiring for and <Link
                href="https://www.indeed.com/hire/c/info/how-to-read-a-resume?hl=en&co=US">
                going over the candidate’s resume
              </Link> and/or cover letter. Consider what needs the role will fill for the company and then
              compare those needs to the expected education, skills and experience requirements of
              your preferred candidate. Carefully organize these requirements into a list and then
              use them to create intentional interview questions.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>
              2. DESCRIBE THE COMPANY AND THE POSITION TO THE INTERVIEWEE
            </TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              Kick off the interview by introducing yourself and discussing the position with the
              interviewee. Give a brief background and overview of the company and how the position
              they’re interviewing for fits into the organization’s objectives and goals. This gives
              job candidates an opportunity to better understand the <Link
                href="https://www.indeed.com/hire/c/info/employee-expectations?hl=en">
                expectations and responsibilities
              </Link> of the position.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>
              3. EXPLAIN THE INTERVIEW PROCESS TO YOUR INTERVIEWEE
            </TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              Inform the candidate about what they can expect during the interview process,
              including its format, how many people will be interviewing them, the expected length
              and whether or not the company expects them to complete <Link
                href="https://www.indeed.com/hire/c/info/pre-employment-testing?hl=en">
                work-related tests
              </Link> or assessments. This keeps the interview organized and sets clear objectives and
              expectations for both you and the candidate.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>4. LEARN ABOUT THE INTERVIEWEE’S CAREER GOALS</TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              Before jumping into role-specific interview questions, it can be useful to better
              understand the interviewee’s career goals. Ask general questions about their
              professional interests and why they’re interested in the position. This gives you an
              opportunity to understand where their expectations lie in terms of <Link
                href="https://www.indeed.com/hire/c/info/creating-a-career-development-plan-for-your-employees?hl=en&co=US">
                professional development
              </Link> and helps you assess their understanding of the company and the position itself.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>
              5. ASK INTERVIEW QUESTIONS RELATED TO THE POSITION
            </TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              After asking about the candidate’s career goals, transition to role-specific
              questions. Consider coming up with a list of interview questions ahead of time. If
              you’re interviewing multiple candidates, it may also be helpful to come up with a way
              to score each interviewee. For example, you might grade them on their confidence and
              poise when answering questions, their ability to answer clearly and concisely and
              whether they addressed each part of a multiple part question.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>
              6. GATHER MORE INFORMATION WITH FOLLOW UP QUESTIONS
            </TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              Gather additional information about a candidate’s experience by asking follow-up
              questions. Asking a candidate to expand on their answers can give you greater insight
              into their thought processes, personality, values and experience. Always be ready to
              ask a follow-up question and use your list of pre-written interview questions as a
              guide, rather than a strict plan.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>
              7. TAKE NOTES TO HELP YOU REMEMBER IMPORTANT INFORMATION
            </TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              To help you make more confident and informed hiring decisions, take notes during the
              interview so you can remember more details later on. For example, you can jot down
              your first impressions of the candidates, take note of their body language. However,
              be careful to maintain the right balance between note-taking and active listening.
              Ensure that you’re making eye contact and fully engaging in the conversation, only
              pausing to take down notes every once in a while.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>8. GIVE CANDIDATES THE CHANCE TO ASK QUESTIONS</TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              Make sure you give your interviewee time to ask questions about the position, team and
              company. Not only does this give them the opportunity to evaluate if the position is a
              good fit for them, but it also allows you to measure their interest and understanding
              of the company.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>9. DESCRIBE THE NEXT STEPS</TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              Close the interview by explaining what the candidate can expect in terms of next
              steps, including when they can expect to hear back from you and what the rest of the
              interview process might look like. This is also a good time to inform them of your
              intended timeline for filling the position.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>
              10. WHY DO YOU NEED TO BE ABLE TO CONDUCT AN INTERVIEW?
            </TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              When you know how to conduct an interview, you can find out more than what a job
              application, resume and cover letter will tell you. Asking the right questions and
              following an effective and fair interview process can help you decide how well a
              candidate’s skills, experience and personality align with company needs and avoid
              costly hiring mistakes.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
      </BoxAccordion>
    </Container>
  );
};

export default Following;
