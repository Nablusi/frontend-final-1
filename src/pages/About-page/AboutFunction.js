import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function AboutFunction({ status, img }) {
  if (status === "right") {
    return (
      <>
        <Card sx={{ display: "flex", marginTop: "30px", boxShadow: "none" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CardContent sx={{ width: "80%" }}>
              <Typography variant="h5">About</Typography>
              <Typography variant="subtitle1">
                Coral stands as your premier online retail destination,
                meticulously curated for discerning shoppers. Immerse in an
                extensive catalog featuring top-tier merchandise. Our commitment
                ensures superior quality, empowering confident shopping.
                Seamlessly navigate our user-friendly platform, enhanced with
                intuitive features. Embark on a journey where convenience meets
                luxury with Coral.
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: "100%", height: "300px" }}
              image={require(`../../images/${img}`)}
              alt="Live from space album cover"
            />
          </Box>
        </Card>
      </>
    );
  } else {
    return (
      <>
        <Card
          sx={{
            display: "flex",
            marginTop: "30px",
            padding: "30px",
            boxShadow: "none",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CardMedia
              component="img"
              sx={{ width: "100%", height: "300px" }}
              image={require(`../../images/${img}`)}
              alt="Live from space album cover"
            />
            <CardContent sx={{ width: "80%" }}>
              <Typography variant="h5">About</Typography>
              <Typography variant="subtitle1">
                Coral stands as your premier online retail destination,
                meticulously curated for discerning shoppers. Immerse in an
                extensive catalog featuring top-tier merchandise. Our commitment
                ensures superior quality, empowering confident shopping.
                Seamlessly navigate our user-friendly platform, enhanced with
                intuitive features. Embark on a journey where convenience meets
                luxury with Coral.
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </>
    );
  }
}
