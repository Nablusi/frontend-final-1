import Box from "@mui/material/Box";
import theme from "../../../theme/Theme";
import { Typography } from "@mui/material";
import HandCard from "./HandCard/HandCard";
export default function Handpicked() {
  return (
    <Box
      component="section"
      height={425}
      display="grid"
      sx={{
        backgroundColor: theme.palette.primary.carouselColor,
      }}
    >
      <Typography
        variant="h4"
        component="h3"
        color={theme.palette.primary.textWhiteColor}
        fontWeight={500}
      >
        Handpicked Collections
      </Typography>
      <Box
        component={"section"}
        height={285}
        display={"flex"}
        justifyContent={"flex-start"}
      >
        <HandCard />
      </Box>
    </Box>
  );
}
