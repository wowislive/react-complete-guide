import React from "react";
import styles from "./MyCard.module.css";

const MyCard = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};

export default MyCard;
