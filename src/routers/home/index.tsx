import { HomeHeader } from 'components/Layouts/HomeHeader';
import { MotivationalQuotes } from './MotivationalQuotes';
import { FranchiseOptions } from './FranchiseOptions';
import { AboutFranchising } from './AboutFranchising';
import { Feedbacks } from 'components/Feedbacks';
import { OurPartners } from './OurPartners';
import { Location } from './Location';
import { Services } from './Services';
import React, { FC } from 'react';
import { Main } from './styled';

export const Home: FC = () => {
  return (
    <>
      <HomeHeader />
      <Main>
        <Services />
        <MotivationalQuotes />
        <Location />
        <Feedbacks />
        <FranchiseOptions />
        <AboutFranchising />
        <OurPartners />
      </Main>
    </>
  );
};
