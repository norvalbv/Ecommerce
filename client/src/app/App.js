import { useEffect, useState } from "react";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import HomePage from "../guest/homepage";
import Login from "../guest/login/login";
import ProductPage from "../guest/productpage/productpage";
import Register from "../guest/register/register";
import Categories from "../guest/categories/categories";
import Products from "../components/products/products";
import { Cart } from "../guest/cart/cart";

function App() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetch(
          "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US",
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "asos2.p.rapidapi.com",
              "x-rapidapi-key":
                "dffcc5f24emsh89532c7a5575c02p168eddjsn47c9716293e9",
            },
          }
        );
        const response = await data.json();
        setInfo(response.products);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <Routers>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route
          path="/productpage"
          element={<ProductPage info={info} />}
        ></Route>
        <Route path="products" element={<Products info={info} />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </Routers>
  );
}

export default App;
