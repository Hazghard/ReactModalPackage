import React, { useState, useEffect, useRef } from "react";
import "./dialogTest.css";
import { IoClose } from "react-icons/io5";

export function useModalShow(timeOut = 0) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);

    if (timeOut > 0) {
      setTimeout(() => {
        closeModal();
      }, timeOut);
    }
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  console.log("isOpen state from component", isOpen);
  return [isOpen, setIsOpen, openModal, closeModal];
}

export const SimpleReactModal = ({
  title,
  content,
  style,
  type,
  timeOut = 0,
  debugMode = false,
  isOpen,
  openModal,
  closeModal,
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="modalContainer">
      {debugMode && !isOpen && (
        <button id="show" onClick={openModal} className="modal--ShowBtn">
          Show
        </button>
      )}
      {isOpen && (
        <div className="modalDialogWrapper">
          <dialog
            ref={modalRef}
            onClose={closeModal}
            style={style}
            className={"modalDialog " + type}
          >
            <div className="modalDialog--CloseBtnContainer">
              <IoClose onClick={closeModal} className="modalDialog--CloseBtn" />
            </div>
            <h2 className="modalDialog--Title">{title}</h2>
            <p className="modalDialog--Content">{content}</p>
          </dialog>
        </div>
      )}
    </div>
  );
};
