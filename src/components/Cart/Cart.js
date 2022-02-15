import { useContext, useState } from "react";
import {CartContext} from "../../providers/CartProvider";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import OrderForm from "./OrderForm";

const Cart = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderInfo, setOrderInfo] = useState('');
  const cartContext = useContext(CartContext);

  const showFormHandler = (prevState) => {
    setShowForm((prevState) => !prevState)
  }

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartContext.addItem({...item, amount: 1});
  };


  const onPlacedOrder = (customer) => {
    setOrderInfo(customer)
    cartContext.placeOrder(customer)
    setShowForm(false);
    setShowConfirmation(true);
    cartContext.clearCart();
    
  }

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  let content = 
  <div>
    {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={styles.button} onClick={showFormHandler}>Order</button>}
      </div>
  </div>

  if(showForm) {
    content = <OrderForm orderPlaced={onPlacedOrder}/>
  }

  if(showConfirmation) {
    content = <div className={styles.confirmation}><h3>Thank you for your order {orderInfo.name}</h3><p>Your meal will be arriving at {orderInfo.address} as soon as possible</p><button className={styles.button} onClick={props.onHideCart}>Close</button></div>
  }

  return (
    <Modal onHideCart={props.onHideCart}>
      {content}
    </Modal>
  );
};

export default Cart;
