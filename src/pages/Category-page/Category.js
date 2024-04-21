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
  let { id } = useParams();
  const [products, setProducts] = useState([]);
  const [catname, setCatName] = useState("");
  const { res, error, loading } = useAxios(`${urls.getCategory}/${id}`);

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
  // console.log(catname);
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
        <categoryName.Provider value={catname}>
          <CategorizedProducts products={products} />
        </categoryName.Provider>
        <PaginationCustomized
          currentPage={1}
          totalPages={5}
          onPageChange={() => {}}
        />
      </Container>
    );
  }
}
