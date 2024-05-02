import React, { useEffect, useState } from "react";
import { Container, LinearProgress, Box, Typography } from "@mui/material";
import Hero from "./Hero/Hero";
import CategorizedProducts from "./CategorizedProducts/CategorizedProducts";
import { PaginationCustomized } from "./PaginationCustomized/PaginationCustomized";
import useAxios from "../../services/Hooks/useAxios";
import { useParams } from "react-router-dom";

export default function BrandsPage() {
  const PAGESIZE = 20;

  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [products, setProducts] = useState([]);
  const params = useParams();

  const { res, loading } = useAxios(
    `https://backend-final-1-latest.onrender.com/api/products/category/1/?page=${pageNum}&pageSize=20&brand=${params.brandName}`
  );

  const onPageChange = (pageNum) => {
    setPageNum(pageNum);
  };
  useEffect(() => {
    if (res) {
      setProducts(res.products);
    }
  }, [res]);
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
          BreadCrumbsName={params.brandName}
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
