import React from "react";
import {
  Tabs,
  Tab,
  Paper,
  useTheme,
  Stack,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import theme from "../../../theme/Theme";
import { Box } from "@mui/system";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
export default function OrderDetails({
  selectedTab,
  handleChange,
  active,
  flag,
}) {
  return active === flag ? (
    <Box sx={{ width: "95%" }}>
      <Paper
        sx={{
          backgroundColor: "#F1F1F1",
          padding: "16px 12px",
          boxShadow: "none",
          borderRadius: "12px",
        }}
        square
      >
        <Tabs
          value={selectedTab}
          indicatorColor="white"
          textColor={theme.palette.primary.paragraph}
          onChange={handleChange}
          aria-label="product details tabs"
          sx={{ fontWeight: "500" }}
          style={{ color: theme.palette.primary.paragraph }}
        >
          <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
            <Tab
              label="Items Ordered"
              value={0}
              selected={selectedTab === 0}
              onClick={() => handleChange(null, 0)}
              style={{
                textTransform: "capitalize",
                opacity: "1",
                borderRadius: "8px",
                color: selectedTab === 0 ? "white" : "#626262",
                backgroundColor:
                  selectedTab === 0
                    ? theme.palette.primary.carouselColor
                    : "transparent",
              }}
            />
            <Tab
              label="Invoices"
              value={1}
              selected={selectedTab === 1}
              onClick={() => handleChange(null, 1)}
              style={{
                textTransform: "capitalize",
                opacity: "1",
                borderRadius: "8px",
                color: selectedTab === 1 ? "white" : "#626262",
                backgroundColor:
                  selectedTab === 1
                    ? theme.palette.primary.carouselColor
                    : "transparent",
              }}
            />
            <Tab
              label="order shipment"
              value={2}
              selected={selectedTab === 2}
              onClick={() => handleChange(null, 2)}
              style={{
                textTransform: "capitalize",
                opacity: "1",
                borderRadius: "8px",
                color: selectedTab === 2 ? "white" : "#626262",
                backgroundColor:
                  selectedTab === 2
                    ? theme.palette.primary.carouselColor
                    : "transparent",
              }}
            />
          </Stack>
        </Tabs>
      </Paper>
      {selectedTab === 0 && (
        <Box style={{ margin: "20px 0" }}>
          {/* Tabel */}
          <Box sx={{ marginBottom: "20px" }}>
            <TableContainer
              component={Paper}
              sx={{ backgroundColor: "transparent", boxShadow: "none" }}
            >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                  <TableRow>
                    <TableCell sx={{ borderBottom: "none" }}>
                      <Box sx={{ display: "flex" }}>
                        <img
                          src={require(`../../../images/product-image.png`)}
                          style={{
                            width: "75px",
                            height: "80px",
                            borderRadius: "8px",
                          }}
                        />
                        <Box sx={{ marginLeft: "15px" }}>
                          {" "}
                          <Typography
                            sx={{
                              fontSize: "14px",
                              fontWeight: "500",
                              color: theme.palette.primary.textColor,
                            }}
                          >
                            Coach
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
                      $54
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: "none",
                        color: theme.palette.primary.textColor,
                        fontWeight: "500",
                      }}
                      align="right"
                    >
                      2
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: "none",
                        color: theme.palette.primary.textColor,
                        fontWeight: "500",
                      }}
                      align="right"
                    >
                      109$
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* Order info */}
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
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    {" "}
                    Sub Total{" "}
                  </Typography>
                  <Typography
                    variant="p"
                    component="p"
                    sx={{
                      color: theme.palette.primary.textColor,
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    {" "}
                    $119.69
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
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    {" "}
                    Discount{" "}
                  </Typography>
                  <Typography
                    variant="p"
                    component="p"
                    sx={{
                      color: theme.palette.primary.textColor,
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    {" "}
                    -$13.40
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
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    {" "}
                    Delivery Fee{" "}
                  </Typography>
                  <Typography
                    variant="p"
                    component="p"
                    sx={{
                      color: theme.palette.primary.textColor,
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    {" "}
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
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    {" "}
                    Grand Total{" "}
                  </Typography>
                  <Typography
                    variant="p"
                    component="p"
                    sx={{
                      color: theme.palette.primary.textColor,
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    {" "}
                    $106.29
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
                    fontWeight: "bold",
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
                  {" "}
                  Address Details
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    color: theme.palette.primary.textColor,
                    fontWeight: "500",
                    textTransform: "capitalize",
                  }}
                >
                  {" "}
                  Vincent Lobo
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    color: theme.palette.primary.textColor,
                    fontWeight: "500",
                    textTransform: "capitalize",
                  }}
                >
                  {" "}
                  3068 Woodlawn Drive
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    color: theme.palette.primary.textColor,
                    fontWeight: "500",
                    textTransform: "capitalize",
                  }}
                >
                  {" "}
                  Milwaukee
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    color: theme.palette.primary.textColor,
                    fontWeight: "500",
                    textTransform: "capitalize",
                  }}
                >
                  {" "}
                  414-672-5388
                </Typography>
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
                width: "fit-content",
                marginLeft: "auto",
                marginTop: "20px",
              }}
            >
              <Button
                type="primary"
                sx={{
                  backgroundColor: theme.palette.primary.darkBlueColor,
                  color: "white",
                  padding: "8px 10px",
                  fontWeight: "bold",
                  fontSize: "14px",
                  textTransform: "capitalize",
                  borderRadius: "8px",
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
        </Box>
      )}
      {selectedTab === 1 && (
        <div style={{ marginTop: "20px" }}>
          <p>Related Products Content</p>
        </div>
      )}
      {selectedTab === 2 && (
        <div style={{ marginTop: "20px" }}>{"reviews"}</div>
      )}
    </Box>
  ) : (
    <></>
  );
}
