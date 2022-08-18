// import React, { useState } from "react";
import "./navbar.css";
import { FiSearch as Search } from "react-icons/fi";
import { BsSuitHeart as Wish } from "react-icons/bs";
import { FaRegUser as User } from "react-icons/fa";
import { HiOutlineShoppingCart as Cart } from "react-icons/hi";
import InnoQB from "./1.png";
import { FaBars} from "react-icons/fa";
import { BiUserCircle as Muser, BiShoppingBag as Bag } from "react-icons/bi";

function Navbar() {
  //   const [rSize, setRSize] = useState(false);

  //   const resz = () => {
  //     if (window.innerWidth < 960) {
  //       setRSize(true);
  //     } else {
  //       setRSize(false);
  //     }
  // };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={InnoQB} alt="logo" className="logo" />
            <h3>Inno</h3>
            <h3 style={{ color: "orange" }}>QB</h3>
            <div className="mobile">
              <FaBars />
            </div>
          </div>
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
          <div className="menuItemM">
            <Muser />
          </div>
          <div className="menuItemM">
            <Bag />
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
