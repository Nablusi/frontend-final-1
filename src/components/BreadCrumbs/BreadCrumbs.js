import React, { useContext } from "react";
import { Box } from "@mui/system";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import theme from "../../theme/Theme";
import Typography from "@mui/material/Typography";
import { categoryNameContext } from "../../pages/Category-page/Category";

export default function BreadCrumbs({ BreadCrumbsName }) {
  let name = useContext(categoryNameContext);
  return (
    <Box>
      <Breadcrumbs
        sx={{ textAlign: "center" }}
        aria-label="breadcrumb"
        separator="›"
      >
        <Link
          underline="hover"
          sx={{ color: theme.palette.primary.darkBlueColor, fontWeight: "bold" }}
          to={"/"}
          aria-current="page"
        >
          Home
        </Link>
        {BreadCrumbsName ? (
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            {BreadCrumbsName}
          </Link>
        ) : (
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            sx={{color:theme.palette.primary.paragraph,fontWeight:'500'}}
          >
            {name}
          </Link>
        )}
      </Breadcrumbs>
      <Typography
        variant="h6"
        component={"h6"}
        sx={{
          color: theme.palette.primary.darkBlueColor,
          fontWeight: "600",
          padding: "15px 0",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
}
