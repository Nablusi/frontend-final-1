import React, { useContext } from "react";
import Box from "@mui/material/Box";
import theme from "../../../theme/Theme";
import { Typography } from "@mui/material";
import HandCard from "./HandCard/HandCard";
import useAxios from "../../../services/Hooks/useAxios";
import { SharedParentContext } from "../../../contexts/CategoryPageFilter";
export default function Handpicked() {
  let { res: handpickedData } = useAxios(
    "https://backend-final-1-latest.onrender.com/api/products/handpicked"
  );

  const { handpicked } = useContext(SharedParentContext); 

  return (
    <Box
      component="section"
      ref={handpicked}
      minHeight={425}
      display="grid"
      sx={{
        backgroundColor: theme.palette.primary.carouselColor,
      }}
      marginInline={"-20px"}
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
        gridTemplateColumns={"repeat(auto-fit, minmax(200px, 350px))"}
        marginInline={"20px"}
        gap={"30px"}
      >
        {/* i will use map here when API is ready */}
        {/* {handpickedData ? (
          handpickedData.map((card) => {
            return <HandCard key={1} />;
          })
        ) : (
          <></>
        )} */}
        {/* // <HandCard />
        // <HandCard />
        // <HandCard />
        // <HandCard />  */}
      </Box>
    </Box>
  );
}
