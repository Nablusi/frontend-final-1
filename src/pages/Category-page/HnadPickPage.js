import React, { useEffect, useState } from "react";
import { Container, LinearProgress } from "@mui/material";
import Hero from "./Hero/Hero";
import CategorizedProducts from "./CategorizedProducts/CategorizedProducts";
import { PaginationCustomized } from "./PaginationCustomized/PaginationCustomized";
import useAxios from "../../services/Hooks/useAxios";

export default function HandPickPage() {
  const [products, setProducts] = useState([]);
  const { res, loading } = useAxios(
    `https://backend-final-1-latest.onrender.com/api/products/handpicked?page=1&pageSize=20`
  );

  useEffect(() => {
    if (res) {
      setProducts(res.products);
    }
  }, [res]);

  if (loading) {
    return <LinearProgress />;
  } else {
    return (
      <Container>
        <Hero />
        <CategorizedProducts
          products={products}
          BreadCrumbsName="HandPick"
        />
        <PaginationCustomized
          currentPage={1}
          totalPages={5}
          onPageChange={() => {}}
        />
      </Container>
    );
  }
}