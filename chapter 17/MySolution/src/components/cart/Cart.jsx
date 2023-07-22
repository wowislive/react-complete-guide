import React, { useContext, useState } from "react";
import CartContext from "../store/Cart-context";
import CartItem from "./CartItem";
import Modal from "../UI/modal/Modal";
import Button from "../UI/button/Button";
import Checkout from "./Checkout";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const ctx = useContext(CartContext);

  const hasMeals = ctx.meals.length > 0;

  const orderHandler = () => {
    if (hasMeals) return setIsCheckout(true);
  };

  const submitOrderHandler = async (orderData) => {
    setIsSubmitting(true);
    //add error handling
    await fetch(
      "https://react-http-228c7-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({ user: orderData, orderItems: ctx.meals }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    ctx.clearCart();
  };

  const addButtonHandler = (meal) => {
    const updatedMeal = { ...meal, amount: 1 };
    ctx.addMeal(updatedMeal);
  };
  const removeButtonHandler = (id) => {
    ctx.removeMeal(id);
  };

  const modalButtons = (
    <div className={styles.actions}>
      <Button
        className={styles["button--alt"]}
        onClick={props.closeCartHandler}
      >
        Close
      </Button>
      <Button className={styles.button} onClick={orderHandler}>
        Order
      </Button>
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
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
      {isCheckout && (
        <Checkout
          onConfirm={submitOrderHandler}
          onCancel={props.closeCartHandler}
        />
      )}
      {!isCheckout && modalButtons}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <React.Fragment>
      <p>Successfully sent the order!</p>
      <div className={styles.actions}>
        <Button className={styles.button} onClick={props.closeCartHandler}>
          Close
        </Button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClick={props.closeCartHandler}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {didSubmit && !isSubmitting && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
