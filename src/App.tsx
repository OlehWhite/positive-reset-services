import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import { GlobalStyle } from 'components/Layouts/styled';
import { StateLicense } from './routers/stateLicense';
import { OtherPage } from './components/OtherPage';
import { HowToStart } from './routers/howToStart';
import { Telehealth } from './routers/telehealth';
import { ContactUs } from './routers/contactUs';
import { Layout } from './components/Layouts';
import { Training } from './routers/training';
import { Interview } from './routers/interview';
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

        <Route path={ROUTES.HOW_TO_START} element={<HowToStart />} />
        <Route path={ROUTES.START_LICENSE} element={<StateLicense />} />
        <Route path={ROUTES.TRAINING} element={<Training />} />
        <Route path={ROUTES.INTERVIEWS} element={<Interview />} />
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
