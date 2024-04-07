import React  from "react";
import { AppBar, Toolbar, Button, Box, IconButton, TextField, useTheme, Container } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import * as NavigationStyles from "./NavigationStyles";
import { DropDown } from "../DropDown/DropDown";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { useNavBarContext } from "../../contexts/NavBarContext";


export default function Navigation() {
    const theme = useTheme();
    const navItems = ['Handbags', 'Watches', 'Skincare', 'Jewellery', 'Apparels'];
    const navItemsIpad = ['Handbags', "And More..."];
    const { more, dropDownAppearPhone, isIpad, isPhone, dropDownHandler, dropDownMoreHandler } = useNavBarContext();
    const iconItems = [<FavoriteBorderIcon />, <PersonOutlineIcon />, <LocalMallOutlinedIcon />];

    return (
        <Container>
            <AppBar position={"static"} component="nav" sx={NavigationStyles.nav(theme)}>
                <Toolbar component={'div'} className="toolbar" sx={NavigationStyles.toolbar} >
                    <Box component={'div'} sx={NavigationStyles.toolbarBox} >
                        <Box component={'div'} sx={NavigationStyles.itemBox}>
                            {isPhone ? <IconButton onClick={dropDownHandler}><DensityMediumIcon /></IconButton> : ''}
                            <Box component={'div'} sx={NavigationStyles.logo(theme)}> Coral's </Box>
                            {isPhone ? '' :
                                isIpad ?
                                    <Box component={'div'}>
                                        {navItemsIpad.map((item, index) => (
                                            <Button
                                                key={item}
                                                sx={NavigationStyles.navItems(theme)}
                                                onClick={index === navItemsIpad.length - 1 ? dropDownMoreHandler : undefined}
                                            >
                                                {item}
                                            </Button>
                                        ))}
                                    </Box>
                                    :
                                    <Box component={'div'}>
                                        {navItems.map((item) => (
                                            <Button key={item} sx={NavigationStyles.navItems(theme)}>
                                                {item}
                                            </Button>
                                        ))}
                                    </Box>
                            }
                        </Box>
                        <Box component={'div'} sx={NavigationStyles.itemBox}>
                            <Box component={'div'} >
                                {
                                    isPhone ? '' :
                                        <TextField
                                            placeholder="Search for products or brands..."
                                            variant="outlined"
                                            InputProps={{
                                                startAdornment: (<InputAdornment position="start"> <SearchIcon /></InputAdornment>),
                                                style: { height: '44px', alignItems: 'center' },
                                            }}
                                            sx={NavigationStyles.textField(theme, isIpad)}
                                        />
                                }
                            </Box>
                            <Box component={'div'}>
                                {iconItems.map((icon, index) =>
                                    <IconButton key={index} sx={NavigationStyles.IconButton(theme)}>
                                        {icon}
                                    </IconButton>
                                )
                                }
                            </Box>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            {
                dropDownAppearPhone ?
                    <DropDown />
                    :

                    ''
            }
            {
                more ?
                    <DropDown />
                    :
                    ''
            }
        </Container>

    )
}