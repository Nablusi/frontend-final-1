import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function HandCard({ title, imgSrc }) {
  return (
    <Box>
      <img
        //   imgSrc
        src={require("../../../../images/personalcare.jpeg")}
        alt="personalcare.jpeg"
        style={{
          height: "285px",
          width: "100%",

          objectFit: "cover",
          borderRadius: "20px",
          position: "relative",
          zIndex: "1",
        }}
      />

      <Typography
        variant="h5"
        component="h5"
        fontWeight={700}
        sx={{
          position: "relative",
          zIndex: "2",
          top: "-55px",

          paddingInline: "15px",
        }}
      >
        Personal Care
        {/* {title} */}
      </Typography>
    </Box>
  );
}
