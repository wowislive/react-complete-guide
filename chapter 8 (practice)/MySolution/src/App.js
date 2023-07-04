import React, { useState } from "react";
import UserInputForm from "./components/userInputForm/UserInputForm";
import UserList from "./components/userList/UserList";
import MyModal from "./components/UI/modal/MyModal";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState({ status: false, text: "" });

  let modal;

  const modalOn = (text) => setError({ status: true, text: text });
  const modalOff = () => {
    setError({ status: false, text: "" });
    modal = "";
    return;
  };

  const addUsersHandler = (user) => {
    if (user.age < 0) {
      modalOn("Please enter a valid age (>0).");
      return;
    }
    if (user.age.trim().length === 0 || user.username.trim().length === 0) {
      modalOn("Please enter a valid name and age (non-empty values).");
      return;
    }
    setUsers((prevState) => {
      user.id = Math.random().toString();
      const updatedUsers = [...prevState];
      updatedUsers.unshift(user);
      return updatedUsers;
    });
  };

  const deleteUserHandler = (userId) => {
    setUsers((prevState) => {
      return prevState.filter((user) => user.id !== userId);
    });
  };

  let list;

  if (error.status) {
    modal = (
      <MyModal onClick={modalOff} title="Invalid input" msg={error.text} />
    );
  }

  if (users.length > 0) {
    list = <UserList users={users} onDeleteUser={deleteUserHandler} />;
  }

  return (
    <div>
      {modal}
      <UserInputForm onAddUser={addUsersHandler} />
      {list}
    </div>
  );
}

export default App;
