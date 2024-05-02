import React, { useEffect, useState } from "react";
import { Container, LinearProgress } from "@mui/material";
import Hero from "./Hero/Hero";
import CategorizedProducts from "./CategorizedProducts/CategorizedProducts";
import { PaginationCustomized } from "./PaginationCustomized/PaginationCustomized";
import useAxios from "../../services/Hooks/useAxios";
import { useParams } from "react-router-dom";

export default function BrandsPage() {
    const [products, setProducts] = useState([]);
    const params = useParams();

    console.log(params.brandName)

    const { res, loading } = useAxios(
        `https://backend-final-1-latest.onrender.com/api/products/category/1/?page=1&pageSize=20&brand=${params.brandName}`
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
                    BreadCrumbsName={params.brandName}
                />

                <PaginationCustomized
                    currentPage={1}
                    totalPages={5}
                    onPageChange={() => { }}
                />
            </Container>
        );
    }
}
