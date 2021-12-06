import React from 'react';
import {BrowserRouter as Routers, Routes, Route} from 'react-router-dom';
import HomePage from './guest/homepage';
import ShopPage from './guest/shoppage';

function App() {
  return (
    <Routers>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/shoppage" element={<ShopPage />}></Route>
      </Routes>
    </Routers>
  );
}

export default App;