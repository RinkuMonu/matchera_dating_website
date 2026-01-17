import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";

const AuthLayout = () => {
  return (
    <>
      <DashboardHeader />
      <Outlet />
    </>
  );
};

export default AuthLayout;
