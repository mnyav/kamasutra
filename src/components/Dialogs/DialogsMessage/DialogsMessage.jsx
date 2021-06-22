import React from "react";
import s from "./../Dialogs.module.css";

const DialogMessage = (props) => {
  const { message } = props;
  return (
    <div className={s.message}>
      {props.id}
      <span>: </span>
      {message}
    </div>
  );
};

export default DialogMessage;
