import React, { createContext, useEffect, useMemo, useState } from "react";
import { Container, LinearProgress } from "@mui/material";
import Hero from "./Hero/Hero";
import CategorizedProducts from "./CategorizedProducts/CategorizedProducts";
import { PaginationCustomized } from "./PaginationCustomized/PaginationCustomized";
import useAxios from "../../services/Hooks/useAxios";
import { useParams } from "react-router-dom";
import { urls } from "../../config/urls";
import axios from "axios";
export const categoryName = createContext();


export default function Category() {
  const PAGESIZE = 20;
  let { id } = useParams();
  const [products, setProducts] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [catname, setCatName] = useState("");
  const { res, error, loading } = useAxios(`${urls.getCategory}/${id}?page=${pageNum}`);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${urls.getCategories}`);
        const cats = response.data;
        const foundCategory = cats.find((cat) => cat.id == id);
        if (foundCategory) {
          setCatName(foundCategory.name);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, [id]);
  useEffect(() => {
    if (res) {
      setProducts(res.products);
      setTotalPages(Math.ceil((res.totalRecords)/PAGESIZE));
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
        <categoryName.Provider value={catname}>
          <CategorizedProducts products={products} />
        </categoryName.Provider>
        <PaginationCustomized
          currentPage={pageNum}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </Container>
    );
  }
}
