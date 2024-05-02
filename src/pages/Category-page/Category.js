import React, { createContext, useContext, useEffect, useState } from "react";
import { Container, LinearProgress } from "@mui/material";
import Hero from "./Hero/Hero";
import CategorizedProducts from "./CategorizedProducts/CategorizedProducts";
import { PaginationCustomized } from "./PaginationCustomized/PaginationCustomized";
import useAxios from "../../services/Hooks/useAxios";
import { useParams } from "react-router-dom";
import { urls } from "../../config/urls";
import { SharedParentContext } from "../../contexts/CategoryPageFilter";
export const categoryNameContext = createContext();

export default function Category() {
  const PAGESIZE = 20;
  let { id } = useParams();
  const [products, setProducts] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [categoryName, setCategoryName] = useState("");
  const { popular, limitedEdition, discount } = useContext(SharedParentContext);
  // const searchURL = urls.getProductsBySearch;




  const check = () => {
    if (popular) {
      return "&popular=true";
    } else if (discount) {
      return "&discount=15";
    } else if (limitedEdition) {
      return "&limitedEdition=true";
    } else {
      return ''
    }
  }



  let url = `${urls.getCategory}/${id}?page=${pageNum}${check()}`;

  // useEffect(()=>{
  //   console.log(url);
  //   console.log(discount); 
  // },[])

  const {
    res: categoryProducts,
    // error: categoryError,
    loading: categoryLoading,
  } = useAxios(`${url}`);
  const {
    res: categories,
    // error: categoriesError,
    // loading: categoriesLoading,
  } = useAxios(`${urls.getCategories}`);

  useEffect(() => {
    if (categories) {
      const categoriesData = categories;
      const foundCategory = categoriesData.find(
        (category) => parseInt(category.id) === parseInt(id)
      );
      if (foundCategory) {
        setCategoryName(foundCategory.name);
      }
    }
  }, [id, categories]);
  useEffect(() => {
    if (categoryProducts) {
      setProducts(categoryProducts.products);
      setTotalPages(Math.ceil(categoryProducts.totalRecords / PAGESIZE));
    }
  }, [categoryProducts]);
  const onPageChange = (pageNum) => {
    setPageNum(pageNum);
  };
  if (categoryLoading) {
    return <LinearProgress />;
  } else {
    return (
      <Container>
        <Hero />
        <categoryNameContext.Provider
          value={
            popular
              ? "Popular"
              : limitedEdition
              ? "Limited Edition"
              : categoryName
          }
        >
          <CategorizedProducts products={products} />
        </categoryNameContext.Provider>
        <PaginationCustomized
          currentPage={pageNum}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </Container>
    );
  }
}
