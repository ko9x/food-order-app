import { useRef, useState } from "react";

import styles from "./OrderForm.module.css";
import Input from "../UI/Input";

const OrderForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(true);
  const nameInputRef = useRef();
  const addressInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAddress.trim().length === 0) {
      setFormIsValid(false);
      return;
    }

    const enteredOrderInfo = {
      name: enteredName,
      address: enteredAddress,
    };

    props.orderPlaced(enteredOrderInfo);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={nameInputRef}
        label="Name"
        input={{
          id: "n1",
          type: "text",
        }}
      />
      <Input
        ref={addressInputRef}
        label="Address"
        input={{
          id: "a1",
          type: "text",
        }}
      />
      <button>Submit Order</button>
      {!formIsValid && <p>Please enter a name and address.</p>}
    </form>
  );
};

export default OrderForm;
