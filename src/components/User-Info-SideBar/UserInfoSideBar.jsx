import { Box } from "@mui/system";
import React from "react";
import SelectedSideBar from "./Selected-SideBar/SelectedSideBar";
import { Link } from "react-router-dom";
import theme from "../../theme/Theme";
export default function UserInfoSideBar({ active, handleActive }) {
  return (
    <Box
      width={"286px"}
      bgcolor={theme.palette.primary.inputBackground}
      borderRadius={"8px"}
      height={"140px"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Link to={""} style={{ textDecoration: "none", color: "inherit" }}>
        <SelectedSideBar
          flag={"personalInformation"}
          data="Personal Information"
          active={active}
          handleActive={handleActive}
        />
      </Link>
      <Link
        to={"myOrders"}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <SelectedSideBar
          flag={"myOrders"}
          data="My Orders"
          active={active}
          handleActive={handleActive}
        />
      </Link>
    </Box>
  );
}
