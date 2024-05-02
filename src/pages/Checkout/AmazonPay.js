import React, { useState } from "react";
import { Box, Typography, TextField, Button } from '@mui/material'; 
import * as amazonStyle from "./checkoutStyling/AmazonPayStyle"; 

export const AmazonPay = () => {
    const [amazonPayEmail, setAmazonPayEmail] = useState('');
    const [errors, setErrors] = useState({
        amazonPayEmail: ''
    });

    const handleAmazonPayEmailChange = (event) => {
        setAmazonPayEmail(event.target.value);
        setErrors({ ...errors, amazonPayEmail: '' }); 
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let formValid = true;
        if (!amazonPayEmail || !isValidEmail(amazonPayEmail)) {
            setErrors({ ...errors, amazonPayEmail: 'Invalid email address' });
            formValid = false;
        }

        if (formValid) {
            console.log('Form submitted successfully');
        }
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <Box sx={amazonStyle.box}>
            <Typography sx={amazonStyle.typo}>Amazon Pay Email</Typography>
            <TextField
                placeholder="Enter Amazon Pay Email"
                value={amazonPayEmail}
                onChange={handleAmazonPayEmailChange}
                error={!!errors.amazonPayEmail}
                helperText={errors.amazonPayEmail}
                required
                sx={amazonStyle.text}
            />

            {/* <Button variant="contained" onClick={handleSubmit}>Submit</Button> */}
        </Box>
    )
};
