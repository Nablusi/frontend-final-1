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
  const { isPhone, more, dropDownAppearPhone, categories } = useNavBarContext();
  const theme = useTheme();

  const navItems = isPhone
  ? categories?.slice(1)
  : categories?.slice(2)


  return (
    <Fade in={more || dropDownAppearPhone} timeout={500}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton>
              <Link to={`/category/${item.id}`} style={DropDownStyles.link(theme)}>
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
