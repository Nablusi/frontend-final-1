import React from "react";
import theme from "../../theme/Theme";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

export default function GeneratedStars() {
  return (
    <Typography
      variant="div"
      component={"div"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "8px",
        fontWeight: "500",
        color: theme.palette.primary.main,
      }}
    >
      <Rating
        name="read-only"
        value={5}
        sx={{ color: theme.palette.primary.star }}
        readOnly
      />
      <p>43 Rating</p>
    </Typography>
  );
}
