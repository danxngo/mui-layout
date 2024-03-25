import { Box, Paper } from "@mui/material";
import React from "react";

type CenteredLayoutProps = {
  children: React.ReactNode;
};

const CenteredLayout: React.FC<CenteredLayoutProps> = ({ children }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Paper elevation={3} sx={{ maxWidth: 600, padding: 2 }}>
        {children}
      </Paper>
    </Box>
  );
};

export default CenteredLayout;
