import React from "react";
import CartItem from "./CartItem";
import Modal from "../UI/modal/Modal";
import styles from "./Cart.module.css";

const Cart = (props) => {
  return (
    <Modal onClick={props.closeCartHandler}>
      <ul className={styles["cart-items"]}></ul>
    </Modal>
  );
};

export default Cart;
