import React from "react";
import { useState } from "react";
import { Paper, Stack, Typography, Grid, Button } from "@mui/material";
import theme from "../../../theme/Theme";
import { Box, border } from "@mui/system";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useOutletContext } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Import the default stylesheet
export default function OrderDetails({ singleOrderInfo }) {
  const { userData } = useOutletContext();
  let totalPrice = 0;
  singleOrderInfo.items.map((item) => {
    let totalItem = parseFloat(item.product.price) * item.product.qty;
    totalPrice += totalItem;
  });
  const [selectedIndex, setSelectedIndex] = useState(0); // For controlled mode

  const handleTabSelect = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Tabs
      selectedIndex={selectedIndex}
      onSelect={handleTabSelect}
      style={{ width: "90%" }}
    >
      <TabList style={{ border: "none" }}>
        <Tab
          style={{
            border: "none",
            borderRadius: "8px",
            fontWeight: "500",
            backgroundColor:
              selectedIndex === 0
                ? theme.palette.primary.darkBlueColor
                : "transparent",
            color:
              selectedIndex === 0 ? "white" : theme.palette.primary.paragraph,
              padding:'12px 18px'
          }}
        >
          Items Ordered
        </Tab>
        <Tab
          style={{
            border: "none",
            borderRadius: "8px",
            fontWeight: "500",
            backgroundColor:
              selectedIndex === 1
                ? theme.palette.primary.darkBlueColor
                : "transparent",
            color:
              selectedIndex === 1 ? "white" : theme.palette.primary.paragraph,
              padding:'12px 18px'
          }}
        >
          Invoices
        </Tab>
        <Tab
          style={{
            border: "none",
            borderRadius: "8px",
            fontWeight: "500",
            backgroundColor:
              selectedIndex === 2
                ? theme.palette.primary.darkBlueColor
                : "transparent",
            color:
              selectedIndex === 2 ? "white" : theme.palette.primary.paragraph,
          }}
        >
          Order Shipment
        </Tab>
      </TabList>

      <TabPanel>
        <>
          <Box style={{ margin: "20px 0" }}>
            {/* Tabel */}
            <Box sx={{ marginBottom: "20px" }}>
              <TableContainer
                component={Paper}
                sx={{ backgroundColor: "transparent", boxShadow: "none" }}
              >
                <Table sx={{ minWidth: "650px" }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{
                          color: theme.palette.primary.paragraph,
                          fontWeight: "500",
                          lineHeight: "20px",
                          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                        }}
                        align="left"
                      >
                        Product Name
                      </TableCell>
                      <TableCell
                        sx={{
                          color: theme.palette.primary.paragraph,
                          fontWeight: "500",
                          lineHeight: "20px",
                          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                        }}
                        align="right"
                      >
                        Price
                      </TableCell>
                      <TableCell
                        sx={{
                          color: theme.palette.primary.paragraph,
                          fontWeight: "500",
                          lineHeight: "20px",
                          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                        }}
                        align="right"
                      >
                        Qty
                      </TableCell>
                      <TableCell
                        sx={{
                          color: theme.palette.primary.paragraph,
                          fontWeight: "500",
                          lineHeight: "20px",
                          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                        }}
                        align="right"
                      >
                        Subtotal
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {singleOrderInfo.items.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell sx={{ borderBottom: "none" }}>
                          <Box sx={{ display: "flex" }}>
                            <img
                              alt="product.png"
                              src={require(`../../../images/product-image.png`)}
                              style={{
                                width: "75px",
                                height: "80px",
                                borderRadius: "8px",
                              }}
                            />
                            <Box sx={{ marginLeft: "15px" }}>
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  color: theme.palette.primary.textColor,
                                }}
                              >
                                {item.product.name}
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  color: theme.palette.primary.paragraph,
                                }}
                              >
                                Leather Coach Bag
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell
                          sx={{
                            borderBottom: "none",
                            color: theme.palette.primary.textColor,
                            fontWeight: "500",
                          }}
                          align="right"
                        >
                          ${item.product.price}
                        </TableCell>
                        <TableCell
                          sx={{
                            borderBottom: "none",
                            color: theme.palette.primary.textColor,
                            fontWeight: "500",
                          }}
                          align="right"
                        >
                          {item.product.qty}
                        </TableCell>
                        <TableCell
                          sx={{
                            borderBottom: "none",
                            color: theme.palette.primary.textColor,
                            fontWeight: "500",
                          }}
                          align="right"
                        >
                          ${parseFloat(item.product.price) * item.product.qty}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "600",
                color: theme.palette.primary.sectionTitle,
                borderBottom: `1px solid rgba(0, 0, 0, 0.12)`,
                paddingBottom: "15px",
                marginBottom: "15px",
              }}
            >
              Order Information
            </Typography>
            <Grid container>
              <Grid item xs={4}>
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    color: theme.palette.primary.paragraph,
                    fontWeight: "500",
                    textTransform: "capitalize",
                  }}
                >
                  order details
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "centet",
                    width: "50%",
                  }}
                >
                  <Typography
                    variant="p"
                    component="p"
                    sx={{
                      color: theme.palette.primary.textColor,
                      fontWeight: "500",
                      fontSize: "14px",
                    }}
                  >
                    Sub Total
                  </Typography>
                  <Typography
                    variant="p"
                    component="p"
                    sx={{
                      color: theme.palette.primary.textColor,
                      fontWeight: "500",
                      fontSize: "14px",
                    }}
                  >
                    ${totalPrice}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "centet",
                    width: "50%",
                  }}
                >
                  <Typography
                    variant="p"
                    component="p"
                    sx={{
                      color: theme.palette.primary.textColor,
                      fontWeight: "500",
                      fontSize: "14px",
                    }}
                  >
                    Discount
                  </Typography>
                  <Typography
                    variant="p"
                    component="p"
                    sx={{
                      color: theme.palette.primary.textColor,
                      fontWeight: "500",
                      fontSize: "14px",
                    }}
                  >
                    $0
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "centet",
                    width: "50%",
                  }}
                >
                  <Typography
                    variant="p"
                    component="p"
                    sx={{
                      color: theme.palette.primary.textColor,
                      fontWeight: "500",
                      fontSize: "14px",
                    }}
                  >
                    Delivery Fee
                  </Typography>
                  <Typography
                    variant="p"
                    component="p"
                    sx={{
                      color: theme.palette.primary.textColor,
                      fontWeight: "500",
                      fontSize: "14px",
                    }}
                  >
                    $12.00
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "centet",
                    width: "50%",
                  }}
                >
                  <Typography
                    variant="p"
                    component="p"
                    sx={{
                      color: theme.palette.primary.textColor,
                      fontWeight: "500",
                      fontSize: "14px",
                    }}
                  >
                    Grand Total
                  </Typography>
                  <Typography
                    variant="p"
                    component="p"
                    sx={{
                      color: theme.palette.primary.textColor,
                      fontWeight: "500",
                      fontSize: "14px",
                    }}
                  >
                    ${parseFloat(totalPrice) + 12}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    color: theme.palette.primary.paragraph,
                    fontWeight: "500",
                    textTransform: "capitalize",
                  }}
                >
                  Payment Details
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    color: theme.palette.primary.textColor,
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Cash on Delivery
                </Typography>
              </Grid>
              <Grid item xs={4} sx={{ position: "relative" }}>
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    color: theme.palette.primary.paragraph,
                    fontWeight: "500",
                    textTransform: "capitalize",
                  }}
                >
                  Address Details
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    color: theme.palette.primary.textColor,
                    fontWeight: "500",
                    textTransform: "capitalize",
                    fontSize: "14px",
                  }}
                >
                  {userData && userData.location ? userData.location : ""}
                </Typography>
                {/* <Typography
                  variant="p"
                  component="p"
                  sx={{
                    color: theme.palette.primary.textColor,
                    fontWeight: "500",
                    textTransform: "capitalize",
                    fontSize: "14px",
                  }}
                >

                  3068 Woodlawn Drive
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    color: theme.palette.primary.textColor,
                    fontWeight: "500",
                    textTransform: "capitalize",
                    fontSize: "14px",
                  }}
                >

                  Milwaukee
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    color: theme.palette.primary.textColor,
                    fontWeight: "500",
                    textTransform: "capitalize",
                    fontSize: "14px",
                  }}
                >

                  414-672-5388
                </Typography> */}
                <Button
                  sx={{
                    position: "absolute",
                    top: "20px",
                    right: "0",
                    backgroundColor: theme.palette.primary.inputBackground,
                    color: "#000",
                    textTransform: "capitalize",
                  }}
                >
                  Home
                </Button>
              </Grid>
            </Grid>
            <Box
              sx={{
                width: "296px",
                height: "44px",
                marginLeft: "auto",
                marginTop: "20px",
              }}
            >
              <Button
                type="primary"
                sx={{
                  backgroundColor: theme.palette.primary.darkBlueColor,
                  color: "white",
                  padding: "8px 20px",
                  fontWeight: "bold",
                  fontSize: "14px",
                  textTransform: "capitalize",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.carouselColor,
                  },
                }}
              >
                reorder
              </Button>
              <Button
                sx={{
                  backgroundColor: "transparent",
                  marginLeft: "20px",
                  color: theme.palette.primary.carouselColor,
                  border: `2px solid ${theme.palette.primary.carouselColor}`,
                }}
              >
                add rating
              </Button>
            </Box>
          </Box>
        </>
      </TabPanel>
      <TabPanel>
        <p style={{paddingTop:'20px'}}> content 2</p>
      </TabPanel>
      <TabPanel>
        <p style={{paddingTop:'20px'}}>Any 3</p>
      </TabPanel>
    </Tabs>
  );
}
