import React from "react";
import { Paper, Box, TextField, Typography, FormControlLabel, Checkbox, Radio } from "@mui/material";

export const UpiPay = ({ upiMethod}) => {
    return (
        <Paper sx={{ display: 'flex', flexDirection: 'column', gap: '40px', boxShadow: 'none', border: '1px solid #21516A' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '11px',
                    backgroundColor: upiMethod === 'google' ? '#f3f7f7' : ''
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '11px',
                        justifyContent: 'space-between'
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '11px' }}>
                        <Paper sx={{ width: '68px', height: '68px' }}>
                            <img src={require('../../assets/image/logoCheckout/googlepay.png')} alt="sd" style={{ padding: '12px' }} />
                        </Paper>
                        <Typography sx={{ fontWeight: '500' }}>Google Pay</Typography>
                    </Box>
                    {upiMethod === 'google' ? (
                        ''
                    ) : (
                        <FormControlLabel value="google" control={<Radio />} sx={{ mb: '20px', alignSelf: 'end', transform: 'translateX(23px)' }} />
                    )}
                </Box>

                {upiMethod === 'google' ? (
                    <>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TextField sx={{ mt: '12px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "#639599" } }} placeholder="Enter your UPI Id" />
                            <FormControlLabel value="google" control={<Radio />} sx={{ mb: '20px', alignSelf: 'end', transform: 'translateX(23px)' }} />
                        </Box>
                        <Typography sx={{ color: '#A7A7A7', mt: '8px', mb: '8px' }}>Eg: 1234567890@ybl</Typography>
                        <Box>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Save this for future transactions" sx={{ color: '#626262', fontWeight: '500', mt: '8px', mb: '8px' }} />
                        </Box>
                    </>
                ) : (
                    ''
                )}
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '11px',
                    backgroundColor: upiMethod === 'phone' ? '#f3f7f7' : ''
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '11px',
                        justifyContent: 'space-between'
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '11px' }}>
                        <Paper sx={{ width: '68px', height: '68px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={require('../../assets/image/logoCheckout/path36.png')} alt="sd" style={{ padding: '12px', borderRadius: '50%', backgroundColor: '#5f259f' }} />
                        </Paper>
                        <Typography sx={{ fontWeight: '500' }}>Phone Pe</Typography>
                    </Box>
                    {upiMethod === 'phone' ? (
                        ''
                    ) : (
                        <FormControlLabel value="phone" control={<Radio />} sx={{ mb: '20px', alignSelf: 'end', transform: 'translateX(23px)' }} />
                    )}
                </Box>

                {upiMethod === 'phone' ? (
                    <>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TextField sx={{ mt: '12px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "#639599" } }} placeholder="Enter your UPI Id" />
                            <FormControlLabel value="phone" control={<Radio />} sx={{ mb: '20px', alignSelf: 'end', transform: 'translateX(23px)' }} />
                        </Box>
                        <Typography sx={{ color: '#A7A7A7', mt: '8px', mb: '8px' }}>Eg: 1234567890@ybl</Typography>
                        <Box>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Save this for future transactions" sx={{ color: '#626262', fontWeight: '500', mt: '8px', mb: '8px' }} />
                        </Box>
                    </>
                ) : (
                    ''
                )}
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '11px',
                    backgroundColor: upiMethod === 'path' ? '#f3f7f7' : ''
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '11px',
                        justifyContent: 'space-between'
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '11px' }}>
                        <Paper sx={{ width: '68px', height: '68px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={require('../../assets/image/logoCheckout/paytm.png')} alt="sd" style={{ padding: '12px' }} />
                        </Paper>
                        <Typography sx={{ fontWeight: '500' }}>Paytm</Typography>
                    </Box>
                    {upiMethod === 'path' ? (
                        ''
                    ) : (
                        <FormControlLabel value="path" control={<Radio />} sx={{ mb: '20px', alignSelf: 'end', transform: 'translateX(23px)' }} />
                    )}
                </Box>

                {upiMethod === 'path' ? (
                    <>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TextField sx={{ mt: '12px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "#639599" } }} placeholder="Enter your UPI Id" />
                            <FormControlLabel value="path" control={<Radio />} sx={{ mb: '20px', alignSelf: 'end', transform: 'translateX(23px)' }} />
                        </Box>
                        <Typography sx={{ color: '#A7A7A7', mt: '8px', mb: '8px' }}>Eg: 1234567890@ybl</Typography>
                        <Box>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Save this for future transactions" sx={{ color: '#626262', fontWeight: '500', mt: '8px', mb: '8px' }} />
                        </Box>
                    </>
                ) : (
                    ''
                )}
            </Box>


        </Paper>
    )
}