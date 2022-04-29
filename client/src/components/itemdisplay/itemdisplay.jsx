import { useState, useEffect } from "react";
import "./itemdisplay.scss";
import { Link, useLocation } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useDispatch } from "react-redux";
import { addProduct } from "../../features/cartSlice";

export default function ItemDisplay({ filters, sort }) {
  const [hover, setHover] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const location = useLocation();
  const category = location.pathname.split("/")[2];

  const getProductData = async (req, res) => {
    try {
      const data = await fetch(
        category !== undefined && category !== "all"
          ? `http://localhost:5000/getdata/${category}`
          : `http://localhost:5000/getdata`
      );
      const response = await data.json();
      console.log(response);
      console.log(typeof response);

      setProducts(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  console.log(typeof filteredProducts);
  const handleMouseEvent = (i) => {
    let newhover = [...hover];
    newhover[i] = hover[i] ? false : true;
    setHover(newhover);
  };

  const dispatch = useDispatch();
  const handleClick = (price, product, size, image, image_alt) => {
    dispatch(
      addProduct({
        price,
        product,
        size,
        image,
        image_alt,
      })
    );
  };

  useEffect(() => {
    const i = products.filter((item) =>
      Object.entries(filters).every(([key, value]) => item[key].includes(value))
    );
    setFilteredProducts(i);
  }, [filters]);

  useEffect(() => {
    if (sort === "New In") {
      setProducts(products.sort((a, b) => a.id - b.id));
    } else if (sort === "New In") {
      setProducts(products.sort((a, b) => b.price + a.price));
    } else {
      setProducts(products.sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <>
      <div className="shopitems">
        {filteredProducts.length !== 0
          ? filteredProducts.map(
              (
                { price, product, image_alt, image, image_2, handle, category },
                i
              ) => (
                <div
                  key={i}
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
                      onClick={() => {
                        handleClick(price, product, "medium", image, image_alt);
                      }}
                    />
                  </div>
                  <p className="product-description">{product}</p>
                  <p>£{price}</p>
                </div>
              )
            )
          : products.map(
              (
                { price, product, image_alt, image, image_2, handle, category },
                i
              ) => (
                <div
                  key={i}
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
                      onClick={() => {
                        handleClick(price, product, "medium", image, image_alt);
                      }}
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
