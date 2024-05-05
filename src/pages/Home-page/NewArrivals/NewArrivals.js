import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import theme from "../../../theme/Theme";
import ProductCard from "../../../components/ProductCard/ProductCard";

export default function NewArrivals({ newArrivals }) {
  return (
    <>
      <Box component="section" sx={{ padding: "35px 0" }}>
        <Box
          component="section"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            sx={{
              textTransform: "capitalize",
              fontWeight: "600",
              color: theme.palette.primary.sectionTitle,
            }}
          >
            new arrivals
          </Typography>
          <Link
            to={`/Products/new`}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textDecoration: "none",
              textTransform: "capitalize",
              fontWeight: "600",
              color: theme.palette.primary.darkBlueColor,
            }}
          >
            view all
            <ArrowForwardIosIcon sx={{ paddingLeft: "5px" }} />
          </Link>
        </Box>
        <Box
          component="section"
          sx={{ paddingTop: "20px" }}
          display={"grid"}
          gridTemplateColumns={"repeat(auto-fit, minmax(280px, 1fr))"}
          gap={3}
        >
          {newArrivals.slice(0, 4).map((Arrival) => (
            <ProductCard product={Arrival} key={Arrival.id} />
          ))}
        </Box>
      </Box>
    </>
  );
}
