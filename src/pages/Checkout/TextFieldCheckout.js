import React from "react";
import { Box, Typography, TextField } from "@mui/material"; 
import * as TextStyle from "./checkoutStyling/TextFieldCheckoutStyle"; 

export const TextFieldCheckout = ({ label, theme, placeholder, change, value, optional }) => {
    return (
        <Box sx={TextStyle.box}>
            <Typography sx={TextStyle.typo}> {label}  </Typography>
            <TextField placeholder={`Enter ${placeholder}`} value={value}  sx={TextStyle.textF(theme)} onChange={change} />
        </Box>
    )
}