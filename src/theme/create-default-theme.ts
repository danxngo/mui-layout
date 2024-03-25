import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const createDefaultTheme = (mode: "light" | "dark") => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: "#0f4c5c",
      },
      secondary: {
        main: "#f50057",
      },
      error: {
        main: red.A400,
      },
    },
  });
};

export default createDefaultTheme;