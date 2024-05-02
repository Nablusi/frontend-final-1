import {
  Fade,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  useTheme,
} from "@mui/material";
import React,{useContext} from "react";
import { useNavBarContext } from "../../contexts/NavBarContext";
import * as DropDownStyles from "./DropDownStyles";
import { Link } from "react-router-dom";
import { SharedParentContext } from "../../contexts/CategoryPageFilter";

export const DropDown = () => {
  const { isPhone, more, dropDownAppearPhone, categories } = useNavBarContext();
  const { setDiscount, setPopular ,setLimitedEdition, setSearch } =  useContext(SharedParentContext); 
  const contextHandler = () => {
    setDiscount(()=> 0); 
    setPopular(()=> false); 
    setLimitedEdition(()=>false); 
  }

  const theme = useTheme();

  const navItems = isPhone
  ? categories?.slice(1,6)
  : categories?.slice(2,6)


  return (
    <Fade in={more || dropDownAppearPhone} timeout={500}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton>
              <Link to={`/category/${item.id}`} style={DropDownStyles.link(theme)} onClick={contextHandler} >
                <ListItemText primary={item.name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
        {isPhone && (
          <Fade in={dropDownAppearPhone} timeout={500}>
            <TextField
              placeholder="Search for products or brands..."
              variant="outlined"
              sx={DropDownStyles.textField(theme)}
            />
          </Fade>
        )}
      </List>
    </Fade>
  );
};
