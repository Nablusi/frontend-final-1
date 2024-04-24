import React, { useState } from "react";
import { Button, Dialog, DialogTitle, List, Box, useTheme, ListItem, Typography, Divider, TextField, IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useNavBarContext } from "../../contexts/NavBarContext";
import * as PopsUpStyles from "./PopsUpStyles";
import { OrderSummary } from "./OrderSummary";
import { TextFiledContainer } from "./TextFieldContainer";
 
export default function PopsUp() {
    const theme = useTheme();
    const [productList, setProductList] = useState([
        {
            "id": 2,
            "name": "GUCCI",
            "description": "desc",
            "price": 320,
            "qty": 1,
        },
        {
            "id": 3,
            "name": "Rolex",
            "description": "desc",
            "price": 1500,
            "qty": 1,
        },
    ]);

    const { open, handleClose } = useNavBarContext();


    const incrementHandler = (index) => {
        const updatedList = [...productList];
        updatedList[index].qty += 1;
        setProductList(updatedList);
    };

    const decrementHandler = (index) => {
        const updatedList = [...productList];
        if (updatedList[index].qty > 1) {
            updatedList[index].qty -= 1;
            setProductList(updatedList);
        }
    };

    return (
        <Dialog sx={PopsUpStyles.dialog(theme)}
            open={open}
            onClose={handleClose}
        >
            <DialogTitle sx={PopsUpStyles.dialogTitle}>
                <Button sx={PopsUpStyles.buttonDialogTitle(theme)} onClick={handleClose} >
                    <ArrowBackIcon sx={PopsUpStyles.arrowIcon} /> Back
                </Button>
            </DialogTitle>

            <List sx={PopsUpStyles.list}>
                {productList.map((product, index) =>
                    <ListItem key={product.id} disablePadding sx={PopsUpStyles.listItem}>
                        <Box component={'div'} sx={PopsUpStyles.boxListItem}>
                            <img src={require("../../assets/image/bag2.png")} alt={`${product.name}`} style={PopsUpStyles.img} />
                            <Box component={'div'} sx={PopsUpStyles.cardBody}>
                                <Box component={'div'} sx={PopsUpStyles.cardHeader} >
                                    <Typography component={'h2'} sx={PopsUpStyles.cardTitle}> {product.name}  </Typography>
                                    <Button>X</Button>
                                </Box>
                                <Typography component={'p'}> {product.description}  </Typography>
                                <Box component={'div'} sx={PopsUpStyles.cardFooter} >
                                    <Box component={'div'} sx={PopsUpStyles.numberLine(theme)}>
                                        <IconButton onClick={() => decrementHandler(index)} sx={PopsUpStyles.plusMinusIcons} ><RemoveIcon /> </IconButton>
                                        <Typography component={'p'}>{product.qty}</Typography>
                                        <IconButton onClick={() => incrementHandler(index)} sx={PopsUpStyles.plusMinusIcons}><AddIcon /></IconButton>
                                    </Box>
                                    <Typography component={'p'}> {product.price * product.qty} $</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Divider sx={PopsUpStyles.dividerOne} />
                    </ListItem>
                )}
            </List>
            <OrderSummary productList = {productList} topic = {"Subtotal"} isStatic = {false}  typoFont={"400"}   />
            <OrderSummary productList = {productList} topic = {"Tax"} isStatic = {true}  text = {2} typoFont={"400"}   />
            <OrderSummary productList = {productList} topic = {"Total"} isStatic = {false}  typoFont={500} doSum= {true}  />
            <TextFiledContainer  handleClose = {handleClose} theme = { theme }  />
        </Dialog>
    )
}
