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
      <Breadcrumbs aria-label="breadcrumb" separator=">" sx={{fontWeight:'bold',textDecoration:'none'}}>
        <Link underline="hover" color={theme.palette.primary.main} to="/" sx={{textDecoration:"none"}}>
          Home
        </Link>
        <Link
          underline="hover"
          color={theme.palette.primary.main}
          href="/material-ui/getting-started/installation/"
        >
          {categoryName}
        </Link>
        <Typography color="text.primary" sx={{textTransform:'capitalize'}}>{productName}</Typography>
      </Breadcrumbs>
    </Box>
  );
}
