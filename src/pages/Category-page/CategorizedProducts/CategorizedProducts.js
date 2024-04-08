import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import theme from "../../../theme/Theme";
import styles from "./CategorizedProductsStyles";
import ProductCard from "../../../components/ProductCard/ProductCard";
export default function CategorizedProducts() {
  return (
    <Box sx={{...styles.Parentgrid,padding:'50px 0'}}>
      <Box>
      <Breadcrumbs sx={{...styles.centerText,textAlign:'center'}} aria-label="breadcrumb" separator="›">
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
      <Typography variant="h6" sx={{color:theme.palette.primary.main,fontWeight:'bold',padding:'15px 0'}}>Handbags</Typography>
      </Box>
      <Box sx={{...styles.ProductsGrid}}>

        {/* Loop over one Ahmad */}
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard rating={4}/>
      </Box>
    </Box>
  );
}
