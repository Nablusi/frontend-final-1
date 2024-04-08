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
            component="div"
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
          <Typography variant="body2" color="text.secondary">
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
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "65%",
              paddingTop: "8px",
            }}
          >
            <Typography sx={{ color: theme.palette.primary.main }}>
              $39.49
            </Typography>
            <Typography sx={{ textDecoration: "line-through" }}>
              $78.66
            </Typography>
            <Typography sx={{ color: theme.palette.primary.error }}>
              50%OFF
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
