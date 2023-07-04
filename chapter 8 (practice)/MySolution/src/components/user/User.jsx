import React from "react";
import styles from "./User.module.css";

const User = (props) => {
  const deleteHandler = () => {
    props.onClick(props.user.id);
  };

  return (
    <li className={styles.user} onClick={deleteHandler}>
      {props.user.username} ({props.user.age} years old)
    </li>
  );
};

export default User;
