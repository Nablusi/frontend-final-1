import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import theme from "../../../theme/Theme";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { Grid } from "@mui/material";
import BreadCrumbs from "../../../components/BreadCrumbs/BreadCrumbs";
export default function CategorizedProducts() {
  return (
    <Box sx={{ padding: "50px 0" }}>
      <Grid container>
        <Grid item sm={12} md={12} lg={2}>
          <BreadCrumbs/>
        </Grid>
        <Grid item sm={12} md={12} lg={10}>
            <Grid container spacing={2}>
            {/* Loop over one Ahmad */}
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ProductCard />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ProductCard />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ProductCard />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ProductCard />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ProductCard />
              </Grid>

            </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
