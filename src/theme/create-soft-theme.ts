import { createTheme } from '@mui/material/styles';

const createSoftTheme = (mode : "dark"|"light") => {
  const isDarkMode = mode === 'dark';

  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#007AFF', // Soft blue
      },
      secondary: {
        main: '#34C759', // Soft green
      },
      error: {
        main: '#FF3B30', // Soft red
      },
      ...(isDarkMode && {
        background: {
          default: '#000', // Dark mode background color
          paper: '#1c1c1e', // Dark mode paper color
        },
      }),
    },
    typography: {
      fontFamily: 'Arial, sans-serif', // Change the font family
    },
    shape: {
      borderRadius: 8, // Rounded corners similar to Soft components
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 10, // Rounded buttons
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)', // Light shadow
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: 'none', // No shadow for app bar
            backgroundColor: 'transparent', // Transparent app bar
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            boxShadow: '2px 0px 4px rgba(0, 0, 0, 0.1)', // Light shadow for drawer
          },
        },
      },
    },
  });
};

export default createSoftTheme;
