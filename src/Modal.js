import React from "react";
import "./modal.css";
import { useGlobalContext } from "./Context";
import { GrClose } from "react-icons/gr";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <section
      className={`${isModalOpen ? "modal-body show-modal" : "modal-overlay"}`}
    >
      <div className="modal">
        <GrClose className="close-btn" onClick={() => closeModal()} />
        <h2>Modal content</h2>
      </div>
    </section>
  );
};

export default Modal;
