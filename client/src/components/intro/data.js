import slide1img from "../../files/slide-1.jpg";
import slide2img from "../../files/slide-2.jpg";
import slide3img from "../../files/slide-3.jpg";

import landscapeslide1 from "../../files/landscape-slide-1.jpg";
import landscapeslide2 from "../../files/landscape-slide-3.jpg";
import landscapeslide3 from "../../files/landscape-slide-4.jpg";

import "./intro.scss";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import { Link } from "react-router-dom";

export const Slide1 = () => {
  return (
    <div className="intro">
      <div className="image-section">
        <img
          src={slide1img}
          alt="homepage design"
          className="portrait-homepage-image slide1"
        />
        <img
          src={landscapeslide1}
          alt="homepage design"
          className="landscape-homepage-image landscapeslide1"
        />
      </div>
      <div className="text-section">
        <h2>Summer Sale</h2>
        <p>Don't compromise on style! Shop 30% off a selected range</p>
        <Link to="/categories" className="intro-button">
          Shop Now
          <ArrowRightIcon fontSize="small" />
        </Link>
      </div>
    </div>
  );
};

export const Slide2 = () => {
  return (
    <div className="intro slide2">
      <div className="image-section">
        <img
          src={slide2img}
          alt="homepage design"
          className="portrait-homepage-image"
        />
        <img
          src={landscapeslide2}
          alt="homepage design"
          className="landscape-homepage-image"
        />
      </div>
      <div className="text-section">
        <h2>View The Latest Collection</h2>
        <p>Introducing SS21</p>
        <Link to="/categories" className="intro-button">
          Shop Now
          <ArrowRightIcon fontSize="small" />
        </Link>
      </div>
    </div>
  );
};

export const Slide3 = () => {
  return (
    <div className="intro slide3">
      <div className="image-section">
        <img
          src={slide3img}
          alt="homepage design"
          className="portrait-homepage-image"
        />
        <img
          src={landscapeslide3}
          alt="homepage design"
          className="landscape-homepage-image"
        />
      </div>
      <div className="text-section">
        <h2>View the latest trends</h2>
        <p>Shop our best sellers</p>
        <Link to="/categories" className="intro-button">
          Shop Now
          <ArrowRightIcon fontSize="small" />
        </Link>
      </div>
    </div>
  );
};
