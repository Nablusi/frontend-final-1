import React, { useState, useRef, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
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
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./ProductSlider/ProductSlider.css";
import GeneratedStars from "../../../services/utils/GeneratedStars";

export default function ProductDetails({ product, addToCart }) {
  let [qty, setQty] = useState(1);
  let [msg, setMsg] = useState("");
  const HandleQtyChange = (qtyChange) => {
    if (qtyChange >= 1 && qtyChange <= 20) {
      setQty(qtyChange);
    } else {
      setMsg("You Can add qty only betweeen 1 and 20");
      setTimeout(() => {
        setMsg("");
      }, 4000);
    }
  };

  let newPrice = null;
  if (product.discountId !== null && product.discount) {
    let getNewPrice = () => {
      return parseFloat(
        product.price - (product.price * product.discount.percentage) / 100
      );
    };
    newPrice = getNewPrice();
  }

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
                nextArrow={<ArrowForwardIosIcon sx={{ color: "black" }} />}
                prevArrow={<ArrowBackIosNewIcon sx={{ color: "black" }} />}
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
            sx={{
              fontWeight: "600",
              textTransform: "capitalize",
              color: theme.palette.primary.sectionTitle,
            }}
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
          <Box sx={{ width: "fit-content", padding: "25px 0" }}>
            {product.reviews && product.reviews.length > 0 ? (
              <>
                <GeneratedStars reviews={product.reviews} brackets={true} />
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
                  sx={{
                    fontWeight: "700",
                    fontSize: "24px",
                    color: theme.palette.primary.textColor,
                  }}
                >
                  ${newPrice}
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    textDecoration: "line-through",
                    fontWeight: "600",
                    fontSize: "18px",
                    padding: "0 15px",
                  }}
                  color={theme.palette.primary.greyColor}
                >
                  ${product.price}
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  sx={{ fontWeight: "600", fontSize: "16px" }}
                  color={theme.palette.primary.discount}
                >
                  {product.discount ? `${product.discount.percentage}%OFF` : ""}
                </Typography>
              </>
            ) : (
              <Typography
                variant="p"
                component="p"
                sx={{
                  fontWeight: "700",
                  fontSize: "24px",
                  color: theme.palette.primary.textColor,
                }}
              >
                ${product.price}
              </Typography>
            )}
          </Box>
          {msg !== "" && (
            <Typography sx={{fontWeight:'bold'}} variant="subtitle1" color={theme.palette.primary.error}>
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
              sx={{
                fontWeight: "bold",
                paddingRight: "12px",
                color: theme.palette.primary.sectionTitle,
              }}
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
                  color: theme.palette.primary.textColor,
                }}
                type="text"
                style={{ textAlign: "center" }}
                inputProps={{ inputMode: "text", pattern: "[0-9]*" }}
                value={qty}
                startAdornment={
                  <InputAdornment
                    position="start"
                    onClick={() => HandleQtyChange(--qty)}
                    sx={{
                      cursor: "pointer",
                      color: theme.palette.primary.textColor,
                    }}
                  >
                    <RemoveIcon />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment
                    position="end"
                    sx={{
                      cursor: "pointer",
                      color: theme.palette.primary.textColor,
                    }}
                    onClick={() => HandleQtyChange(++qty)}
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
                backgroundColor: theme.palette.primary.carouselColor,
                display: "flex",
                alignItems: "center",
                borderRadius: "0px 5px 5px 0px",
                border: `2px solid ${theme.palette.primary.carouselColor}`,
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
              <FavoriteBorderIcon
                sx={{
                  paddingRight: "5px",
                  color: theme.palette.primary.carouselColor,
                }}
              />
              <Typography>Add to Wishlist</Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
