import React, { useContext } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";
import CartContext from "../store/Cart-context";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  const totalAmount = ctx.meals.reduce((amount, meal) => {
    return amount + +meal.amount;
  }, 0);
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      Your Cart
      <span className={styles.badge}>{totalAmount}</span>
    </button>
  );
};

export default HeaderCartButton;
