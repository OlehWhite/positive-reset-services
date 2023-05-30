import React, { FC, useEffect, useState } from 'react';
import IGMIllinois from 'assets/icons/Illinois-BC-Name01e.png';
import { Wrapper, Img, Title, Text, Link, Tel, Email, Address } from './styled';
import { Box } from '@mui/material';
import axios from 'axios';
import { PRIVATE_DATA } from '../../../privateData';
import IMGFacebook from 'assets/icons/facebook-icon.svg';
import IMGInstagram from 'assets/icons/instagram.png';

const ID = 'telephoneNumber';

export const Covid19: FC = () => {
  const [telNum, setTelNum] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [linkFacebook, setLinkFaceBook] = useState<string>('');
  const [linkInstagram, setLinkInstagram] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  useEffect(() => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/${PRIVATE_DATA.spaseID}/entries?content_type=${ID}&access_token=${PRIVATE_DATA.accessId}`
      )
      .then((response) => {
        setTelNum(response.data.items[0].fields.telephoneNumber.content[0].content[0].value);
        setEmail(response.data.items[0].fields.email.content[0].content[0].value);
        setLinkFaceBook(response.data.items[0].fields.facebookLink.content[0].content[0].value);
        setLinkInstagram(response.data.items[0].fields.instagramLink.content[0].content[0].value);
        setAddress(response.data.items[0].fields.address.content[0].content[0].value);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <>
      <Wrapper>
        <Box>
          <Img src={IGMIllinois} alt="Logo" title="Logo" />
        </Box>
        <Box>
          <Title>STATEMENT TO EMPLOYEES AND PATIENTS REGARDING COVID-19</Title>
          <Text>
            Our number one priority is the health and safety of our employees, partners and
            patients. Our clinic is 100 percent operational and we have prepared an operational plan
            to ensure we can maintain our service level, while ensuring the health and safety of all
            that interact with our clinic.
          </Text>
          <Text>
            We closely monitor any developments regarding COVID-19 safety measures and will
            implement updates as needed.
          </Text>
          <Text>
            - Hand Hygiene: Proper and frequent hand-washing is vital to help combat the spread of
            viruses. <br/>
            - Ongoing Training: In addition to our regular training, we are completing
            enhanced COVID-19 awareness training as a team. <br/>
            - Potential Exposure: Employees who exhibit COVID-19 symptoms, those who live with someone exhibiting symptoms, or anyone
            who has been exposed to the virus are mandated to not come to work.
          </Text>
          <Text>
            In response to the COVID-19 outbreak we would like to extend our counseling and
            medication management services. We are currently offering TeleBehavioral Health Therapy
            services and Medication Management to anyone who is experiencing mental health
            challenges such as anxiety, depression, stress, or otherwise including those caused as a
            result of recent events. If you or someone you know resides in any area of the State of
            Illinois and is in need of our services please reach out to our office at +1 (848)
            228-3388 and get access to the help you need.
          </Text>
          <Tel>{telNum}</Tel>
          <Email>{email}</Email>
          <Address>{address}</Address>
          <Box>
            <a href={linkFacebook}>
              <Link src={IMGFacebook} alt="Facebook" title="Facebook" />
            </a>
            <a href={linkInstagram}>
              <Link src={IMGInstagram} alt="Linkedin" title="Linkedin" />
            </a>
          </Box>
        </Box>
      </Wrapper>
    </>
  );
};
