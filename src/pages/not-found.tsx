// NotFound.tsx

import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
      <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h4">
        404 - Page Not Found
      </Typography>

      <Typography variant="subtitle1" sx={{ my: 2, textAlign:"left" }} >
        The page you are looking for could not be found.
      </Typography>

      <Button variant="contained" color="primary"  component={Link} to="/">
        Go To Homepage
      </Button>
    </Box>
    );
};

export default NotFound;
