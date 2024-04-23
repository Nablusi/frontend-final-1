import React from "react";
import ProductBreadCrumbs from "./ProductBreadCrumbs/ProductBreadCrumbs";
import { Container } from "@mui/system";
import ProductDetails from "./ProductDetails/ProductDetails";

export default function Product() {
  return (
    <>
      <Container>
        <ProductBreadCrumbs />
        <ProductDetails />
      </Container>
    </>
  );
}
