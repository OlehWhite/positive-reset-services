import { VisionStatement } from './VisionStatement';
import { Feedbacks } from 'components/Feedbacks';
import { Mission } from './Mission';
import { Header } from './Header';
import { FC } from 'react';
import { Box } from '@mui/material';

export const AboutUs: FC = () => {
  return (
    <Box>
      <Header />
      <Mission />
      <VisionStatement />
      <Feedbacks />
    </Box>
  );
};
