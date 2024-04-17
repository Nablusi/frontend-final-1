import Box from "@mui/material/Box";
import theme from "../../../theme/Theme";
import { Typography } from "@mui/material";
import HandCard from "./HandCard/HandCard";
export default function Handpicked() {
  return (
    <Box
      component="section"
      minHeight={425}
      display="grid"
      sx={{
        backgroundColor: theme.palette.primary.carouselColor,
      }}
    >
      <Typography
        variant="h4"
        component="h4"
        color={theme.palette.primary.textWhiteColor}
        fontWeight={600}
        sx={{
          marginLeft: "20px",
          marginTop: "30px",
        }}
      >
        Handpicked Collections
      </Typography>
      <Box
        component={"section"}
        display={"grid"}
        gridTemplateColumns={"repeat(auto-fit, minmax(200px, 1fr))"}
        marginInline={"20px"}
        gap={"30px"}
      >
        {/* i will use map here when API is ready */}
        <HandCard />
        <HandCard />
        <HandCard />
        <HandCard />
      </Box>
    </Box>
  );
}
