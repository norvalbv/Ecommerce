import "./homepage.scss";
import NavBar from "../../components/navbar/navbar";
import Intro from "../../components/intro/intro";
import Newsletter from "../../components/newsletter/newsletter";
import Footer from "../../components/footer/footer";
import Announcement from "../../components/announcement/announcement";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../features/cartSlice";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

export default function HomePage({ info }) {
  const [hover, setHover] = useState([]);

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

  return (
    <>
      <Announcement />
      <NavBar />
      <Intro />
      <h2 id="latest-products">Shop Our Latest Products</h2>
      <div className="shopitems">
        {info
          .slice(2, 6)
          .map(
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
      <div className="hp-categories">
        <div className="left">
          <h2>View T-Shirts</h2>
          <Link className="view-more" to="/categories/tshirts/products">
            View More
          </Link>
        </div>
        <div className="right">
          <h2>View Hoodies</h2>
          <Link className="view-more" to="/categories/hoodies/products">
            View More
          </Link>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}
