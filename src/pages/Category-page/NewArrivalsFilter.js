import React, { useEffect, useState } from "react";
import { Container, LinearProgress } from "@mui/material";
import Hero from "./Hero/Hero";
import CategorizedProducts from "./CategorizedProducts/CategorizedProducts";
import { PaginationCustomized } from "./PaginationCustomized/PaginationCustomized";
import useAxios from "../../services/Hooks/useAxios";

export default function NewArrivalsFilter() {
  const [products, setProducts] = useState([]);
  const { res, error, loading } = useAxios(
    `https://backend-final-1-latest.onrender.com/api/products/new`
  );

  useEffect(() => {
    if (res) {
      setProducts(res);
    }
  }, [res]);

  if (loading) {
    return <LinearProgress />;
  } else {
    return (
      <Container>
        <Hero />
        <CategorizedProducts products={products} BreadCrumbsName="New Arrivals"/>
        <PaginationCustomized
          currentPage={1}
          totalPages={5}
          onPageChange={() => {}}
        />
      </Container>
    );
  }
}
