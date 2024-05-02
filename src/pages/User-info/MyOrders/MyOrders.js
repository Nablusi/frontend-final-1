import {
  Tabs,
  Tab,
  Paper,
  useTheme,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
} from "@mui/material";
import * as Orderstyles from "./MyOrdersStyles.js";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export function MyOrders({ selectedTab, handleChange, filteredOrders }) {
  const theme = useTheme();
  console.log("status is ", filteredOrders.status);

  return (
    <div style={{ width: "100%", margin: "0px 20px 269px 24px" }}>
      <Paper
        sx={{
          backgroundColor: "#F1F1F1",
          borderRadius: "12px",
          boxShadow: "none",
          padding: "20px",
        }}
        square
      >
        <Tabs
          value={selectedTab}
          indicatorColor="white"
          textColor={theme.palette.primary.textWhiteColor}
          onChange={handleChange}
          aria-label="my orders tabs"
          sx={{ fontWeight: "500" }}
        >
          <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
            <Tab
              label="Completed"
              value={0}
              selected={selectedTab === 0}
              onClick={() => handleChange(null, 0)}
              sx={selectedTab === 0 ? Orderstyles.selectedTab(theme) : ""}
            />
            <Tab
              label="Processing"
              value={1}
              selected={selectedTab === 1}
              onClick={() => handleChange(null, 1)}
              sx={selectedTab === 1 ? Orderstyles.selectedTab(theme) : ""}
            />
            <Tab
              label="Cancelled"
              value={2}
              selected={selectedTab === 2}
              onClick={() => handleChange(null, 2)}
              sx={selectedTab === 2 ? Orderstyles.selectedTab(theme) : ""}
            />
          </Stack>
        </Tabs>
      </Paper>
      {selectedTab === 0 && (
        <TableContainer component={Paper}>
          <Table sx={{ border: "none" }}>
            <TableHead>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow
                  sx={{
                    backgroundColor: "#F1F1F1",
                    marginTop: "17px",
                    textDecoration: "none",
                  }}
                  key={order.id}
                  component={Link}
                  to={`/order/${order.id}`}
                >
                  <TableCell>
                    <Checkbox />
                    {order.id}
                  </TableCell>
                  <TableCell>{order.createdAt}</TableCell>
                  <TableCell>{order.total}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell align="right">
                    <ChevronRightIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {selectedTab === 1 && (
        <TableContainer component={Paper}>
          <Table sx={{ border: "none" }}>
            <TableHead>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow
                  sx={{
                    backgroundColor: "#F1F1F1",
                    marginTop: "17px !important",
                    textDecoration: "none",
                  }}
                  key={order.id}
                  component={Link}
                  to={`/order/${order.id}`}
                >
                  {console.log(selectedTab)}
                  <TableCell>
                    <Checkbox />
                    {order.id}
                  </TableCell>
                  <TableCell>{order.createdAt}</TableCell>
                  <TableCell>{order.total}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell align="right">
                    <ChevronRightIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {selectedTab === 2 && (
        <TableContainer component={Paper}>
          <Table sx={{ border: "none" }}>
            <TableHead>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow
                  sx={{
                    backgroundColor: "#F1F1F1",
                    marginTop: "17px",
                    textDecoration: "none",
                  }}
                  key={order.id}
                  component={Link}
                  to={`/order/${order.id}`}
                >
                  <TableCell>
                    <Checkbox />
                    {order.id}
                  </TableCell>
                  <TableCell>{order.createdAt}</TableCell>
                  <TableCell>{order.total}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell align="right">
                    <ChevronRightIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
