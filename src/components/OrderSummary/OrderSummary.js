import React from "react";
import { Box } from "@mui/system";
import { Button, Typography, useTheme } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

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
                
                <Button sx={{ textTransform: 'capitalize', fontWeight: '500', borderColor:theme.palette.primary.carouselColor, color: theme.palette.primary.carouselColor}} variant="outlined" onClick={clickHandler}>Continue Shopping</Button>

                :

                products.map((product, index) =>
                    <Box key={index} component={'div'} >
                        <Box component={"div"} sx={{ display: 'flex', flexDirection: isPhone ? 'column' : "row", gap: '16px', ml: '5px', width: '100%' }}>
                            <img src={require('../../assets/image/bag1.png')} alt={product.product.id} style={{ width: '75px', height: '80px' }} />
                            <Box component={"div"} sx={{ display: 'flex', flexDirection: 'column', mb: '16px' }}>
                                <Typography sx={{ padding: '0', overflow:'hidden', textOverflow: 'ellipsis', whiteSpace:'nowrap' }}> {product.product.name.split(" ").slice(0,1)} </Typography>
                                <Typography component={'p'} sx={{ height: '30px', overflow: 'hidden', textOverflow: 'ellipsis', padding: '0', whiteSpace: 'nowrap' }} > {isPhone ? product.product.description.split(" ").slice(0,3) : product.product.description.split(" ").slice(0,3)} </Typography>
                                <Typography component={'p'} sx={{ padding: '0' }} > Qty-{product.qty} </Typography>
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
