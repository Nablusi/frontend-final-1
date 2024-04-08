import React from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";

import styles from "./AboutStyle";
import AboutFunction from "./AboutFunction";

export default function About() {
  return (
    <>
      <Box sx={styles.background}>
        <Box sx={styles.text}>
          <Typography variant="h2">About us</Typography>
          <Typography variant="subtitle1">
            Coral Your one-stop e-commerce destination for all your needs,
            offering quality products and seamless shopping experience.
          </Typography>
        </Box>
      </Box>
      <Container>
        <Box sx={{ textAlign: "center", marginTop: "20px" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            About
          </Typography>
          <Typography variant="subtitle1">
            Coral stands as your paramount online retail destination,
            meticulously curated to fulfill every discerning shopper's desires.
            Immerse yourself in an extensive catalog brimming with top-tier
            merchandise, ranging from fashion apparel and electronics to home
            decor and beyond. Our commitment to excellence ensures that each
            product guarantees superior quality and authenticity, empowering you
            to shop with confidence. Seamlessly navigate our user-friendly
            platform, meticulously designed to enhance your shopping experience
            with intuitive features and personalized recommendations. With
            Coral, embark on a journey where convenience meets luxury, and
            indulge in the epitome of online retail sophistication.
          </Typography>
        </Box>
      </Container>
      <Box sx={{ width: "98%", margin: "auto" }}>
        <AboutFunction status="right" img="bags.png" />
        <AboutFunction status="left" img="watch.png" />
        <AboutFunction status="right" img="glasses.png" />
      </Box>
    </>
  );
}
