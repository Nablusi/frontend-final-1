import React from "react";
// import { Button } from '@mui/material';
// import "./home.css";
import styles from "./home.module.css"; 
//import * as BtnStyles from "./button";
import Button from '@mui/joy/Button';
// import Box from '@mui/joy/Box';
import { useMediaQuery } from 'react-responsive'


export default function Home() {
    const isPhone =  useMediaQuery({query: '(max-width: 480px)'})

    return (
        <>
            <Button sx={{color : isPhone ? "green" : "yellow" }}> Hello </Button>
            <h1>Zaid say helloooooo</h1>
        </>
    )
}
//sx={{ color: 'green', border: '1px solid green' }}
//

//sx={BtnStyles.btn}