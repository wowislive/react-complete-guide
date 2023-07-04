import React from "react";
import styles from "./MyButton.module.css";

const MyButton = (props) => {
  return (
    <div>
      <button
        className={styles.button}
        type={props.type}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

export default MyButton;
