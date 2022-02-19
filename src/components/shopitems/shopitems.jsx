import React, { useState } from "react";
import img from "../../files/705tee.jpg";
import img2 from "../../files/705tee2.jpg";
import img3 from "../../files/705sweater.jpg";
import img4 from "../../files/705sweater2.jpg";
import "./shopitems.scss";

import { Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import { useDispatch } from "react-redux";

export default function ShopItems() {
  const [image, setImage] = useState(img);
  const [image2, setImage2] = useState(img3);
  const [image3, setImage3] = useState(img);
  const [image4, setImage4] = useState(img3);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: "addProduct" });
  };

  return (
    <div className="container">
      <div className="shopitems">
        <div
          className="itemContainer"
          onMouseOver={() => setImage(img2)}
          onMouseOut={() => setImage(img)}
        >
          <img src={image} alt="#" className="item-image" />
          <div className="overlay">
            <Link to="/products" className="search-icon">
              <SearchIcon fontSize="large" className="icon" />
            </Link>
            <Link to="/categories" className="similar-btn">
              View Similar
            </Link>
            <ShoppingBasketIcon
              fontSize="large"
              className="icon"
              onClick={handleClick}
            />
          </div>
        </div>
        <div
          className="itemContainer"
          onMouseOver={() => setImage2(img4)}
          onMouseOut={() => setImage2(img3)}
        >
          <img src={image2} alt="#" className="item-image" />
          <div className="overlay">
            <Link to="/products" className="search-icon">
              <SearchIcon fontSize="large" className="icon" />
            </Link>
            <Link to="/categories" className="similar-btn">
              View Similar
            </Link>
            <ShoppingBasketIcon
              fontSize="large"
              className="icon"
              onClick={handleClick}
            />
          </div>
        </div>
        <div
          className="itemContainer"
          onMouseOver={() => setImage3(img2)}
          onMouseOut={() => setImage3(img)}
        >
          <img src={image3} alt="#" className="item-image" />
          <div className="overlay">
            <Link to="/products" className="search-icon">
              <SearchIcon fontSize="large" className="icon" />
            </Link>
            <Link to="/categories" className="similar-btn">
              View Similar
            </Link>
            <ShoppingBasketIcon
              fontSize="large"
              className="icon"
              onClick={handleClick}
            />
          </div>
        </div>
        <div
          className="itemContainer"
          onMouseOver={() => setImage4(img4)}
          onMouseOut={() => setImage4(img3)}
        >
          <img src={image4} alt="#" className="item-image" />
          <div className="overlay">
            <Link to="/products" className="search-icon">
              <SearchIcon fontSize="large" className="icon" />
            </Link>
            <Link to="/categories" className="similar-btn">
              View Similar
            </Link>
            <ShoppingBasketIcon
              fontSize="large"
              className="icon"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
