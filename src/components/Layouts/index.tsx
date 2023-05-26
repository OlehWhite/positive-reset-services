import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper } from './styled';

import { Footer } from './Footer';
import { Header } from './Header';

export const Layout: FC = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Outlet />
        <Footer />
      </Wrapper>
    </>
  );
};
