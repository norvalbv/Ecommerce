import "./navbar.scss";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";

export default function NavBar() {
  const cart = useSelector((state) => state.cart);

  const [hamActive, setHamActive] = useState(false);

  const hamClick = () => {
    setHamActive(!hamActive);
  };

  const [accountActive, setAccountActive] = useState(false);

  const accountClick = () => {
    setAccountActive(!accountActive);
  };

  const location = useLocation();

  return (
    <div className="nav">
      <div className="navbar">
        <div className="left">
          <MenuIcon id="hamburger-icon" onClick={hamClick} />
          <FormControl size="small" className="lang">
            <InputLabel id="demo-simple-select-label">LANG</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="LANG"
              defaultValue="EN"
            >
              <MenuItem value="EN">EN</MenuItem>
              <MenuItem value="FR">FR</MenuItem>
              <MenuItem value="GER">GER</MenuItem>
              <MenuItem value="JP">JP</MenuItem>
            </Select>
          </FormControl>
          <div className="search">
            <input placeholder="search" />
            <SearchIcon fontSize="small" />
          </div>
        </div>
        <div className="middle">
          <h1>
            <Link to="/" id="logo">
              B'e-commerce.
            </Link>
          </h1>
        </div>
        <div className="right">
          {location.pathname !== "/" && (
            <Link to="/" className="right-nav">
              Home
            </Link>
          )}
          <Link to="/categories" className="right-nav">
            Categories
          </Link>
          <Link to="/register" className="right-nav">
            Register
          </Link>
          <Link to="/login" className="right-nav">
            Login
          </Link>
          <AccountCircleIcon id="account-btn" onClick={accountClick} />
          <ul
            className={
              accountActive === true
                ? "account-dropdown account-active"
                : "account-dropdown"
            }
          >
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <Link to="/cart" className="link">
            <ShoppingCartIcon fontSize="small" className="shop-icon" />
          </Link>
          <p id="num">{cart.quantity}</p>
        </div>
      </div>
      <div
        className={hamActive === true ? "hamburger ham-active" : "hamburger"}
      >
        <ul>
          {location.pathname !== "/" && (
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
          )}
          <li>
            <Link to="/categories" className="link">
              Categories
            </Link>
          </li>
          <li>My Account</li>
          <li>FAQs</li>
        </ul>
      </div>
    </div>
  );
}
