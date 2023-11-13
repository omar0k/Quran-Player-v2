import React from 'react';
import Surah from './Surah/Surah';

const ChaptersList = ({ chapters, verses, setChapterID, openModal, setShowModal }) => {
  return (
    <div className="grid grid-cols-3 bg-darkGray gap-5 container">
      {chapters.map((chapter, index) => (
        <Surah
          key={chapter.id} 
          {...chapter}
          surahText={verses}
          changeID={setChapterID}
          showModal={openModal}
          setShowModal={setShowModal}
        />
      ))}
    </div>
  );
};

export default ChaptersList;
