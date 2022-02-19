import "./hp-categories.scss";
import { Link } from "react-router-dom";

export default function HPCategories() {
  return (
    <div className="hp-categories">
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
  );
}
