import React, { useState, useRef, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import theme from "../../../theme/Theme";
import { Box } from "@mui/system";
import { Input } from "@mui/material";
import { InputAdornment } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";

// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "./ProductSlider/ProductSlider.css";
export default function ProductDetails({ product, addToCart }) {
  let [qty, setQty] = useState(1);
  let [msg, setMsg] = useState("");
  const HandleQtyChange = (qtyChange) => {
    if (qtyChange >= 1 && qtyChange <= 20) {
      setQty(qtyChange);
    } else {
      setMsg("You Can add qty only betweeen 1 and 20");
    }
  };

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const isSmall = useMediaQuery({ query: "(max-width: 767px)" });

  const styles = {
    buttons: {
      width: "35%",
      "white-space": "nowrap",
      [theme.breakpoints.down("lg")]: {
        width: "100%",
      },
    },
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={5}>
          <div className="slider-container">
            <Slider asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)}>
              <div style={{ width: "75px", height: "75px" }}>
                <img
                  src={require(`../../../assets/image/bag1.png`)}
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                />
              </div>
              <div style={{ width: "75px", height: "75px" }}>
                <img
                  src={require(`../../../assets/image/bag2.png`)}
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                />
              </div>
              <div style={{ width: "75px", height: "75px" }}>
                <img
                  src={require(`../../../assets/image/bag3.png`)}
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                />
              </div>
              <div style={{ width: "75px", height: "75px" }}>
                <img
                  src={require(`../../../assets/image/bag4.png`)}
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                />
              </div>
            </Slider>
            <Box sx={{ width: "70%", margin: "0px auto" }}>
              <Slider
                asNavFor={nav1}
                ref={(slider) => (sliderRef2 = slider)}
                slidesToShow={isSmall ? 2 : 4}
                swipeToSlide={true}
                focusOnSelect={true}
                // nextArrow={<ArrowForwardIosIcon sx={{ color: "black" }} />}
                // prevArrow={<ArrowBackIosNewIcon sx={{ color: "black" }} />}
                style={{ display: "flex", gap: "31px" }}
              >
                <div style={{ width: "75px", height: "75px" }}>
                  <img
                    src={require(`../../../assets/image/bag1.png`)}
                    style={{ width: "100%", height: "100%" }}
                    alt=""
                  />
                </div>
                <div style={{ width: "75px", height: "75px" }}>
                  <img
                    src={require(`../../../assets/image/bag2.png`)}
                    style={{ width: "100%", height: "100%" }}
                    alt=""
                  />
                </div>
                <div style={{ width: "75px", height: "75px" }}>
                  <img
                    src={require(`../../../assets/image/bag3.png`)}
                    style={{ width: "100%", height: "100%" }}
                    alt=""
                  />
                </div>
                <div style={{ width: "75px", height: "75px" }}>
                  <img
                    src={require(`../../../assets/image/bag4.png`)}
                    style={{ width: "100%", height: "100%" }}
                    alt=""
                  />
                </div>
              </Slider>
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} lg={6} sx={{ paddingBottom: "20px" }}>
          <Typography
            variant="h5"
            component="h3"
            sx={{ fontWeight: "bold", textTransform: "capitalize" }}
          >
            {product.name}
          </Typography>
          <Typography
            variant="p"
            component="p"
            color={theme.palette.primary.paragraph}
            sx={{ fontWeight: "600" }}
          >
            Leather Coach Bag with adjustable starps.
          </Typography>
          <Box
            sx={{ display: "flex", alignItems: "center", padding: "25px 0" }}
          >
            {product.reviews && product.reviews.length > 0 ? (
              <>
                <Rating
                  name="read-only"
                  value={product.reviews[0].rating}
                  sx={{ color: theme.palette.primary.star }}
                  readOnly
                />

                <Typography
                  variant="p"
                  component="p"
                  sx={{ paddingLeft: "10px" }}
                  color={theme.palette.primary.paragraph}
                >
                  ({product.reviews.length}) Ratings
                </Typography>
              </>
            ) : (
              <Typography
                variant="p"
                component="p"
                color={theme.palette.primary.error}
              >
                This product hasn't been reviewed yet
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              paddingBottom: "20px",
              borderBottom: `3px solid ${theme.palette.primary.lightGrey}`,
            }}
          >
            {product.discountId !== null ? (
              <>
                <Typography
                  variant="p"
                  component="p"
                  sx={{ fontWeight: "bold", fontSize: "22px" }}
                >
                  ${product.price}
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    textDecoration: "line-through",
                    fontWeight: "bold",
                    fontSize: "22px",
                    padding: "0 15px",
                  }}
                  color={theme.palette.primary.paragraph}
                >
                  $54.69
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  sx={{ fontWeight: "bold", fontSize: "22px" }}
                  color={theme.palette.primary.error}
                >
                  50%OFF
                </Typography>
              </>
            ) : (
              <Typography
                variant="p"
                component="p"
                sx={{ fontWeight: "bold", fontSize: "22px" }}
              >
                ${product.price}
              </Typography>
            )}
          </Box>
          {msg !== "" && (
            <Typography variant="subtitle1" color={theme.palette.primary.error}>
              {msg}
            </Typography>
          )}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              paddingBottom: "40px",
              paddingTop: "20px",
            }}
          >
            <Typography
              variant="p"
              component="p"
              sx={{ fontWeight: "bold", paddingRight: "12px" }}
            >
              Quantity:
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Input
                sx={{
                  border: `1px solid ${theme.palette.primary.main}`,
                  width: "30%",
                  height: "25px",
                  textAlign: "center",
                }}
                type="text"
                style={{ textAlign: "center" }}
                inputProps={{ inputMode: "text", pattern: "[0-9]*" }}
                value={qty}
                startAdornment={
                  <InputAdornment
                    position="start"
                    onClick={() => HandleQtyChange(qty--)}
                    sx={{ cursor: "pointer", color: "black" }}
                  >
                    <RemoveIcon />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment
                    position="end"
                    sx={{ cursor: "pointer", color: "black" }}
                    onClick={() => HandleQtyChange(qty++)}
                  >
                    <AddIcon />
                  </InputAdornment>
                }
              />
            </div>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.primary.main,
                display: "flex",
                alignItems: "center",
                borderRadius: "0px 5px 5px 0px",
                border: "2px solid transparent",
                ...styles.buttons,
              }}
              onClick={() => addToCart(product, qty)}
            >
              <ShoppingBagIcon sx={{ paddingRight: "5px" }} />
              {/* turn the user to login page */}
              <Typography>Add to Cart</Typography>
            </Button>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "transparent",
                display: "flex",
                alignItems: "center",
                marginLeft: "20px",
                borderRadius: "5px",
                border: `2px solid ${theme.palette.primary.main}`,
                ...styles.buttons,
              }}
            >
              <FavoriteBorderIcon sx={{ paddingRight: "5px" }} />
              <Typography>Add to Wishlist</Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
