import { Container, Wrapper, Title, Ul, Li, Text, TContact, Contact } from './styled';
import { PRIVATE_DATA } from '../../privateData';
import { useEffect, useState } from 'react';
import { DATA_INFO } from './mocData';
import { Box } from '@mui/material';
import axios from 'axios';
import {Helmet} from "react-helmet-async";

const ID = 'telephoneNumber';

export const ContactInfo = () => {
  const [telNum, setTelNum] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/${PRIVATE_DATA.spaseID}/entries?content_type=${ID}&access_token=${PRIVATE_DATA.accessId}`
      )
      .then((response) => {
        setTelNum(response.data.items[0].fields.telephoneNumber.content[0].content[0].value);
        setEmail(response.data.items[0].fields.email.content[0].content[0].value);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <Container>
      <Helmet>
        <meta
          name="description23"
          content="CONTACT INFO
If you WANT to be part of our franchised family;
If you are READY to become part of a successful, proven and established system;
If you CAN run your own business, with minimal investment and professional help;
If you FEEL a desire to help people and save them from behavioral problems; You are in the right place and at the right time.
Call, write and get more information."
        />
      </Helmet>
      <Wrapper>
        <Title>CONTACT INFO</Title>
        <Box>
          <Ul>
            {DATA_INFO.map((item, index) => (
              <Li key={index}>{item.text}</Li>
            ))}
          </Ul>
          <Text>Call, write and get more information.</Text>
        </Box>
        <Box>
          <Contact>
            <TContact>CONTACT</TContact>
            <TContact>{telNum}</TContact>
          </Contact>
          <Contact>
            <TContact>EMAIL</TContact>
            <TContact>{email}</TContact>
          </Contact>
        </Box>
      </Wrapper>
    </Container>
  );
};
