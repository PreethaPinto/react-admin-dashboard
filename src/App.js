import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SettingsPage from './pages/Settings';
import HomePage from './pages/Home';
import RootLayout from './pages/RootLayout';

import Dashboard from './pages/Dashboard';
import TrainersPage from './pages/Trainers';
import MembersPage from './pages/Members';
import InvoicesPage from './pages/Invoices';
import NotificationsPage from './pages/Notifications';
import MembershipPage from './pages/Membership';
import ClassesPage from './pages/Classes';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: 'trainers', element: <TrainersPage /> },
        { path: 'members', element: <MembersPage /> },
        { path: 'membership', element: <MembershipPage /> },
        { path: 'notifications', element: <NotificationsPage /> },
        { path: 'classes', element: <ClassesPage /> },
        { path: 'invoices', element: <InvoicesPage /> },
        { path: 'settings', element: <SettingsPage /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
