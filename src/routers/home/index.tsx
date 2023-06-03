import { HomeHeader } from 'components/Layouts/HomeHeader';
import { MotivationalQuotes } from './MotivationalQuotes';
import { FranchiseOptions } from './FranchiseOptions';
import { AboutFranchising } from './AboutFranchising';
import { Feedbacks } from 'components/Feedbacks';
import { OurPartners } from './OurPartners';
import { Location } from './Location';
import { Services } from './Services';
import { Box } from '@mui/material';
import React, { FC } from 'react';

export const Home: FC = () => {
  return (
    <>
      <HomeHeader />
      <Box>
        <Services />
        <MotivationalQuotes />
        <Location />
        <Feedbacks />
        <FranchiseOptions />
        <AboutFranchising />
        <OurPartners />
      </Box>
    </>
  );
};
