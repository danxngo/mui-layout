import { Toolbar, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import BottomNav from "./bottom-nav";
import Header from "./header";
import SideNav from "./side-nav";

type LayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <>
      {isMobile ? (
        <>
          <Header isMobile={isMobile} open={open} toggleDrawer={toggleDrawer} />
          <Toolbar/>
          <main>{children}</main>
          <BottomNav />
        </>
      ) : (
        <>
          <nav>
            <SideNav toggleDrawer={toggleDrawer} open={open}/>
          </nav>
          <div style={{ marginLeft: 240 }}>
            <Header isMobile={isMobile} open={open} toggleDrawer={toggleDrawer} />
            <Toolbar/>
            <main style={{ padding: ".5rem" }}>{children}</main>
          </div>
        </>
      )}
    </>
  );
};

export default MainLayout;
