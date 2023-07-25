import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const itemAmount = useSelector((state) => state.cart.totalAmount);

  const cartButtonHandler = () => {
    dispatch(cartActions.toggleCart());
  };
  return (
    <button className={classes.button} onClick={cartButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemAmount}</span>
    </button>
  );
};

export default CartButton;
