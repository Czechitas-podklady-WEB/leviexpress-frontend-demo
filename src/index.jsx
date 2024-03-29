import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './components/App';
import { Home } from './components/Home';
import { Reservation } from './components/Reservation';
import './style.css';

export const apiBaseUrl = 'https://leviexpress-backend.herokuapp.com/api';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/reservation/:id',
        element: <Reservation />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);
