import React from "react";
import { Box } from "@mui/system";
import { Button, Typography, useTheme } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import * as OrderStyle from "./OrderSummaryStyle";

export const OrderSummary = ({ getProductDetails, variant }) => {
    const isPhone = useMediaQuery({ query: "(max-width: 767px)" })
    const products = getProductDetails();
    const theme = useTheme(); 
    const navigate = useNavigate(); 

    const clickHandler = () =>  {
        navigate('/category/1'); 
    }

    const productsSummary = {
        "withDetails": {
            content: (
                <Box sx={{display:'grid', }}>
                    <Typography>Product Name</Typography>
                </Box>
            )
        },
        "withoutDetails": {
            content: (
                products.length === 0 ? 
                
                <Button sx={OrderStyle.button(theme)} variant="outlined" onClick={clickHandler}>Continue Shopping</Button>

                :

                products.map((product, index) =>
                    <Box key={index} component={'div'} >
                        <Box component={"div"} sx={OrderStyle.box(isPhone)}>
                            <img src={require('../../assets/image/bag1.png')} alt={product.product.id} style={OrderStyle.img} />
                            <Box component={"div"} sx={OrderStyle.boxContainer}>
                                <Typography sx={OrderStyle.firstTypo}> {product.product.name.split(" ").slice(0,1)} </Typography>
                                <Typography component={'p'} sx={OrderStyle.secondTypo} > {isPhone ? product.product.description.split(" ").slice(0,3) : product.product.description.split(" ").slice(0,3)} </Typography>
                                <Typography component={'p'} sx={OrderStyle.thirdTypo} > Qty-{product.qty} </Typography>
                            </Box>
                        </Box>
                    </Box>

                )
            )
        }
    };

    return (
        <>
            {productsSummary[variant].content}
        </>
    );
};
