import React, { useEffect, useState } from "react";
import { Container, LinearProgress } from "@mui/material";
import Hero from "./Hero/Hero";
import CategorizedProducts from "./CategorizedProducts/CategorizedProducts";
import { PaginationCustomized } from "./PaginationCustomized/PaginationCustomized";
import useAxios from "../../Hooks/useAxios";
import { useParams } from "react-router-dom";

export default function Category() {
  let { id } = useParams();
  const [products, setProducts] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  const { res, error, loading } = useAxios(
    `https://backend-final-1-latest.onrender.com/api/products/category/${id}?page=${pageNum}`
  );
  useEffect(() => {
    if (res) {
      setProducts(res);
    }
  }, [res]);
  const onPageChange = (pageNum) => {
    setPageNum(pageNum);
  };
  if (loading) {
    return <LinearProgress />;
  } else {
    return (
      <Container>
        <Hero />
        <CategorizedProducts products={products} />
        <PaginationCustomized
          currentPage={pageNum}
          totalPages={20}
          onPageChange={onPageChange}
        />
      </Container>
    );
  }
}
