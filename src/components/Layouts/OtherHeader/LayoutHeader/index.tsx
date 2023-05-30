import {
  Contact,
  ContactAndFollow,
  ContactInfo,
  Email,
  Follow,
  FollowInfo,
  ImgFollow,
  ImgLogo,
  ImgPhone,
  Link,
  Tel,
  Title,
  Wrapper,
  WrapperFollow,
  WrapperImg
} from './styled';
import IMGHomeLogo from 'assets/icons/black-logo.png';
import IMGPhoneLogo from 'assets/icons/silver-mobil.png';
import IMGFollowIcon from 'assets/icons/silver-follow-icon.png';
import IMGFacebook from 'assets/icons/facebook-icon.svg';
import IMGLinkedin from 'assets/icons/linkedin-icon.svg';
import React, { FC, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';
import { PRIVATE_DATA } from 'routers/privateData';

const ID = 'telephoneNumber';

export const LayoutHeader: FC = () => {
  const [telNum, setTelNum] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [linkFacebook, setLinkFaceBook] = useState<string>('');
  const [linkLinkedin, setLinkLinkedin] = useState<string>('');

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
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <Wrapper>
      <Box>
        <ImgLogo src={IMGHomeLogo} alt="Logo" title="Logo" />
      </Box>
      <ContactAndFollow>
        <Contact>
          <WrapperImg>
            <ImgPhone src={IMGPhoneLogo} alt="Phone" title="Phone" />
          </WrapperImg>
          <ContactInfo>
            <Tel>{telNum}</Tel>
            <Email>{email}</Email>
          </ContactInfo>
        </Contact>
        <Follow>
          <WrapperImg>
            <ImgFollow src={IMGFollowIcon} alt="Follow" title="Follow" />
          </WrapperImg>
          <FollowInfo>
            <Title>Follow Us</Title>
            <WrapperFollow>
              <a href={linkFacebook}>
                <Link src={IMGFacebook} alt="Facebook" title="Facebook" />
              </a>
              <a href={linkLinkedin}>
                <Link src={IMGLinkedin} alt="Linkedin" title="Linkedin" />
              </a>
            </WrapperFollow>
          </FollowInfo>
        </Follow>
      </ContactAndFollow>
    </Wrapper>
  );
};
