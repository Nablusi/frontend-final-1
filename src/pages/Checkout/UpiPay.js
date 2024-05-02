import React from "react";
import { Paper, Box, TextField, Typography, FormControlLabel, Checkbox, Radio } from "@mui/material";
import * as UpiStyle from "./checkoutStyling/UpiStyles";

export const UpiPay = ({ upiMethod }) => {
    return (
        <Paper sx={UpiStyle.mainPaper}>
            <Box
                sx={UpiStyle.mainBox(upiMethod)}
            >
                <Box
                    sx={UpiStyle.secondBox}
                >
                    <Box sx={UpiStyle.thirdBox}>
                        <Paper sx={UpiStyle.firstPaper}>
                            <img src={require('../../assets/image/logoCheckout/googlepay.png')} alt="sd" style={UpiStyle.img} />
                        </Paper>
                        <Typography sx={UpiStyle.fontWeight}>Google Pay</Typography>
                    </Box>
                    {upiMethod === 'google' ? (
                        ''
                    ) : (
                        <FormControlLabel value="google" control={<Radio />} sx={UpiStyle.formControl} />
                    )}
                </Box>

                {upiMethod === 'google' ? (
                    <>
                        <Box sx={UpiStyle.boxSecond}>
                            <TextField sx={UpiStyle.textFileds} placeholder="Enter your UPI Id" />
                            <FormControlLabel value="google" control={<Radio />} sx={UpiStyle.formControl} />
                        </Box>
                        <Typography sx={UpiStyle.typoss}>Eg: 1234567890@ybl</Typography>
                        <Box>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Save this for future transactions" sx={UpiStyle.secondFormContol} />
                        </Box>
                    </>
                ) : (
                    ''
                )}
            </Box>
            <Box
                sx={UpiStyle.mainBoxPhone(upiMethod)}
            >
                <Box
                    sx={UpiStyle.secondBox}
                >
                    <Box sx={UpiStyle.thirdBox}>
                        <Paper sx={UpiStyle.thirdPaper}>
                            <img src={require('../../assets/image/logoCheckout/path36.png')} alt="sd" style={UpiStyle.img2} />
                        </Paper>
                        <Typography sx={UpiStyle.fontWeight}>Phone Pe</Typography>
                    </Box>
                    {upiMethod === 'phone' ? (
                        ''
                    ) : (
                        <FormControlLabel value="phone" control={<Radio />} sx={UpiStyle.formControl} />
                    )}
                </Box>

                {upiMethod === 'phone' ? (
                    <>
                        <Box sx={UpiStyle.boxSecond}>
                            <TextField sx={UpiStyle.textFileds} placeholder="Enter your UPI Id" />
                            <FormControlLabel value="phone" control={<Radio />} sx={UpiStyle.formControl} />
                        </Box>
                        <Typography sx={UpiStyle.typoss}>Eg: 1234567890@ybl</Typography>
                        <Box>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Save this for future transactions" sx={UpiStyle.secondFormContol} />
                        </Box>
                    </>
                ) : (
                    ''
                )}
            </Box>
            <Box
                sx={
                    UpiStyle.mainBox3(upiMethod)
                }
            >
                <Box
                    sx={UpiStyle.secondBox}
                >
                    <Box sx={UpiStyle.thirdBox}>
                        <Paper sx={UpiStyle.thirdPaper}>
                            <img src={require('../../assets/image/logoCheckout/paytm.png')} alt="sd" style={UpiStyle.img} />
                        </Paper>
                        <Typography sx={UpiStyle.fontWeight}>Paytm</Typography>
                    </Box>
                    {upiMethod === 'path' ? (
                        ''
                    ) : (
                        <FormControlLabel value="path" control={<Radio />} sx={UpiStyle.formControl} />
                    )}
                </Box>

                {upiMethod === 'path' ? (
                    <>
                        <Box sx={UpiStyle.boxSecond}>
                            <TextField sx={UpiStyle.textFileds} placeholder="Enter your UPI Id" />
                            <FormControlLabel value="path" control={<Radio />} sx={UpiStyle.formControl} />
                        </Box>
                        <Typography sx={UpiStyle.typoss}>Eg: 1234567890@ybl</Typography>
                        <Box>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Save this for future transactions" sx={UpiStyle.secondFormContol} />
                        </Box>
                    </>
                ) : (
                    ''
                )}
            </Box>


        </Paper>
    )
}