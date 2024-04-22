import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import { NavBarProvider } from "../contexts/NavBarContext";
import Footer from "../components/Footer/Footer";
import PopsUp from "../components/Dialog/PopsUp";

export default function RootLayout() {
  return (
    <>
      <NavBarProvider>
        <PopsUp />
        <Navigation />
        <Outlet />
        <Footer />
      </NavBarProvider>
    </>
  );
}
