import React from "react";
import { Box, Typography, TextField } from "@mui/material"; 
import * as TextStyle from "./checkoutStyling/TextFieldCheckoutStyle"; 

export const TextFieldCheckout = ({ label, theme, placeholder, change }) => {
    return (
        <Box sx={TextStyle.box}>
            <Typography sx={TextStyle.typo}> {label}  </Typography>
            <TextField placeholder={`Enter ${placeholder}`} sx={TextStyle.textF(theme)} onChange={change} />
        </Box>
    )
}