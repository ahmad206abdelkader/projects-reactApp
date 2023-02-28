import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Card/Cart";
import CartProvider from "./store/CartProvider";
import classes from "./components/UI/about.module.css";


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  //showcarhandler show items in the window cart
  const ShowCartHandler = () => {
    setCartIsShown(true);
  };

  //hidecarthandler hide the window cart
  const hideCartHandler = () => {
    setCartIsShown(false);
  };


  return (
    <CartProvider>

      {cartIsShown && < Cart onClose={hideCartHandler} />}
      <Header onShowCart={ShowCartHandler} />
      <main>
        <Meals />


      </main>
      <ul className={classes.Ul}>
        <li>created by</li>
        <li>ahmad abdelkader</li>
        <li>00962780754976</li>
      </ul>

    </CartProvider>

  );
}

export default App;