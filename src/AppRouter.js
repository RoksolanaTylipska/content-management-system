import { Navigate, createHashRouter } from 'react-router-dom';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import TabsList from './components/TabsList/TabsList.jsx';
import React from 'react';

const DummyTable = React.lazy(() => import('./components/Tabs/dummyTable.js'));
const DummyChart = React.lazy(() => import('./components/Tabs/dummyChart.js'));
const DummyList = React.lazy(() => import('./components/Tabs/dummyList.js'));

const AppRouter = createHashRouter([
  {
    path: '/',
    element: <TabsList />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Navigate to='tabs/dummyTable.js' replace />
      },

      {
        path: 'tabs/dummyTable.js',
        element: <DummyTable />,
      },
    
      {
        path: 'tabs/dummyChart.js',
        element: <DummyChart />,
      },
    
      {
        path: 'tabs/dummyList.js',
        element: <DummyList />,
      },
  
    ],
  },
])

export default AppRouter;



