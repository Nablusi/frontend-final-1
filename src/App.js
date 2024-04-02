import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import CssBaseline from '@mui/material/CssBaseline';
import Home from "./pages/Home-page/Home";
import About from "./pages/About-page/About";


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      
    </Route>
  ));


  return (
    <>
      <RouterProvider router={router} />
      <CssBaseline />
    </>
    
  );
}

export default App;
