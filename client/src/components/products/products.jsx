import "./products.scss";
import NavBar from "../navbar/navbar";
import { useDispatch } from "react-redux";
import ItemAccordion from "../accordion";
import BreadcrumbsComponent from "../breadcrumbs";
import Footer from "../footer/footer";
import { Loading } from "../loading";
import { addProduct } from "../../features/cartSlice";

export default function Products({ info }) {
  const dispatch = useDispatch();

  const handleClick = (price, product, size) => {
    dispatch(addProduct({ price: price, product: product, size: size }));
  };

  const { price, product, image_alt, image, image_2, image_3 } = info;

  if (!info) {
    return <Loading />;
  }

  return (
    <div className="products">
      <NavBar />
      <BreadcrumbsComponent />
      <div className="product-container">
        <img
          src={image}
          alt={[image_alt, "display image"].join(" ")}
          className="product-image"
        />
        <img
          src={image_2}
          alt={[image_alt, "display image"].join(" ")}
          className="product-image"
        />
        <img
          src={image_3}
          alt={[image_alt, "display image"].join(" ")}
          className="product-image"
        />
        <div className="product">
          <h2 className="product-title">{product}</h2>
          <p id="price">£{price}</p>
          <div className="product-info-section">
            <h3 className="product-desc-title">Product Description</h3>
            <p className="product-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
              accusamus doloribus dolore accusantium, consequatur amet nam
              architecto? Omnis, reiciendis nostrum.
            </p>
            <p style={{ fontSize: "0.75rem" }}>Size:</p>
            <select name="size" className="cart-buttons">
              <option value="small">small</option>
              <option value="medium">medium</option>
              <option value="large">large</option>
              <option value="extralarge">extralarge</option>
            </select>
            <button
              onClick={() => handleClick(price.current.value, product, "small")}
              className="cart-buttons"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
      )
      <div style={{ width: "75%", margin: "0 auto 3rem" }}>
        <ItemAccordion />
      </div>
      <Footer />
    </div>
  );
}
