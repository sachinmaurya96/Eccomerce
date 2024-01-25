import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import Home from "./pages/HomePage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import AddToCartPage from "./pages/AddToCartPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import SingleBlogPage from "./pages/SingleBlogPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import SingleProductPage from "./pages/SingleProductPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import MyAccountPage from "./pages/MyAccountPage.jsx";
import WishListPage from "./pages/WishListPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import Protected from "./component/Protected.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage/>,
   children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Protected authentication><AddToCartPage/></Protected>,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/blog/:id",
        element: <SingleBlogPage />,
      },
      {
        path: "/products",
        element: <ProductPage />,
      },
      {
        path: "/products/:id",
        element: <SingleProductPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/login",
        element: <Protected authentication={false}><LoginPage /></Protected>,
      },
      {
        path: "/signup",
        element: <Protected authentication={false}><SignupPage /></Protected>,
      },
      {
        path: "/profile",
        element:<Protected authentication> <MyAccountPage /></Protected>,
      },
      {
        path: "/wishlist",
        element: <Protected authentication><WishListPage /></Protected>,
      },
      {
        path: "/checkout",
        element: <Protected authentication><CheckoutPage /></Protected>,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router}/>);