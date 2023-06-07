import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import { CommunityIntegration } from './routers/communityIntegration';
import { BillingAndInsurances } from 'routers/billingAndInsurances';
import { CareerOpportunities } from './routers/careerOpportunities';
import { MedicationManagement } from 'routers/medicationManagement';
import { AppointmentRequest } from './routers/appointmentRequest';
import { ChildAndAdolescent } from './routers/childAndAdolescent';
import { OfficeLayoutSetup } from './routers/officeLayoutSetup';
import { GlobalStyle } from 'components/Layouts/styled';
import { FindLocation } from './routers/findLocation';
import { StateLicense } from './routers/stateLicense';
import { HelmetProvider } from 'react-helmet-async';
import { OtherPage } from './components/OtherPage';
import { HowToStart } from './routers/howToStart';
import { Telehealth } from './routers/telehealth';
import { Interview } from './routers/interview';
import { ContactUs } from './routers/contactUs';
import { Layout } from './components/Layouts';
import { Training } from './routers/training';
import { AboutUs } from './routers/aboutUs';
import { Website } from './routers/website';
import { Home } from './routers/home';
import { Erm } from './routers/erm';
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
        <Route path={ROUTES.STATE_LICENSE} element={<StateLicense />} />
        <Route path={ROUTES.TRAINING} element={<Training />} />
        <Route path={ROUTES.INTERVIEWS} element={<Interview />} />
        <Route path={ROUTES.ERM} element={<Erm />} />
        <Route path={ROUTES.FIND_LOCATION} element={<FindLocation />} />
        <Route path={ROUTES.COMMUNITY_INTEGRATION} element={<CommunityIntegration />} />
        <Route path={ROUTES.OFFICE_LAYOUT_SETUP} element={<OfficeLayoutSetup />} />
        <Route path={ROUTES.WEBSITE} element={<Website />} />
        <Route path={ROUTES.BILLING_AND_INSURANCE} element={<BillingAndInsurances />} />
        <Route path={ROUTES.APPOINTMENT_REQUEST} element={<AppointmentRequest />} />
        <Route path={ROUTES.CAREER_OPPORTUNITIES} element={<CareerOpportunities />} />
        <Route path={ROUTES.MEDICATION_MANAGEMENT} element={<MedicationManagement />} />
        <Route path={ROUTES.CHILD_AND_ADOLESCENT} element={<ChildAndAdolescent />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <HelmetProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
      </HelmetProvider>
    </>
  );
}

export default App;
