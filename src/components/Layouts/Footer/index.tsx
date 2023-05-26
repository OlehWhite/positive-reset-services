import {
  Container,
  Wrapper,
  Menu,
  Logo,
  WorkingHours,
  RecentPosts,
  IMGLogo,
  Text,
  Nav,
  Ul,
  Li,
  WrapperPost,
  Post,
  Title,
  Date,
  ImgPost,
  ImgAlarm,
  Contact,
  ContactInfo,
  Email,
  ImgPhone,
  Tel,
  WrapperImg,
  TextLogo,
  Day,
  WrapperAlarm,
  WrapperPosition,
  Days,
  Copyright,
  Links,
  Twitter,
  Linkedin,
  Facebook,
  TitleFooter
} from './styled';
import React, { FC } from 'react';
import IMGPhoneLogo from 'assets/icons/phone-icon.svg';
import IMGLogoFooter from 'assets/icons/logo.png';
import IMGPostOne from 'assets/icons/post-1.jpg';
import IMGPostTwo from 'assets/icons/post-2.jpg';
import IMGPostThree from 'assets/icons/post-3.jpg';
import IMGAlarmClock from 'assets/icons/alarm-clock.png';
import IMGFacebook from 'assets/icons/facebook-footer.svg';
import IMGTwitter from 'assets/icons/twitter-footer.svg';
import IMGLinkedin from 'assets/icons/linkedin-footer.svg';
import { Box } from '@mui/material';

const BASE_MENU = [
  'Home',
  'Services',
  'Тelehealth',
  'Appointment request',
  'Billing and Insurances',
  'About Us',
  'Contact us',
  'Career Opportunities'
];

export const Footer: FC = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <IMGLogo src={IMGLogoFooter} alt="Logo" title="Logo" />
          <TextLogo>
            POSITIVE RESET SERVICES is a successful franchise company that opens Mental Health
            Clinics across Unlined Sates. POSITIVE RESET SERVICES works like a professional system
            that has stood the test of time, financial success and successful treatment outcomes.
          </TextLogo>
          <Contact>
            <WrapperImg>
              <ImgPhone src={IMGPhoneLogo} alt="Phone" title="Phone" />
            </WrapperImg>
            <ContactInfo>
              <Tel>+1 (848) 228-3388</Tel>
              <Email>Admin@positiveresetservices.com</Email>
            </ContactInfo>
          </Contact>
        </Logo>
        <Menu>
          <Title>MENU</Title>
          <Ul>
            {BASE_MENU.map((link, index) => (
              <Li key={index}>
                <Nav to="/">{link}</Nav>
              </Li>
            ))}
          </Ul>
        </Menu>
        <RecentPosts>
          <Title>RECENT POST</Title>
          <WrapperPost>
            <Post>
              <ImgPost src={IMGPostOne} alt="First Post" title="Second Post" />
              <Box>
                <Text>
                  Cognitive Function Rapidly Restored After Ketamine Treatment, Decreases
                  Suicidality
                </Text>
                <Date>December 13, 2021</Date>
              </Box>
            </Post>
            <Post>
              <ImgPost src={IMGPostTwo} alt="First Post" title="Second Post" />
              <Box>
                <Text>The Impact of COVID-19 on Suicide Death Rates</Text>
                <Date>December 13, 2021</Date>
              </Box>
            </Post>
            <Post>
              <ImgPost src={IMGPostThree} alt="First Post" title="Second Post" />
              <Box>
                <Text>Drugs That Boost Mood: Do You Even Have a Mood Disorder?</Text>
                <Date>December 13, 2021</Date>
              </Box>
            </Post>
          </WrapperPost>
        </RecentPosts>
        <WorkingHours>
          <WrapperPosition>
            <WrapperAlarm>
              <ImgAlarm src={IMGAlarmClock} alt="Alar" title="Alarm" />
            </WrapperAlarm>
          </WrapperPosition>
          <Days>
            <Day>Monday: 09am - 05pm</Day>
            <Day>Tuesday: 09am - 05pm</Day>
            <Day>Wednesday: 09am - 05pm</Day>
            <Day>Thursday: 09am - 05pm</Day>
            <Day>Friday: 09am - 05pm</Day>
            <Day>Saturday: Closed</Day>
            <Day>Sunday: Closed</Day>
          </Days>
        </WorkingHours>
      </Wrapper>
      <Copyright>
        <TitleFooter>Copyright © 2021 Vimax LLC. All rights reserved</TitleFooter>
        <Links>
          <a href="https://www.facebook.com/">
            <Facebook src={IMGFacebook} alt="Facebook" title="Facebook" />
          </a>
          <a href="https://twitter.com/">
            <Twitter src={IMGTwitter} alt="Twitter" title="Twitter" />
          </a>
          <a href="https://www.linkedin.com/">
            <Linkedin src={IMGLinkedin} alt="Linkedin" title="Linkedin" />
          </a>
        </Links>
      </Copyright>
    </Container>
  );
};
