import React, { useContext, useEffect } from "react";
import { Box } from "@mui/system";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import theme from "../../theme/Theme";
import Typography from "@mui/material/Typography";
import { categoryName } from "../../pages/Category-page/Category";

export default function BreadCrumbs({BreadCrumbsName}) {
  let name = useContext(categoryName);
  return (
    <Box>
      <Breadcrumbs
        sx={{ textAlign: "center" }}
        aria-label="breadcrumb"
        separator="›"
      >
        <Link
          underline="hover"
          sx={{ color: theme.palette.primary.main, fontWeight: "bold" }}
          to={'/'}
          aria-current="page"
        >
          Home
        </Link>
        {BreadCrumbsName? <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          {BreadCrumbsName}
        </Link>:<Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          {name}
        </Link>}
        
      </Breadcrumbs>
      <Typography
        variant="h6"
        sx={{
          color: theme.palette.primary.main,
          fontWeight: "bold",
          padding: "15px 0",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
}
