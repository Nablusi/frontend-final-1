import React, { useState } from "react";
import { Box, Typography, TextField, Button } from '@mui/material'; 

export const ApplePay = () => {
    const [applePayEmail, setApplePayEmail] = useState('');
    const [errors, setErrors] = useState({
        applePayEmail: ''
    });

    const handleApplePayEmailChange = (event) => {
        setApplePayEmail(event.target.value);
        setErrors({ ...errors, applePayEmail: '' }); 
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let formValid = true;
        if (!applePayEmail || !isValidEmail(applePayEmail)) {
            setErrors({ ...errors, applePayEmail: 'Invalid email address' });
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
        <Box sx={{display:'flex',flexDirection:'column'}}>
            <Typography sx={{ fontWeight: '500', mb: '8px' }}>Apple Pay Email</Typography>
            <TextField
                placeholder="Enter Apple Pay Email"
                value={applePayEmail}
                onChange={handleApplePayEmailChange}
                error={!!errors.applePayEmail}
                helperText={errors.applePayEmail}
                required
            />

            <Button variant="contained" onClick={handleSubmit} sx={{mt:'40px'}}>Submit</Button>
        </Box>
    )
};
