import React from "react";
import { Button, TextField, Box  } from "@mui/material";
import * as TextDialogStyles from './TextDialogStyles'; 

export const TextFiledContainer = ({handleClose, theme }) => {
    return (
        <Box component={'div'} sx={TextDialogStyles.box}>
            <Box component={'div'} sx={TextDialogStyles.secondBox} >
                <TextField placeholder="Apply Coupon Code" sx={TextDialogStyles.textField(theme)} />
                <Button sx={TextDialogStyles.firstButton(theme)} > Check </Button>
            </Box>
            <Box sx={TextDialogStyles.boxes}>
                <Button variant="contained" sx={TextDialogStyles.placeOrderButton(theme)}>Place Order</Button>
            </Box>
            <Button onClick={handleClose} sx={TextDialogStyles.continueButtons(theme)}> continue Shopping  </Button>
        </Box>
    )
}