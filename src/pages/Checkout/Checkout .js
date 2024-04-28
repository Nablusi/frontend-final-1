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

export default function Checkout() {
    const theme = useTheme();
    const isSmall = useMediaQuery({ query: '(max-width: 991px)' });
    const isPhone = useMediaQuery({ query: '(max-width: 767px)' });
    const navigate = useNavigate();
    const [seePayment, setSeePayment] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [upiMethod, setUpiMethod] = useState('');
    const { refresh } = useContext(SharedParentContext);
    const [fullName, setFullName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [mobileNumberError, setMobileNumberError] = useState('');


    const handleMobileNumberChange = (e) => {
        const value = e.target.value;
        const re = /^[0-9\b]+$/; 
        if (value === '' || re.test(value)) {
            setMobileNumber(value);
            if (value.length !== 10) {
                setMobileNumberError('Mobile number must be 10 digits');
            } else {
                setMobileNumberError('');
            }
        }
    };

    const allFieldsFilled = () => {
        if (fullName !== '' && mobileNumber.length === 10 && streetAddress !== '' && state !== '' && city !== '' && pinCode !== '') {
            setSeePayment(!seePayment);
        } else {
            if (mobileNumber.length !== 10) {
                toast.warning('Mobile number must be 10 digits', {
                    position: 'top-center'
                });
            } else {
                toast.warning('Please fill all fields', {
                    position: 'top-center'
                });
            }
        }
    };


    useEffect(() => {
        console.log('refreshed')
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


    return (
        <Container>
            {isLoggedIn()


                ?
                <>
                    <BreadCrumbs BreadCrumbsName={'checkout'} />
                    <Typography sx={{ fontSize: '34px', fontWeight: '600', color: theme.palette.primary.carouselColor, mb: '40px' }}> Checkout </Typography>
                    {getProductDetails().length === 0 ?
                        <Box sx={{ marginBottom: '80px' }}>
                            <Typography sx={{ fontWeight: '600', fontSize: '32px' }}> No thing in You Cart  </Typography>
                            <Button sx={{ textTransform: 'capitalize', mt: '50px' }} variant="outlined" onClick={clickGoToHomePage} > Go To Home Page  </Button>
                        </Box>

                        :

                        <Box sx={{ display: 'grid', gridTemplateColumns: isSmall ? 'minmax(1fr 1fr)' : '2fr 1fr', gap: '76px' }}>



                            {seePayment ?
                                <Box>
                                    <Accordion sx={{ boxShadow: 'none', width: '100%', mb: '40px', padding: '0' }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                            sx={{ fontSize: '22px', fontWeight: '600', borderBottom: '1px solid #0000002e', padding: '0' }}
                                        >
                                            Contact Information
                                        </AccordionSummary>
                                        {/* i will do for loop here to get the user Information  */}
                                        <AccordionDetails sx={{ display: 'grid', mt: '45px', gridTemplateColumns: isPhone ? 'ifr' : '1fr 1fr', gap: '31px', width: '100%' }} >
                                            <Box>
                                                <Typography>Name: Zaid Saeh</Typography>
                                            </Box>
                                            <Box>
                                                <Typography>mobile Number: 0599206572</Typography>
                                            </Box>
                                            <Box>
                                                <Typography>Street Address: Beker Street</Typography>
                                            </Box>
                                            <Box>
                                                <Typography>State: Palestine</Typography>
                                            </Box>
                                            <Box>
                                                <Typography>City: Nablus</Typography>
                                            </Box>
                                            <Box>
                                                <Typography>Pin Code: P499</Typography>
                                            </Box>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Box>
                                        <Accordion sx={{ boxShadow: 'none', width: '100%', mb: '40px', padding: '0' }}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1-content"
                                                id="panel1-header"
                                                sx={{ fontSize: '22px', fontWeight: '600', borderBottom: '1px solid #0000002e', padding: '0' }}
                                            >
                                                Payment
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <RadioGroup value={paymentMethod} onChange={handlePaymentChange} sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '20px', mt: '43px', mb: '68px' }} >
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

                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', mt: '20px', mb: '50px' }}>
                                        <Button variant="text" sx={{ textTransform: 'capitalize', textDecoration: 'underline' }} onClick={cartHandler}>Back to Cart</Button>
                                        <Button variant="contained" sx={{ textTransform: 'capitalize', color: theme.palette.primary.textWhiteColor, backgroundColor: theme.palette.primary.carouselColor }} onClick={paymentHandler} >Next</Button>
                                    </Box>
                                </Box>

                                :
                                <Box>
                                    <Accordion sx={{ boxShadow: 'none', width: '100%', mb: '40px', padding: '0' }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                            sx={{ fontSize: '22px', fontWeight: '600', borderBottom: '1px solid #0000002e', padding: '0' }}
                                        >
                                            Add New Address
                                        </AccordionSummary>
                                        <AccordionDetails sx={{ display: 'grid', mt: '45px', gridTemplateColumns: isPhone ? 'ifr' : '1fr 1fr', gap: '31px', width: '100%' }} >
                                            <TextFieldCheckout label="Full Name" theme={theme} placeholder="Name" change={(e) => setFullName(e.target.value)} />
                                            <TextFieldCheckout label="Mobile Number" theme={theme} placeholder="+11" change={handleMobileNumberChange} />
                                            <TextFieldCheckout label="Street Address" theme={theme} placeholder="Address" change={(e) => setStreetAddress(e.target.value)} />
                                            <TextFieldCheckout label="State" theme={theme} placeholder="State" change={(e) => setState(e.target.value)} />
                                            <TextFieldCheckout label="City" theme={theme} placeholder="City" change={(e) => setCity(e.target.value)} />
                                            <TextFieldCheckout label="Pin Code" theme={theme} placeholder="Pin Code" change={(e) => setPinCode(e.target.value)} />
                                        </AccordionDetails>
                                    </Accordion>
                                    <Box>
                                        <Accordion sx={{ boxShadow: 'none', width: '100%', mb: '40px', padding: '0' }}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1-content"
                                                id="panel1-header"
                                                sx={{ fontSize: '22px', fontWeight: '600', borderBottom: '1px solid #0000002e', padding: '0' }}
                                            >
                                                Select Payment Method
                                            </AccordionSummary>
                                        </Accordion>
                                    </Box>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', mt: '20px', mb: '50px' }}>
                                        <Button variant="text" sx={{ textTransform: 'capitalize', textDecoration: 'underline' }} onClick={cartHandler}>Back to Cart</Button>
                                        <Button variant="contained" sx={{ textTransform: 'capitalize', color: theme.palette.primary.textWhiteColor, backgroundColor: theme.palette.primary.carouselColor }} onClick={allFieldsFilled} >Next</Button>
                                    </Box>
                                </Box>
                            }
                            <Box sx={{ display: 'flex', flexDirection: 'column', mb: '50px' }}>
                                <Typography sx={{ fontSize: '20px', fontWeight: '600' }} >Order Summary</Typography>
                                <Divider sx={{ mb: '24px', mt: '8px' }} />
                                <OrderSummary getProductDetails={getProductDetails} variant={"withoutDetails"} />
                                {
                                    getProductDetails().length === 0 ?
                                        "" :
                                        (
                                            <>
                                                <Box sx={{ mt: '24px' }} />
                                                <OrderDetails variant={"withoutButton"} title={'Order Details'} getProductDetails={getProductDetails} />
                                            </>
                                        )
                                }
                            </Box>
                        </Box>
                    }

                </>
                :

                <Box sx={{ mt: '50px', mb: '100px' }}>
                    <Typography>Please <Link to={'/sign/signin'}>Sign In</Link> To Proceed tp Checkout</Typography>
                </Box>
            }

        </Container >
    )
}