import React from "react";
import { Box, Button } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import * as cartStyle from "./CartInfoStyle"; 

export const CartInfo = ({ getProductDetails, variant, removeHandler }) => {
    const products = getProductDetails();
    const isPhone = useMediaQuery({ query: "(max-width: 767px)" })


    const getInfo = {
        'price': {
            content: (
                products.map((product, index) =>
                    <Box key={index} sx={cartStyle.cartInfo(isPhone)}>
                        {product.product.price}
                    </Box>
                ))
        },
        "qty": {
            content: (
                products.map((product, index) =>
                    <Box key={index} sx={cartStyle.cartInfo(isPhone)}>
                        {product.qty}
                    </Box>
                ))
        },
        "subtotal":{
            content: (
                products.map((product, index) =>
                    <Box key={index} sx={cartStyle.subTotal(isPhone)}>
                        {product.product.price  * product.qty}
                        <Button sx={cartStyle.remove} onClick={()=>removeHandler(index)} >Remove</Button>
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