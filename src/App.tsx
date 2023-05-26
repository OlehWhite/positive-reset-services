import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import ROUTES from './routers/path';
import { Home } from './routers/Home';
import { Layout } from './components/Layouts';
import { GlobalStyle } from 'components/Layouts/styled';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTES.HOME} element={<Layout />}>
      <Route index element={<Home />} />
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
