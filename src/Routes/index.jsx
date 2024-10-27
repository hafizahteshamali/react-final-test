import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Products/Product";
import ProductDetails from "../Pages/Products/ProductDetails";

export const RoutesData = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product",
    element: <Product />
  },
  {
    path: "/product/:id",
    element: <ProductDetails/>
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: "Error",
  }
];
