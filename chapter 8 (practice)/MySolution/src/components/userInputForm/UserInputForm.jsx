import React, { useState } from "react";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import MyCard from "../UI/card/MyCard";
import styles from "./UserInputForm.module.css";

const UserInputForm = (props) => {
  const [userData, setUserData] = useState({
    username: "",
    age: "",
  });

  const usernameHandler = (text) => {
    setUserData((prevState) => {
      return { ...prevState, username: text };
    });
  };

  const userAgeHandler = (number) => {
    setUserData((prevState) => {
      return { ...prevState, age: number };
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddUser(userData);
    setUserData({
      username: "",
      age: "",
    });
  };

  return (
    <MyCard className={styles.form}>
      <form onSubmit={formSubmitHandler}>
        <MyInput
          type="text"
          label="Username"
          onChange={usernameHandler}
          value={userData.username}
        />
        <MyInput
          type="number"
          label="Age (Years)"
          onChange={userAgeHandler}
          value={userData.age}
        />
        <MyButton type="submit">Add User</MyButton>
      </form>
    </MyCard>
  );
};

export default UserInputForm;
