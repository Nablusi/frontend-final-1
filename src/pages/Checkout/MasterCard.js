import React, { useState } from "react";
import { Box, Typography, TextField, Button } from '@mui/material'; 

export const MasterCard = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCVV] = useState('');
    const [cardholderName, setCardholderName] = useState('');
    const [errors, setErrors] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardholderName: ''
    });

    const handleCardNumberChange = (event) => {
        setCardNumber(event.target.value);
        setErrors({ ...errors, cardNumber: '' }); 
    };

    const handleExpiryDateChange = (event) => {
        setExpiryDate(event.target.value);
        setErrors({ ...errors, expiryDate: '' }); 
    };

    const handleCVVChange = (event) => {
        setCVV(event.target.value);
        setErrors({ ...errors, cvv: '' }); 
    };

    const handleCardholderNameChange = (event) => {
        setCardholderName(event.target.value);
        setErrors({ ...errors, cardholderName: '' }); 
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let formValid = true;
        if (cardNumber.length !== 16 || isNaN(cardNumber)) {
            setErrors({ ...errors, cardNumber: 'Invalid card number' });
            formValid = false;
        }

        
        const [month, year] = expiryDate.split('/');
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear() % 100; 
        const currentMonth = currentDate.getMonth() + 1; 
        if (month.length !== 2 || year.length !== 2 || isNaN(month) || isNaN(year) || parseInt(month) < 1 || parseInt(month) > 12 || parseInt(year) < currentYear || (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
            setErrors({ ...errors, expiryDate: 'Invalid expiration date' });
            formValid = false;
        }

        if (cvv.length !== 3 || isNaN(cvv)) {
            setErrors({ ...errors, cvv: 'Invalid CVV' });
            formValid = false;
        }
        if (!cardholderName) {
            setErrors({ ...errors, cardholderName: 'Cardholder name is required' });
            formValid = false;
        }

        if (formValid) {
            console.log('Form submitted successfully');
        }
    };

    return (
        <Box sx={{display:'flex', flexDirection:'column'}}>
            <Typography sx={{ fontWeight: '500', mb: '8px' }}>Card Number</Typography>
            <TextField
                placeholder="Enter Card Number"
                value={cardNumber}
                onChange={handleCardNumberChange}
                error={!!errors.cardNumber}
                helperText={errors.cardNumber}
                required
            />

            <Typography sx={{ fontWeight: '500', mb: '8px', mt: '16px' }}>Expiration Date</Typography>
            <TextField
                placeholder="MM/YY"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                error={!!errors.expiryDate}
                helperText={errors.expiryDate}
                required
            />

            <Typography sx={{ fontWeight: '500', mb: '8px', mt: '16px' }}>CVV</Typography>
            <TextField
                placeholder="Enter CVV"
                value={cvv}
                onChange={handleCVVChange}
                error={!!errors.cvv}
                helperText={errors.cvv}
                required
            />

            <Typography sx={{ fontWeight: '500', mb: '8px', mt: '16px' }}>Cardholder Name</Typography>
            <TextField
                placeholder="Enter Cardholder Name"
                value={cardholderName}
                onChange={handleCardholderNameChange}
                error={!!errors.cardholderName}
                helperText={errors.cardholderName}
                required
            />

            <Button variant="contained" onClick={handleSubmit} sx={{mt:'40px'}} >Submit</Button>
        </Box>
    )
}
