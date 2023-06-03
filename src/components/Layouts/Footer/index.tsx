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
import { PRIVATE_DATA } from '../../../routers/privateData';
import IMGFacebook from 'assets/icons/facebook-footer.svg';
import IMGLinkedin from 'assets/icons/linkedin-footer.svg';
import IMGAlarmClock from 'assets/icons/alarm-clock.png';
import IMGTwitter from 'assets/icons/twitter-footer.svg';
import React, { FC, useEffect, useState } from 'react';
import IMGPhoneLogo from 'assets/icons/phone-icon.svg';
import IMGLogoFooter from 'assets/icons/logo.png';
import { Box } from '@mui/material';
import axios from 'axios';

const BASE_MENU = [
  { page: 'Home', path: '/' },
  { page: 'Services', path: '/services' },
  { page: 'Тelehealth', path: '/telehealth' },
  { page: 'Appointment request', path: '/appointment-request' },
  { page: 'Billing and Insurances', path: '/billing-and-insurances' },
  { page: 'About Us', path: '/about-us' },
  { page: 'Contact us', path: '/contact-us' },
  { page: 'Career Opportunities', path: '/career-opportunities' }
];

interface Post {
  img: string;
  text: string;
  button: string;
}

const ID = 'telephoneNumber';
const IDPosts = 'aboutFranchising';

export const Footer: FC = () => {
  const [telNum, setTelNum] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [linkFacebook, setLinkFaceBook] = useState<string>('');
  const [linkLinkedin, setLinkLinkedin] = useState<string>('');
  const [linkTwitter, setTwitter] = useState<string>('');
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/${PRIVATE_DATA.spaseID}/entries?content_type=${IDPosts}&access_token=${PRIVATE_DATA.accessId}`
      )
      .then((response) => {
        if (response.data.items.length > 0) {
          response.data.items.map((post?: any) => {
            const imgID = post.fields.img.sys.id;
            const text = post.fields.text.content[0].content[0].value;
            const button = post.fields.button.content[0].content[0].value;

            return axios
              .get(
                `https://cdn.contentful.com/spaces/${PRIVATE_DATA.spaseID}/assets/${imgID}?access_token=${PRIVATE_DATA.accessId}`
              )
              .then((response) => {
                const newPost: Post = {
                  img: response.data.fields.file.url,
                  text,
                  button
                };
                setPosts((prevPost) => [...prevPost, newPost]);
              });
          });
        }
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/${PRIVATE_DATA.spaseID}/entries?content_type=${ID}&access_token=${PRIVATE_DATA.accessId}`
      )
      .then((response) => {
        setTelNum(response.data.items[0].fields.telephoneNumber.content[0].content[0].value);
        setEmail(response.data.items[0].fields.email.content[0].content[0].value);
        setLinkFaceBook(response.data.items[0].fields.facebookLink.content[0].content[0].value);
        setLinkLinkedin(response.data.items[0].fields.linkedinLink.content[0].content[0].value);
        setTwitter(response.data.items[0].fields.twitterLink.content[0].content[0].value);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  const handleMenuClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
              <Tel>{telNum}</Tel>
              <Email>{email}</Email>
            </ContactInfo>
          </Contact>
        </Logo>
        <Menu>
          <Title>MENU</Title>
          <Ul>
            {BASE_MENU.map((link, index) => (
              <Li key={index}>
                <Nav to={link.path} onClick={handleMenuClick} >{link.page}</Nav>
              </Li>
            ))}
          </Ul>
        </Menu>
        <RecentPosts>
          <Title>RECENT POST</Title>
          <WrapperPost>
            {posts.length > 0 &&
              posts.slice(0, 3).map((post: Post, index: number) => (
                <Post key={index}>
                  <ImgPost src={post.img} alt="First Post" title="Second Post" />
                  <Box>
                    <Text>{post.text}</Text>
                    <Date>{post.button}</Date>
                  </Box>
                </Post>
              ))}
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
          <a href={linkFacebook}>
            <Facebook src={IMGFacebook} alt="Facebook" title="Facebook" />
          </a>
          <a href={linkTwitter}>
            <Twitter src={IMGTwitter} alt="Twitter" title="Twitter" />
          </a>
          <a href={linkLinkedin}>
            <Linkedin src={IMGLinkedin} alt="Linkedin" title="Linkedin" />
          </a>
        </Links>
      </Copyright>
    </Container>
  );
};
