import {
  Box,
  Button,
  Grid,
  Link,
  TextField,
  Typography
} from "@mui/material";

import React from "react";
import { Link as Linker } from "react-router-dom";
import { useAuth } from ".";


const Login: React.FC = () => {
  const { login } = useAuth();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      email: data.get('email') as string,
      password: data.get('password') as string
    };
    login(formData);
  };

  return (
    <>
      <Typography component="h1" variant="h5">
        Login
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
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Grid>
          {/* <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
          </Grid> */}

          <Grid item>
            <Link to="/forgot-pass" component={Linker} underline="none">
              {"Forgot Password?"}
            </Link>
          </Grid>

        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, height: "48px" }}
        >
          Login
        </Button>
        <Grid container>
          <Grid item>
            Don't have an account?
            <Link to="/sign-up" component={Linker} underline="none">
              {" Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
