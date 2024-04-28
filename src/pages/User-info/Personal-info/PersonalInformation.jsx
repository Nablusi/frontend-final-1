import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import theme from "../../../theme/Theme";
import { Avatar, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function PersonalInformation() {
  return (
    <Box width={"95% "}>
      <Box height={"60px"}>
        <Typography
          borderBottom={"1px solid #e0e0e0"}
          fontSize={"1.25rem"}
          color={theme.palette.primary.sectionTitle}
          lineHeight={"2.20"}
        >
          Personal Information
        </Typography>
      </Box>
      <Box
        display={"flex"}
        width={"384px"}
        alignItems={"flex-end"}
        justifyContent={"space-between"}
      >
        <Avatar
          alt="Remy Sharp"
          src={require("../../../assets/image/frieren.webp")}
          sx={{
            width: "80px",
            height: "80px",
          }}
        />
        <Button
          variant="contained"
          sx={{
            height: "38px",

            width: "136px",
            bgcolor: theme.palette.primary.carouselColor,
            fontSize: "0.875rem",
            fontWeight: 500,
            borderRadius: "8px",
          }}
        >
          Upload
        </Button>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          sx={{
            height: "44px",
            width: "136px",
            border: `2px solid ${theme.palette.primary.error}`,
            color: theme.palette.primary.error,
            borderRadius: "8px",
          }}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
}
