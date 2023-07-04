import React from "react";
import MyCard from "../card/MyCard";
import MyButton from "../button/MyButton";
import styles from "./MyModal.module.css";

const MyModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onClick} />
      <MyCard className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.msg}</p>
        </div>
        <footer className={styles.actions}>
          <MyButton onClick={props.onClick}>Okay</MyButton>
        </footer>
      </MyCard>
    </div>
  );
};

export default MyModal;
