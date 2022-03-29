import Footer from "../../components/footer/footer";
import NavBar from "../../components/navbar/navbar";
import "./myaccount.scss";
import { Link } from "react-router-dom";

export const MyAccount = () => {
  let orders = 0;
  return (
    <div className="cart">
      <NavBar />

      {orders >= 1 ? (
        <>
          <h3>Order history:</h3>
        </>
      ) : (
        <>
          <h3>You have not placed any orders with us yet.</h3>
          <Link to="/categories">
            <button className="empty-cart-button">Explore catalogue</button>
          </Link>
        </>
      )}
      <Footer />
    </div>
  );
};
