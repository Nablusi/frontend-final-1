import React, { createContext, useContext, useEffect, useState } from "react";
import { Container } from "@mui/material";
import Hero from "./Hero/Hero";
import CategorizedProducts from "./CategorizedProducts/CategorizedProducts";
import useAxios from "../../services/Hooks/useAxios";
import { urls } from "../../config/urls";
import { SharedParentContext } from "../../contexts/CategoryPageFilter";
import { useNavigate } from "react-router-dom";

export const categoryNameContext = createContext();

export default function SearchForProducts() {
  const [products, setProducts] = useState([]);
  const { search } = useContext(SharedParentContext);
  const searchURL = urls.getProductsBySearch;
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const navigate = useNavigate();

  useEffect(() => {
    if (search.trim() === "") {
      navigate("/category/1");
    } else {
      const handler = setTimeout(() => {
        setDebouncedSearch(search);
      }, 300);

      return () => {
        clearTimeout(handler);
      };
    }
  }, [search, navigate]);

  const { res } = useAxios(`${searchURL}${debouncedSearch}`);

  useEffect(() => {
    if (res) {
      setProducts(res.products);
    }
  }, [res]);

  return (
    <Container>
      <Hero />
      <categoryNameContext.Provider value={debouncedSearch}>
        <CategorizedProducts products={products} />
      </categoryNameContext.Provider>
    </Container>
  );
}
