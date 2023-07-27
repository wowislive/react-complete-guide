import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items &&
          items.map((item) => (
            <CartItem
              item={{
                title: item.name,
                quantity: item.amount,
                total: item.amount * item.price,
                price: item.price,
              }}
              key={item.name}
            />
          ))}
      </ul>
    </Card>
  );
};

export default Cart;
