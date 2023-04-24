import style from "./Modal.module.css";
import React from "react";
import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return <div className={style.backdrop} /* onClick={props.onClick} */ />;
};

const ModalOverlay = (props) => {
  return (
    <div className={style.modal}>
      <div className={style.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <React.Fragment>
      {createPortal(<Backdrop {...props}/>, portalElement)}
      {
        createPortal(<ModalOverlay>{props.children}</ModalOverlay>,
        portalElement)
      }
    </React.Fragment>
  );
};

export default Modal;
