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
  }, [showModal,setShowModal]);

  return (
    <div className="w-full h-full bg-[rgba(0,0,0,.8)] fixed flex items-center justify-center z-50">
      <div
        style={{ boxShadow: "rgba(255, 255, 255, .25) 0px 5px 15px" }}
        className="modal-container overflow-x-hidden xl:w-1/3 xl:h-4/5 px-5 py-5 font-amiri text-[25px]  overflow-scroll bg-darkestGray  rounded-xl text-white "
        ref={ref}
      >
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
