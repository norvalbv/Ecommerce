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
          <h2>View products</h2>
          <Link className="view-more" to="/productpage">
            View More
          </Link>
        </div>
        <div className="right">
          <h2>View products</h2>
          <Link className="view-more" to="/productpage">
            View More
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
