import React, { useEffect, useState } from "react";
import { Container, LinearProgress } from "@mui/material";
import Hero from "./Hero/Hero";
import CategorizedProducts from "./CategorizedProducts/CategorizedProducts";
import { PaginationCustomized } from "./PaginationCustomized/PaginationCustomized";
import useAxios from "../../services/Hooks/useAxios";
import { useParams } from "react-router-dom";

export default function CategoryProducts() {
  const PAGESIZE = 20;
  const { type, brandName } = useParams();
  console.log("type:", type);

  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [products, setProducts] = useState([]);
  let { res, loading } = useAxios(
    type == "brands"
      ? `https://backend-final-1-latest.onrender.com/api/products/category/1/?page=${pageNum}&pageSize=20&brand=${brandName}`
      : `https://backend-final-1-latest.onrender.com/api/products/${type}?page=${pageNum}&pageSize=20`
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
          BreadCrumbsName={
            type === "new"
              ? "New Arrivals"
              : type === "brands"
              ? brandName
              : type
          }
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
