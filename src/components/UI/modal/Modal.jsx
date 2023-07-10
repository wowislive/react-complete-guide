import React from "react";
import styles from "./Modal.module.css";
import Card from "../card/Card";

const Modal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onClick} />
      <Card className={styles.modal}>{props.children}</Card>
    </div>
  );
};

export default Modal;
