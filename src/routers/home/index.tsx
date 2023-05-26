import { MotivationalQuotes } from './MotivationalQuotes';
import { FranchiseOptions } from './FranchiseOptions';
import { AboutFranchising } from './AboutFranchising';
import { OurPartners } from './OurPartners';
import { Feedbacks } from './Feedbacks';
import { Location } from './Location';
import { Services } from './Services';
import { Main } from './styled';
import { FC } from 'react';

export const Home: FC = () => {
  return (
    <Main>
      <Services />
      <MotivationalQuotes />
      <Location />
      <Feedbacks />
      <FranchiseOptions />
      <AboutFranchising />
      <OurPartners />
    </Main>
  );
};
