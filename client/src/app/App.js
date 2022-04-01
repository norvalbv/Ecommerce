import { useEffect, useState } from "react";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import HomePage from "../guest/homepage/homepage";
import Login from "../guest/login/login";
import ProductPage from "../guest/productpage/productpage";
import Register from "../guest/register/register";
import Categories from "../guest/categories/categories";
import Products from "../components/products/products";
import { Cart } from "../guest/cart/cart";
import { MyAccount } from "../guest/myaccount/myaccount";
import FAQ from "../guest/faq/faq";
import { Returnspolicy } from "../guest/returnspolicy";

function App() {
  const [info, setInfo] = useState([]);

  const fetchData = async (req, res) => {
    try {
      const data = await fetch("http://localhost:5000/getdata");
      const response = await data.json();
      setInfo(response);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Routers>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        {/* product related */}
        <Route path="/categories" element={<Categories />}></Route>
        <Route
          path="/products/:category"
          element={<ProductPage info={info} />}
        ></Route>
        <Route
          path="/product/:category/:id"
          element={<Products info={info} />}
        ></Route>
        <Route path="/cart" element={<Cart info={info} />}></Route>
        {/* misc */}
        <Route path="/faqs" element={<FAQ />}></Route>
        <Route path="/returns-policy" element={<Returnspolicy />}></Route>
        {/* user info */}
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/my-account" element={<MyAccount />}></Route>
      </Routes>
    </Routers>
  );
}

export default App;
