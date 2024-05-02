import React from "react";
import theme from "../../theme/Theme";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

export default function GeneratedStars({ reviews, brackets }) {
  let reviewResult = () => {
    let sum = 0;
    let avg = 0;
    reviews.map((review) => {
      sum += parseFloat(review.rating);
    });
    avg = sum / reviews.length;
    return avg;
  };
  return (
    <Typography
      variant="div"
      component={"div"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "8px",
        fontWeight: "500",
        color: theme.palette.primary.main,
      }}
    >
      <Rating
        name="half-rating-read"
        value={reviewResult()}
        precision={0.5}
        sx={{ color: theme.palette.primary.star }}
        readOnly
      />

      <Typography
        sx={{
          color: brackets
            ? theme.palette.primary.paragraph
            : theme.palette.primary.darkBlueColor,
          fontWeight: "500",
        }}
      >
        {" "}
        {brackets ? `(${reviews.length})` : `${reviews.length}`} Ratings
      </Typography>
    </Typography>
  );
}
