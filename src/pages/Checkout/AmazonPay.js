import React, { useState } from "react";
import { Box, Typography, TextField, Button } from '@mui/material'; 

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
        <Box sx={{display:'flex', flexDirection:'column'}}>
            <Typography sx={{ fontWeight: '500', mb: '8px' }}>Amazon Pay Email</Typography>
            <TextField
                placeholder="Enter Amazon Pay Email"
                value={amazonPayEmail}
                onChange={handleAmazonPayEmailChange}
                error={!!errors.amazonPayEmail}
                helperText={errors.amazonPayEmail}
                required
                sx={{mb:'20px'}}
            />

            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </Box>
    )
};
