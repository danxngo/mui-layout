import {
  MenuOutlined,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import {
  Avatar,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import useColorMode from "../../theme/color-mode-provider";
import { AppBar, ColorModeSwitch, StyledBadge } from "./styled-mui";

type HeaderProps = {
  isMobile: boolean;
  toggleDrawer: () => void;
  open: boolean;
};

const Header: React.FC<HeaderProps> = ({ isMobile, open , toggleDrawer }) => {
  const location = useLocation();
  const x = location.pathname.split("/").pop() ?? "";
  const currentRoute = x.trim() === "" ? "Dashboard" : x;

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <AppBar
      position="absolute"
      style={{
        backdropFilter: "blur(10px)",
      }}
      open={open}
      is_mobile={isMobile.toString()}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton // hidden button for mobile
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: "36px",
            ...(open && { display: "none" }),
          }}
        >
          <MenuOutlined />
        </IconButton>
        <Typography variant="h6" component="div" noWrap sx={{ flexGrow: 1 }}>
          {currentRoute?.charAt(0).toUpperCase() + currentRoute?.slice(1)}
        </Typography>

        <IconButton size="large" color="inherit" aria-label="notifications">
          <NotificationsIcon />
        </IconButton>

        <ColorModeSwitch
          color="default"
          checked={colorMode === "dark"}
          onChange={toggleColorMode}
          inputProps={{ "aria-label": "toggle dark mode" }}
          sx={{ ml: 2 }}
        />

        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
          sx={{ ml: 2 }}
        >
          <Avatar />
        </StyledBadge>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
