import React from "react";
import { Box, Button, Divider, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { authUser } from "../../services/utils/authUser";
import { toast } from "react-toastify";

export const OrderDetails = ({ title, getProductDetails, variant }) => {
    const products = getProductDetails();
    const theme = useTheme();
    const totalPrice = products.reduce((acc, curr) => acc + (curr.qty * curr.product.price), 0);
    const discount = 13;
    const deliveryFee = 12;
    const grandTotal = totalPrice - discount + deliveryFee;
    const navigate = useNavigate();


    const clickHandler = () => {
        navigate('/category/1');

    }


    const placeOrderHandler = () => {
        if (authUser()) {
            navigate('/checkout');
        } else {
            toast.warning(
                <>
                    Please <a href="/sign/signin">sign in</a> to continue the process.
                </>
                , {
                    position: 'top-center'
                });
        }
    }

    const order = {
        'withButton': {
            content: (
                products.length === 0 ? '' :
                    <Box sx={{ display: 'flex', flexDirection: 'column', mt: '16px' }}>
                        <Typography sx={{ fontWeight: '600', fontSize: '20px', color: '#13101E' }}>{title}</Typography>
                        <Divider sx={{ mb: '16px' }} />
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontWeight: '500', color: '#626262', }} >Sub total</Typography>
                            <Typography sx={{ fontWeight: '500', color: '#626262', }} >${totalPrice}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontWeight: '500', color: '#626262', }} >Discount</Typography>
                            <Typography sx={{ fontWeight: '500', color: '#626262', }} >$ {discount}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontWeight: '500', color: '#626262', }} >Delivery Fee</Typography>
                            <Typography sx={{ fontWeight: '500', color: '#626262', }} >${deliveryFee}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontWeight: '500', color: '#13101E', }} >Grand Total</Typography>
                            <Typography sx={{ fontWeight: '500', color: '##13101E', }} >${grandTotal}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '32px', mt: '40px' }}>
                            <Button sx={{ textTransform: 'capitalize', fontWeight: '500', backgroundColor: theme.palette.primary.carouselColor, color: theme.palette.primary.textWhiteColor }} variant="contained" onClick={placeOrderHandler} >place order</Button>
                            <Button sx={{ textTransform: 'capitalize', fontWeight: '500', borderColor: theme.palette.primary.carouselColor, color: theme.palette.primary.carouselColor }} variant="outlined" onClick={clickHandler} >Continue Shopping</Button>
                        </Box>
                    </Box>
            )
        },
        "withoutButton": {
            content: (
                <Box sx={{ display: 'flex', flexDirection: 'column', mt: '16px' }}>
                    <Typography sx={{ fontWeight: '600', fontSize: '20px', color: '#13101E' }}>{title}</Typography>
                    <Divider sx={{ mb: '16px' }} />
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontWeight: '500', color: '#626262', }} >Sub total</Typography>
                        <Typography sx={{ fontWeight: '500', color: '#626262', }} >${totalPrice}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontWeight: '500', color: '#626262', }} >Discount</Typography>
                        <Typography sx={{ fontWeight: '500', color: '#626262', }} >$ {discount}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontWeight: '500', color: '#626262', }} >Delivery Fee</Typography>
                        <Typography sx={{ fontWeight: '500', color: '#626262', }} >${deliveryFee}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontWeight: '500', color: '#13101E', }} >Grand Total</Typography>
                        <Typography sx={{ fontWeight: '500', color: '##13101E', }} >${grandTotal}</Typography>
                    </Box>
                </Box>
            )
        }
    }



    return (
        <>
            {order[variant].content}
        </>
    )
}