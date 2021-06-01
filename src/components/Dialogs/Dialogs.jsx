import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  const { name, id } = props;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={"/dialogs/" + id}>{name}</NavLink>
    </div>
  );
};

const DialogMessage = (props) => {
  const { message } = props;
  return <div className={s.message}>{message}</div>;
};

const dialigsData = [
  { id: 1, name: "Tesak B.S" },
  { id: 2, name: "Sava Y.A" },
  { id: 3, name: "kravets V.I" },
  { id: 4, name: "Tarasenko N.A" },
  { id: 5, name: "Antonenko D.L" },
];
const messageData = [
  { id: 1, message: "hello my name is bob" },
  { id: 2, message: "fack you" },
  { id: 3, message: "am  fine" },
  { id: 4, message: "drinck alcogol" },
  { id: 5, message: "wery bead" },
];

const Dialogs = (props) => {
  const newDialogs = dialigsData.map((item, i) => {
    return <DialogItem name={item.name} id={item.id} key={i} />;
  });
  const newMessage = messageData.map((item, i) => {
    return <DialogMessage message={item.message} id={item.id} key={i} />;
  });
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{newDialogs}</div>

      <div className={s.messages}>{newMessage}</div>
    </div>
  );
};
export default Dialogs;
