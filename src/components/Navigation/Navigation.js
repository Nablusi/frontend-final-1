import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  TextField,
  useTheme,
  Container,
  Button,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import * as NavigationStyles from "./NavigationStyles";
import { DropDown } from "../DropDown/DropDown";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { useNavBarContext } from "../../contexts/NavBarContext";
import { Link } from "react-router-dom";

export default function Navigation() {
  const theme = useTheme();
  const {
    more,
    dropDownAppearPhone,
    isIpad,
    isPhone,
    dropDownHandler,
    dropDownMoreHandler,
    categories,
  } = useNavBarContext();
  const iconItems = [
    <FavoriteBorderIcon />,
    <PersonOutlineIcon />,
    <LocalMallOutlinedIcon />,
  ];

  const navItemsIpad = [...categories.slice(1, 2), "And More..."];

  return (
    <Container>
      <AppBar
        position={"static"}
        component="nav"
        sx={NavigationStyles.nav(theme)}
      >
        <Toolbar
          component={"div"}
          className="toolbar"
          sx={NavigationStyles.toolbar}
        >
          <Box component={"div"} sx={NavigationStyles.toolbarBox}>
            <Box component={"div"} sx={NavigationStyles.itemBox}>
              {isPhone ? (
                <IconButton onClick={dropDownHandler}>
                  <DensityMediumIcon />
                </IconButton>
              ) : (
                ""
              )}
              <Link to={'/'} component={"div"} style={NavigationStyles.logo(theme)}>
                {" "}
                <img
                  src={require("../../assets/image/logo.png")}
                  style={{ marginTop: "11px" }}
                  alt="logo"
                />{" "}
              </Link>
              {isPhone ? (
                ""
              ) : isIpad ? (
                <Box component={"div"}>
                  {navItemsIpad.map((item, index) => {
                    if (typeof item === 'string' && item === 'And More...') {
                      return (
                        <Button key={item} sx={NavigationStyles.navItems(theme)} onClick={dropDownMoreHandler}>
                          {item}
                        </Button>
                      );
                    } else {
                      return (
                        <Link
                          to={`/category/${item.id}`}
                          key={item.id} 
                          style={NavigationStyles.navItems(theme)}
                          onClick={index === navItemsIpad.length - 1 ? dropDownMoreHandler : undefined}
                        >
                          {item.name}
                        </Link>
                      );
                    }
                  })}
                </Box>
              ) : (
                <Box component={"div"}>
                  {categories?.slice(1).map((category) => (
                    <Link
                      to={`/category/${category.id}`}
                      key={category.id}
                      style={NavigationStyles.navItems(theme)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </Box>

              )}
            </Box>
            <Box component={"div"} sx={NavigationStyles.itemBox}>
              <Box component={"div"}>
                {isPhone ? (
                  ""
                ) : (
                  <TextField
                    placeholder="Search for products or brands..."
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          {" "}
                          <SearchIcon />
                        </InputAdornment>
                      ),
                      style: { height: "44px", alignItems: "center" },
                    }}
                    sx={NavigationStyles.textField(theme, isIpad)}
                  />
                )}
              </Box>
              <Box component={"div"}>
                {iconItems.map((icon, index) => (
                  <IconButton
                    key={index}
                    sx={NavigationStyles.IconButton(theme)}
                  >
                    {icon}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {dropDownAppearPhone ? <DropDown /> : ""}
      {more ? <DropDown /> : ""}
    </Container>
  );
}
