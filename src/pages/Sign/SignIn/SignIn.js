import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import theme from "../../../theme/Theme";
import { AxiosPost } from "../../../services/API/AxiosPost";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
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

export default function SignIn({
  postRes,
  setPostRes,
  email,
  handleEmail,
  checkEmail,
  password,
  handlePassword,
  checkPassword,
  setToast,
  rememberMe,
  setRememberMe,
}) {
  const navigate = useNavigate();

  const [signFlag, setSignFlag] = useState(0);
  useEffect(() => {
    if (signFlag === 1) {
      setSignFlag(0);
      if (postRes) {
        if (postRes.data) {
          if (rememberMe) {
            localStorage.setItem("id", postRes.data.id);
            localStorage.setItem("email", postRes.data.email);
            localStorage.setItem("token", postRes.data.token);
            localStorage.setItem("rememberMe", rememberMe);
          } else {
            sessionStorage.setItem("id", postRes.data.id);
            sessionStorage.setItem("email", postRes.data.email);
            sessionStorage.setItem("token", postRes.data.token);
            sessionStorage.setItem("rememberMe", rememberMe);
          }
          navigate("/");
        } else {
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
  }, [postRes, setToast, navigate, signFlag, rememberMe]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (checkEmail(data.get("email")) === false) {
      setToast({ message: "Invalid email address", open: true });
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
    AxiosPost(
      "https://backend-final-1-latest.onrender.com/api/auth/login",
      {
        email: data.get("email"),
        password: data.get("password"),
      },
      setPostRes,
      setSignFlag
    );
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${require("../../../assets/image/loginWallpaper.jpg")})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: theme.palette.primary.carouselColor }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                value={email}
                onChange={handleEmail}
                name="email"
                autoComplete="email"
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
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                value={password}
                onChange={handlePassword}
                type="password"
                id="password"
                autoComplete="current-password"
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
              <FormControlLabel
                control={
                  <Checkbox
                    name="remember"
                    value={rememberMe}
                    color="primary"
                    checked={rememberMe}
                    onClick={() => {
                      setRememberMe(!rememberMe);
                    }}
                    sx={{
                      "&.MuiButtonBase-root.Mui-checked": {
                        color: theme.palette.primary.carouselColor,
                      },
                    }}
                  />
                }
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  bgcolor: theme.palette.primary.carouselColor,
                }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href={"/sign/signup"} variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
