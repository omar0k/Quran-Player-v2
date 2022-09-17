import React, { useState, useEffect } from "react";
import Surah from "./Surah";
import "./App.css";
const baseUrl = "https://api.quran.com/api/v4/";

function App() {
  const [chapters, setChapters] = useState([]);
  const [chapter, setChapter] = useState();
  const [verses, setVerses] = useState([]);
  const [recitations, setRecitations] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}chapters`)
      .then((response) => response.json())
      .then((data) => setChapters(data.chapters));
  }, []);
  useEffect(() => {
    fetch(`${baseUrl}/verses/by_chapter/1`)
      .then((response) => response.json())
      .then((data) => setVerses(data));
  }, []);

  return (
    <>
      <section className="surahs">
        {chapters.map((chapter, index) => {
          return (
            <Surah
              key={index}
              {...chapter}
              stateVerses={[verses, setVerses]}
              stateRecitations={[recitations, setRecitations]}
            />
          );
        })}
      </section>
    </>
  );
}
export default App;
