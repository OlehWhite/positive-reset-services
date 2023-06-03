import { Title, WrapperHeader, Img, Info, Post, Text, Container, Ul, Li } from './styled';
import React from 'react';
import { Box } from '@mui/material';
import IMGOne from 'assets/icons/01-4.jpg';
import IMGTwo from 'assets/icons/04-6.jpg';
import IMGThree from 'assets/icons/02b.jpg';
import IMGFour from 'assets/icons/03-5.jpg';
import { BigPost } from './BigPost';
import { Feedbacks } from 'components/Feedbacks';

export const CommunityIntegration = () => {
  return (
    <Box>
      <WrapperHeader>
        <Title>TELEHEALTH: AN EXCITING NEW SEGMENT FOR FRANCHISING OPPORTUNITY</Title>
      </WrapperHeader>
      <Container>
        <Post>
          <Box>
            <Img
              src={IMGOne}
              alt="HOW POSITIVE RESET SERVICES CAN PROMOTE MENTAL HEALTH COMMUNITY INTEGRATION?"
              title="HOW POSITIVE RESET SERVICES CAN PROMOTE MENTAL HEALTH COMMUNITY INTEGRATION?"
            />
          </Box>
          <Info>
            <Title>
              HOW POSITIVE RESET SERVICES CAN PROMOTE MENTAL HEALTH COMMUNITY INTEGRATION?
            </Title>
            <Ul>
              <Li>
                Identify barriers to community integration and target obstacles that prevent people
                from being full members of their communities
              </Li>
              <Li>
                Provide supports which bring about meaningful changes in the lives of people with
                psychiatric disabilities (i.e. – Supported Education, Supported Employment,
                Self-Help Groups, Parenting Classes, etc.)
              </Li>
              <Li>
                Expand the range of opportunities for people who have mental illnesses to
                participate in their communities as active, equal members
              </Li>
            </Ul>
          </Info>
        </Post>
        <Post>
          <Info>
            <Title>OUR RESEARCH ON HUMAN INTEGRATION</Title>
            <Text>
              Community integration is integral to recovery for individuals with severe mental
              illness. We explored the integration of individuals with severe mental illness into
              mental health and non–mental health communities and associations with mental health
              service intensity.
            </Text>
          </Info>
          <Box>
            <Img
              src={IMGTwo}
              alt="OUR RESEARCH ON HUMAN INTEGRATION"
              title="OUR RESEARCH ON HUMAN INTEGRATION"
            />
          </Box>
        </Post>
        <Post>
          <Box>
            <Img
              src={IMGFour}
              alt="EXPERIENCE OF OUR PARTNERS"
              title="EXPERIENCE OF OUR PARTNERS"
            />
          </Box>{' '}
          <Info>
            <Title>EXPERIENCE OF OUR PARTNERS</Title>
            <Text>
              We are working with our partners to survey mental health clinics to better understand
              their experience of integrating behavioral health care lines with physical care. In
              our practice, we use survey results and highlight three trends emerging in the mental
              health industry.
            </Text>
          </Info>
        </Post>
        <Post>
          <Info>
            <Title>THREE OBSERVABLE TRENDS EMERGING ACROSS THE INDUSTRY:</Title>
            <Text>
              1. EHR optimization is needed for successful integration <br />
              2. Patient experience and care coordination drive improvements <br />
              3. Full integration is deemed desirable and attainable
            </Text>
          </Info>
          <Box>
            <Img
              src={IMGThree}
              alt="THREE OBSERVABLE TRENDS EMERGING ACROSS THE INDUSTRY"
              title="THREE OBSERVABLE TRENDS EMERGING ACROSS THE INDUSTRY"
            />
          </Box>
        </Post>
        <BigPost />
      </Container>
      <Feedbacks />
    </Box>
  );
};
