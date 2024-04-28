import { Box } from "@mui/system";
import React from "react";
import SelectedSideBar from "./Selected-SideBar/SelectedSideBar";
import theme from "../../theme/Theme";
export default function UserInfoSideBar({ active, handleActive }) {
  return (
    <Box
      width={"286px"}
      bgcolor={theme.palette.primary.inputBackground}
      borderRadius={"8px"}
    >
      <SelectedSideBar
        flag={"personalInformation"}
        data="Personal Information"
        active={active}
        handleActive={handleActive}
      />
      <SelectedSideBar
        flag={"myOrders"}
        data="My Orders"
        active={active}
        handleActive={handleActive}
      />
    </Box>
  );
}
