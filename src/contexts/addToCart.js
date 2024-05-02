import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { getToken } from "../services/utils/getToken";
import { getUserId } from "../services/utils/getUserId";
import { getProductById } from "../services/utils/getProductById";
import { getCartId } from "../services/utils/getCartId";
import { urls } from "../config/urls";

export const AddToCartIfLoggedInContext = createContext();

export const AddToCartIfLoggedInProvider = ({ children }) => {
    const [productListIfLoggedIn, setProductListIfLoggedIn] = useState();
    const [getProductId, setGetProductId] = useState();
    const userId = getUserId();
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productQty, setProductQty] = useState();
    const [cartId, setCartId] = useState();

    useEffect(() => {
        if(getProductId){
            getProductById(getProductId)
                .then(productData => {
                    setProductName(productData.name);
                    setProductDescription(productData.description);
                    setProductPrice(productData.price);
                })
                .catch(error => {
                    console.log('Error fetching product data:', error);
                });
        }

        getCartId(userId)
            .then((cartData) => {
                setCartId(cartData.id);
                // console.log(cartData.id);
            })
            .catch(error => {
                console.log('Error fetching cart data:', error);
            });
    }, [getProductId]);

    const item = {
        "productId": getProductId,
        "qty": productQty,
        "price": productPrice
    };

    const sendProductData = async () => {
        try {
            // if (cartId) {
            //     await axios.put(
            //         `${urls.updateCart}/${cartId}`,
            //         { items: [item, ...productListIfLoggedIn] },
            //         { headers: { 'Authorization': `Bearer ${getToken()}` } }
            //     );
            //  } 
            //  else {
               await axios.post(
                    `${urls.createCart}`,
                    {
                        "userId": userId,
                        "total": productPrice * productQty,
                        "status": "pending",
                        "items": [item]
                    },
                    { headers: { 'Authorization': `Bearer ${getToken()}` } }
                );
            // }
        } catch (error) {
            console.log('Error occurred:', error);
        }
    };

    return (
        <AddToCartIfLoggedInContext.Provider value={{ productListIfLoggedIn, setProductListIfLoggedIn, sendProductData, setGetProductId, setProductQty }}>
            {children}
        </AddToCartIfLoggedInContext.Provider>
    );
};