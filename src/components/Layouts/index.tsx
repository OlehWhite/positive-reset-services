import React, { FC } from 'react';
import { Wrapper } from './styled';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';

export const Layout: FC = () => {
  return (
    <>
      <Wrapper>
        <Outlet />
        <Footer />
      </Wrapper>
    </>
  );
};
