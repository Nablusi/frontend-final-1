import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";

export default function RootLayout(){
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    )
}