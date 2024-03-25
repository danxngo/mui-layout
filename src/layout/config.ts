import { CalendarToday, Dashboard, Description, ViewList } from "@mui/icons-material";

export const Menu = [
  {
    title: 'Dashboard',
    href: '/',
    icon: Dashboard,
    showOnBottomNav: false,
  },
  {
    title: 'Notes',
    href: '/notes',
    icon: Description,
    showOnBottomNav: false,
  },
  {
    title: 'Calendar',
    href: '/calendar',
    icon: CalendarToday,
    showOnBottomNav: true,
  },
  {
    title: 'Kanban',
    href: '/kanban',
    icon: ViewList,
    showOnBottomNav: true,
  }
];

export const drawerWidth: number = 240;

export const appLogo = "/logo192.png";
export const appName = "App Name";
export const appSlogan = "This is the Slogan";