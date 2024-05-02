import React, { useState, useContext, useEffect } from "react";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import { Container, Typography, useTheme, Box, Divider, Button, Accordion, AccordionDetails, AccordionSummary, RadioGroup } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { OrderDetails } from "../../components/OrderDetails/OrderDetails";
import { getProductDetails } from "../../services/utils/getProductDetails";
import { OrderSummary } from "../../components/OrderSummary/OrderSummary";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate, Link } from 'react-router-dom';
import { MasterCard } from "./MasterCard";
import { ApplePay } from "./ApplePay";
import { AmazonPay } from "./AmazonPay";
import { UpiPay } from "./UpiPay";
import { TextFieldCheckout } from "./TextFieldCheckout";
import { PaymentMethodPaper } from "./PaymentMethodPaper";
import { SharedParentContext } from "../../contexts/CategoryPageFilter";
import { isLoggedIn } from "../../services/utils/isLoggedIn";
import { toast } from "react-toastify";
import * as CheckoutStyle from "./checkoutStyling/CheckoutStyle";
import { getUserId } from "../../services/utils/getUserId";
import axios from "axios";
import { getToken } from "../../services/utils/getToken";

export default function Checkout() {
    const theme = useTheme();
    const isSmall = useMediaQuery({ query: '(max-width: 991px)' });
    const isPhone = useMediaQuery({ query: '(max-width: 767px)' });
    const navigate = useNavigate();
    const [seePayment, setSeePayment] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [upiMethod, setUpiMethod] = useState('');
    const { refresh, setRefresh } = useContext(SharedParentContext);
    const [fullName, setFullName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [mobileNumberError, setMobileNumberError] = useState('');
    const userId = getUserId();
    const [userInfo, setUserInfo] = useState([]);

    const fullUserName = userInfo.firstName + " " + userInfo.lastName;
    const phone = userInfo.phone;
    const total = localStorage.getItem('total');
    const [amount, setAmount ] = useState([]);

    const getUserInfo = async () => {
        const response = await axios.get(`https://backend-final-1-latest.onrender.com/api/users/${userId}`, {
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        });
        setUserInfo(response.data);

    }


    // const handleMobileNumberChange = (e) => {
    //     const value = e.target.value;
    //     const re = /^[0-9\b]+$/;
    //     if (value === '' || re.test(value)) {
    //         setMobileNumber(value);
    //         if (value.length !== 10) {
    //             setMobileNumberError('Mobile number must be 10 digits');
    //         } else {
    //             setMobileNumberError('');
    //         }
    //     }
    // };

    const allFieldsFilled = () => {
        if (streetAddress !== '' && state !== '' && city !== '' && pinCode !== '') {
            setSeePayment(!seePayment);
        } else {
            toast.warning('Please fill all fields', {
                position: 'top-center'
            });

        }
    };

    useEffect(() => {
        console.log('refreshed')
        getUserInfo();
    }, [refresh]);


    const cartHandler = () => {
        navigate('/cart');
    }
    const paymentHandler = () => {
        setSeePayment(() => !seePayment);
    }

    const handlePaymentChange = (event) => {
        setPaymentMethod(event.target.value);
    };
    const handleUpiChange = (event) => {
        setUpiMethod(event.target.value);
    };

    const clickGoToHomePage = () => {
        navigate('/');
    }


    const sendDataOfCheckout = async () => {
        const response = await axios.post(`https://backend-final-1-latest.onrender.com/api/checkouts`,
            {
                amount : total,
            },
            {
                headers: {
                    'Authorization': `Bearer ${getToken()}`
                }
            });
            setAmount(response.data);
            localStorage.removeItem('cart');
            setRefresh(!refresh)
            navigate('/userInfo'); 
            toast.success('the payment method is done successfully', {position:'top-center'}); 
    }

    return (
        <Container>
            {isLoggedIn()
                ?
                <>
                    <BreadCrumbs BreadCrumbsName={'checkout'} />
                    <Typography sx={CheckoutStyle.typoMain(theme)}> Checkout </Typography>
                    {getProductDetails().length === 0 ?
                        <Box sx={CheckoutStyle.miniBox}>
                            <Typography sx={CheckoutStyle.miniTypo}> No thing in You Cart  </Typography>
                            <Button sx={CheckoutStyle.homeButton} variant="outlined" onClick={clickGoToHomePage} > Go To Home Page  </Button>
                        </Box>
                        :
                        <Box sx={CheckoutStyle.smallBox(isSmall)}>
                            {seePayment ?
                                <Box>
                                    <Accordion sx={CheckoutStyle.accordion}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                            sx={CheckoutStyle.accordionSummary}
                                        >
                                            Contact Information
                                        </AccordionSummary>
                                        {/* i will do for loop here to get the user Information  */}
                                        <AccordionDetails sx={CheckoutStyle.accordionDetails(isPhone)} >
                                            <Box>
                                                <Typography>Name: {fullUserName}</Typography>
                                            </Box>
                                            <Box>
                                                <Typography>mobile Number: {phone}</Typography>
                                            </Box>
                                            <Box>
                                                <Typography>Email: {userInfo.email}</Typography>
                                            </Box>
                                            <Box>
                                                <Typography>City: {userInfo.location}</Typography>
                                            </Box>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Box>
                                        <Accordion sx={CheckoutStyle.accordion}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1-content"
                                                id="panel1-header"
                                                sx={CheckoutStyle.accordionSummary}
                                            >
                                                Payment
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <RadioGroup value={paymentMethod} onChange={handlePaymentChange} sx={CheckoutStyle.radioGroup} >
                                                    <PaymentMethodPaper paymentMethod={paymentMethod} name={'upi'} imgName={'upi'} title={"UPI"} />
                                                    <PaymentMethodPaper paymentMethod={paymentMethod} name={'master'} imgName={'master'} title={"Credit/Debit Card"} />
                                                    <PaymentMethodPaper paymentMethod={paymentMethod} name={'appel'} imgName={'appel'} title={"Apple Pay"} />
                                                    <PaymentMethodPaper paymentMethod={paymentMethod} name={'amazon'} imgName={'amazon'} title={"Amazon Pay"} />
                                                </RadioGroup>

                                                {paymentMethod === 'upi' && (
                                                    <RadioGroup value={upiMethod} onChange={handleUpiChange} >
                                                        <UpiPay upiMethod={upiMethod} />
                                                    </RadioGroup>
                                                )}

                                                {paymentMethod === 'master' && (
                                                    <MasterCard />
                                                )}
                                                {paymentMethod === 'appel' && (
                                                    <ApplePay />
                                                )}
                                                {paymentMethod === 'amazon' && (
                                                    <AmazonPay />
                                                )}

                                            </AccordionDetails>

                                        </Accordion>
                                    </Box>

                                    <Box sx={CheckoutStyle.buttonContainer}>
                                        <Button variant="text" sx={CheckoutStyle.firstButton} onClick={cartHandler}>Back to Cart</Button>
                                        <Button variant="contained" sx={CheckoutStyle.secondButton(theme)} onClick={sendDataOfCheckout} >Next</Button>
                                    </Box>
                                </Box>

                                :
                                <Box>
                                    <Accordion sx={CheckoutStyle.accordion}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                            sx={CheckoutStyle.accordionSummary}
                                        >
                                            Add New Address
                                        </AccordionSummary>
                                        <AccordionDetails sx={CheckoutStyle.accordionDetails(isPhone)} >
                                            <TextFieldCheckout label="Full Name" theme={theme} placeholder="Name" change={(e) => setFullName(e.target.value)} value={fullUserName} />
                                            <TextFieldCheckout label="Mobile Number" theme={theme} placeholder="+11" value={phone} />
                                            <TextFieldCheckout label="Street Address" theme={theme} placeholder="Address" change={(e) => setStreetAddress(e.target.value)} />
                                            <TextFieldCheckout label="State" theme={theme} placeholder="State" change={(e) => setState(e.target.value)} />
                                            <TextFieldCheckout label="City" theme={theme} placeholder="City" change={(e) => setCity(e.target.value)} />
                                            <TextFieldCheckout label="Pin Code" theme={theme} placeholder="Pin Code" change={(e) => setPinCode(e.target.value)} />
                                        </AccordionDetails>
                                    </Accordion>
                                    <Box>
                                        <Accordion sx={CheckoutStyle.accordion}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1-content"
                                                id="panel1-header"
                                                sx={CheckoutStyle.accordionSummary}
                                            >
                                                Select Payment Method
                                            </AccordionSummary>
                                        </Accordion>
                                    </Box>
                                    <Box sx={CheckoutStyle.buttonContainer}>
                                        <Button variant="text" sx={CheckoutStyle.firstButton} onClick={cartHandler}>Back to Cart</Button>
                                        <Button variant="contained" sx={CheckoutStyle.secondButton(theme)} onClick={allFieldsFilled} >Next</Button>
                                    </Box>
                                </Box>
                            }
                            <Box sx={CheckoutStyle.lastBox}>
                                <Typography sx={CheckoutStyle.lastTypo} >Order Summary</Typography>
                                <Divider sx={CheckoutStyle.divider} />
                                <OrderSummary getProductDetails={getProductDetails} variant={"withoutDetails"} />
                                {
                                    getProductDetails().length === 0 ?
                                        "" :
                                        (
                                            <>
                                                <Box sx={CheckoutStyle.boxThree} />
                                                <OrderDetails variant={"withoutButton"} title={'Order Details'} getProductDetails={getProductDetails} />
                                            </>
                                        )
                                }
                            </Box>
                        </Box>
                    }

                </>
                :

                <Box sx={CheckoutStyle.toaster}>
                    <Typography>Please <Link to={'/sign/signin'}>Sign In</Link> To Proceed to Checkout</Typography>
                </Box>
            }

        </Container >
    )
}