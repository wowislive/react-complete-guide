import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/Cart-context";
import styles from "./MealItem.module.css";

const MealItem = (props) => {
  const ctx = useContext(CartContext);
  const addItemHandler = (value) => {
    ctx.addMeal({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: value,
    });
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
