import { useState, useEffect } from "react";
import "./itemdisplay.scss";
import { Link, useLocation } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useDispatch } from "react-redux";

export default function ItemDisplay({ color, size }) {
  const [hover, setHover] = useState([]);
  const [products, setProducts] = useState([]);

  const location = useLocation();
  const category = location.pathname.split("/")[2];

  const getProductData = async (req, res) => {
    try {
      if (category !== undefined && category !== "all") {
        const data = await fetch(`http://localhost:5000/getdata/${category}`);
        const response = await data.json();
        setProducts(response);
      } else {
        const data = await fetch(`http://localhost:5000/getdata`);
        const response = await data.json();
        setProducts(response);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    getProductData();
  }, []);

  const handleMouseEvent = (i) => {
    console.log(hover);
    let newhover = [...hover];
    newhover[i] = hover[i] ? false : true;
    console.log(newhover);
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
          ({ id, price, product, image_alt, image, image_2, handle }, i) => (
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
                <Link
                  to={`/product/${category}/${handle}`}
                  className="search-icon"
                >
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
