import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";
import "./categories.scss";

export default function Categories() {
  return (
    <div className="categories">
      <NavBar />
      <h2>Categories</h2>
      <div className="categories-inner-container">
        <div className="left">
          <h2>View T-Shirts</h2>
          <Link className="view-more" to="/products/tshirts">
            View More
          </Link>
        </div>
        <div className="right">
          <h2>View Hoodies</h2>
          <Link className="view-more" to="/products/hoodies">
            View More
          </Link>
        </div>
      </div>
      <div className="all-items">
        <h2>View All Items</h2>
        <Link className="view-more" to="/products/all">
          View More
        </Link>
      </div>
      <Footer />
    </div>
  );
}
