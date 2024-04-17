import React from 'react'
import { Box } from '@mui/system'
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import theme from '../../theme/Theme';
import Typography from "@mui/material/Typography";


export default function BreadCrumbs() {
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
  )
}
