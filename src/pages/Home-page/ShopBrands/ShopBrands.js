import React from "react";
import { Grid, Typography, useTheme } from "@mui/material";
import Brand1 from "../../../assets/image/Zara_Logo 1.png";
import Brand2 from "../../../assets/image/Dolce_&_Gabbana 1.png";
import Brand3 from "../../../assets/image/H&M-Logo 1.png";
import Brand4 from "../../../assets/image/Chanel_Logo 1.png";
import Brand5 from "../../../assets/image/Prada-Logo 1.png";
import Brand6 from "../../../assets/image/Biba logo.png";
import * as brandStyles from "./ShopBrandsstyles";
import { Link } from "react-router-dom";

export function ShopBrands({ handleBrandClick }) {
  const brandsLogos = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6];

  const theme = useTheme();
  return (
    <div id="brands">
      <Typography
        variant="h4"
        component={"h4"}
        fontWeight={600}
        sx={brandStyles.typo}
      >
        Shop By Brand
      </Typography>
      <Grid container sx={brandStyles.grid} spacing={4}>
        {brandsLogos.map((brand, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            key={index}
            sx={brandStyles.gridItem}
          >
            <Link style={brandStyles.link(theme)}>
              <img src={brand} alt="Brand" style={brandStyles.image} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
