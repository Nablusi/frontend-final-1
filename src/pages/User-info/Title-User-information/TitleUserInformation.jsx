import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import React from "react";
import Link from "@mui/material/Link";
import { Button, Typography } from "@mui/material";
import theme from "../../../theme/Theme";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

export default function TitleUserInformation({ active, flag, title }) {
  const navigate = useNavigate();
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      sx={{ color: theme.palette.primary.carouselColor, fontWeight: "bold" }}
      fontSize={"1rem"}
    >
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      sx={{
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: 1.5,
        color: theme.palette.primary.paragraph,
      }}
    >
      User Profile
    </Link>,
  ];
  return flag === active ? (
    <>
      <Breadcrumbs
        separator={
          <NavigateNextIcon
            fontSize="small"
            sx={{
              color: theme.palette.primary.textColor,
              verticalAlign: "center",
            }}
          />
        }
        aria-label="breadcrumb"
        sx={{
          marginBlock: "24px 28px",
        }}
      >
        {breadcrumbs}
      </Breadcrumbs>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography
          fontSize={"2.125rem"}
          color={theme.palette.primary.carouselColor}
          fontWeight={600}
          marginBlock={"1.5rem"}
        >
          {title}
        </Typography>

        <Button
          onClick={() => {
            if (localStorage) {
              localStorage.removeItem("email");
              localStorage.removeItem("rememberMe");
              localStorage.removeItem("token");
              localStorage.removeItem("id");
            } else {
              sessionStorage.removeItem("email");
              sessionStorage.removeItem("rememberMe");
              sessionStorage.removeItem("token");
              sessionStorage.removeItem("id");
            }
            navigate("/");
          }}
          variant="outlined"
          startIcon={<LogoutIcon />}
          width={"136px"}
          height={"40px"}
          sx={{
            color: theme.palette.primary.carouselColor,
            borderColor: theme.palette.primary.carouselColor,
            borderRadius: "8px",
            fontWeight: 600,
          }}
        >
          Sign Out
        </Button>
      </Box>
    </>
  ) : (
    <></>
  );
}
