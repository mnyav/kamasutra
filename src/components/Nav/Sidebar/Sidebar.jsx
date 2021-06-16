import React from "react";
import style from "./Sidebar.module.css";
import Friends from "./Friends/Friends";
const Sidebar = (props) => {
  const bestF = props.data.map((item, i) => {
    return <Friends bestFriends={item} key={i} />;
  });
  return (
    <div className={style.sidebar}>
      <div className={style.all}> Best Friends</div>
      <div className={style.friends}>
        {bestF}
      </div>
    </div>
  );
};
export default Sidebar;
