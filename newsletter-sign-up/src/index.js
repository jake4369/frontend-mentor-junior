import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Success from "./components/Success";
import { EmailProvider } from "./context/emailContext";
import ProtectedRoute from "./components/ProtectedRoute";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/success",
    element: (
      <ProtectedRoute>
        <Success />
      </ProtectedRoute>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EmailProvider>
      <RouterProvider router={router} />
    </EmailProvider>
  </React.StrictMode>
);
