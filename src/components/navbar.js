import React, { useState } from "react";
import Menuitems from "./nav-menu";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setclick] = useState(true);
  const Clicked = () => {
    setclick(!click);
  };

  return (
    <div>
      <div className="menubaritem">
        <h1 className="nav-logo">Tour with Ankit</h1>
        <div className="menuicon" onClick={Clicked}>
          <i
            className={click ? "fa-solid fa-bars" : "fa-solid fa-circle-xmark"}
          ></i>
          {/* <i class="fa-solid fa-bars"></i>
        <i class="fa-solid fa-circle-xmarks"></i> */}
        </div>
        <ul className={click ? "menu-link" : "menu-link active"}>
          {Menuitems.map((item, key) => {
            return (
              <li key={key} className={item.cName}>
                <Link to={item.url}>
                  {" "}
                  <i className={item.icon}></i> {item.title}
                </Link>
              </li>
            );
          })}
          <Link to="/signup">
          <button >Sign Up</button>
          </Link>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
