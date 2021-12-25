import React from 'react';
import {BrowserRouter as Routers, Routes, Route} from 'react-router-dom';
import HomePage from './guest/homepage';
import ProductPage from './guest/productpage';
import ShopPage from './guest/shoppage';

function App() {
  return (
    <Routers>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/shoppage" element={<ShopPage />}></Route>
        <Route path="/productpage" element={<ProductPage />}></Route>
      </Routes>
    </Routers>
  );
}

export default App;