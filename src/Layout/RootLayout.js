import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import { NavBarProvider } from "../contexts/NavBarContext";
import Footer from "../components/Footer/Footer";

export default function RootLayout(){
    return (
        <>
        <NavBarProvider>
            <Navigation />
            <Outlet />
            {/* <Footer /> */}
        </NavBarProvider>
        </>
    )
}