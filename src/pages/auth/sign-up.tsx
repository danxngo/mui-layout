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

const SignUp: React.FC = () => {
  const { signup } = useAuth();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      email: data.get('email') as string,
      password: data.get('password') as string,
      user_name: data.get('firstName') + "_" + data.get('lastName') as string
    };

    signup(formData);
  };

  return (
    <Box sx={{ mt: 5, mx: 'auto', maxWidth: 400 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        TaskMaster
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2, p: 2 }}>
        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
          Sign up
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
            />
          </Grid>
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
              autoComplete="new-password"
            />
          </Grid>
          {/* <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid> */}
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, height: "48px" }}
        >
          Sign Up
        </Button>
        <Grid container justifyContent="center">
          <Grid item>
            <Typography>
              Already have an account?{" "}
              <Link component={Linker} to="/login" underline="none">
                Login
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SignUp;
