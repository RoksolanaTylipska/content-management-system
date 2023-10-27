import { Navigate, createBrowserRouter } from 'react-router-dom';
// import DummyTable from './components/Tabs/dummyTable';
// import DummyChart from './components/Tabs/dummyChart';
// import DummyList from './components/Tabs/dummyList';
import ErrorPage from './components/ErrorPage/ErrorPage';
import TabsList from './components/TabsList/TabsList';
import React from 'react';

const DummyTable = React.lazy(() => import('./components/Tabs/dummyTable'));
const DummyChart = React.lazy(() => import('./components/Tabs/dummyChart'));
const DummyList = React.lazy(() => import('./components/Tabs/dummyList'));

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <TabsList />,
    errorElement: <ErrorPage />,
    children: [

      {
        path: "/",
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
  }
])

export default AppRouter;



