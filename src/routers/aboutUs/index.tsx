import { VisionStatement } from './VisionStatement';
import { Feedbacks } from 'components/Feedbacks';
import { Mission } from './Mission';
import { Header } from './Header';
import { FC } from 'react';

export const AboutUs: FC = () => {
  return (
    <main>
      <Header />
      <Mission />
      <VisionStatement />
      <Feedbacks />
    </main>
  );
};
