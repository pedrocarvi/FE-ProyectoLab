import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import { useState } from "react";
import PageNotFound from "./components/security/pageNotFound/PageNotFound";
import Protected from "./components/security/protected/Protected";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" />,
    },
    {
      path: "/login",
      element: <Login loginHandler={loginHandler} />,
    },
    {
      path: "/home",
      element: (
        <Protected isLoggedIn={isLoggedIn}>
          <Dashboard />
        </Protected>
      ),
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
