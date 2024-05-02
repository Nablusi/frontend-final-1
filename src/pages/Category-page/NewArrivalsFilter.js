import React, { useEffect, useState } from "react";
import { Container, LinearProgress } from "@mui/material";
import Hero from "./Hero/Hero";
import CategorizedProducts from "./CategorizedProducts/CategorizedProducts";
import { PaginationCustomized } from "./PaginationCustomized/PaginationCustomized";
import useAxios from "../../services/Hooks/useAxios";

export default function NewArrivalsFilter() {
  const PAGESIZE = 20;

  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [products, setProducts] = useState([]);
  const { res, loading } = useAxios(
    `https://backend-final-1-latest.onrender.com/api/products/new?page=${pageNum}&pageSize=20`
  );

  useEffect(() => {
    if (res) {
      setProducts(res.products);
    }
  }, [res]);

  const onPageChange = (pageNum) => {
    setPageNum(pageNum);
  };
  useEffect(() => {
    if (res) {
      setTotalPages(Math.ceil(res.totalRecords / PAGESIZE));
    }
  }, [products]);
  if (loading) {
    return <LinearProgress />;
  } else {
    return (
      <Container>
        <Hero />
        <CategorizedProducts
          products={products}
          BreadCrumbsName="New Arrivals"
        />
        <PaginationCustomized
          currentPage={pageNum}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </Container>
    );
  }
}
