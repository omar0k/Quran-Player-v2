import React from "react";
import { Stack } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import "./SurahText.css";
const SurahText = ({ ayahText, openModal, setOpenModal }) => {
  return (
    <Stack className="ayah-stack">
      {ayahText.map((ayah, index) => {
        return (
          <div key={index} id="ayah-div">
            <span id="ayah-num">{index + 1}</span>
            <p id="ayah" onClick={() => console.log("pelement")}>
              {ayah}
            </p>
          </div>
        );
      })}
    </Stack>
  );
};
export default SurahText;
