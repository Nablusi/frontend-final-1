import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./pages/Home-page/Home";
import About from "./pages/About-page/About";
import theme from "./theme/Theme";
import { ThemeProvider } from "@mui/material";
import Category from "./pages/Category-page/Category";
import Product from "./pages/Product-page/Product";
import NewArrivalsFilter from "./pages/Category-page/NewArrivalsFilter";
import Sign from "./pages/Sign/Sign";
import { SharedParentProvider } from "./contexts/CategoryPageFilter";
import SearchForProducts from "./pages/Category-page/SearchForProducts";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import CartPage from "./pages/CartPage/CartPage";
import Checkout from "./pages/Checkout/Checkout ";
import UserInfo from "./pages/User-info/UserInfo";
import { AddToCartIfLoggedInProvider } from "./contexts/addToCart";

import PersonalInformation from "./pages/User-info/Personal-info/PersonalInformation";
import OrderDetailsState from "./pages/User-info/OrderDetails/OrderDetailsState";
import NotFound from "./pages/NotFound/NotFound";

import BrandsPage from "./pages/Category-page/BrandsPage";
import { MyOrders } from "./pages/User-info/MyOrders/MyOrders";
import HandPickPage from "./pages/Category-page/HnadPickPage";
import TestTabs from "./pages/TestTabs/TestTabs";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/newArrivals" element={<NewArrivalsFilter />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/sign/:signtype" element={<Sign />} />
        <Route
          path="/category/products/search"
          element={<SearchForProducts />}
        />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/userInfo" element={<UserInfo />}>
          <Route path="personalInformation" element={<PersonalInformation />} />
          <Route path="myOrders/:id" element={<OrderDetailsState />} />
          <Route path="myOrders" element={<MyOrders />} />
        </Route>

        <Route path="/NotFound" element={<NotFound />} />
        <Route path="/brands/:brandName" element={<BrandsPage />} />
        <Route path="/handpick" element={<HandPickPage />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={theme}>
      <SharedParentProvider>
        <AddToCartIfLoggedInProvider>
          <RouterProvider router={router} />
        </AddToCartIfLoggedInProvider>
      </SharedParentProvider>
      <CssBaseline />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
