import React, { useContext } from "react";
import CartContext from "../store/Cart-context";
import CartItem from "./CartItem";
import Modal from "../UI/modal/Modal";
import Button from "../UI/button/Button";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const hasMeals = ctx.meals.length > 0;

  const onOrder = () => {
    if (hasMeals) return console.log("Ordering...");
    return;
  };

  const addButtonHandler = (meal) => {
    const updatedMeal = { ...meal, amount: 1 };
    ctx.addMeal(updatedMeal);
  };
  const removeButtonHandler = (id) => {
    ctx.removeMeal(id);
  };
  return (
    <Modal onClick={props.closeCartHandler}>
      <ul className={styles["cart-items"]}>
        {ctx.meals.map((meal) => (
          <CartItem
            key={meal.id}
            id={meal.id}
            price={meal.price}
            name={meal.name}
            amount={meal.amount}
            onRemove={removeButtonHandler.bind(null, meal.id)}
            onAdd={addButtonHandler.bind(null, meal)}
          />
        ))}
      </ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{`$${ctx.totalPrice.toFixed(2)}`}</span>
      </div>
      <div className={styles.actions}>
        <Button
          className={styles["button--alt"]}
          onClick={props.closeCartHandler}
        >
          Close
        </Button>
        <Button className={styles.button} onClick={onOrder}>
          Order
        </Button>
      </div>
    </Modal>
  );
};

export default Cart;
