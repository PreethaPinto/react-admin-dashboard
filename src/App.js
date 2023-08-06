import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SettingsPage from './pages/Settings';
import HomePage from './pages/Home';
import RootLayout from './pages/RootLayout';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
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
