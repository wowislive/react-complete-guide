import React from "react";
import MealItemForm from "./MealItemForm";
import styles from "./MealItem.module.css";

const MealItem = (props) => {
  const addItemHandler = (value) => {
    console.log(value);
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>${props.price}</div>
      </div>
      <MealItemForm addItem={addItemHandler} />
    </li>
  );
};

export default MealItem;
