import React from "react";
import style from "../Sidebar.module.css";
const Friends = (props) => {
  return (
    <div className={style.person}>
      <img
        src="https://3dtoday.ru/upload/users/avatars/sIN8UsnRj2kXjxP6aU6Qth56TKVsssiXdwYnaXNa.png"
        alt="logo"
        width="30px"
        height="30px"
      />
      <span>{props.bestFriends.name}</span>
    </div>
  );
};
export default Friends;
