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
import IMGTwo from 'assets/icons/04-2.jpg';
import IMGThree from 'assets/icons/05-1-300x300.jpeg';
import IMGFour from 'assets/icons/02-3-500x200.jpg';
import IMGFive from 'assets/icons/04-3-500x300.jpg';
import IMGSix from 'assets/icons/05-1.jpg';
import React from 'react';
import Following from '../../components/Following';
import { Helmet } from 'react-helmet-async';

export const Interview = () => {
  return (
    <Main>
      <Helmet>
        <title>Positive Reset Services - Call Today | Interview</title>
        <meta name="description50" content="INTERVIEW" />
        <meta
          name="description51"
          content="HOW TO CONDUCT A JOB INTERVIEW?
Learning how to conduct an interview (and how to be a good interviewer) is a crucial step to hiring the best candidates for Mental Health Clinic. A great job interview will give you a chance to learn more about candidates. To conduct an effective job interview that helps you hire the best candidate for your open position, prepare ahead of time, consider the needs of the role and guide the interview in a purposeful way."
        />
        <meta
          name="description52"
          content="WHAT IS A JOB INTERVIEW?
Knowing how to interview someone the right way is an important part of the hiring process. When you ask the right questions, you can better understand the contents of a candidate’s resume and/or cover letter. The questions you ask when conducting an interview also allow you to measure the candidate’s ability to think quickly, describe how they overcame challenges or contributed to the success of projects, and if they’re able to perform expected work tasks. Additionally, a job interview can help you compare potential candidates with others to choose the one that best fits the needs of the role."
        />
        <meta
          name="description53"
          content="PREPARE QUESTIONS FOR A JOB INTERVIEW
Because each question asked in a job interview should be intentional, it’s important to prepare ahead of time, carefully assess the role you’re hiring for and ask a wide variety of interview questions. Consider coming up with a list of interview questions ahead of time."
        />
        <meta
          name="description54"
          content="1. PREPARE FOR THE INTERVIEW Prepare for the upcoming interview by evaluating the position you’re hiring for and going over the candidate’s resume and/or cover letter. Consider what needs the role will fill for the company and then compare those needs to the expected education, skills and experience requirements of your preferred candidate. Carefully organize these requirements into a list and then use them to create intentional interview questions."
        />
        <meta
          name="description55"
          content="2. DESCRIBE THE COMPANY AND THE POSITION TO THE INTERVIEWEE Kick off the interview by introducing yourself and discussing the position with the interviewee. Give a brief background and overview of the company and how the position they’re interviewing for fits into the organization’s objectives and goals. This gives job candidates an opportunity to better understand the expectations and responsibilities of the position"
        />
        <meta
          name="description56"
          content="3. EXPLAIN THE INTERVIEW PROCESS TO YOUR INTERVIEWEE Inform the candidate about what they can expect during the interview process, including its format, how many people will be interviewing them, the expected length and whether or not the company expects them to complete work-related tests or assessments. This keeps the interview organized and sets clear objectives and expectations for both you and the candidate."
        />
        <meta
          name="description57"
          content="4. LEARN ABOUT THE INTERVIEWEE’S CAREER GOALS Before jumping into role-specific interview questions, it can be useful to better understand the interviewee’s career goals. Ask general questions about their professional interests and why they’re interested in the position. This gives you an opportunity to understand where their expectations lie in terms of professional development and helps you assess their understanding of the company and the position itself."
        />
        <meta
          name="description58"
          content="5. ASK INTERVIEW QUESTIONS RELATED TO THE POSITION After asking about the candidate’s career goals, transition to role-specific questions. Consider coming up with a list of interview questions ahead of time. If you’re interviewing multiple candidates, it may also be helpful to come up with a way to score each interviewee. For example, you might grade them on their confidence and poise when answering questions, their ability to answer clearly and concisely and whether they addressed each part of a multiple part question."
        />
        <meta
          name="description59"
          content="6. GATHER MORE INFORMATION WITH FOLLOW UP QUESTIONS Gather additional information about a candidate’s experience by asking follow-up questions. Asking a candidate to expand on their answers can give you greater insight into their thought processes, personality, values and experience. Always be ready to ask a follow-up question and use your list of pre-written interview questions as a guide, rather than a strict plan."
        />
        <meta
          name="description60"
          content="7. TAKE NOTES TO HELP YOU REMEMBER IMPORTANT INFORMATION To help you make more confident and informed hiring decisions, take notes during the interview so you can remember more details later on. For example, you can jot down your first impressions of the candidates, take note of their body language. However, be careful to maintain the right balance between note-taking and active listening. Ensure that you’re making eye contact and fully engaging in the conversation, only pausing to take down notes every once in a while."
        />
        <meta
          name="description61"
          content="8. GIVE CANDIDATES THE CHANCE TO ASK QUESTIONS Make sure you give your interviewee time to ask questions about the position, team and company. Not only does this give them the opportunity to evaluate if the position is a good fit for them, but it also allows you to measure their interest and understanding of the company."
        />
        <meta
          name="description62"
          content="9. DESCRIBE THE NEXT STEPS Close the interview by explaining what the candidate can expect in terms of next steps, including when they can expect to hear back from you and what the rest of the interview process might look like. This is also a good time to inform them of your intended timeline for filling the position."
        />
        <meta
          name="description63"
          content="10. WHY DO YOU NEED TO BE ABLE TO CONDUCT AN INTERVIEW? When you know how to conduct an interview, you can find out more than what a job application, resume and cover letter will tell you. Asking the right questions and following an effective and fair interview process can help you decide how well a candidate’s skills, experience and personality align with company needs and avoid costly hiring mistakes."
        />
        <meta
          name="description65"
          content="COMMON TYPES OF INTERVIEWING STRATEGIES
There are dozens of interview techniques for employers that you can use when interviewing potential hires. There are several tips and tricks you can use to increase the efficiency of your interviewing process."
        />
        <meta
          name="description66"
          content="CHOOSE YOUR INTERVIEWER CAREFULLY
Deciding who should conduct your company’s interviews is a crucial part of setting up the interview process. If possible, it’s often a good idea for the new hire’s direct supervisor to conduct the interviews. Since they’ll work alongside the employee in their new role, they’re likely the best judge of who would best fit the position."
        />
        <meta
          name="description67"
          content="PREPARE CREATIVE QUESTIONS
One of the best ways to keep an interview from feeling stale or repetitive is to ask creative and dynamic questions. Asking common questions, such as questions about their personal strengths, will likely prompt a rehearsed and unoriginal answer. To facilitate an interesting and meaningful conversation, try asking questions that catch the interviewee off-guard."
        />
        <meta
          name="description68"
          content="QUESTIONS TO AVOID WHEN CONDUCTING INTERVIEWS:
While it’s important to be thorough when conducting an interview, so you can learn as much as possible about a potential candidate, there are certain topics and questions that should be avoided or carefully worded. This is to ensure that you don’t unintentionally discriminate against an interviewee or infringe on a candidate’s right to privacy. Some areas where you might want to tread lightly during an interview include:"
        />
        <meta
          name="description69"
          content="Age: While it’s okay to verify whether an applicant meets the minimum age requirements for a job, individuals aged 40 and older are protected by the Age Discrimination in Employment Act of 1967, which prevents employers from discriminating against both potential and current employees based on their age. A better question to ask is whether the interview meets the minimum age requirements for the job if it’s not clearly apparent, without asking for an exact number."
        />
        <meta
          name="description70"
          content="Disabilities: Individuals with disabilities are protected against discrimination under the Americans With Disabilities Act. Asking an applicant directly whether they’re disabled can lead to complaints later on if that worker is terminated or feels discriminated against in the workplace. While certain disabilities may be visibly obvious, such as an applicant using a mobility device, it’s best to simply ask whether the applicant possesses the capabilities needed to perform the job at hand."
        />
        <meta
          name="description71"
          content="Religious topics: Inquiring about someone’s religious beliefs should always be avoided unless the job in question is for a faith-based organization. However, in some situations, an applicant may require additional accommodations due to their religion. In this case, it would be the responsibility of the applicant to advise the employer of their needs once they’re hired."
        />
      </Helmet>
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
