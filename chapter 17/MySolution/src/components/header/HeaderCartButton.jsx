import React, { useContext, useState, useEffect } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";
import CartContext from "../store/Cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const ctx = useContext(CartContext);

  const { meals } = ctx;

  const totalAmount = meals.reduce((amount, meal) => {
    return amount + +meal.amount;
  }, 0);

  const btnStyles = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`;

  useEffect(() => {
    if (meals.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [meals]);

  return (
    <button className={btnStyles} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      Your Cart
      <span className={styles.badge}>{totalAmount}</span>
    </button>
  );
};

export default HeaderCartButton;
