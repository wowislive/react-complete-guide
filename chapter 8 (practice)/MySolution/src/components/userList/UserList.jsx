import React from "react";
import User from "../user/User";
import styles from "./UserList.module.css";
import MyCard from "../UI/card/MyCard";

const UserList = (props) => {
  return (
    <MyCard className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <User key={user.id} user={user} onClick={props.onDeleteUser} />
        ))}
      </ul>
    </MyCard>
  );
};

export default UserList;
