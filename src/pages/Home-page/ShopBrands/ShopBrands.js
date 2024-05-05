import React, { useContext, useEffect, useState } from "react";
import { Grid, Typography, useTheme } from "@mui/material";
import * as brandStyles from "./ShopBrandsstyles";
import { Link } from "react-router-dom";
import { SharedParentContext } from "../../../contexts/CategoryPageFilter";
import axios from "axios";
import { urls } from "../../../config/urls";

export function ShopBrands({ handleBrandClick }) {
  const { brands, getBrand, setGetBrand } = useContext(SharedParentContext);

  const getBrands = async () => {
    const response = await axios.get(urls.getBrands);
    setGetBrand(response.data);
    return response.data;
  };

  useEffect(() => {
    getBrands();
  }, []);

  const theme = useTheme();
  return (
    <div ref={brands}>
      <Typography
        variant="h4"
        component={"h4"}
        fontWeight={600}
        sx={brandStyles.typo}
      >
        Shop By Brand
      </Typography>
      <Grid container sx={brandStyles.grid} spacing={4}>
        {getBrand.map((brand, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            key={index}
            sx={brandStyles.gridItem}
          >
            <Link
              style={brandStyles.link(theme)}
              to={`/products/brands/${brand.name}`}
            >
              <img
                src={require(`../../../assets/image/${brand.name}.png`)}
                alt="Brand"
                style={brandStyles.image}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
