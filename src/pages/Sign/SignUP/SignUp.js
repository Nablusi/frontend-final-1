import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import theme from "../../../theme/Theme";
import { AxiosPost } from "../../../services/API/AxiosPost.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp({
  postRes,
  setPostRes,
  firstName,
  lastName,
  email,
  phoneNumber,
  password,
  handleFirstName,
  handleLastName,
  handleEmail,
  checkEmail,
  handlePhoneNumber,
  checkPhoneNumber,
  handlePassword,
  checkPassword,
  location,
  handleLocation,
  setToast,
}) {
  const navigate = useNavigate();
  const [signFlag, setSignFlag] = useState(0);
  useEffect(() => {
    if (signFlag === 1) {
      setSignFlag(0);
      if (postRes) {
        if (postRes.data) navigate("/sign/signin");
        else {
          setToast({
            message: postRes.message,
            open: true,
          });
          setTimeout(() => {
            setToast({ open: false });
          }, 3000);
        }
      }
    }
  }, [postRes, setToast, navigate, signFlag]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get("firstName").length === 0) {
      setToast({ message: "Invalid First Name", open: true });
      setTimeout(() => {
        setToast({ open: false });
      }, 3000);
      return;
    }
    if (data.get("lastName").length === 0) {
      setToast({ message: "Invalid Last Name", open: true });
      setTimeout(() => {
        setToast({ open: false });
      }, 3000);
      return;
    }
    if (checkEmail(data.get("email")) === false) {
      setToast({ message: "Invalid email address", open: true });
      setTimeout(() => {
        setToast({ open: false });
      }, 3000);
      return;
    }
    if (checkPhoneNumber(data.get("PhoneNumber")) === false) {
      setToast({
        message: "Phone number should contain only 10 digits",
        open: true,
      });
      setTimeout(() => {
        setToast({ open: false });
      }, 3000);
      return;
    }
    if (
      checkPassword(data.get("password") === false) |
      (data.get("password").length < 8)
    ) {
      setToast({
        message:
          "Password should contain at least 8 characters, including letters, digits, and special characters",
        open: true,
      });
      setTimeout(() => {
        setToast({ open: false });
      }, 3000);
      return;
    }
    if (data.get("location").length < 1) {
      setToast({ message: "Invalid Location", open: true });
      setTimeout(() => {
        setToast({ open: false });
      }, 3000);
      return;
    }

    AxiosPost(
      "https://backend-final-1-latest.onrender.com/api/auth/signup",
      {
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        email: data.get("email"),
        password: data.get("password"),
        phone: data.get("PhoneNumber"),
        location: data.get("location"),
      },
      setPostRes,
      setSignFlag
    );
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: theme.palette.primary.carouselColor }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  value={firstName}
                  onChange={handleFirstName}
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  sx={{
                    "&.MuiFormControl-root .MuiFormLabel-root.Mui-focused": {
                      color: `${theme.palette.primary.carouselColor} `,
                    },
                    "&.MuiFormControl-root .Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: `${theme.palette.primary.carouselColor} `,
                      },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={handleLastName}
                  autoComplete="family-name"
                  variant="outlined"
                  sx={{
                    "&.MuiFormControl-root .MuiFormLabel-root.Mui-focused": {
                      color: `${theme.palette.primary.carouselColor} `,
                    },
                    "&.MuiFormControl-root .Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: `${theme.palette.primary.carouselColor} `,
                      },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={handleEmail}
                  autoComplete="email"
                  sx={{
                    "&.MuiFormControl-root .MuiFormLabel-root.Mui-focused": {
                      color: `${theme.palette.primary.carouselColor} `,
                    },
                    "&.MuiFormControl-root .Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: `${theme.palette.primary.carouselColor} `,
                      },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="PhoneNumber"
                  label="Phone Number"
                  name="PhoneNumber"
                  value={phoneNumber}
                  onChange={handlePhoneNumber}
                  type="PhoneNumber"
                  autoComplete="PhoneNumber"
                  sx={{
                    "&.MuiFormControl-root .MuiFormLabel-root.Mui-focused": {
                      color: `${theme.palette.primary.carouselColor} `,
                    },
                    "&.MuiFormControl-root .Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: `${theme.palette.primary.carouselColor} `,
                      },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  type="password"
                  value={password}
                  onChange={handlePassword}
                  label="Password"
                  id="password"
                  autoComplete="new-password"
                  sx={{
                    "&.MuiFormControl-root .MuiFormLabel-root.Mui-focused": {
                      color: `${theme.palette.primary.carouselColor} `,
                    },
                    "&.MuiFormControl-root .Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: `${theme.palette.primary.carouselColor} `,
                      },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="location"
                  value={location}
                  onChange={handleLocation}
                  label="location"
                  id="location"
                  autoComplete="location"
                  sx={{
                    "&.MuiFormControl-root .MuiFormLabel-root.Mui-focused": {
                      color: `${theme.palette.primary.carouselColor} `,
                    },
                    "&.MuiFormControl-root .Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: `${theme.palette.primary.carouselColor} `,
                      },
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: theme.palette.primary.carouselColor,
                "&:hover": {
                  bgcolor: theme.palette.primary.carouselColor, // Keep the same color when active (pressed)
                },
              }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
