import React from "react";
import { useState, useEffect } from "react";
const baseUrl = "https://api.quran.com/api/v4/";

const Surah = ({ name_simple, name_arabic, id, verses_count, stateVerses ,stateRecitations}) => {
  return (
    <article
      className="surah"
      onClick={() =>
        Promise.all([
          fetch(`${baseUrl}/quran/verses/uthmani?chapter_number=${id}}`).then(
            (response) => response.json()
          ),

          fetch(`${baseUrl}/quran/recitations/3/?chatper_number=${id}`).then(
            (response) => response.json()
          ),
        ]).then((data) => console.log(data))
      }
    >
      <h4>{name_arabic}</h4>
      <h4>{name_simple}</h4>
    </article>
  );
};
export default Surah;
