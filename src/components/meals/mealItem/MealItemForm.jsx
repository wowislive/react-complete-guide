import React from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/input/Input";
import Button from "../../UI/button/Button";

const MealItemForm = () => {
  return (
    <div className={styles.form}>
      <form>
        <Input label="Amount" type="number" defaultValue={1} min={1} max={5} />
        <Button type="submit">+ Add</Button>
      </form>
    </div>
  );
};

export default MealItemForm;
