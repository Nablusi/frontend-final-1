import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import React from "react";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";
import theme from "../../../theme/Theme";
import { Container } from "@mui/system";
import UserInfoSideBar from "../../../components/User-Info-SideBar/UserInfoSideBar";

export default function PersonalInformation() {
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
  return (
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
      <Typography
        fontSize={"2.125rem"}
        color={theme.palette.primary.carouselColor}
        fontWeight={600}
        marginBlock={"1.5rem"}
      >
        Personal Information
      </Typography>
    </>
  );
}
