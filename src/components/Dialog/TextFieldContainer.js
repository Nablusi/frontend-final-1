import React from "react";
import { Button, TextField, Box  } from "@mui/material";
import * as TextDialogStyles from './TextDialogStyles'; 
import { useNavigate } from "react-router-dom";

export const TextFiledContainer = ({handleClose, theme }) => {
    const navigate = useNavigate(); 

    const clickHandler = () =>{ 
        navigate('cart'); 
    }
    
    return (
        <Box component={'div'} sx={TextDialogStyles.box}>
            <Box component={'div'} sx={TextDialogStyles.secondBox} >
                <TextField placeholder="Apply Coupon Code" sx={TextDialogStyles.textField(theme)} />
                <Button sx={TextDialogStyles.firstButton(theme)} > Check </Button>
            </Box>
            <Box sx={TextDialogStyles.boxes}>
                <Button onClick={clickHandler} variant="contained" sx={TextDialogStyles.placeOrderButton(theme)}>Place Order</Button>
            </Box>
            <Button onClick={handleClose} sx={TextDialogStyles.continueButtons(theme)}> continue Shopping  </Button>
        </Box>
    )
}