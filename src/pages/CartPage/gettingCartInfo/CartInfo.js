import React from "react";
import { Box, Button } from "@mui/material";
import { useMediaQuery } from "react-responsive";

export const CartInfo = ({ getProductDetails, variant, removeHandler }) => {
    const products = getProductDetails();
    const isPhone = useMediaQuery({ query: "(max-width: 767px)" })


    const getInfo = {
        'price': {
            content: (
                products.map((product, index) =>
                    <Box key={index} sx={{ height: isPhone ? '190px' : '94px', marginLeft: '20px' }}>
                        {product.product.price}
                    </Box>
                ))
        },
        "qty": {
            content: (
                products.map((product, index) =>
                    <Box key={index} sx={{  height: isPhone ? '190px' : '94px', marginLeft: '20px' }}>
                        {product.qty}
                    </Box>
                ))
        },
        "subtotal":{
            content: (
                products.map((product, index) =>
                    <Box key={index} sx={{  height: isPhone ? '190px' : '94px', marginLeft: '20px', display:'flex', flexDirection:'column' }}>
                        {product.product.price  * product.qty}
                        <Button sx={{justifyContent:'flex-start', color:'red', textTransform:'capitalize', padding:'0'}} onClick={()=>removeHandler(index)} >Remove</Button>
                    </Box>
                ))
        }
    }

    return (
        <>
            {getInfo[variant].content}
        </>
    )
}