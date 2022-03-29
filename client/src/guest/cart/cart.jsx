import { useSelector } from "react-redux";
import Footer from "../../components/footer/footer";
import NavBar from "../../components/navbar/navbar";
import "./cart.scss";
import { Link } from "react-router-dom";
import imgg from "../../files/705tee.jpg";
import { useDispatch } from "react-redux";
import { Loading } from "../../components/loading";

export const Cart = () => {
  const cart = useSelector((state) => state.cart);

  // console.log(cart.products[0].item1.desc);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: "removeProduct", payload: "" });
  };

  if (!cart) {
    return <Loading />;
  }

  return (
    <div className="cart">
      <NavBar />

      {cart.quantity >= 1 ? (
        <>
          <h2>Your Cart</h2>
          {cart.products.map((product, { name }) => (
            <div
              className="cart-product-container"
              key={cart.products.indexOf(product)}
            >
              <img
                className="cart-product-image"
                src={imgg}
                alt="#"
                style={{ width: "3rem" }}
              />
              <h3 className="cart=product-title">{name}</h3>
              <div className="product-more-data">
                <p>Size: S</p>
                <button onClick={handleClick} className="remove-product">
                  remove from basket
                </button>
              </div>
            </div>
          ))}
          {/* <CartInfo /> */}
        </>
      ) : (
        <div className="empty-cart">
          <div className="empty-cart-inner-container">
            <h2 className="empty-cart-title">
              Uh oh! There is nothing in your cart!
            </h2>
            <Link to="/categories">
              <button className="empty-cart-button">Explore categories</button>
            </Link>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};
