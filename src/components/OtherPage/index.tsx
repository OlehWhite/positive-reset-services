import React from 'react';
import { OtherHeader } from 'components/Layouts/OtherHeader';
import { Outlet } from 'react-router-dom';

export const OtherPage = () => {
  return (
    <>
      <OtherHeader />
      <Outlet />
    </>
  );
};
