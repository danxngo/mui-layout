import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";

const ForgotPass: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
    });
  };

  return (
    <>
      <Typography component="h1" variant="h5">
        Forgot Password
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
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
        <Grid container>
          <Grid item>
            Don't have an account?
            <Link href="#">Sign Up</Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ForgotPass;
