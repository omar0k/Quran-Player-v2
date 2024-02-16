import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

function Navbar({
  
  reciters,
  setReciter,
  currentReciter,
}) {
  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => {
    setSideBar(!sideBar);
  };
  
  reciters = reciters.filter((reciter) => ![11, 6, 12].includes(reciter.id));
  return (
    <div className=" bg-darkestGray h-[80px] w-full mb-10 top-0 z-50 justify-center flex items-center">
      <FaBars id="bars" onClick={showSideBar} />
      {reciters.length > 0 && (
        <div className="text-xl  flex gap-3 rounded-md p-3 bg-lightGray">
          <label htmlFor="reciters" className=" text-white">
            Reciter:
          </label>
          <select
            value={currentReciter}
            className=" bg-lightGray  text-white "
            onChange={(e) => setReciter(e.target.value)}
          >
            {reciters.map((reciter) => {
              return (
                <option className="" value={reciter.id} key={reciter.id}>
                  {reciter.reciter_name}{" "}
                  {reciter.style != null ? reciter.style : null}
                </option>
              );
            })}
          </select>
        </div>
      )}
    </div>
  );
}

export default Navbar;
