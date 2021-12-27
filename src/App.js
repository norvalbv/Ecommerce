import React from 'react';
import {BrowserRouter as Routers, Routes, Route} from 'react-router-dom';
import HomePage from './guest/homepage';
import Login from './guest/login';
import ProductPage from './guest/productpage';
import Register from './guest/register';
import Categories from './guest/categories';

function App() {
  return (
    <Routers>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/productpage" element={<ProductPage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Routers>
  );
}

export default App;