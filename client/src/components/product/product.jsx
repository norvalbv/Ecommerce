import "./product.scss";
import NavBar from "../navbar/navbar";
import { useDispatch } from "react-redux";
import ItemAccordion from "../accordion";
import BreadcrumbsComponent from "../breadcrumbs";
import Footer from "../footer/footer";
import { Loading } from "../loading";
import { addProduct } from "../../features/cartSlice";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import parse from "html-react-parser";

export default function Product() {
  const location = useLocation();
  const locationHandle = location.pathname.split("/")[3];

  const [product, setProduct] = useState([]);

  const getProduct = async (req, res) => {
    try {
      const response = await fetch(
        `http://localhost:5000/product/${locationHandle}`
      );
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  // handles cart dispatch
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

  const [size, setSize] = useState("small");

  if (!product) {
    return <Loading />;
  }

  return (
    <div className="products">
      <NavBar />
      <BreadcrumbsComponent />
      {product.map(
        (
          { image, image_alt, image_2, image_3, price, product, description },
          i
        ) => (
          <div className="product-container" key={i}>
            <div className="product-images">
              <img
                src={image}
                alt={[image_alt, "display image"].join(" ")}
                className="product-image"
              />
              {image_2 && (
                <img
                  src={image_2}
                  alt={[image_alt, "display image"].join(" ")}
                  className="product-image"
                />
              )}
              {image_3 && (
                <img
                  src={image_3}
                  alt={[image_alt, "display image"].join(" ")}
                  className="product-image"
                />
              )}
            </div>
            <div className="product">
              <h2 className="product-title">{product}</h2>
              <p id="price">Price: £{price}</p>
              <div className="product-info-section">
                <p style={{ fontSize: "0.75rem" }}>Size:</p>
                <select
                  name="size"
                  className="cart-buttons"
                  onChange={(e) => setSize(e.target.value)}
                >
                  <option value="small">small</option>
                  <option value="medium">medium</option>
                  <option value="large">large</option>
                  <option value="extralarge">extralarge</option>
                </select>
                <button
                  onClick={() =>
                    handleClick(price, product, size, image, image_alt)
                  }
                  className="cart-buttons"
                >
                  add to cart
                </button>
              </div>
              <div className="product-desc">{parse(description)}</div>
            </div>
          </div>
        )
      )}
      <div
        style={{ width: "75%", margin: "0 auto 3rem" }}
        className="accordion"
      >
        <ItemAccordion />
      </div>
      <Footer />
    </div>
  );
}
