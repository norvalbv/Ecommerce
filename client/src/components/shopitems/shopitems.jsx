import { useState, useEffect } from "react";
import "./shopitems.scss";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import { useDispatch } from "react-redux";

export default function ShopItems({ color, size }) {
  const [hover, setHover] = useState([]);
  const [products, setProducts] = useState([]);

  const getProductData = async (req, res) => {
    try {
      const data = await fetch(`http://localhost:5000/getdata/${size}`);
      console.log(data);
      const response = await data.json();
      setProducts(response);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getProductData();
    console.log(size);
  }, [size]);

  // useEffect(() => {
  //   if (!color) {
  //     return;
  //   } else {
  //     (async (req, res) => {
  //       console.log(color);
  //       try {
  //         const data = await fetch(`http://localhost:5000/getdata/black`);
  //         const response = await data.json();
  //         setProducts(response);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     })();
  //   }
  // }, [color]);
  const handleMouseEvent = (i) => {
    let newhover = [...hover];
    newhover[i] = hover[i] ? false : true;
    setHover(newhover);
  };

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: "addProduct" });
  };

  return (
    <>
      <div className="shopitems">
        {products.map(
          ({ id, price, product, image_alt, image, image_2 }, i) => (
            <div
              key={id}
              onMouseOver={() => handleMouseEvent(i)}
              onMouseOut={() => handleMouseEvent(i)}
              className="item-container"
            >
              <img
                src={hover[i] ? image_2 : image}
                alt={image_alt}
                className="item-image"
              ></img>
              <div className="overlay">
                <Link to="/products" className="search-icon">
                  <SearchIcon fontSize="large" className="icon" />
                </Link>
                <ShoppingBasketIcon
                  fontSize="large"
                  className="icon"
                  onClick={handleClick}
                />
              </div>
              <p className="product-description">{product}</p>
              <p>£{price}</p>
            </div>
          )
        )}
      </div>
    </>
  );
}
