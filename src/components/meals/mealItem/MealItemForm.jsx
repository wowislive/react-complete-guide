import React from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/input/Input";
import Button from "../../UI/button/Button";

const MealItemForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    props.addItem(); //
  };

  const inputChangeHandler = (event) => {
    return event.target.value;
  };

  return (
    <div className={styles.form}>
      <form onSubmit={submitHandler}>
        <Input
          label="Amount"
          type="number"
          defaultValue={1}
          min={1}
          max={5}
          onChange={inputChangeHandler}
        />
        <Button type="submit">+ Add</Button>
      </form>
    </div>
  );
};

export default MealItemForm;
