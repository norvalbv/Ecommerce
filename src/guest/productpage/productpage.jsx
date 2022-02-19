import BreadcrumbsComponent from "../../components/breadcrumbs";
import NavBar from "../../components/navbar/navbar";
import ShopItems from "../../components/shopitems/shopitems";
import Footer from "../../components/footer/footer";
import "./productpage.scss";

export default function ProductPage() {
  return (
    <div className="productpage">
      <NavBar />
      <BreadcrumbsComponent />
      <h2>Categories</h2>
      <div className="filters">
        <div className="filter-left">
          <p>Filter Products</p>
          <select name="color" id="color">
            <option value="color">Black</option>
            <option value="color">Green</option>
            <option value="color">Red</option>
            <option value="color">Blue</option>
            <option value="color">Orange</option>
          </select>
          <select name="size" id="">
            <option value="size">S</option>
            <option value="size">M</option>
            <option value="size">L</option>
            <option value="size">XL</option>
          </select>
        </div>
        <div className="filter-right">
          <p>Sort Products:</p>
          <select name="sort" id="sort">
            <option value="sort">Featured</option>
            <option value="sort">New In</option>
            <option value="sort">Best Selling</option>
          </select>
        </div>
      </div>
      <ShopItems />
      <Footer />
    </div>
  );
}
