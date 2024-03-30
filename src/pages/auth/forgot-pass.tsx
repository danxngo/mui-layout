import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { Link as Linker } from "react-router-dom";

const ForgotPass: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
    });
  };

  return (
    <Box sx={{ mt: 5, mx: 'auto', minWidth: 400 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        TaskMaster
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2, p: 2 }}>
        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
          Forgot Password
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, height: "48px" }}
        >
          Reset Password
        </Button>
        <Grid container justifyContent="center">
          <Grid item>
            <Typography>
              Don't have an account?{" "}
              <Link to="/sign-up" component={Linker} underline="none">
                Sign Up
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ForgotPass;
