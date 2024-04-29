import React from "react";
import { Paper, FormControlLabel, Typography, Radio } from "@mui/material";
import * as PaymentStyle from "./checkoutStyling/PaymentPaperStyle";

export const PaymentMethodPaper = ({ paymentMethod, name, imgName, title }) => {

    return (
        <Paper sx={PaymentStyle.box(paymentMethod,name)}>
            <FormControlLabel value={name} control={<Radio />} sx={PaymentStyle.formControl} />
            <img src={require(`../../assets/image/logoCheckout/${imgName}.png`)} alt={name} />
            <Typography sx={PaymentStyle.typo}>{name}</Typography>
        </Paper>

    )
}