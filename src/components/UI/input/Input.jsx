import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={`${styles.input} ${props.className}`}>
      <label>{props.label}</label>
      <input
        ref={ref}
        type={props.type}
        onChange={props.onChange}
        defaultValue={props.defaultValue}
        min={props.min}
        max={props.max}
      ></input>
    </div>
  );
});

export default Input;
