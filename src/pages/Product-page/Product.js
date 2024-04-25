import { React, useContext, useEffect, useState } from "react";
import ProductBreadCrumbs from "./ProductBreadCrumbs/ProductBreadCrumbs";
import { Container } from "@mui/system";
import ProductDetails from "./ProductDetails/ProductDetails";
import useAxios from "../../services/Hooks/useAxios";
import { urls } from "../../config/urls";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { LinearProgress } from "@mui/material";
import ProductSlider from './ProductDetails/ProductSlider/ProductSlider'
import { SharedParentContext } from "../../contexts/CategoryPageFilter";
import { authUser } from "../../services/utils/authUser";
import { toast } from 'react-toastify';
export default function Product() {
  let { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState();
  const [categoryName, setCategoryName] = useState("");
  const navigate = useNavigate();
  const {
    res: categories,
  } = useAxios(`${urls.getCategories}`);
  const checkUserCart = () => {
    if (localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    } else {
      setCart([]);
    }
  };
  const { setRefresh, refresh } = useContext(SharedParentContext);

  const addToCart = (product, qty) => {
    // need to check for token before allow user to add
    if (authUser()) {
      setRefresh(() => !refresh)
      if (cart.length) {
        const index = cart.findIndex((prod) => prod.product.id === product.id);
        if (index !== -1) {
          if (cart[index].qty + qty > 20) {
            console.log("can not add more");
          } else {
            cart[index].qty += qty;
          }
        } else {
          cart.push({ product: product, qty: qty });
        }
      } else {
        cart.push({ product: product, qty: qty });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    else {
      toast.warning(
        <>
          Please <a href="/sign/signin">sign in</a> to continue the process. 
        </>, 
        { position: 'top-center' }
      );
    }
  };
  // console.log(cart);
  useEffect(() => {
    checkUserCart();
  }, [refresh]);

  useEffect(() => {
    let getProduct = async () => {
      setLoading(true);
      let res = await axios.get(
        `https://backend-final-1-latest.onrender.com/api/products/${id}`
      );
      // let data = await res.data;
      setProduct(res.data);
      setLoading(false);
    };
    getProduct();
  }, [id]);

  useEffect(() => {
    if (categories) {
      const categoriesData = categories;
      const foundCategory = categoriesData.find(
        (category) => parseInt(category.id) === parseInt(product.categoryId)
      );
      if (foundCategory) {
        setCategoryName(foundCategory.name);
      }
    }
  }, [id, categories]);
  console.log(categoryName);
  if (loading) {
    return <LinearProgress />;
  }
  return (
    <>
      <Container>
        <ProductBreadCrumbs productName={product.name} categoryName={categoryName}/>
        <ProductDetails product={product} addToCart={addToCart} />
        {/* <ProductSlider/> */}
      </Container>
    </>
  );
}
