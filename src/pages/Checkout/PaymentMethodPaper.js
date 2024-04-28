import React from "react";
import { Paper, FormControlLabel, Typography, Radio } from "@mui/material";

export const PaymentMethodPaper = ({ paymentMethod, name, imgName, title }) => {

    return (
        <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px 15px 25px 15px', height: '174px', backgroundColor: paymentMethod === name ? '#f3f7f7' : '' }}>
            <FormControlLabel value={name} control={<Radio />} sx={{ mb: '20px', alignSelf: 'end', transform: 'translateX(23px) ' }} />
            <img src={require(`../../assets/image/logoCheckout/${imgName}.png`)} alt={name} />
            <Typography sx={{ mt: '8px', fontWeight: '500' }}>{name}</Typography>
        </Paper>

    )
}