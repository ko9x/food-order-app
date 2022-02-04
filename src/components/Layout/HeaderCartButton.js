import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";

import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [bumpButton, setBumpButton] = useState(false);
  const cartContext = useContext(CartContext);

  const numberOfCartItems = cartContext.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnStyles = `${styles.button} ${bumpButton ? styles.bump : ""}`;

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setBumpButton(true);

    const timer = setTimeout(() => {
      setBumpButton(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    }
  }, [cartContext.items]);

  return (
    <button className={btnStyles} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
