import { Outlet } from "react-router-dom";
import DesktopHeader from "../common/header/DesktopHeader";

// ! The Outlet component tells React Router where to render the child route components!!!

import React from "react";

const Layout = () => {
  return (
    <>
      <main>
        <DesktopHeader />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
