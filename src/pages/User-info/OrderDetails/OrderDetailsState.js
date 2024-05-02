import {React, useState, useEffect } from 'react'
import {authUser} from '../../../services/utils/authUser';
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import axios from "axios";
import { LinearProgress } from '@mui/material';
import OrderDetails from './OrderDetails';
export default function OrderDetailsState() {
    const [singleOrderInfo,setSingleOrderInfo] = useState();
    let {id} = useParams();
    let navigate = useNavigate();
    let getOrderInfo = async (token) => {
      try {
        let orderData = await axios.get(
          `https://backend-final-1-latest.onrender.com/api/orders/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // checking for response => orderInfo || rejected
        setSingleOrderInfo(orderData.data);
      } catch (err) {
        if(err.response.data.message === "Unauthorized" || err.response.data === "Error getting order!"){
          navigate('/*');
        }
        // console.log(err);
        // Handle error
      } 
    };
    // console.log(singleOrderInfo);
    useEffect(() => {
      if (authUser()) {
        // pass Id + getToken
        let token = localStorage.getItem('token');
        getOrderInfo(token);
      }
    }, [id]);
    if (singleOrderInfo === undefined) {
      return <LinearProgress/>;
    }
  return (
    <OrderDetails singleOrderInfo={singleOrderInfo}/>
  )
}
