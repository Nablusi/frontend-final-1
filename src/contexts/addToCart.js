import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { getToken } from "../services/utils/getToken";


export const AddToCartIfLoggedInContext = createContext();

export const AddToCartIfLoggedInProvider = ({ children }) => {
    const [productListIfLoggedIn, setProductListIfLoggedIn] = useState();
    const userId = 20;

    const sendProductData = async () => {
        try {
            const sendData = await axios.post('https://backend-final-1-latest.onrender.com/api/carts',
                {
                    "userId": userId,
                    "total": 20,
                    "status": "pending",
                    "items": [
                        {
                            "productId": 4,
                            "qty": 1,
                            "price": 20
                        }
                    ]
                }, {
                headers: {
                    'Authorization': `Bearer ${getToken()}`
                }
            });

            console.log(sendData.data)
            return sendData.data;

        } catch (e) {
            console.log('there is an error in ', e);
        }
    }



    useEffect(() => {
        console.log(productListIfLoggedIn)
    }, [productListIfLoggedIn])


    return (
        <AddToCartIfLoggedInContext.Provider value={{ productListIfLoggedIn, setProductListIfLoggedIn, sendProductData }}>
            {children}
        </AddToCartIfLoggedInContext.Provider>
    )
}
