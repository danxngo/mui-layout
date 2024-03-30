import { Box, Paper } from "@mui/material";
import React from "react";
import useColorMode from "../theme/color-mode-provider";

type CenteredLayoutProps = {
  children: React.ReactNode;
};

const CenteredLayout: React.FC<CenteredLayoutProps> = ({ children }) => {
  const {colorMode} = useColorMode();
  const isDarkMode = colorMode === "dark";

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{
        backgroundImage: `linear-gradient(45deg, ${
          isDarkMode ? "#35274d" : "#93a5cf"
        }, ${isDarkMode ? "#1a1b1d" : "#e4efe9"})`, // Adjust gradient colors for dark mode
        backgroundSize: "200% 200%",
        animation: "$gradientAnimation 10s ease infinite",
      }}
    >
      <Paper elevation={3} sx={{ maxWidth: 600, padding: 2 }}>
        {children}
      </Paper>
    </Box>
  );
};

export default CenteredLayout;
