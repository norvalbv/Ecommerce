import { useSelector } from "react-redux";
import Footer from "../../components/footer/footer";
import NavBar from "../../components/navbar/navbar";
import "./cart.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Loading } from "../../components/loading";
import { removeProduct } from "../../features/cartSlice";

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();

  if (!cart) {
    return <Loading />;
  }

  return (
    <div className="cart">
      <NavBar />

      {cart.quantity >= 1 ? (
        <>
          <h2>Your Cart</h2>
          {cart.products.map(
            ({ product, size, price, image, image_alt }, i) => (
              <div className="cart-product-container" key={i}>
                <img
                  className="cart-product-image"
                  src={image}
                  alt={image_alt}
                  style={{ width: "3rem" }}
                />
                <h3 className="cart=product-title">{product}</h3>
                <div className="product-more-data">
                  <p>Size: {size}</p>
                  <p>Price: {price}</p>
                  <button
                    onClick={() =>
                      dispatch(
                        removeProduct({
                          product,
                          price,
                        })
                      )
                    }
                    className="remove-product"
                  >
                    remove from basket
                  </button>
                </div>
              </div>
            )
          )}
          <div className="cart-info">
            <h3>{cart.quantity} items in your cart</h3>
            <h3>Your Total: £{cart.totalPrice}</h3>
          </div>
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
