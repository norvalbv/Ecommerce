import "./products.scss";
import NavBar from "../navbar/navbar";
import { useDispatch } from "react-redux";
import ItemAccordion from "../accordion";
import BreadcrumbsComponent from "../breadcrumbs";
import { useState } from "react";
import imgg from "../../files/705tee.jpg";
import Footer from "../footer/footer";

export default function Products({ info }) {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: "addProduct" });
  };

  console.log(info);

  return (
    <div className="products">
      <NavBar />
      <BreadcrumbsComponent />
      {/* {info.map((item) => (
        <div className="product-container">
          <h2>{item.name}</h2>
          <img
            src={item.imageURL}
            alt={[item.name, "display image"].join(" ")}
          />
          <p id="price">{item.price.current.text}</p>
          <div id="product-desc">
            <h2>Product Description</h2>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}; */}

      <div className="product-container">
        <img src={imgg} alt="d" className="product-image" />
        <div className="product">
          <h2 className="product-title">Sweater</h2>
          <p id="price">£25</p>
          <div className="product-info-section">
            <h3 className="product-desc-title">Product Description</h3>
            <p className="product-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
              corporis eius, sit voluptatem quis a saepe aperiam minus optio
              nisi quod perferendis cum voluptates sed!
            </p>
            <p style={{ fontSize: "0.75rem" }}>Size:</p>
            <select name="size" className="cart-buttons">
              <option value="size">S</option>
              <option value="size">M</option>
              <option value="size">L</option>
              <option value="size">XL</option>
            </select>
            <button onClick={handleClick} className="cart-buttons">
              add to cart
            </button>
          </div>
        </div>
      </div>
      <div style={{width: '75%', margin: '0 auto 3rem'}}>
        <ItemAccordion />
      </div>
      <Footer />
    </div>
  );
}
