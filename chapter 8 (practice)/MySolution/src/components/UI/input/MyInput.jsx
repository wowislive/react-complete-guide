import React from "react";
import styles from "./MyInput.module.css";

const MyInput = (props) => {
  const inputChangeHandler = (event) => {
    props.onChange(event.target.value);
  };
  return (
    <div className={styles.input}>
      <label>{props.label}</label>
      <input
        type={props.type}
        onChange={inputChangeHandler}
        value={props.value}
      ></input>
    </div>
  );
};

export default MyInput;
