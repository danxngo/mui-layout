import { ChevronLeft, ExitToApp, SvgIconComponent } from "@mui/icons-material";
import { Avatar, Box, Divider, IconButton, ListItemButton, Toolbar, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { useAuth } from "../../pages/auth";
import { Menu, appLogo, appName, appSlogan } from "../config";
import { Drawer } from "./styled-mui";


type ListButtonProps = {
  title: string;
  href: string;
  icon: SvgIconComponent;
  showOnBottomNav: boolean;
};

const ListButton: React.FC<ListButtonProps> = ({ title, href, icon: Icon }) => {
  return (
    <ListItemButton component={Link} to={href}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItemButton>
  );
};


type SideNavProps = {
  toggleDrawer: () => void;
  open: boolean;
}

const SideNav :React.FC<SideNavProps>  = ({open, toggleDrawer}) => {
  const { logout } = useAuth();

  return (
    <Drawer
      open={open}
      variant="permanent"
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: [1],
        }}
      >
        <Avatar src={appLogo} variant={"rounded"}  />
        <Box>
          <Typography sx={{ fontWeight: "bold" }}>{appName}</Typography>
          <Typography variant={"subtitle2"}>{appSlogan}</Typography>
        </Box>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeft />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {Menu.map((item, index) => (
          <ListButton
            key={index}
            title={item.title}
            href={item.href}
            icon={item.icon}
            showOnBottomNav={item.showOnBottomNav}
          />
        ))}
      </List>

      <Box sx={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Divider />
        <ListItemButton onClick={logout}>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </Box>
    </Drawer>
  );
};

export default SideNav;
