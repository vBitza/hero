import React from 'react';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Home from './pages/Home/Home';


import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: "",
        element: <App route="home"/>,
      },
      {
        path: "/superheroes",
        element: <App route="superheroes"/>,
      },
    ],
  }
]);

ReactDOM.render(
  <RouterProvider
    router={router}
    fallbackElement={<Home/>}
  />,
  document.getElementById('root')
);
