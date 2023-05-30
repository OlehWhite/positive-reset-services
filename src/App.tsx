import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import { GlobalStyle } from 'components/Layouts/styled';
import { OtherPage } from './components/OtherPage';
import { Telehealth } from './routers/telehealth';
import { ContactUs } from './routers/contactUs';
import { Layout } from './components/Layouts';
import { AboutUs } from './routers/aboutUs';
import { Home } from './routers/home';
import ROUTES from './routers/path';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTES.HOME} element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={ROUTES.HOME} element={<OtherPage />}>
        <Route path={ROUTES.TELEHEALTH} element={<Telehealth />} />
        <Route path={ROUTES.ABOUT_US} element={<AboutUs />} />
        <Route path={ROUTES.CONTACT_US} element={<ContactUs />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
