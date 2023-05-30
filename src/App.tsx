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

        <Route path={ROUTES.HOW_TO_START} element={<div>How to Start</div>} />
        <Route path={ROUTES.START_LICENSE} element={<div>tart License</div>} />
        <Route path={ROUTES.TRAINING} element={<div>Training</div>} />
        <Route path={ROUTES.INTERVIEWS} element={<div>Interviews</div>} />
        <Route path={ROUTES.ERM} element={<div>ERM</div>} />
        <Route path={ROUTES.FIND_LOCATION} element={<div>Find Location</div>} />
        <Route path={ROUTES.COMMUNITY_INTEGRATION} element={<div>Community Integration</div>} />
        <Route path={ROUTES.OFFICE_LAYOUT_SETUP} element={<div>Office Layout/Setup</div>} />
        <Route path={ROUTES.WEBSITE} element={<div>HWebsite</div>} />
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
