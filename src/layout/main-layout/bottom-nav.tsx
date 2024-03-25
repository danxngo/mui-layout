import { Add } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Fab } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "../config";

const BottomNav = () => {
  const [value, setValue] = React.useState(0);

  return (
    <footer
      style={{ width: "100%", position: "absolute", bottom: 0, zIndex: 1000 }}
    >
      <BottomNavigation
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        {Menu.filter((item) => item.showOnBottomNav).map((item, index) => (
          <BottomNavigationAction
            key={index}
            label={item.title}
            value={index}
            icon={<item.icon />}
            to={item.href}
            component={Link}
          />
        ))}
      </BottomNavigation>
      <Fab
        color="primary"
        aria-label="add"
        style={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1001,
        }}
        component={Link}
        to="/notes"
      >
        <Add />
      </Fab>
    </footer>
  );
};

export default BottomNav;
