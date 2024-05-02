import React from "react";
import Box from "@mui/material/Box";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { Grid, LinearProgress } from "@mui/material";
import BreadCrumbs from "../../../components/BreadCrumbs/BreadCrumbs";
export default function CategorizedProducts({ products, BreadCrumbsName }) {
  if (products.length === 0) {
    return <LinearProgress />;
  } else {
    return (
      <Box sx={{ padding: "50px 0" }}>
        <Grid container>
          <Grid item sm={12} md={12} lg={2}>
            <BreadCrumbs BreadCrumbsName={BreadCrumbsName} />
          </Grid>
          <Grid item sm={12} md={12} lg={10}>
            <Grid container spacing={2}>
              {/* Loop over one Ahmad */}

              {products?.map((prod) => (
                <Grid key={prod.id} item xs={12} sm={6} md={4} lg={3}>
                  <ProductCard product={prod} rating={true} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  }
}
