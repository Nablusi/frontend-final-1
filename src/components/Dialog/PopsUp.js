import React, { useContext, useState, useEffect } from "react";
import { Button, Dialog, DialogTitle, List, Box, useTheme, ListItem, Typography, Divider, IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useNavBarContext } from "../../contexts/NavBarContext";
import * as PopsUpStyles from "./PopsUpStyles";
import { OrderSummary } from "./OrderSummary";
import { TextFiledContainer } from "./TextFieldContainer";
import { SharedParentContext } from "../../contexts/CategoryPageFilter";

export default function PopsUp() {
    const theme = useTheme();
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const [productList, setProductList] = useState(cart);
    const { open, handleClose } = useNavBarContext();
    const { refresh } = useContext(SharedParentContext);


    useEffect(() => {
        setProductList(cart)
    }, [refresh])

    const incrementHandler = (index) => {
        const updatedList = [...productList];
        console.log(updatedList)
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

    const closeHandler = (index) => {
        const updatedList = [...productList];
        updatedList.splice(index, 1);
        setProductList(updatedList);

        const updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
        updatedCart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
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

            {productList.length === 0 ?

                <Typography> Nothing in your cart </Typography>

                :
                <>
                    <List sx={PopsUpStyles.list}>
                        {productList.map((product, index) =>
                            <ListItem key={product.product.id} disablePadding sx={PopsUpStyles.listItem}>
                                <Box component={'div'} sx={PopsUpStyles.boxListItem}>
                                    <img src={require("../../assets/image/bag2.png")} alt={`${product.product.name}`} style={PopsUpStyles.img} />
                                    <Box component={'div'} sx={PopsUpStyles.cardBody}>
                                        <Box component={'div'} sx={PopsUpStyles.cardHeader} >
                                            <Typography component={'h2'} sx={PopsUpStyles.cardTitle}> {product.product.name}  </Typography>
                                            <Button onClick={() => closeHandler(index)}>X</Button>
                                        </Box>
                                        <Typography component={'p'}> {product.product.description}  </Typography>
                                        <Box component={'div'} sx={PopsUpStyles.cardFooter} >
                                            <Box component={'div'} sx={PopsUpStyles.numberLine(theme)}>
                                                <IconButton onClick={() => decrementHandler(index)} sx={PopsUpStyles.plusMinusIcons} ><RemoveIcon /> </IconButton>
                                                <Typography component={'p'}>{product.qty}</Typography>
                                                <IconButton onClick={() => incrementHandler(index)} sx={PopsUpStyles.plusMinusIcons}><AddIcon /></IconButton>
                                            </Box>
                                            <Typography component={'p'}> {product.product.price * product.qty} $</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Divider sx={PopsUpStyles.dividerOne} />
                            </ListItem>
                        )}
                    </List>
                    <OrderSummary productList={productList} topic={"Subtotal"} isStatic={false} typoFont={"400"} />
                    <OrderSummary productList={productList} topic={"Tax"} isStatic={true} text={2} typoFont={"400"} />
                    <OrderSummary productList={productList} topic={"Total"} isStatic={false} typoFont={500} doSum={true} />
                    <TextFiledContainer handleClose={handleClose} theme={theme} />
                </>
            }

        </Dialog>
    )
}
