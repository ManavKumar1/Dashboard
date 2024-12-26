import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Admin from "../Pages/Admin/Admin";
import Users from "../Pages/Users/Users";

const routes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/user-details/:id",
    element: <Admin />,
  },
];

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
};
