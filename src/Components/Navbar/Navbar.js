import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";
function Navbar() {
  const [sidebar, setSideBar] = useState(false);
  const showSideBar = () => {
    setSideBar(!sidebar);
  };
  return (
    <>
      <div className="navbar">
        <FaBars id="bars" onClick={showSideBar} />
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <AiOutlineClose id="close" onClick={showSideBar} />
          </li>
          <form action="">
            <label>
              Start Verse:
              <input type="number" name="start-verse" />
            </label>
            <label>
              End Verse:
              <input type="number" name="end-verse" />
            </label>
            <label>
              Repeat Verse:
              <input type="number" name="repetition" />
            </label>
            <label>Loop Selection</label>
          </form>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
