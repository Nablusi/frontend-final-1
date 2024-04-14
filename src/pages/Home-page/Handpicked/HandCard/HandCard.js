import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import image from "/public/images/personalcare.png";
export default function HandCard() {
  return (
    <Box>
      <img src={image} />
      <Typography variant="h5" component="h5">
        personal Care
      </Typography>
    </Box>
  );
}
