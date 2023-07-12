import React, { useState } from "react";
import Header from "./components/header/Header";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";
import { CartContextProvider } from "./components/store/Cart-context";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const cartOn = () => setIsCartVisible(true);
  const cartOff = () => setIsCartVisible(false);

  return (
    <CartContextProvider>
      {isCartVisible && <Cart closeCartHandler={cartOff} />}
      <Header openCartHandler={cartOn} />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
