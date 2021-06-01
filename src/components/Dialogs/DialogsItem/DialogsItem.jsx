import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  const { name, id } = props;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={"/dialogs/" + id}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;
