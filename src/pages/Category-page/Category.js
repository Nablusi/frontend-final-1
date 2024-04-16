import React from "react";
import { Container } from "@mui/material";
import Hero from "./Hero/Hero";
import CategorizedProducts from "./CategorizedProducts/CategorizedProducts";
import { PaginationCustomized } from "./PaginationCustomized/PaginationCustomized";

export default function Category() {
  return (
    <Container>
      <Hero />
      <CategorizedProducts />
      <PaginationCustomized
        currentPage={1}
        totalPages={5}
        onPageChange={() => {}}
      />
    </Container>
  );
}
