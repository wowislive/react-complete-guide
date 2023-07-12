import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import Card from "../card/Card";

const Modal = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <div className={styles.backdrop} onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Card className={styles.modal}>{props.children}</Card>,
        document.getElementById("overlay-root")
      )}
    </div>
  );
};

export default Modal;
