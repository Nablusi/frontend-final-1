import { Typography } from "@mui/material";
import { Box, borderRadius } from "@mui/system";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import theme from "../../../theme/Theme";

export default function SelectedSideBar({ data, active, flag, handleActive }) {
  return (
    <Box
      height={"70px"}
      display={"flex"}
      alignItems={"center"}
      width={"271px"}
      onClick={() => {
        handleActive(flag);
      }}
    >
      <Box
        bgcolor={active === flag ? theme.palette.primary.carouselColor : {}}
        width={"4px"}
        borderRadius={"8px"}
        height={"54px"}
        marginLeft={"1px"}
      ></Box>
      <Typography
        fontSize={"1rem"}
        fontWeight={500}
        paddingLeft={"4px"}
        color={
          active === flag
            ? theme.palette.primary.carouselColor
            : theme.palette.primary.carouselColor.sectionTitle
        }
      >
        {data}
      </Typography>
      <ArrowForwardIosIcon
        sx={{
          width: "24px",
          height: "24px",
          marginLeft: "auto",
          color:
            active === flag
              ? theme.palette.primary.carouselColor
              : theme.palette.primary.carouselColor.sectionTitle,
        }}
      />
    </Box>
  );
}
