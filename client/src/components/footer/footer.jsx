import "./footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="top">
        <div className="desc">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
            veritatis officia illum quos aliquam voluptatem iusto est tempora
            eveniet! Pariatur corrupti quo suscipit cumque accusantium!
          </p>
        </div>
        <div className="links">
          <div className="help">
            <h3>Help</h3>
            <ul>
              <Link to="/delivery-information">
                <li className="footer-link">Delivery Information</li>
              </Link>
              <Link to="/faqs">
                <li className="footer-link">FAQ</li>
              </Link>
              <Link to="/returns-policy">
                <li className="footer-link">Returns Policy</li>
              </Link>
              <Link to="/">
                <li className="footer-link">About Us</li>
              </Link>
            </ul>
          </div>
          <div className="pages">
            <h3>Pages</h3>
            <ul>
              <Link to="/categories">
                <li className="footer-link">Shop collections</li>
              </Link>
              <Link to="/">
                <li className="footer-link">My Account</li>
              </Link>
              <Link to="/">
                <li className="footer-link">Wishlist</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="follow">
          <h3>Follow Us</h3>
          <a href="https://www.instagram.com">Instagram</a>
          <a href="https://www.facebook.com">Facebook</a>
          <a href="https://www.twitter.com">Twitter</a>
        </div>
      </div>
      <div className="bottom">
        <p className="copyright">
          © 2021 | App designed by Benjamin Norval | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
