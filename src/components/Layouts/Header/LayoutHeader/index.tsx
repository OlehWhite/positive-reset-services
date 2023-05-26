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
import IMGHomeLogo from 'assets/icons/logo.png';
import IMGPhoneLogo from 'assets/icons/phone-icon.svg';
import IMGFollowIcon from 'assets/icons/follow-icon.png';
import IMGFacebook from 'assets/icons/facebook-icon.svg';
import IMGLinkedin from 'assets/icons/linkedin-icon.svg';
import React from 'react';
import { Box } from '@mui/material';

export const LayoutHeader = () => {
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
            <Tel>+1 (848) 228-3388</Tel>
            <Email>Admin@positiveresetservices.com</Email>
          </ContactInfo>
        </Contact>
        <Follow>
          <WrapperImg>
            <ImgFollow src={IMGFollowIcon} alt="Follow" title="Follow" />
          </WrapperImg>
          <FollowInfo>
            <Title>Follow Us</Title>
            <WrapperFollow>
              <a href="https://www.facebook.com/">
                <Link src={IMGFacebook} alt="Facebook" title="Facebook" />
              </a>
              <a href="https://www.linkedin.com/">
                <Link src={IMGLinkedin} alt="Linkedin" title="Linkedin" />
              </a>
            </WrapperFollow>
          </FollowInfo>
        </Follow>
      </ContactAndFollow>
    </Wrapper>
  );
};
