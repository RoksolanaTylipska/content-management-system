import React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './AppRouter';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>
);