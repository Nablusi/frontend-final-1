import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Box from "@mui/material/Box";
import theme from "../../theme/Theme";

export default function ProductCard({ rating, product }) {
  const styles = {
    text: {
      width: "65%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
  };
  return (
    <>
      <Card sx={{ maxWidth: 320, boxShadow: "none" }}>
        <CardMedia
          sx={{ height: 200, borderRadius: "10px" }}
          image={require(`../../images/PinkBag.png`)}
          title="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="subtitle1"
            component="h2"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "18px",
              fontWeight: "600",
              fontFamily: "Inter",
            }}
          >
            Grande
            <FavoriteBorderOutlinedIcon />
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="h3">
            Pink Bag
          </Typography>

          {rating ? (
            <Typography
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
          ) : (
            ""
          )}
          <Box
            sx={{
              ...styles.text,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "8px",
            }}
          >
            <Typography
              sx={{ color: theme.palette.primary.main }}
              variant="subtitle1"
              component="p"
            >
              $39.49
            </Typography>
            <Typography
              sx={{ textDecoration: "line-through" }}
              variant="subtitle1"
              component="p"
            >
              $78.66
            </Typography>
            <Typography
              sx={{ color: theme.palette.primary.error }}
              variant="subtitle1"
              component="p"
            >
              50%OFF
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
