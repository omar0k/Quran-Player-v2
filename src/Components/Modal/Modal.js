import { React, useRef } from "react";
import SurahText from "../SurahText/SurahText";
import { AiOutlineClose } from "react-icons/ai";

import "./Modal.css";
import { useEffect } from "react";

function Modal({ surahText, showModal, setShowModal }) {
  const ref = useRef();
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (showModal && ref.current && !ref.current.contains(e.target)) {
        setShowModal(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showModal]);

  return (
    <div className="modal-background">
      <div className="modal-container" ref={ref}>
        <button id="read-btn-active" onClick={() => setShowModal(!showModal)}>
          <AiOutlineClose />
        </button>
        <SurahText
          ayahText={surahText}
          setOpenModal={setShowModal}
          openModal={showModal}
        />
      </div>
    </div>
  );
}

export default Modal;
