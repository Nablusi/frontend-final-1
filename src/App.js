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
// import SignUp from "./pages/Sign/SignUP/SignUp";
// import SignInSide from "./pages/Sign/SignIn/SignIn";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/newArrivals" element={<NewArrivalsFilter />} />
        <Route path="/category/products/:id" element={<Product />} />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <CssBaseline />

      {/* <SignUp /> */}
      {/* <SignInSide /> */}
    </ThemeProvider>
  );
}

export default App;
