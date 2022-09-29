import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Switch from "@mui/material/Switch";
import "./Navbar.css";
import { FormControlLabel, FormGroup } from "@mui/material";

function Navbar({ changeID, chapters, chapID, reciters, setReciter }) {
  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => {
    setSideBar(!sideBar);
  };
  const handleChange = (e) => {
    changeID(e.target.value);
  };
  return (
    <>
      <div className="navbar">
        <FaBars id="bars" onClick={showSideBar} />
        <label id="reciter-label">
          Reciter: 
          <select
            name=""
            id="reciters-options"
            onChange={(e) => setReciter(e.target.value)}
          >
            {reciters.map((reciter, index) => {
              return (
                <option value={reciter.id} key={index}>
                  {reciter.name}
                </option>
              );
            })}
          </select>
        </label>
      </div>
      <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <AiOutlineClose id="close" onClick={showSideBar} />
          </li>
          <FormGroup>
            <select id="surah-dropdown" onChange={handleChange}>
              {chapters.map((chapter, index) => {
                return (
                  <option key={index} value={index}>
                    {chapter.name_simple}
                  </option>
                );
              })}
            </select>
            <label>
              Start Verse:
              <input
                type="number"
                name="start-verse"
                min={0}
                max={chapters[chapID] ? chapters[chapID].verses_count - 1 : 1}
              />
            </label>
            <label>
              End Verse:
              <input
                type="number"
                name="end-verse"
                min={1}
                max={chapters[chapID] ? chapters[chapID].verses_count : 1}
              />
            </label>
            <label>
              Repeat Verse:
              <input type="number" name="repetition" min={1} max={100} />
            </label>
            <FormControlLabel label="Label" control={<Switch />} />
            <label>Pause between Verses (seconds)</label>
            <input type="number" min={0} max={10} />
          </FormGroup>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
