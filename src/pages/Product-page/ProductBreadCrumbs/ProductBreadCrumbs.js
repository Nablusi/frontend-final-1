import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import theme from "../../../theme/Theme";
import { Box } from "@mui/system";
// add comment
export default function ProductBreadCrumbs({productName,categoryName}) {
  return (
    <Box sx={{padding:'20px 0'}}>
      <Breadcrumbs aria-label="breadcrumb" separator=">" sx={{fontWeight:'500',textDecoration:'none',color:theme.palette.primary.carouselColor}}>
        <Link underline="hover" color={theme.palette.primary.carouselColor} to="/" sx={{textDecoration:"none",fontWeight:'500'}}>
          Home
        </Link>
        <Link
          underline="hover"
          color={theme.palette.primary.carouselColor}
          href="/material-ui/getting-started/installation/"
          sx={{fontWeight:'500'}}
        >
          {categoryName}
        </Link>
        <Typography sx={{fontWeight:'500',textTransform:'capitalize',color:theme.palette.primary.paragraph}}>{productName}</Typography>
      </Breadcrumbs>
    </Box>
  );
}
