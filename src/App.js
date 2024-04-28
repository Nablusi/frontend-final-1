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
import UserInfo from "./pages/User-info/UserInfo";

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
        <Route path="/userInfo" element={<UserInfo />} />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={theme}>
      <SharedParentProvider>
        <RouterProvider router={router} />
      </SharedParentProvider>
      <CssBaseline />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
