import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import ROUTES from './routers/path';
import { Home } from './routers/home';

const router = createBrowserRouter(
  createRoutesFromElements(<Route path={ROUTES.HOME} element={<Home />}></Route>)
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
