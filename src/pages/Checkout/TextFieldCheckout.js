import React from "react";
import { Box, Typography, TextField } from "@mui/material"; 

export const TextFieldCheckout = ({ label, theme, placeholder, change }) => {
    return (
        <Box sx={{ width: "100%" }}>
            <Typography sx={{ fontWeight: '500', mb: '8px' }}> {label}  </Typography>
            <TextField placeholder={`Enter ${placeholder}`} sx={{ width: '100%', backgroundColor: theme.palette.primary.inputBackground }} onChange={change} />
        </Box>
    )
}