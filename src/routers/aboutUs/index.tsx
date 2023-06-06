import { VisionStatement } from './VisionStatement';
import { Feedbacks } from 'components/Feedbacks';
import { Mission } from './Mission';
import { Header } from './Header';
import { FC } from 'react';
import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';

export const AboutUs: FC = () => {
  return (
    <Box>
      <Helmet>
        <title>Positive Reset Services - Call Today | About Us</title>
        <meta name="description17" content="About Us" />
      </Helmet>
      <Header />
      <Mission />
      <VisionStatement />
      <Feedbacks />
    </Box>
  );
};
