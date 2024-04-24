import React, { useContext, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  TextField,
  useTheme,
  Container,
  Button,
  Avatar,
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
import { Link, useNavigate } from "react-router-dom";
import { SharedParentContext } from "../../contexts/CategoryPageFilter";
import { authUser } from "../../services/utils/authUser";


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
    openDialogHandler,
  } = useNavBarContext();

  const { setDiscount, setPopular ,setLimitedEdition, setSearch } =  useContext(SharedParentContext); 
  const navigate = useNavigate(); 
  const contextHandler = () => {
    setDiscount(()=> 0); 
    setPopular(()=> false); 
    setLimitedEdition(()=>false); 
  }

  const changeSearchHandler = (e) =>  {
    setSearch(e.target.value);
  }

  const keyHandler = (event) => { 
    if(event.key === "Enter"){
      navigate('/category/products/search'); 
    }
  }

  useEffect(()=>{
    authUser();
  },[]);

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
                  onClick={contextHandler}
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
                  {categories?.slice(1, 6).map((category) => (
                    <Link
                      to={`/category/${category.id}`}
                      key={category.id}
                      style={NavigationStyles.navItems(theme)}
                      onClick={contextHandler}
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
                    onChange={changeSearchHandler}
                    onKeyPress = {keyHandler}
                  />
                )}
              </Box>
              <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}} component={"div"}>

                <IconButton
                  sx={NavigationStyles.IconButton(theme)}

                >
                  <FavoriteBorderIcon />
                </IconButton>
                {authUser() ? 
                  <Link style={{textDecoration:'none'}}><Avatar>z</Avatar></Link>
                  :
                <IconButton
                  sx={NavigationStyles.IconButton(theme)}

                >
                  <PersonOutlineIcon />
                </IconButton>
              }


                <IconButton
                  sx={NavigationStyles.IconButton(theme)}
                  onClick={openDialogHandler}
                >
                  <LocalMallOutlinedIcon />
                </IconButton>

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
