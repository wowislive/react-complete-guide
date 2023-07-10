import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={styles.input}>
      <label>{props.label}</label>
      <input
        type={props.type}
        onChange={props.onChange}
        defaultValue={props.defaultValue}
        min={props.min}
        max={props.max}
      ></input>
    </div>
  );
};

export default Input;
