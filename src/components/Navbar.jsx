import React from "react";
import "./navbar.css";
import { FiSearch as Search } from "react-icons/fi";
import { BsSuitHeart as Wish } from "react-icons/bs";
import { FaRegUser as User } from "react-icons/fa";
import { HiOutlineShoppingCart as Cart } from "react-icons/hi";

function Navbar() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E0BAQEZxuaPOs0f7w/company-logo_200_200/0/1645630202429?e=1667433600&v=beta&t=vefMno6Uoljn7pRI7AZ1rgUuq61PrCuaW5jBIqJj5_E"
            alt="logo"
            className="logo"
          />
        </div>
        <div className="center">
          <div className="inputItem">
            <input type="text" placeholder="Search the Store" />
          </div>
          <div className="iconSearch">
            <Search />
          </div>
        </div>
        <div className="right">
          <div className="menuItem">
            <Wish />
            <span>Wish List</span>
          </div>
          <div className="menuItem">
            <User />
            <span>Sign In</span>
          </div>
          <div className="menuItem">
            <Cart />
            <span>Cart</span>
            <div className="badge">
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
