import React from "react";
import { Container } from "@mui/material"; 
import Hero from "./Hero/Hero";
import CategorizedProducts from "./CategorizedProducts/CategorizedProducts";

export default function Category(){
    return (
        <Container>
             <Hero />
             <CategorizedProducts/>
        </Container>

    )
}