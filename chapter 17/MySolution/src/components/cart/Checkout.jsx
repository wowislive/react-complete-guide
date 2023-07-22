import React, { useRef, useState } from "react";
import Button from "../UI/button/Button";
import styles from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const inputName = useRef();
  const inputStreet = useRef();
  const inputPostal = useRef();
  const inputCity = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = inputName.current.value;
    const enteredStreet = inputStreet.current.value;
    const enteredPostalCode = inputPostal.current.value;
    const enteredCity = inputCity.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredName && enteredCity && enteredPostalCode && enteredStreet;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };

  const nameControlClasses = `${styles.control} ${
    formInputsValidity.name ? "" : styles.invalid
  }`;
  const streetControlClasses = `${styles.control} ${
    formInputsValidity.street ? "" : styles.invalid
  }`;
  const postalCodeControlClasses = `${styles.control} ${
    formInputsValidity.postalCode ? "" : styles.invalid
  }`;
  const cityControlClasses = `${styles.control} ${
    formInputsValidity.city ? "" : styles.invalid
  }`;

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input ref={inputName} type="text" id="name"></input>
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input ref={inputStreet} type="text" id="street"></input>
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={inputPostal} type="text" id="postal"></input>
        {!formInputsValidity.postalCode && (
          <p>Please enter a valid postal code (5 characters long)!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input ref={inputCity} type="text" id="city"></input>
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div>
        <Button type="button" onClick={props.onCancel}>
          Cancel
        </Button>
        <Button type="submit">Confirm</Button>
      </div>
    </form>
  );
};

export default Checkout;
