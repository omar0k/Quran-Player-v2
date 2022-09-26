import React from "react";
import { Stack } from "@mui/material";
const SurahText = ({ ayahText }) => {
  return (
    <Stack className="ayah-stack">
      {ayahText.map((ayah, index) => {
        return (
          <div key={index}>
            <p>{ayah}</p>
            <span>{index + 1}</span>
          </div>
        );
      })}
    </Stack>
  );
};
export default SurahText;
