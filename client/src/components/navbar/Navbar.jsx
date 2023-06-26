import React from "react";
import "./navbar.css";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <h1>Redux Toolkit</h1>
        <ul className="navbarLists">
          <li className="navbarListItem">Home</li>
          <li className="navbarListItem">Logout</li>
        </ul>
        <ul className="navbarLists">
          <li className="navbarListItem">Login</li>
          <li className="navbarListItem">Register</li>
        </ul>
        <div className="navbarCart">
          <ShoppingCartOutlined />
          <p className="navbarCartAmount">{amount}</p>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
