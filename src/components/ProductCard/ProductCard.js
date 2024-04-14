import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Box from "@mui/material/Box";
import theme from "../../theme/Theme";
import { Link } from "react-router-dom";

export default function ProductCard({ rating, product }) {
  const styles = {
    text: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: "8px",
      width: "65%",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems:'flex-start',
        width: "100%",
      },
      [theme.breakpoints.between("md","lg")]: {
        width: "100%",
      },
    },
  };
  return (
    <>
      <Link style={{ textDecoration:'none' }}>
      <Card sx={{ maxWidth: 350, boxShadow: "none",margin:'auto' }}>
        <CardMedia
          sx={{ height: 280, borderRadius: "10px" }}
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
      </Link>
    </>
  );
}
