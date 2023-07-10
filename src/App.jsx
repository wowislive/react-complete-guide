import React, { useState } from "react";
import Header from "./components/header/Header";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const cartOn = () => setIsCartVisible(true);
  const cartOff = () => setIsCartVisible(false);

  return (
    <React.Fragment>
      {isCartVisible && <Cart closeCartHandler={cartOff} />}
      <Header openCartHandler={cartOn} />
      <Meals />
    </React.Fragment>
  );
}

export default App;
