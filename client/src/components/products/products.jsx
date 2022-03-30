import "./products.scss";
import NavBar from "../navbar/navbar";
import { useDispatch } from "react-redux";
import ItemAccordion from "../accordion";
import BreadcrumbsComponent from "../breadcrumbs";
import { useEffect, useState } from "react";
import imgg from "../../files/705tee.jpg";
import Footer from "../footer/footer";
import { Loading } from "../loading";
import { addProduct } from "../../features/cartSlice";

export default function Products({ info }) {
  const dispatch = useDispatch();

  const handleClick = (price, product, size) => {
    dispatch(addProduct({ price: price, product: product, size: size }));
  };

  if (!info) {
    return <Loading />;
  }

  return (
    <div className="products">
      <NavBar />
      <BreadcrumbsComponent />
      {info.map(({ id, name, imageURL, price }) => (
        <div className="product-container" key={id}>
          <img
            src={imageURL}
            alt={[name, "display image"].join(" ")}
            className="product-image"
          />
          <div className="product">
            <h2 className="product-title">{name}</h2>
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
              <button
                onClick={() => handleClick(price.current.value, name, 'small')}
                className="cart-buttons"
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
      <div style={{ width: "75%", margin: "0 auto 3rem" }}>
        <ItemAccordion />
      </div>
      <Footer />
    </div>
  );
}
