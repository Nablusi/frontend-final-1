import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import theme from "../../../theme/Theme";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { Grid } from "@mui/material";
export default function CategorizedProducts() {
  return (
    <Box sx={{ padding: "50px 0" }}>
      <Grid container>
        <Grid item sm={12} md={12} lg={2}>
          <Box>
            <Breadcrumbs
              sx={{ textAlign: "center" }}
              aria-label="breadcrumb"
              separator="›"
            >
              <Link
                underline="hover"
                sx={{ color: theme.palette.primary.main, fontWeight: "bold" }}
                href="/"
                aria-current="page"
              >
                Home
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
              >
                HandBag
              </Link>
            </Breadcrumbs>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: "bold",
                padding: "15px 0",
              }}
            >
              Handbags
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={12} md={12} lg={10}>
          <Box>
            <Grid container spacing={2}>
            {/* Loop over one Ahmad */}
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ProductCard rating={4}/>
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
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
