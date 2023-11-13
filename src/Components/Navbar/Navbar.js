import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

function Navbar({ changeID, chapters, chapID, reciters, setReciter }) {
  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => {
    setSideBar(!sideBar);
  };
  // const handleChange = (e) => {
  //   changeID(e.target.value);
  // };
  reciters = reciters.filter(
    (reciter) =>
      reciter.id !== 12 &&
      reciter.id !== 168 &&
      reciter.id !== 6 &&
      reciter.id !== 161
  );
  return (
    <div className=" bg-darkestGray h-[80px] w-full mb-10 top-0 z-50 ">
      <FaBars id="bars" onClick={showSideBar} />
      {reciters.length > 0 && (
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
      )}
    </div>
  );
}

export default Navbar;
