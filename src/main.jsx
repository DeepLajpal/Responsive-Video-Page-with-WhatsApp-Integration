import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './pages/ErrorPage.jsx';
import AcknowledgmentPage from './pages/AcknowledgmentPage.jsx';
import HomePage from './pages/HomePage.jsx';
import UserForm from './components/UserForm.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/user-form",
        element: <UserForm />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/user-form/acknowledgment",
        element: <AcknowledgmentPage />,
        errorElement: <ErrorPage />,
      },
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
