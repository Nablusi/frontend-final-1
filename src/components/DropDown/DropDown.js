import {
  Fade,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  useTheme,
} from "@mui/material";
import React from "react";
import { useNavBarContext } from "../../contexts/NavBarContext";
import * as DropDownStyles from "./DropDownStyles";
import { Link } from "react-router-dom";

export const DropDown = () => {
  const { isPhone, more, dropDownAppearPhone } = useNavBarContext();
  const navItems = isPhone
    ? ["Handbags", "Watches", "Skincare", "Jewellery", "Apparels"]
    : ["Watches", "Skincare", "Jewellery", "Apparels"];
  const theme = useTheme();

  return (
    <Fade in={more || dropDownAppearPhone} timeout={500}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <Link to={`/category/${item}`} style={DropDownStyles.link(theme)}>
                <ListItemText primary={item} />
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
