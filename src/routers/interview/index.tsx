import {
  Main,
  Wrapper,
  Title,
  WrapperHeader,
  Block,
  Img,
  Text,
  WrapperBlock,
  BlockOne,
  Ul,
  Li
} from './styled';
import { Feedbacks } from 'components/Feedbacks';
import { Video } from './Video';
import { Box } from '@mui/material';
import IMGTwo from '../../assets/icons/04-2.jpg';
import IMGThree from '../../assets/icons/05-1-300x300.jpeg';
import IMGFour from 'assets/icons/02-3-500x200.jpg';
import IMGFive from 'assets/icons/04-3-500x300.jpg';
import IMGSix from 'assets/icons/05-1.jpg';
import React from 'react';
import Following from '../../components/Following';

export const Interview = () => {
  return (
    <Main>
      <WrapperHeader>
        <Title>INTERVIEW</Title>
      </WrapperHeader>
      <Wrapper>
        <Block>
          <Video />
          <WrapperBlock>
            <Title>HOW TO CONDUCT A JOB INTERVIEW?</Title>
            <Text>
              Learning how to conduct an interview (and how to be a good interviewer) is a crucial
              step to hiring the best candidates for Mental Health Clinic. A great job interview
              will give you a chance to learn more about candidates. To conduct an effective job
              interview that helps you hire the best candidate for your open position, prepare ahead
              of time, consider the needs of the role and guide the interview in a purposeful way.
            </Text>
          </WrapperBlock>
        </Block>
        <Block>
          <WrapperBlock>
            <Title>WHAT IS A JOB INTERVIEW?</Title>
            <Text>
              Knowing how to interview someone the right way is an important part of the hiring
              process. When you ask the right questions, you can better understand the contents of a
              candidate’s resume and/or cover letter. The questions you ask when conducting an
              interview also allow you to measure the candidate’s ability to think quickly, describe
              how they overcame challenges or contributed to the success of projects, and if they’re
              able to perform expected work tasks. Additionally, a job interview can help you
              compare potential candidates with others to choose the one that best fits the needs of
              the role.
            </Text>
          </WrapperBlock>
          <Box>
            <Img src={IMGTwo} alt="Logo" title="Logo" />
          </Box>
        </Block>
        <Block>
          <Box sx={{ margin: '0 auto' }}>
            <Img src={IMGThree} alt="Logo" title="Logo" />
          </Box>
          <WrapperBlock>
            <Title>PREPARE QUESTIONS FOR A JOB INTERVIEW</Title>
            <Text>
              Because each question asked in a job interview should be intentional, it’s important
              to prepare ahead of time, carefully assess the role you’re hiring for and ask a wide
              variety of interview questions. Consider coming up with a list of interview questions
              ahead of time.
            </Text>
          </WrapperBlock>
        </Block>
        <BlockOne>
          <Title>YOU CAN CONDUCT A JOB INTERVIEW USING THE FOLLOWING STEPS:</Title>
          <Following />
        </BlockOne>
        <Block>
          <WrapperBlock>
            <Title>COMMON TYPES OF INTERVIEWING STRATEGIES</Title>
            <Text>
              There are dozens of interview techniques for employers that you can use when
              interviewing potential hires. There are several tips and tricks you can use to
              increase the efficiency of your interviewing process.
            </Text>
          </WrapperBlock>
          <Box>
            <Img src={IMGFour} alt="Logo" title="Logo" />
          </Box>
        </Block>
        <Block>
          <Box>
            <Img src={IMGFive} alt="Logo" title="Logo" />
          </Box>
          <WrapperBlock>
            <Title>CHOOSE YOUR INTERVIEWER CAREFULLY</Title>
            <Text>
              Deciding who should conduct your company’s interviews is a crucial part of setting up
              the interview process. If possible, it’s often a good idea for the new hire’s direct
              supervisor to conduct the interviews. Since they’ll work alongside the employee in
              their new role, they’re likely the best judge of who would best fit the position.
            </Text>
          </WrapperBlock>
        </Block>
        <Block>
          <WrapperBlock>
            <Title>PREPARE CREATIVE QUESTIONS</Title>
            <Text>
              One of the best ways to keep an interview from feeling stale or repetitive is to ask
              creative and dynamic questions. Asking common questions, such as questions about their
              personal strengths, will likely prompt a rehearsed and unoriginal answer. To
              facilitate an interesting and meaningful conversation, try asking questions that catch
              the interviewee off-guard.
            </Text>
          </WrapperBlock>
          <Box>
            <Img src={IMGSix} alt="Logo" title="Logo" />
          </Box>
        </Block>
        <BlockOne>
          <Title>QUESTIONS TO AVOID WHEN CONDUCTING INTERVIEWS:</Title>
          <Text>
            While it’s important to be thorough when conducting an interview, so you can learn as
            much as possible about a potential candidate, there are certain topics and questions
            that should be avoided or carefully worded. This is to ensure that you don’t
            unintentionally discriminate against an interviewee or infringe on a candidate’s right
            to privacy. Some areas where you might want to tread lightly during an interview
            include:
          </Text>
        </BlockOne>
        <Block>
          <Ul>
            <Li>
              Age: While it’s okay to verify whether an applicant meets the minimum age requirements
              for a job, individuals aged 40 and older are protected by the Age Discrimination in
              Employment Act of 1967, which prevents employers from discriminating against both
              potential and current employees based on their age. A better question to ask is
              whether the interview meets the minimum age requirements for the job if it’s not
              clearly apparent, without asking for an exact number.
            </Li>
            <Li>
              Disabilities: Individuals with disabilities are protected against discrimination under
              the Americans With Disabilities Act. Asking an applicant directly whether they’re
              disabled can lead to complaints later on if that worker is terminated or feels
              discriminated against in the workplace. While certain disabilities may be visibly
              obvious, such as an applicant using a mobility device, it’s best to simply ask whether
              the applicant possesses the capabilities needed to perform the job at hand.
            </Li>
            <Li>
              Religious topics: Inquiring about someone’s religious beliefs should always be avoided
              unless the job in question is for a faith-based organization. However, in some
              situations, an applicant may require additional accommodations due to their religion.
              In this case, it would be the responsibility of the applicant to advise the employer
              of their needs once they’re hired.
            </Li>
          </Ul>
        </Block>
      </Wrapper>
      <Feedbacks />
    </Main>
  );
};
